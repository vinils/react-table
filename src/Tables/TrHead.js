import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Tds from './Tds'

const TrHeadCons = (props) => {
    return (
        <tr>
            <Tds
              onClick={props.onClick}>
                {props.children}
            </Tds>
        </tr>
    )
}

export default TrHeadCons;