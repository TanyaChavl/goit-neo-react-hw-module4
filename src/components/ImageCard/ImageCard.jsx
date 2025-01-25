import PropTypes from "prop-types";
import "./ImageCard.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;