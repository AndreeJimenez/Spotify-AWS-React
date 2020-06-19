import DBManager from '../managers/DBmanager';

const userDBSchema = {
  name: String,
  idUser: String
};

export default class Folder extends DBManager {
  name;

  idUser;

  constructor(name, idUser) {
    super('spotify-folders', userDBSchema); // se manda llamar el constructor de la clase padre
    this.name = name;
    this.idUser = idUser;
  }

  toDBFormat() {
    return {
      ...this // spread,
    };
  }

  toDBUpdateFormat() {
    const updates = this.toDBFormat();
    if (updates.name) {
      delete updates.name;
    }
    return updates;
  }

  getKey() {
    return { name: this.name };
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse(folder) {
    // eslint-disable-next-line no-undef
    return new Folder(folder.name, folder.idUser);
  }

  static newFolder(name, idUser) {
    // eslint-disable-next-line no-undef
    return new Folder(name, idUser);
  }
}
