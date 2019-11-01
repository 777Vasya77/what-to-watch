const timeConverterService = (min) => {
  const hours = (min / 60);
  const minutes = (hours - Math.floor(hours)) * 60;

  return `${Math.floor(hours)}h ${Math.round(minutes)}m`;
};

export default timeConverterService;
