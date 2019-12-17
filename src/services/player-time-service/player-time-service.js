const _setLeadZero = (number) => {
  return (number >= 10) ? `${number}` : `0${number}`;
};

const playerTimeService = (time = 0) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.floor(time - hours * 3600 - minutes * 60);

  return `${_setLeadZero(hours)}:${_setLeadZero(minutes)}:${_setLeadZero(seconds)}`;
};

export default playerTimeService;
