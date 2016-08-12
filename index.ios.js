import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Main as Root } from './src/app/Main';
import { store } from './src/app/store';

const Main = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

AppRegistry.registerComponent('RNTodo', () => Main);
