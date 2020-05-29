import React, {Component} from 'react';

import { Cards, GoogleMap, Title} from '../../components';
import styles from './Map.module.css';
import { fetchData } from '../../api';
import { fetchCOVIDCountries } from '../../api';

class Map extends Component {

  state = {
    data: {},
    countries: {}
  }

  async componentDidMount () {
    const fetchedData = await fetchData();
    const fetchedCountries = await fetchCOVIDCountries();

    this.setState({
      data: fetchedData,
      countries: fetchedCountries
    });
  }

  render(){
    const { data, countries } = this.state;

    return (
        <div className={styles.container}>
            <Title title="Global Cases"/>
            <GoogleMap countries={countries} />
            <h5 style={{alignSelf:'flex-end', fontFamily:'Roboto', marginRight: '50px'}}>Data from <a href="https://corona.lmao.ninja/" target="_blank">NOVELCovid/API</a> </h5>
        </div>
    );
  }
}

export default Map;
