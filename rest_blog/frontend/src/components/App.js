import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import PostList from './PostList';
import PostDetail from './PostDetail';

const propTypes = {};

const defaultProps = {};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/:id" component={PostDetail}/>
            <Route path="/" component={PostList}/>  
          </Switch>
        </Router>
      </Provider>
    );
  }
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

