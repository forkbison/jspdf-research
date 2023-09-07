
import React from 'react';
import jsPDF from 'jspdf';

const PdfGenerator: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Hello, PDF!', 10, 10);
    doc.save('sample.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
