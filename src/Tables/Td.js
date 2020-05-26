import React from 'react'

const TdCons = (data, key = null, onClick = null) => {
  return (
    <td key={key} onClick={() => (onClick ? onClick(key) : null)}>
      {data}
    </td>
  )
}

export default TdCons
