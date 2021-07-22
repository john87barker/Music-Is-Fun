export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data._id;
  }

  get Template() {
    return `
      <div class="card ">
          <div class="row">
          <img src="${this.albumArt}" class="card-img-left ml-4 my-2 covers" alt="${this.album}">
              <div class="card-body">
                  <h5 class="card-title">${this.artist}</h5>
                  <p class="card-text">${this.album}</p>
              </div>
            </div>
          <button type="button" class="btn btn-primary" onclick="app.songsController.addSong('${this.id}')">+</button>
      </div>


        `;
  }

  get playlistTemplate() {
    return `
  
      <div class="card text-dark ">
        <div class="row">
           <div> <img src="${this.albumArt}" class="card-img-left ml-4 my-2 covers" alt="..."></div>
            <div class="card-body">
                <p class="card-title"><b>${this.artist}</b></p>
                <p class="card-text">${this.album}</p>
            </div>
        </div>
        <button type="button" class="btn btn-warning" onclick="app.songsController.removeSong('${this.id}')">X</button>
      </div>
        `;
  }
}
