import { BAD_REQUEST, NOT_FOUND, OK } from 'http-status-codes';
import { respond } from '../utils/response';
import BaseController from './BaseController';
import Folder from '../models/Folder';

export default class FoldersController extends BaseController {
  static basePath = '/api/v2/folders';

  initialize() {
    // GET get folder list
    this.app.get(FoldersController.basePath, FoldersController.getAllFolders);

    // GET get folder by id
    this.app.get(
      `${FoldersController.basePath}/:name`,
      FoldersController.getFolderById
    );

    // POST create a new folder
    this.app.post(FoldersController.basePath, FoldersController.createFolder);

    // PUT update existing folder
    this.app.put(
      `${FoldersController.basePath}/:name`,
      FoldersController.updateFolder
    );

    // DELETE delete movie
    this.app.delete(
      `${FoldersController.basePath}/:name`,
      FoldersController.deleteFolder
    );
  }

  static mount(app) {
    return new FoldersController(app);
  }

  // Start: Endpoints

  static async getAllFolders(req, res) {
    try {
      const folders = await new Folder().get();
      respond(res, OK, folders);
    } catch (e) {
      FoldersController.handleUnknownError(res, e);
    }
  }

  static async getFolderById(req, res) {
    try {
      const { name } = req.params;
      const folder = await new Folder(name).getByKey();

      if (!folder) {
        respond(res, NOT_FOUND);
        return;
      }

      respond(res, OK, folder);
    } catch (e) {
      FoldersController.handleUnknownError(res, e);
    }
  }

  static async createFolder(req, res) {
    try {
      const expectedParams = ['name', 'idUser'];
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

      const { name, idUser } = req.body;

      const folder = Folder.newFolder(name, idUser);
      await folder.create();

      respond(res, OK, folder);
    } catch (e) {
      FoldersController.handleUnknownError(res, e);
    }
  }

  static async updateFolder(req, res) {
    try {
      const { name } = req.params;

      const folder = await new Folder(name).getByKey();

      if (!folder) {
        respond(res, NOT_FOUND);
        return;
      }

      const allowedParams = ['name', 'idUser'];

      Object.keys(req.body).forEach(p => {
        if (allowedParams.includes(p)) {
          folder[p] = req.body[p];
        }
      });

      await folder.update();

      respond(res, OK, folder);
    } catch (e) {
      FoldersController.handleUnknownError(e);
    }
  }

  static async deleteFolder(req, res) {
    try {
      const { name } = req.params;
      await new Folder(name).delete();
      respond(res, OK);
    } catch (e) {
      FoldersController.handleUnknownError(e);
    }
  }

  // End: Endpoints
}
