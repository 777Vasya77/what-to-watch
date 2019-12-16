import React, {PureComponent} from 'react';

const withIsValid = (Component) => {
  class WithIsValid extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false
      };

      this._handleChangeIsValid = this._handleChangeIsValid.bind(this);
    }

    _handleChangeIsValid(isValid) {
      this.setState({isValid});
    }

    render() {
      const {isValid} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        onChangeIsValid={this._handleChangeIsValid}
      />;
    }

  }

  WithIsValid.propTypes = {};

  return WithIsValid;
};

export default withIsValid;
