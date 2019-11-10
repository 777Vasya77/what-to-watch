import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._handleChangeActiveItem = this._handleChangeActiveItem.bind(this);
    }

    _handleChangeActiveItem(activeItem) {
      this.setState({activeItem});
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onChangeActiveItem={this._handleChangeActiveItem}
      />;
    }

  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
