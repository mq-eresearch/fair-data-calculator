import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { StarFill, Star } from "react-bootstrap-icons";

// const ResultsModal = () => {
//   return (
//     <div id="resultsModal" className="modal">
//       <div className="modal-content" id="results-modal-content">
//         <Star /> <StarFill />
//       </div>
//     </div>
//   );
// };

const ResultsModal = ({ text, showResults, onCloseResults }) => {
  function handleClose(event) {
    onCloseResults();
  }

  return (
    <Modal show={showResults} onHide={handleClose} size="lg">
      <Modal.Body id="results-modal-content">
        <div
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsModal;
