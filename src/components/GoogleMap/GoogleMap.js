import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { fetchCOVIDCountries } from '../../api';
import styles from './GoogleMap.module.css';
import CountUp from 'react-countup';


class GoogleMap extends Component {

  state = {
    countries: []
  }

  async componentDidMount () {
		const fetchedData = await fetchCOVIDCountries();
		
		this.setState({
      countries: fetchedData
		});
  }

  render(){
		const { countries } = this.state;

		const listOfCountries = countries.length !== 0 ? ( countries.map( (item, i) => {
			return(
				<div 
				key={i}	
				lat={item.countryInfo.lat}
				lng={item.countryInfo.long}
				style={{
					color: 'red',
					backgroundColor:"rgba(250, 250, 250, 0.5)",
					height: '40px',
					width: '45px',
					textAlign:'center',
					borderRadius: '30%'
				}}
				>
					<img height='10px' src={item.countryInfo.flag} />
					<br/>
					<CountUp 
						start={0}
						end={item.cases}
						duration={2.5}
						separator=","
					/>
				</div>
			)
		}) ): null

    return (
			<div className={styles.container}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_KEY }}
					defaultCenter={{lat: 23, lng: -102}}
					defaultZoom={5}
				>
					{listOfCountries}
				</GoogleMapReact>
			</div>
    )
  }
};

export default GoogleMap;