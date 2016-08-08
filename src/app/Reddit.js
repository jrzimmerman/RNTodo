import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

const Reddit = (props) => (
  <View>
    {props.posts.map((post, i) => (
      <Text key={i}>{post.name}</Text>
    ))}
    <TouchableOpacity onPress={props.addRedditPost}>
    <Text>Add</Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = (state) => ({
  posts: state.reddit
});

const mapActionsToProps = (dispatch) => ({
  addRedditPost: (post = {name: 'new post'}) => {
    dispatch({ type: ADD_POST, payload: post });
  }
});

export default connect(mapStateToProps, mapActionsToProps)(Reddit);
