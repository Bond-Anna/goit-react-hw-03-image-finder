import { Component } from 'react';
import { Searchbar } from './components/searchbar/Searchbar.jsx';
import { ImageGallery } from './components/gallery/gallery';
import { Button } from './components/button/button';
import { Spinner } from './components/Spinner/spinner';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    loading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name) {
      this.setState({ pictures: [], page: 1, loading: true });
      return this.fetch()
        .then(({ hits }) => {
          if (hits.length > 0) {
            this.setState({
              pictures: hits,
              error: false,
            });
          } else {
            this.setState({ error: true });
          }
        })
        .catch(() => this.setState({ error: true }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== page) {
      this.setState({ loading: true });
      return this.fetch()
        .then(({ hits }) => {
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...hits],
          }));
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  fetch() {
    const { name, page } = this.state;
    const key = '22720619-487e18f692264a9911b958ddb';
    return fetch(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  handleSearchbarSubmit = name => {
    this.setState({ name });
  };
  handleOnLoadMoreClick = page => {
    this.setState({ page });
  };

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    const { pictures, loading, error, name } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {error && <h1 className="error">There are no {name} pictures :(</h1>}
        {loading && <Spinner />}
        <ImageGallery pictures={pictures} />
        {pictures.length > 0 && <Button onClick={this.handleOnLoadMoreClick} />}
      </div>
    );
  }
}
