import React, { Component } from 'react';
import {
  TextField,
  withStyles,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput
} from '@material-ui/core';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  textField: {
    width: '40%'
  },
  select: {
    width: '40%'
  }
});

export class AddProduct extends Component {
  state = {
    'Item Number': '',
    Vehicle: '',
    Brand: '',
    Description: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {[
          { field: 'Item Number', type: 'text' },
          { field: 'Category', type: 'select' },
          { field: 'Vehicle', type: 'text' },
          { field: 'Brand', type: 'text' },
          { field: 'Description', type: 'text' }
        ].map(component => {
          const { field } = component;
          if (component.type === 'text') {
            return (
              <div>
                <TextField
                  id={`outlined-${field}`}
                  label={field}
                  // eslint-disable-next-line react/destructuring-assignment
                  value={this.state[field]}
                  onChange={this.handleChange(field)}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            );
          }
          return (
            <FormControl variant="outlined" style={{ width: '40%' }}>
              <Select
                // eslint-disable-next-line react/destructuring-assignment
                value={this.state[field]}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    // labelWidth={this.state.labelWidth}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          );
        })}
      </div>
    );
  }
}

AddProduct.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddProduct);
