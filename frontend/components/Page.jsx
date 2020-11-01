import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  overlayLight: '#383B40',
  overlayDark: '#2D2F34',
  surface: '#27292d',
  base: '#1F2023',
  overFlow: '#010101',
  maxWidth: '900px',
  carbon: 'rgba(255,255,255,.6)'
}

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${theme.base};
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    color: ${theme.carbon};
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const PageWrapper = styled.div`

`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 0 0 200px;
  padding: 2rem;
  // background-color: blue;
`;

class Page extends Component {
  render() {
    const { component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Meta />
          <Header />
          <SideBar />
          <Inner>
            {this.props.children}
          </Inner>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

export default Page;
