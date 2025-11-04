import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Link } from "react-router-dom";

const PDFArticle = ({ title, intro, pdfFile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="pdf-article container py-5">
      <h2 className="mb-3">{title}</h2>
      <p className="mb-4">{intro}</p>

      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={800} />
      </Document>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-secondary"
          onClick={goToPrevPage}
          disabled={pageNumber === 1}
        >
          ← Page précédente
        </button>
        <span>
          Page {pageNumber} / {numPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={goToNextPage}
          disabled={pageNumber === numPages}
        >
          Page suivante →
        </button>
      </div>

      <div className="mt-4">
        <Link to="/blog" className="btn btn-secondary">
          ← Retour aux articles
        </Link>
      </div>

      <div className="mt-3">
        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: "inline-block", marginTop: "20px" }}
        >
          Télécharger le guide complet
        </a>
      </div>
      
    </div>
  );
};

export default PDFArticle;
