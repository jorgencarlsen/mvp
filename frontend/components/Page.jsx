import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
  render() {
    const { component } = this.props;

    return (
      <div>
        <Meta />
        <p>I'm the page component</p>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
