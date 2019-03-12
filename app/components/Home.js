// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { OutlinedInput } from '@material-ui/core';
import SimpleSelect from './Selectot/SimpleSelect';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      age: '10'
    };
  }
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <SimpleSelect />
      </div>
    );
  }
}
