import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './Auth.css';

function Auth(props: any) {
  const {
    auth,
    setAuth,
    login,
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
  } = props;

  return (
    <div className="auth">
      <div className="card">
        <div className="tabs is-centered">
          <ul>
            <li className={auth === 'login' ? 'is-active' : ''}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setAuth('login');
                }}
              >
                <span>Login</span>
              </a>
            </li>
            <li className={auth === 'signup' ? 'is-active' : ''}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setAuth('signup');
                }}
              >
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="signup">
            <form action="">
              <div className={`field ${auth === 'login' ? 'hidden' : ''}`}>
                <label className="label" htmlFor="first_name">
                  First name:
                </label>
                <div className="control">{firstNameInput}</div>
              </div>
              <div className={`field ${auth === 'login' ? 'hidden' : ''}`}>
                <label className="label" htmlFor="last_name">
                  Last name:
                </label>
                <div className="control">{lastNameInput}</div>
              </div>
              <div className="field">
                <label className="label" htmlFor="email">
                  Email:
                </label>
                <div className="control">{emailInput}</div>
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  Password:
                </label>
                <div className="control">{passwordInput}</div>
              </div>
            </form>
            <button
              onClick={() => login()}
              className="button is-link is-fullwidth"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
