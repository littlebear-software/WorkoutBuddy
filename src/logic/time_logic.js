import moment from 'moment';

export const timeSince = timestamp => {
  let then = new Date(timestamp);
  return moment(then).fromNow();
};
