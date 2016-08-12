import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Todo } from './src/app/Todo';
import { store } from './src/app/store';

const Main = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

AppRegistry.registerComponent('RNTodo', () => Main);
