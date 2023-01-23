import { Loader } from '../../Loader/Loader';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  tags,
  largeImageURL,
  setModalIsOpen,
  setImagePath,
}) => {
  const onClick = () => {
    setModalIsOpen(true);
    setImagePath(largeImageURL);
  };

  return (
    <ImageGalleryItemStyled onClick={() => onClick(largeImageURL)}>
      <ImageGalleryItemImage src={largeImageURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  setModalIsOpen: PropTypes.func,
  setImagePath: PropTypes.func,
  loading: PropTypes.bool,
};
