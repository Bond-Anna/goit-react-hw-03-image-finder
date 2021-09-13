import { Component } from 'react';
import { Searchbar } from './components/searchbar/Searchbar.jsx';
import { ImageGallery } from './components/gallery/gallery';
import { Button } from './components/button/button';
class App extends Component {
  state = { name: '' };
  handleSearchbarSubmit = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery name={this.state.name} />
        <Button />
      </div>
    );
  }
}

export default App;
