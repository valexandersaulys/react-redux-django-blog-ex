import {
  GET_POSTS,
  POSTS_LOADED,
  POSTS_FAILED,
  GET_SINGLE_POST,
  LOADED_SINGLE_POST,
  SINGLE_POST_FAIL
} from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  failure: false,
  title: '',
  body: 'Loading Post...'
};

export default function(state=initialState, action) {
  switch(action.type) {
  case GET_SINGLE_POST:
    return {
      ...state,
      loading: true
    };
  case LOADED_SINGLE_POST:
    return {
      ...state,
      loading: false,
      title: action.payload.title,
      body: action.payload.body
    };
  case SINGLE_POST_FAIL:
    return {
      ...state,
      failure: true
    };
  case GET_POSTS:
    return {
      ...state,
      loading: true
    };
  case POSTS_LOADED:
    return {
      ...state,
      loading: false,
      posts: action.payload
    };
  case POSTS_FAILED:
    return {
      ...state,
      failure: true,
      loading: false,
      posts: []
    };
  default:
    return state;
  }
};
