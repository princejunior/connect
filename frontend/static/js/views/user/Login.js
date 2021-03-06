import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Login');
  }

  async getHtml() {
    return `
    <div id='login' class='login'>
        <img class='login-logo' src='./static/photos/lwLogo.png' alt='' />
      <div id='login-container'class='login-container'>
        <h1>Sign in</h1>
        <div>
          <h5>E-mail</h5>
          <input
          id='email'
            type='text'
          />
          <h5>Password</h5>
          <input
          id='password'
            type='password'
            name='password'
          />
          <button onClick='login()' class='login-sign-in-button'>
            Sign In
          </button>
        </div>
        <p>
          By creating an account, you agree to Live W.O.W.s Conditions of use
          and Privacy Notice
        </p>
        <button onClick='changeForm(0)' class='login-register-button'>
          Create your Live W.O.W. account
        </button>
      </div>

       <div id='register-container' class='register-container'>
        <h1>Sign in</h1>
        <form>
          <h5>First Name</h5>

          <input
            type='text'
          />
          <h5>Last Name</h5>

          <input
            
            type='text'
          />
          <h5>E-mail</h5>

          <input
            
            type='text'
          />
          <h5>Password</h5>

          <input
            type='password'
            name='password'
            
          />
          <button onClick='register()' class='login-register-button'>
            Create your Live W.O.W. account
          </button>
        </form>
        <p>
          By creating an account, you agree to Live W.O.W.s Conditions of use
          and Privacy Notice
        </p>
      </div>
    </div> 
      
    `;
  }
}

{
  /* <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>First Name</h5>

          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type='text'
          />
          <h5>Last Name</h5>

          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type='text'
          />
          <h5>E-mail</h5>

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='text'
          />
          <h5>Password</h5>

          <input
            type='password'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={register} className='login-register-button'>
            Create your Live W.O.W. account
          </button>
        </form>
        <p>
          By creating an account, you agree to Live W.O.W.s Conditions of use
          and Privacy Notice
        </p>
      </div>
    </div> */
}
