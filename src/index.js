
import React from 'react'
import ReactDOM from 'react-dom';

// import SimpleGrid from './aggrid/simplegrid';
// import CellEditable from './aggrid/celleditable';
// import CellStyling from './aggrid/cell-styling';
import CustomRendrer from './aggrid/cell-renderer/Custome';

const App = () => {
  return (
    <div>
      {/* <div>
        <SimpleGrid />
      </div> */}
      {/* <div>
        <CellEditable />
      </div> */}
      {/* <div>
        <CellStyling />
      </div> */}
      <div>
        <CustomRendrer />
      </div>
    </div>
  )
}

ReactDOM.render(
  <div className="wrapper">
    <App />
  </div>
  , document.getElementById('root'));
