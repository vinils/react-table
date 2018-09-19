import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Cols from '../Cols'
import Td from './Td'

const TdsCons = (cols) => {
    return (
        Cols({...cols, col: Td})
    )
}

export default TdsCons;