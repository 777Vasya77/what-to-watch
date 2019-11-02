const LEVELS = new Map([
  [{min: 0, max: 3}, `bad`],
  [{min: 3, max: 5}, `normal`],
  [{min: 5, max: 8}, `good`],
  [{min: 8, max: 10}, `very good`],
  [{min: 10, max: Infinity}, `awesome`],
]);

class RatingService {
  constructor(rating) {
    this.rating = rating;
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  between(min, max) {
    return this.rating >= min && this.rating < max;
  }

  getLevel() {
    for (let [range, level] of LEVELS) {
      if (this.between(range.min, range.max)) {
        return RatingService.capitalize(level);
      }
    }

    return null;
  }

  getConvertRating() {
    return this.rating
      .toFixed(1)
      .toString()
      .replace(`.`, `,`);
  }
}

export default RatingService;
