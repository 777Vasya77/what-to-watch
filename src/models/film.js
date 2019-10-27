import RatingLevel from "~/services/rating-level";

class Film {
  constructor(data) {
    this.id = data.id;
    this.name = data[`name`];
    this.posterImage = data[`poster_image`];
    this.previewImage = data[`preview_image`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.description = data[`description`];
    this.rating = data[`rating`];
    this.scoresCount = data[`scores_count`];
    this.director = data[`director`];
    this.starring = data[`starring`];
    this.runTime = data[`run_time`];
    this.genre = data[`genre`];
    this.released = data[`released`];
    this.isFavorite = Boolean(data[`is_favorite`]);
    this.videoLink = data[`video_link`];
    this.previewVideoLink = data[`preview_video_link`];
  }

  static parseFilm(data) {
    return new Film(data);
  }

  static parseFilms(data) {
    return data.map(Film.parseFilm);
  }

  get ratingWithComma() {
    return this.rating
      .toFixed(1)
      .toString()
      .replace(`.`, `,`);
  }

  get ratingLevel() {
    return new RatingLevel(this.rating).getLevel();
  }

  get starringString() {
    return this.starring.join(`, `);
  }

}

export default Film;
