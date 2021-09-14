import { Component } from 'react';
import css from './button.module.css';
export class Button extends Component {
  state = { page: 1 };
  onBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.props.onClick(this.state.page);
  };

  render() {
    return (
      <button type="button" className={css.Button} onClick={this.onBtnClick}>
        Load more
      </button>
    );
  }
}
