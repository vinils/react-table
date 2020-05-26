import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Trs from './Tables/Trs'
import TrHead from './Tables/TrHead'

const ExpandButtonCons = (props) => {
  return (
    <button {...props}>
      {props.expanded === null ? (
        <span>&nbsp;</span>
      ) : props.expanded ? (
        '-'
      ) : (
        '+'
      )}
    </button>
  )
}

ExpandButtonCons.propTypes = {
  expanded: PropTypes.bool
}

export default class TreeTable extends Component {
  constructor(props) {
    super(props)

    this.expandDefault = props.expand != null ? props.expand : true
    this.originalData = props.children
    this.initialBody = this.map(this.originalData)

    this.state = {
      body: this.initialBody
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children) {
      if (nextProps.children !== this.props.children) {
        this.originalData = nextProps.children
        this.initialBody = this.map(this.originalData)
        this.setState({ body: this.initialBody })
      }
    }
  }

  getChilds(line) {
    if (line.showChilds) {
      return line.childs
    } else {
      return []
    }
  }

  map(lines) {
    return lines.map((line) => {
      const childs = this.props.getChilds(line)
      const hasChilds = childs.length > 0

      return {
        originalData: line,
        childs: this.map(childs),
        hasChilds: hasChilds,
        showChilds: !hasChilds ? null : this.expandDefault
      }
    })
  }

  loop(nodes, action) {
    nodes.forEach((node) => {
      action(node)

      if (node.childs.length > 0) {
        return this.loop(node.childs, action)
      }
    })
  }

  handleClick(line, colKey) {
    // console.log(line, colKey)
  }

  getHead(head, headCols, headNames) {
    head.forEach((col) => {
      if (col) {
        if (col.description) {
          headCols.push(col.description)
          if (col.name) {
            headNames.push(col.name)
          }
        } else {
          headCols.push(col)
        }
      }
    })
  }

  expandLine = (line) => {
    const newBody = [...this.state.body]

    this.loop(newBody, (line2) => {
      if (line === line2) {
        if (line2.hasChilds) {
          line2.showChilds = !line2.showChilds
          this.setState({ body: newBody })
        }
      }
    })
  }

  expandAll = () => {
    const newBody = [...this.state.body]
    this.expandDefault = !this.expandDefault

    this.loop(newBody, (line) => {
      if (line.hasChilds) {
        line.showChilds = this.expandDefault
      }
    })

    this.setState({ body: newBody })
  }

  mapLine = (line) => {
    const expandButton = (
      <ExpandButtonCons
        expanded={line.showChilds}
        onClick={() => this.expandLine(line)}
      />
    )

    return {
      expandButton: expandButton,
      ...line.originalData
    }
  }

  filter = (line) => {
    if (!this.props.filter) {
      return true
    }

    let ret = false

    this.loop([line], (line) => {
      ret = ret || this.props.filter(line.originalData)
    })

    return ret
  }

  render() {
    const buttonExpand = (
      <ExpandButtonCons
        expanded={this.expandDefault}
        onClick={this.expandAll}
      />
    )
    const expandHead = {
      description: buttonExpand,
      name: 'expandButton'
    }
    const head = [expandHead, ...this.props.head]
    const headCols = []
    const headNames = []
    this.getHead(head, headCols, headNames)

    return (
      <table style={this.props.style}>
        <thead>{!headCols ? null : <TrHead>{headCols}</TrHead>}</thead>
        <tbody>
          <Trs
            {...this.props}
            style={this.props.style.row}
            getChilds={this.getChilds}
            colsName={headNames}
            rowMap={this.mapLine}
            onClick={this.handleClick}
            filter={this.filter}
          >
            {this.state.body}
          </Trs>
        </tbody>
      </table>
    )
  }
}
