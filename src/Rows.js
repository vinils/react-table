import React, { Component } from 'react';
import PropTypes from 'prop-types'

const RowsCons = (props) => {
    let highLight = props.highLight ? true : false

    return props.children.map((row, idx) => {
        const nthChild = props.style && props.style.nthChild ? props.style.nthChild : "#FFFFFF"
        const key = props.id ? props.id + idx : idx
        const mapedRow = props.rowMap ? props.rowMap(row) : row
        const childs = props.getChilds ? props.getChilds(row) : []
        const filterCondition = props.filter ? props.filter(row) : true

        if(!filterCondition) {
            return null
        }

        highLight = !highLight

        return (
            <React.Fragment>
                <props.row 
                  key={key}
                  style={highLight ? {backgroundColor: nthChild} : null}>
                    <props.cols 
                      colsName={props.colsName} 
                      onClick={(colKey) => props.onClick(row, colKey)}>
                        {mapedRow}
                    </props.cols>
                </props.row>
                {childs.length > 0 ? 
                <RowsCons 
                  {...props}
                  id={key+1}
                  key={key+1}
                  highLight={highLight}>
                    {childs}
                </RowsCons> : null}
            </React.Fragment>
        )
    })
}

RowsCons.propTypes = {
  row: PropTypes.func.isRequired,
  cols: PropTypes.func.isRequired
}

export default RowsCons;