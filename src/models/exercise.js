let next = 1;

export default class Exercise {
  constructor(name = '') {
    this.id = next++;
    this.name = name;
    this.sets = [];
  }
}
