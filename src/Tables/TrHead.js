import React from 'react'
import Tds from './Tds'

const TrHeadCons = (props) => {
  return (
    <tr>
      <Tds onClick={props.onClick}>{props.children}</Tds>
    </tr>
  )
}

export default TrHeadCons
