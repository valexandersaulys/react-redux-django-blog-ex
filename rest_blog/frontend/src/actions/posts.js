import axios from 'axios';

import {
  GET_POSTS,
  POSTS_LOADED,
  POSTS_FAILED,
  GET_SINGLE_POST,
  LOADED_SINGLE_POST,
  SINGLE_POST_FAIL
} from './types';

export const getPosts = () => dispatch => {
  dispatch({
    type: GET_POSTS
  });

  axios.get('/api/posts/')
    .then(res => {
      dispatch({
        type: POSTS_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err)

      dispatch({
        type: POSTS_FAILED,
        payload: err
      });
    });
};

export const getSinglePost = id => dispatch => {
  dispatch({
    type: GET_SINGLE_POST
  });

  axios.get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: LOADED_SINGLE_POST,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SINGLE_POST_FAIL
      });
    });
};
