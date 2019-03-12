// @flow
import React, { Component } from 'react';
import { Typography, TextField } from '@material-ui/core';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      age: '10',
      name: 'lakshan'
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Welcome back!</Typography>
        <TextField
          id="outlined-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}
