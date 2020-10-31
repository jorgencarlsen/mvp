import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <div>I'm on every page.</div>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
