import RatingService from '~/services/rating-service';
import timeConverterService from '~/services/time-converter-service';

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

  getRatingService() {
    return new RatingService(this.rating);
  }

  static parseFilm(data) {
    return new Film(data);
  }

  static parseFilms(data) {
    return data.map(Film.parseFilm);
  }

  get ratingWithComma() {
    return this.getRatingService().getConvertRating();
  }

  get ratingLevel() {
    return this.getRatingService().getLevel();
  }

  get starringString() {
    return this.starring.join(`, `);
  }

  get starringList() {
    return this.starring.join(`,\n`);
  }

  get convertRunTime() {
    return timeConverterService(this.runTime);
  }

}

export default Film;
