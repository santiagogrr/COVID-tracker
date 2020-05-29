import React, {Component} from 'react';
import styles from './Title.module.css';
import WorldIcon from '@material-ui/icons/Public'



class Title extends Component {

  render(){
		const { title } = this.props;
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>{title} <WorldIcon className={styles.icon} style={{fontSize: '100px'}}/></h1>					
        </div>
    );
  }
}

export default Title;
