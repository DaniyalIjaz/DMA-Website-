// import React from 'react'
// import Home from './Components/Home'

// const Downloads = () => {
//   return (
//     <div>
//         <Home/>
//       <img src='./image/DMAProfile.pdf' className="d-block img-fluid mx-auto " alt="..." />
//     </div>
//   )
// }

// export default Downloads

import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import { Modal, Button } from 'react-bootstrap';

const Downloads = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the modal every time the component is mounted
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  // Function to trigger the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './image/DMAProfile.pdf'; // Path to your PDF file
    link.download = 'DMAProfile.pdf';
    link.click();
  };

  return (
    <div>
      <Home />

      {/* Modal to notify the user */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Your File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your file is ready for download! Click the button below to download the file. If the download doesn't start, you can download it multiple times.
        </Modal.Body>
        <Modal.Footer>
          {/* Download Button */}
          <Button variant="primary" onClick={handleDownload}>
            Download PDF
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Downloads;

