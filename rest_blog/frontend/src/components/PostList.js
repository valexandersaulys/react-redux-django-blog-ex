import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';


const propTypes = {
  loading: PropTypes.boolean,
  posts: PropTypes.array,
  getPosts: PropTypes.func
};

const defaultProps = {};

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.loading) {
      this.props.getPosts();
    }
  }

  render() {
    let underneath;

    if (this.props.loading) {
      underneath = <div>Loading...</div>;
    } else if (this.props.posts) {
      underneath = (
        this.props.posts.map(post => {
          const post_link = `/${post.id}`;
          return (
            <li><Link
                  to={post_link}
                >{post.title}</Link></li>
          );
        })
      );
    }
    
    return (
      <div>
        <h1>Welcome to My Posts</h1>
        <ul>
          {underneath}
        </ul>
      </div>
    );
  }
};

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostList);
