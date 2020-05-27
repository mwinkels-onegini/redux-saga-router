/* eslint-disable global-require,import/no-extraneous-dependencies */
import React from 'react';

const PropTypes = React.PropTypes || require('prop-types');

const createLink = (history) => {
  const Link = ({ to, className, children }) => (
    <a
      href={to} className={className} onClick={e => {
        e.preventDefault();
        history.push(to);
      }}
    >
      {children}
    </a>
  );

  Link.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.any,
  };

  return Link;
};

export default createLink;
