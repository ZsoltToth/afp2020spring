import React from 'react';
import './App.scss';
import BookSearchBar from "./components/BookSearchBar";
import BookSearchResults from "./components/BookSearchResults";

function App() {
  return (
    <div className="container-fluid">
      <div className={"row"}>
        <div className="col-md-2"></div>
          <div className="col-md-8">
              <div className="row"><BookSearchBar/></div>
              <div className="row"><BookSearchResults/></div>
          </div>
          <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;
