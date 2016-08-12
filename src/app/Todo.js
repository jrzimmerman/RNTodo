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

import { CREATE_TODO } from './reducers';

export class _Todo extends Component {
  static defaultProps = {
    todos: []
  }

  constructor() {
    super();

    this.state = {
      newTodo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({ newTodo: ''})
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
          {this.props.todos.map((todo, index) => (
            <View
              style={styles.todo}
              key={index}
            >
              <Text style={styles.todoText}>
                {todo}
              </Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({
      type: CREATE_TODO,
      payload: todo
    })
  }
});

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);

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
