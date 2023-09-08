import React from "react";
import PdfGenerator from "./PdfGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <PdfGenerator />
          <div id="forPDF">
          <h1>Hello, PDF!</h1>
          <p>This is a sample PDF generated from an HTML template.</p>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
