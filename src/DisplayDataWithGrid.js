import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { AgGridReact } from 'ag-grid-react'; 
import DisplayImg from './DisplayImg';

export default function DisplayDataWithGrid() {

    const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); 

  const [columnDefs, setColumnDefs] = useState([
    {field: 'albumId', filter: true},
    {field: 'id', filter: true},
    {field: 'title'},
    {field:'url', cellRenderer : DisplayImg}
  ]);

  const defaultColDef = useMemo( ()=> ({
    sortable: true
  }),[]);
  

  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);


  return (
    <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
        
        
        <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API

            rowData={rowData} // Row Data for Rows

            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties

            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows

            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />

    </div>
  )
}
