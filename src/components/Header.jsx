import React from 'react';
import PropTypes from 'prop-types'

const Header = ({text, bgColor, color }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: color
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h1>
                { text }
            </h1>
        </div>
    </header>
  )
};

// this set a default prop if props is not passed to the component
Header.defaultProps = {
    text: 'Feedback App',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

// this is type checking for the props. it check the types for the props that are passed through.
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string
}

export default Header;
