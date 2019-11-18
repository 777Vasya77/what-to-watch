import React from 'react';

const Loader = () => {
  const styles = {
    margin: `0 auto`,
    fontSize: `2em`,
    textTransform: `uppercase`
  };
  return (
    <div style={styles}>Загрузка...</div>
  );
};

export default Loader;
