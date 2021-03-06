import React from 'react';

import Header from '../components/admin-lte/Header.js';
import Sidebar from '../components/admin-lte/Sidebar.js';
import Footer from '../components/admin-lte/Footer.js';
import Notifications from './Notifications';


export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />

        <div className="content-wrapper">
          {this.props.children}
        </div>

        <Notifications />
        
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};
