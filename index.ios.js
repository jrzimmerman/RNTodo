import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/Fancy';
import { Reddit } from './src/app/Reddit';

const Main = () => (<Reddit />);

AppRegistry.registerComponent('RNTodo', () => Main);
