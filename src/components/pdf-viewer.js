"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function MyApp({ file }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      <Link href={file}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={300}
          href={file}
        />
      </Link>
      <p>
        <button
          onClick={handlePreviousPage}
          className="m-4 bg-red-600 p-6 py-2 rounded-md text-gray-300"
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        Page {pageNumber} of {numPages}
        <button
          onClick={handleNextPage}
          className="m-4 bg-green-600 p-6 py-2 rounded-md text-gray-300"
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </p>
    </Document>
  );
}
