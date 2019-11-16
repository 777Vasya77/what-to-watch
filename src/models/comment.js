import {services} from '~/services/services';
import moment from 'moment';

const {RatingService} = services;

class Comment {
  constructor(data) {
    this.id = data[`id`];
    this.user = {
      id: data[`user`][`id`],
      name: data[`user`][`name`]
    };
    this.rating = data[`rating`];
    this.body = data[`comment`];
    this.date = new Date(data[`date`]);
  }

  getRatingService() {
    return new RatingService(this.rating);
  }

  get ratingWithComma() {
    return this.getRatingService().getConvertRating();
  }

  get formattedDate() {
    return moment(this.date).format(`LL`);
  }

  get dateTime() {
    return moment(this.date).format(`YYYY-MM-DD`);
  }

  static parseComment(data) {
    return new Comment(data);
  }

  static parseComments(data) {
    return data.map(Comment.parseComment);
  }

}

export default Comment;
