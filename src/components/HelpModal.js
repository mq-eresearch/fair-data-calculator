import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const HelpModal = ({ text, showHelp, onCloseHelp }) => {
  function handleClose(event) {
    onCloseHelp();
  }

  return (
    <Modal show={showHelp} onHide={handleClose} size="lg">
      <Modal.Body>
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

export default HelpModal;
