import React, { Component } from "react";
import CheckboxTree from 'react-checkbox-tree';
import map from 'lodash/map';


const nodes = [{
  value: 'mars',
  label: 'Mars',
  id: "mars101",
  children: [
      { value: 'phobos', label: 'Phobos', id: 'phobos101' },
      { value: 'deimos', label: 'Deimos', id: 'deimos101' },
  ]
}];


const networkOptions = [
  {
    name: "Parent Group 1",
    id: "100",
    children: [
      {
        name: "Child 1",
        id: "101"
      },
      {
        name: "Child 1",
        id: "102"
      },
      {
        name: "Child 1",
        id: "103"
      }
    ]
  },
  {
    name: "Parent Group 2",
    id: "200",
    children: [
      {
        name: "Child 1",
        id: "201"
      },
      {
        name: "Child 1",
        id: "202"
      },
      {
        name: "Child 1",
        id: "203"
      }
    ]
  }
]

class TreeDemo extends Component {
  constructor(props) {
    super(props);
    this.state= {
      checked: [],
      expanded: [],
      unselectedGroup: [],
      unselectedChild: []
    }
  }
  getCustomTree = () => {
    const tree = [];
    return map(networkOptions, (group) => {
      return (
        <div key={`gid-${group.id}`}>
          {this.getNode(group.name, group.id, group.id)}
          <ul>
            {
              group.children ?  (
                map(group.children, (child) => {
                  return <li key={`cid-${child.id}`}>{this.getNode(child.name, group.id, child.id)}</li>
                })
              ) : null
            }
          </ul>
        </div>
      )
    });
  }

  getNode = (name, groupId, Id) => {
    return (
      <div>
        <p className="badge badge-pill badge-primary">
          {name} 
          <span className="clickable">
            <i className="fas fa-times" onClick={() => this.updateSelections(groupId, Id)}></i>
          </span>
        </p>
      </div>
    );
  }

  updateSelections = (groupId, id) => {
    console.log("event triggered",groupId, id);
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <h1>Tree Demo</h1>
         </div>
         <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        
        <hr/>
        Custom Implementation
        
        {this.getCustomTree()}
      </React.Fragment>
    );
  }
}

export default TreeDemo;
