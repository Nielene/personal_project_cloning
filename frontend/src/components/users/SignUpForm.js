import React, { Component } from 'react';
import '../../css/users/SighUpForm.css'
import { createUser } from '../../actions/userActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import swal from 'sweetalert';
// npm install sweetalert --save


const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
  user: {},
})

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

class SighUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    // this.props.createUser(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const addUser = {
      username: this.state.username,
      password: this.state.password,
    }

    this.props.createUser(addUser)

    let newUsername = this.state.username

    var welcome = function() {
      alert(
        `Welcome to ReReddit! \n
        You won t regrettit. \n
        And if you do... \n
        You should have read ... \n
        ... the fine print ` + newUsername
      )
    }
    welcome();

  //     Swal.fire(
  //   'Good job!',
  //   'You clicked the button!',
  //   'success'
  // )

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
      <div className='signupPageDiv'>

        <div className='formDiv' id='postFormTextForm'>

          {linkToPostFormLink()}

          <form onSubmit={this.onSubmit}>

            <div className='submitATextOrLinkHeading'>
              <h3>SignUp</h3>
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



export default connect(mapStateToProps, mapDispatchToProps)(SighUpForm);
