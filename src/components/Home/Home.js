import React, {Component} from 'react';

import { Cards, Chart, CountryPicker} from '../../components'
import styles from './Home.module.css';
import { fetchData } from '../../api';
import coronaImage from '../../images/image.png'
import {Typography} from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home'


class Home extends Component {

  state = {
    data: {},
    country: '',
  }


  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    });
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    });
    console.log(fetchedData)
  }

  render(){
    const { data, country } = this.state;
    return (
      <div>
          <div className={styles.container}>
              <img
                className={styles.image}
                alt="COVID-19"
                src={coronaImage}
              />
              <Cards data={data}/>
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <Chart data={data} country={country}/>
          </div>
          <div className={styles.container2}>
            <Typography variant="h6">Data from <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">MathDroid API</a></Typography>  
          </div>
          </div>
    );
  }
}

export default Home;
