import css from './galleryItem.module.css';
export const ImageGalleryItem = ({ pictures }) => {
  return (
    <>
      {pictures.map(({ id, webformatURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt=""
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
};
