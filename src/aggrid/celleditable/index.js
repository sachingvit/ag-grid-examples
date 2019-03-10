import React, { Component } from 'react'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export default class CellEditable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make", checkboxSelection: true
            }, {
                headerName: "Model", field: "model", editable: true
            }, {
                headerName: "Price", field: "price", editable: true
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 350
            }, {
                make: "Ford", model: "Mondeo", price: 320
            }, {
                make: "Porsche", model: "Boxter", price: 720
            }]
        }
    }

    changeDetect = (e) => {
        console.log(e);

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
                <div><h2>Cell Editing</h2></div>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    stopEditingWhenGridLosesFocus={true}
                    onCellValueChanged={this.changeDetect}
                    rowSelection="multiple"
                >
                </AgGridReact>
            </div >
        );
    }
}
