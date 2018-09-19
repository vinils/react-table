import React, { Component } from 'react';
import PropTypes from 'prop-types'

const TrCons = (props) => {
    return (
        <tr
          {...props}>
            {props.children}
        </tr>
    );
}

export default TrCons;