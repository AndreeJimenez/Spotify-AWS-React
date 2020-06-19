import DBManager from '../managers/DBmanager';

const userDBSchema = {
  idCancion: {
    type: String
  },
  idUser: String
};

export default class Songs extends DBManager {
  idCancion;

  idUser;

  constructor(idCancion, idUser) {
    super('spotify-songs', userDBSchema); // se manda llamar el constructor de la clase padre
    this.idCancion = idCancion;
    this.idUser = idUser;
  }

  toDBFormat() {
    return {
      ...this // spread,
    };
  }

  toDBUpdateFormat() {
    const updates = this.toDBFormat();
    if (updates.idCancion) {
      delete updates.idCancion;
    }
    return updates;
  }

  getKey() {
    return { idCancion: this.idCancion };
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse(songs) {
    // eslint-disable-next-line no-undef
    return new Songs(songs.idCancion, songs.idUser);
  }

  static newSong(idCancion, idUser) {
    //  const id = v4();
    // eslint-disable-next-line no-undef
    return new Songs(idCancion, idUser);
  }
}
