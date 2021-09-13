import { Component } from 'react';
import css from './galleryItem.module.css';
export class ImageGalleryItem extends Component {
  state = {
    pictures: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      this.setState({ page: null });
      fetch(
        `https://pixabay.com/api/?q=${this.props.name}&page=${this.state.page}&key=22720619-487e18f692264a9911b958ddb&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => response.json())
        .then(({ hits }) => {
          this.setState(prevState => ({ page: prevState.page + 1 }));
          // console.log({ hits });
          return this.setState({ pictures: hits });
        });
    }
  }
  render() {
    const { pictures } = this.state;
    return (
      <>
        {pictures.map(({ id, webformatURL, largeImageURL }) => (
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
  }
}
