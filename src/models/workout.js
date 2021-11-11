let next = 1;

export default class Workout {
  constructor(name = '') {
    this.id = next++;
    this.name = name;
    this.exercises = [];
  }
}
