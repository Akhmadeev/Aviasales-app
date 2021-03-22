export const decorPrice = (num) => {
  const number = num.toString();
  return `${number.slice(0, -3)} ${number.slice(-3)}`;
};

export const stopsTicket = (value) => {
  if (value.length === 0) return 'без';
  if (value) return value.length;
  return 'данных нет';
};

export const transitTime = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${hours}ч ${minutes}м`;
};
