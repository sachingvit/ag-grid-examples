import React, { Component } from 'react'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Dropdown = (props) => {
    return (
        <select name="rate" defaultValue={props.value} onChange={props.changeHandler}>
            <option disabled>Select Value</option>
            <option value="1">1-1000</option>
            <option value="2">1001-2000</option>
            <option value="3">2001-3000</option>
            <option value="4">3001-4000</option>
        </select>
    )
}


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make",
                field: "make",
                cellRendererFramework: (node) => {
                    return <Dropdown value={node.data.price} changeHandler={this.changeHandler} />
                }
            }, {
                headerName: "Model", field: "model"
            }, {
                headerName: "Price", field: "price"
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 3, key: 1
            }, {
                make: "Ford", model: "Mondeo", price: 1, key: 2
            }, {
                make: "Porsche", model: "Boxter", price: 2, key: 3
            }]
        }
    }

    gridReady = (param) => {
        this.gridApi = param.api;
    }

    changeHandler = (e) => {
        console.log(e.target.value)
        // const newValue =  
        this.gridApi.forEachNode(node => {
            console.log('node', node);
            debugger
        })
    }

    getRowNodeId = (node) => {
        return node.key;
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '150px',
                    width: '600px'
                }}
            >
                <div><h2>Basic Setup</h2></div>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    onCellValueChanged={this.changeHandler}
                    onGridReady={this.gridReady}
                    getRowNodeId={this.getRowNodeId}
                >
                </AgGridReact>
            </div>
        );
    }
}
