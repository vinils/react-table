# React Table
React table component

## Demo
Demo and playground are available [here](https://vinils.github.io/react-table/)

## Install

```bash

npm install @vinils/react-table
```

## Usage Example

### Matrix

```jsx
const matrix = [
  ['texttext', 'texttext', 'texttext'],
  ['texttext', 'texttext', 'texttext'],
  ['texttext', 'texttext', 'texttext'],
  ['texttext', 'texttext', 'texttext'],
]

export default class MatrixExample extends Component {
    render() {
        return (
            <Table style={{border: "1px solid black"}}>
                {matrix}
            </Table>
        );
    }
}
```

### Tree

```jsx
const head = [
    {description: 'Name 1', name:'name1'}, 
    {description: 'Name 2', name:'name2'}, 
    {description: 'Name 3', name:'name3'}
]

const treeRow = {
    name1: 'root1',
    name2: 'aaaa',
    name3: 'bbbbb',
    childs: [{
        name1: 'nodeA',
        name2: 'aaaa',
        name3: 'bbbbb',
        childs: [{
            name1: 'nodeAA',
            name2: 'aaaa',
            name3: 'bbbbb',
            childs: []    
        }]},{
        name1: 'nodeB',
        name2: 'aaaa',
        name3: 'bbbbb',
        childs: []
        }
    ]
}

export default class TreeExample extends Component {
    render() {
        return (
            <TreeTable
              style={{border: "1px solid black"}}
              head={head}
              getChilds={(line) => line.childs}>
                {[treeRow]}
            </TreeTable>
        );
    }
}
```

### Filter

```jsx
const treeRow = {
    name1: 'root',
    name2: 'aaaa',
    name3: 'bbbbb',
    childs: [
    {
        name1: 'nodeA',
        name2: 'aaaa',
        name3: 'bbbbb',
        childs: [
        {
            name1: 'nodeAA',
            name2: 'aaaa',
            name3: 'bbbbb',
            childs: []    
        }
        ]    
    },
    {
        name1: 'nodeB',
        name2: 'aaaa',
        name3: 'bbbbb',
        childs: []
    }
    ]
}

export default class FilterExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: (line) => true
        }
    }

    getHead2() {
        const name1Description = <div><span>a</span><br/><input size={10} onChange={(e) => this.handleFilterChange(e.target.value)}/></div>

        return [
            {name:'name1', description: name1Description},
            {name:'name2', description:'b'},
            {name:'name3', description:'c'}
        ]
    }

    handleFilterChange = (value) => {
        if(!value) {
            this.setState({search: (line) => true})
        } else {
            this.setState({search: (line) => line.name1.toLowerCase().indexOf(value.toLowerCase()) >= 0})
        }
    }
    
    render() {
        return (
        <div>
            <TreeTable
              style={{border: "1px solid black"}}
              head={this.getHead2()}
              getChilds={(line) => line.childs}
              filter={this.state.search}>
                {[treeRow]}
            </TreeTable>
        </div>
        )
    }
}
```

