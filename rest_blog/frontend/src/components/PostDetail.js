import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSinglePost } from '../actions/posts';

const propTypes = {
  getSinglePost: PropTypes.func
};

const defaultProps = {};

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.props.getSinglePost(this.props.match.params.id);
    }
  }

  render() {
    const { title, body } = this.props;
    
    return (
      <div>
        <h1>{ title }</h1>
        <p>{ body }</p>
      </div>
    );
  }
};

PostDetail.propTypes = propTypes;
PostDetail.defaultProps = defaultProps;

const mapStateToProps = state => ({
  title: state.posts.title,
  body: state.posts.body,
  loading: state.posts.loading
});

export default connect(
  mapStateToProps,
  { getSinglePost }
)(PostDetail);
