import React, {Component} from 'react';
import Home from './components/Home/Home'
import Map from './components/Map/Map'

import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import HomeIcon from '@material-ui/icons/Home'
import MapIcon from '@material-ui/icons/Room'

import styles from './App.module.css';


class App extends Component {

  render(){
    return (
      <div>
        <BrowserRouter>
          <Layout>
              <Header className={styles.header} title={<Link style={{fontWeight:'500', color: 'white', fontSize: '24px'}} to="/">Home</Link> } scroll>
                  <Navigation>
                      <Link style={{fontSize:'24px'}} to="/map">Map</Link>
                  </Navigation>
              </Header>
              <Drawer >
                  <Navigation>
                      <Link style={{fontSize:'24px'}} to="/"><HomeIcon style={{ fontSize: 30, paddingRight: 30 }}/>Home</Link>
                      <Link style={{fontSize:'24px'}} to="/map"><MapIcon style={{ fontSize: 30, paddingRight: 30 }}/>Map</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div/>
                  <Switch>
                    <Route exact path='/' component = {Home}/>
                    <Route path='/map' component = {Map}/>
                  </Switch>
              </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
