import React from 'react';
import PropTypes from 'prop-types';

function Joke({ joker, btnText }) {
  return (
    <>
      <h1>{joker.setup}</h1>
      <h2>{btnText !== 'Get Punchline' ? joker.delivery : ''}</h2>
    </>
  );
}

Joke.propTypes = {
  joker: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Joke;
