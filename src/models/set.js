let next = 1;

export default class Set {
  constructor(reps, weight, notes) {
    this.id = next++;
    this.reps = reps;
    this.weight = weight;
    this.notes = notes;
    this.timestamp = new Date().toISOString();
  }
}
