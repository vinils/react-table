import React from 'react'

const TrCons = (props) => {
  return <tr {...props}>{props.children}</tr>
}

export default TrCons
