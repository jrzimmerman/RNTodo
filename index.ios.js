import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/Fancy';

const Main = () => (<Todo />);

AppRegistry.registerComponent('RNTodo', () => Main);
