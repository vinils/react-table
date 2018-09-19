import React, { Component } from 'react';
import PropTypes from 'prop-types'

const TdCons = (data, key=null, onClick = null) => {
  return (
    <td 
      key={key}
      onClick={() => onClick ? onClick(key) : null}>
        {data}
    </td>
  );
}

export default TdCons;
