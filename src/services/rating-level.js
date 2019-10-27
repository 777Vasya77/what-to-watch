class RatingLevel {
  constructor(rating) {
    this.rating = rating;
    this.levels = new Map([
      [{min: 0, max: 3}, `bad`],
      [{min: 3, max: 5}, `normal`],
      [{min: 5, max: 8}, `good`],
      [{min: 8, max: 10}, `very good`],
      [{min: 10, max: Infinity}, `awesome`],
    ]);
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  between(min, max) {
    return this.rating >= min && this.rating < max;
  }

  getLevel() {
    let levelTitle;
    for (let [range, level] of this.levels) {
      if (this.between(range.min, range.max)) {
        levelTitle = level;
      }
    }

    return RatingLevel.capitalize(levelTitle);
  }
}

export default RatingLevel;
