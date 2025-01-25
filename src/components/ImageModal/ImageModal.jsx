import Modal from "react-modal";
import "./ImageModal.css";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Selected Image"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <img src={image?.urls?.regular} alt={image?.alt_description} />
        <p>{image?.description || "No description available"}</p>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;