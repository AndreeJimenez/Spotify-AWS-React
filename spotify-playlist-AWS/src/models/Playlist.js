import DBManager from '../managers/DBmanager';

const userDBSchema = {
  idPlaylist: {
    type: String
  },
  carpeta: String,
  idUser: String
};

export default class Playlist extends DBManager {
  idPlaylist;

  carpeta;

  idUser;

  constructor(idPlaylist, carpeta, idUser) {
    super('spotify-playlist', userDBSchema); // se manda llamar el constructor de la clase padre
    this.idPlaylist = idPlaylist;
    this.carpeta = carpeta;
    this.idUser = idUser;
  }

  toDBFormat() {
    return {
      ...this // spread,
    };
  }

  toDBUpdateFormat() {
    const updates = this.toDBFormat();
    if (updates.idPlaylist) {
      delete updates.idPlaylist;
    }
    return updates;
  }

  getKey() {
    return { idPlaylist: this.idPlaylist };
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse(playlist) {
    // eslint-disable-next-line no-undef
    return new Playlist(playlist.idPlaylist, playlist.carpeta, playlist.idUser);
  }

  static newPlaylist(idPlaylist, carpeta, idUser) {
    //  const id = v4();
    // eslint-disable-next-line no-undef
    return new Playlist(idPlaylist, carpeta, idUser);
  }
}
