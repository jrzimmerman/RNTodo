import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    }

    console.warn(JSON.stringify(this.state, null, 2))

    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: ''
    });
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange}
        />
        <TouchableOpacity>
          <Text onPress={this.handlePress}>Add Todo</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, index) => (
            <Text key={index}>{todo}</Text>
          ))}
        </View>
      </View>
    )
  }
}
