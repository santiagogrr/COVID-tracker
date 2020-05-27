import React, {Component} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import { fetchCountries } from '../../api';

import { Line, Bar } from 'react-chartjs-2';

import styles from './CountryPicker.module.css';

class CountryPicker extends Component {

  state = {
    countries: []
  }

  async componentDidMount () {
    const fetchedData = await fetchCountries();
    this.setState({
      countries: fetchedData
    });
  }

  render(){
    const { countries } = this.state;
    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) =>this.props.handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i)=> <option key={i} value={country} >{country}</option>)}
        </NativeSelect>
      </FormControl>
    )
  }
};

export default CountryPicker;