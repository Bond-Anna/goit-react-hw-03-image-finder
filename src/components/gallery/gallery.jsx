import css from './gallery.module.css';
import { ImageGalleryItem } from '../galleryItem/galleryItem';
export const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem pictures={pictures} />
    </ul>
  );
};
