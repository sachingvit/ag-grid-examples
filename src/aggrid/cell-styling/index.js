import React, { Component } from 'react'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export default class CellStyling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make",
                field: "make",
                checkboxSelection: (params) => params.data.price > 0,
                cellStyle: { color: 'red', 'background-color': 'white' },
                headerCheckboxSelection: true,
            }, {
                headerName: "Model", field: "model", editable: true
            }, {
                headerName: "Price", field: "price", editable: true,
                cellClass : 'my-class'
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 350
            }, {
                make: "Ford", model: "Mondeo", price: 320
            }, {
                make: "Porsche", model: "Boxter", price: 720
            }]
        }
        this.rowStyle = (params) => {
            if (params.data.price < 400) {
                return { pointerEvents: 'none', 'backgroundColor' : 'red' }
            }
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
                <div><h2>Cell Styling</h2></div>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    stopEditingWhenGridLosesFocus={true}
                    onCellValueChanged={this.changeDetect}
                    rowSelection="multiple"
                    onGridReady={this.gridReady}
                    onSelectionChanged={this.selectionChanged}
                    getRowStyle={this.rowStyle}
                >
                </AgGridReact>
            </div >
        );
    }

    gridReady = (params) => {
        this.gridApi = params.api;
        const selectedData = this.gridApi.getSelectedRows();
        console.log(this.gridApi);
        
        // console.log("selectedData", selectedData);
        this.gridApi.forEachNode(node => {
            if (node.data.price < 400) {
                node.setSelected(true);
            }
        })
        // debugger
    }

    selectionChanged = (params) => {
        console.log(this.gridApi.getSelectedRows());
    }

}
