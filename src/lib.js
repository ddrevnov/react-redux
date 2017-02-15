import moment from 'moment';

export const dateFilter = (date) => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss').toString();
};