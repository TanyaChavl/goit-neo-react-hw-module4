import PropTypes from "prop-types";
import ImageCard from "./../ImageCard/ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} className="image-gallery-item">
          <ImageCard image={image} onClick={onImageClick} className="image"/>
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;