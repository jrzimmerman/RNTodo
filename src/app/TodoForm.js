import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import connect from 'react-redux';

import { CREATE_TODO } from './reducers';

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({
      type: CREATE_TODO,
      payload: todo
    })
  }
});

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity
      style={styles.button}
    >
      <Text
        style={styles.buttonText}
        onPress={props.handlePress}
      >
        Create
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
