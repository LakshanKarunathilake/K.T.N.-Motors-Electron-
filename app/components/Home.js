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

const db = require('../actions/dbConnection');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

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

  render() {
    const users = db.getUsers();
    console.log('users', users);
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
          // backgroundColor: 'cyan',
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
            // display: 'flex',
            // justifyContent: 'flex-end',
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
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}
