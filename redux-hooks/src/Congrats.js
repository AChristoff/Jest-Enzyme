import React from 'react';
import PropTypes from 'prop-types';
import { isDev } from './test/testUtils'
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = (props) => {

  if (props.success) {
    return (
      <div data-test={isDev("component-congrats")} className="alert alert-success">
      
        <span data-test={isDev("congrats-message")} >
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test={isDev("component-congrats")} />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
