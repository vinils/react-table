import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Trs from './Tables/Trs'
import TrHead from './Tables/TrHead'

export default class Table extends Component {
    constructor (props) {
        super(props)

        this.initialBody = props.children
        
        this.state = {
            body: this.initialBody
        }
    }

    handleHeadClick(idx) {
        console.log(idx);
    }

    handleBodyClick = (rowIdx, colKey) => {
        console.log(rowIdx, colKey);

        if(this.props.onClick) {
            this.props.onClick(rowIdx, colKey)
        }
    }

    getHead(head, headCols, headNames) {
        head.forEach(col => {
            if(col) {
                if(col.description) {
                    headCols.push(col.description)
                    if(col.name) {
                        headNames.push(col.name)
                    }
                } else {
                    headCols.push(col)
                }
            }
        })
    }

    render() {
        const head = this.props.head ? this.props.head : []
        let headCols = []
        let headNames = []
        this.getHead(head, headCols, headNames);

        return (
            <table style={this.props.style}>
                <thead>
                    {!headCols || headCols.length <= 0 ? null : <TrHead onClick={this.handleHeadClick}>{headCols}</TrHead> }
                </thead>
                <tbody>
                    <Trs
                      {...this.props}
                      onClick={this.handleBodyClick}
                      colsName={headNames}>
                        {this.state.body}
                    </Trs>
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
  head: PropTypes.array
}

