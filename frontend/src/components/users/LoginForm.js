import React, { Component } from 'react';
import '../../css/users/LoginForm.css'
import { login } from '../../actions/userActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
  user: {}
})

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitLogout = this.onSubmitLogout.bind(this);

  }

  componentDidMount() {

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitLogin(e) {
    e.preventDefault();

    const loginUser = {
      username: this.state.username,
      password: this.state.password,
    }

    this.props.login(loginUser)


    const welcomeMessage = function() {
      alert(
        `You are now LoggedIn to ReReddit! \n
        Welcome, ` + loginUser.username + '!'
      )
    }
    welcomeMessage();

  }

  onSubmitLogout(e) {
    this.props.logout();
    this.props.checkAuthenticateStatus()
  }



  render() {

    const linkToPostFormLink = () => {
      return (

        <div className='theLinks'>
          <div className='textLink'>
            <h3><Link to='/signup'>Sign Up</Link></h3>
          </div>
          <div className='linkLink'>
            <h3><Link to='/login'>Log In</Link></h3>
          </div>
        </div>
      )
    }

    return (
      <div className='loginPageDiv'>

        <div className='formDiv' id='postFormTextForm'>

          {linkToPostFormLink()}

          <form onSubmit={this.onSubmitLogin}>

            <div className='submitATextOrLinkHeading'>
              <h3>Login</h3>
            </div>

            <div className='inputs title'>
              <label>Username: </label>
              <input type='text' name='username' onChange={this.onChange} value={this.state.username} />
            </div>

            <div className='inputs title'>
              <label>Password: </label>
              <input type='text' name='password' onChange={this.onChange} value={this.state.password} />
            </div>


            <div className='inputs submit'>
              <button type='submit'>Submit</button>
            </div>


          </form>
        </div>
      </div>
    )
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
