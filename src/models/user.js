import {BASE_URL} from '~/api/api';

class User {
  constructor(data) {
    this.id = data[`id`];
    this.email = data[`email`];
    this.name = data[`name`];
    this.avatarUrl = data[`avatar_url`];
  }

  static parseUser(data) {
    return new User(data);
  }

  get fullAvatarUrl() {
    return `${BASE_URL}${this.avatarUrl}`;
  }
}

export default User;
