import React from 'react'
import Rows from '../Rows'
import Tds from './Tds'
import Tr from './Tr'

const TrsCons = (props) => {
  return (
    <Rows {...props} row={Tr} cols={Tds}>
      {props.children}
    </Rows>
  )
}

export default TrsCons
