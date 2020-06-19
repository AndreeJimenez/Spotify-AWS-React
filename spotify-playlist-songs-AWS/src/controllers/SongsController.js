import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';
import { respond } from '../utils/response';
import BaseController from './BaseController';
import Songs from '../models/Songs';

export default class SongsController extends BaseController {
  static basePath = '/api/v2/songs';

  initialize() {
    // GET get folder list
    this.app.get(SongsController.basePath, SongsController.getAllSongs);

    // GET get folder by id
    this.app.get(
      `${SongsController.basePath}/:idCancion`,
      SongsController.getSongsById
    );

    // POST create a new folder
    this.app.post(SongsController.basePath, SongsController.createSongs);

    // PUT update existing folder
    this.app.put(
      `${SongsController.basePath}/:idCancion`,
      SongsController.updateSongs
    );

    // DELETE delete movie
    this.app.delete(
      `${SongsController.basePath}/:idCancion`,
      SongsController.deleteSongs
    );
  }

  static mount(app) {
    return new SongsController(app);
  }

  // Start: Endpoints

  static async getAllSongs(req, res) {
    try {
      const songs = await new Songs().get();
      respond(res, OK, songs);
    } catch (e) {
      SongsController.handleUnknownError(res, e);
    }
  }

  static async getSongsById(req, res) {
    try {
      const { idCancion } = req.params;
      const songs = await new Songs(idCancion).getByKey();

      if (!songs) {
        respond(res, NOT_FOUND);
        return;
      }

      respond(res, OK, songs);
    } catch (e) {
      SongsController.handleUnknownError(res, e);
    }
  }

  static async createSongs(req, res) {
    try {
      const expectedParams = ['idCancion', 'idUser'];
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

      const { idCancion, idUser } = req.body;

      const songs = Songs.newSong(idCancion, idUser);
      await songs.create();

      respond(res, OK, songs);
    } catch (e) {
      SongsController.handleUnknownError(res, e);
    }
  }

  static async updateSongs(req, res) {
    try {
      const { idCancion } = req.params;

      const songs = await new Songs(idCancion).getByKey();

      if (!songs) {
        respond(res, NOT_FOUND);
        return;
      }

      const allowedParams = ['idCancion', 'idUser'];

      Object.keys(req.body).forEach(p => {
        if (allowedParams.includes(p)) {
          songs[p] = req.body[p];
        }
      });

      await songs.update();

      respond(res, OK, songs);
    } catch (e) {
      SongsController.handleUnknownError(e);
    }
  }

  static async deleteSongs(req, res) {
    try {
      const { idCancion } = req.params;
      await new Songs(idCancion).delete();
      respond(res, OK);
    } catch (e) {
      SongsController.handleUnknownError(e);
    }
  }

  // End: Endpoints
}
