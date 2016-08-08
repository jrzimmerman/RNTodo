import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/Fancy';
import { Reddit } from './src/app/Reddit';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const Main = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

AppRegistry.registerComponent('RNTodo', () => Main);
