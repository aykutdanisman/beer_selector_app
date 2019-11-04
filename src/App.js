import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BeerSearch from './components/BeerSearch/BeerSearch';

class App extends Component {
  render() {
    return (
        <Layout>
          <BeerSearch/>
        </Layout>
    );
  }
}

export default App;
