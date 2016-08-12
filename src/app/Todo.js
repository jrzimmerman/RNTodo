import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { TodoForm } from './TodoForm';

export class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    fetch('http://192.168.0.7:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(todos => this.setState({ todos }));
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    fetch('http://192.168.0.7:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(todo => {
      const todos = [todo, ...this.state.todos];
      this.setState({
        todos,
        newTodo: ''
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoForm
          handlePress={this.handlePress}
          handleChange={this.handleChange}
          value={this.state.newTodo}
        />
        <View style={styles.todos}>
          {this.state.todos.map((todo, index) => (
            <View
              style={styles.todo}
              key={index}
            >
              <Text style={styles.todoText}>
                {todo.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
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
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});

export default connect()(Todo);
