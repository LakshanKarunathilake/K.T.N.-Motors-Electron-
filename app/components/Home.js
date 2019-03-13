// @flow
import React, { Component } from 'react';
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import swal from 'sweetalert';
import { isAValidUser } from '../actions/Users/ValidateAuthentication';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  /**
   *Creates an instance of Home.
   * @param {*} props
   * @memberof Home
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      showPassword: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleLoginAction = userCredenntials => {
    isAValidUser(userCredenntials)
      .then(msg => {
        console.log('msg :', msg);
        // eslint-disable-next-line promise/always-return
        switch (msg) {
          case 'valid user':
            swal(
              'Welcome Back',
              'Please wati till loading the applicatgion',
              'success'
            );
            break;
          case 'incorrect password':
            swal('Password error', 'Please check your password again', 'info');
            break;
          case 'invalid user credentials':
            swal(
              'User Not Found',
              'Such user doenot exist in the system please retry credentials',
              'error'
            );
            break;
          default:
            console.log('default');
            break;
        }
      })
      .catch(err => {
        console.log('error in validating user');
        console.log(err);
      });
  };

  render() {
    const { name, showPassword, password } = this.state;
    return (
      <div
        style={{
          width: '40%',
          height: window.innerHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        <div style={{ width: '350px' }}>
          <Typography style={{ paddingBottom: '20px' }} variant="h5">
            Welcome back!
          </Typography>
        </div>
        <div style={{ display: 'block' }}>
          <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            style={{ width: '350px' }}
          />
        </div>
        <div>
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={this.handleChange('password')}
            style={{ width: '350px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div
          style={{
            width: '350px',
            marginTop: '20px'
          }}
        >
          <Button
            style={{
              backgroundColor: '#3F51B5',
              float: 'right',
              color: 'white'
            }}
            onClick={() => this.handleLoginAction({ name, password })}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}
