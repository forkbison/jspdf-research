
import React from 'react';
import jsPDF from 'jspdf';
import {template} from './template.ts';

const PdfGenerator: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.html(template as string, {
      callback: function (doc) {
        doc.save();
      }
   });
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
