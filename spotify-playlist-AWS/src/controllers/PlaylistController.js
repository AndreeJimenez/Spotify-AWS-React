import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';
import { respond } from '../utils/response';
import BaseController from './BaseController';
import Playlist from '../models/Playlist';

export default class PlaylistController extends BaseController {
  static basePath = '/api/v2/playlist';

  initialize() {
    // GET get folder list
    this.app.get(
      PlaylistController.basePath,
      PlaylistController.getAllPlaylist
    );

    // GET get folder by id
    this.app.get(
      `${PlaylistController.basePath}/:idPlaylist`,
      PlaylistController.getPlaylistById
    );

    // POST create a new folder
    this.app.post(
      PlaylistController.basePath,
      PlaylistController.createPlaylist
    );

    // PUT update existing folder
    this.app.put(
      `${PlaylistController.basePath}/:idPlaylist`,
      PlaylistController.updatePlaylist
    );

    // DELETE delete movie
    this.app.delete(
      `${PlaylistController.basePath}/:idPlaylist`,
      PlaylistController.deletePlaylist
    );
  }

  static mount(app) {
    return new PlaylistController(app);
  }

  // Start: Endpoints

  static async getAllPlaylist(req, res) {
    try {
      const playlist = await new Playlist().get();
      respond(res, OK, playlist);
    } catch (e) {
      PlaylistController.handleUnknownError(res, e);
    }
  }

  static async getPlaylistById(req, res) {
    try {
      const { idPlaylist } = req.params;
      const playlist = await new Playlist(idPlaylist).getByKey();

      if (!playlist) {
        respond(res, NOT_FOUND);
        return;
      }

      respond(res, OK, playlist);
    } catch (e) {
      PlaylistController.handleUnknownError(res, e);
    }
  }

  static async createPlaylist(req, res) {
    try {
      const expectedParams = ['idPlaylist', 'carpeta', 'idUser'];
      const validationErrors = [];

      expectedParams.forEach(p => {
        if (!req.body[p]) {
          validationErrors.push(`${p} parameter was not found in the request`);
        }
      });

      if (validationErrors.length > 0) {
        respond(res, BAD_REQUEST, {
          message: validationErrors.join('\n')
        });
        return;
      }

      const { idPlaylist, carpeta, idUser } = req.body;

      const playlist = Playlist.newPlaylist(idPlaylist, carpeta, idUser);
      await playlist.create();

      respond(res, OK, playlist);
    } catch (e) {
      PlaylistController.handleUnknownError(res, e);
    }
  }

  static async updatePlaylist(req, res) {
    try {
      const { idPlaylist } = req.params;

      const playlist = await new Playlist(idPlaylist).getByKey();

      if (!playlist) {
        respond(res, NOT_FOUND);
        return;
      }

      const allowedParams = ['idPlaylist', 'carpeta', 'idUser'];

      Object.keys(req.body).forEach(p => {
        if (allowedParams.includes(p)) {
          playlist[p] = req.body[p];
        }
      });

      await playlist.update();

      respond(res, OK, playlist);
    } catch (e) {
      PlaylistController.handleUnknownError(e);
    }
  }

  static async deletePlaylist(req, res) {
    try {
      const { idPlaylist } = req.params;
      await new Playlist(idPlaylist).delete();
      respond(res, OK);
    } catch (e) {
      PlaylistController.handleUnknownError(e);
    }
  }

  // End: Endpoints
}
