import css from './gallery.module.css';
import { ImageGalleryItem } from '../galleryItem/galleryItem';
export const ImageGallery = ({ name }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem name={name} />
    </ul>
  );
};
