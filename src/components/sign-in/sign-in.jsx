import React from 'react';
import PropTypes from 'prop-types';
import Logo from "~/components/logo/logo";
import PageFooter from "~/components/page-footer/page-footer";

const UserData = {
  EMAIL: `user-email`,
  PASSWORD: `user-password`
};

const SignIn = (props) => {
  const {onFormSubmit} = props;

  const _handleFormSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);

    onFormSubmit({
      email: data.get(UserData.EMAIL),
      password: data.get(UserData.PASSWORD),
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={_handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" defaultValue="" required={true}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" defaultValue="" required={true}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
};

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SignIn;
