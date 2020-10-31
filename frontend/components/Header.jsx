import Link from 'next/link';
import Styled from 'styled-components';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = () => {
  Nprogress.start();
}

Router.onRouteChangeComplete = () => {
  Nprogress.done();
}
Router.onRouteChangeError = () => {
  Nprogress.done();
}

const Header = () => (
  <div>
    I am the header.
  </div>
);

export default Header