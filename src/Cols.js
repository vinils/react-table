import React, { Component } from 'react';
import PropTypes from 'prop-types'

const ColsCons = (props) => {
    if(props.colsName && props.colsName.length > 0){
        return props.colsName.map((propName, colIdx) => {
            return props.col(props.children[propName], propName, props.onClick)
        })
    } else {
        return props.children.map((col, colIdx) => {
            return props.col(col, colIdx, props.onClick)
        })
    }
}

ColsCons.propTypes = {
  children: PropTypes.object,
  col: PropTypes.func.isRequired,
  colsName: PropTypes.array
}

export default ColsCons;