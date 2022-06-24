# Redux Guide

__Source__: 
* [official guide](https://redux.js.org/introduction/getting-started)

#### Table of contents
* [Introduction](#introduction)
    * [Installation](#installation)
    * [Core Concepts](#core-concepts)
    * [Principles](#principles)
* [Actions](#actions)
    * [Action Creator](#action-creator)
    * [Redux Thunk](#redux-thunk)
    * [Async Actions](#async-actions)
* [Reducers](#reducers)
* [Store](#store)
* [Data Flow](#data-flow)
* [React Integration](#react-integration)
    * [React Router Integration](#react-router-integration)
* [Async Flow](#async-flow)
* [Middleware](#middleware)
* [Considerations](#considerations)
* [Misc](#misc)
    * [Redux Form](#redux-form)
* [At a glance](#at-a-glance)

&nbsp;
# Introduction


## Installation


## Core Concepts


## Principles



&nbsp;
# Actions


## Action Creator


## Redux Thunk


## Async Actions



&nbsp;
# Reducers



&nbsp;
# Store



&nbsp;
# Data Flow



&nbsp;
# React Integration


## React Router Integration



&nbsp;
# Async Flow



&nbsp;
# Middleware



&nbsp;
# Considerations



&nbsp;
# Misc

## Redux Form


# Examples

``` javascript
import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { toggleTodo } from "./action";

const TodoList = ({ todos, toggleTodo }) => (
  <>
    <h3>Todo list</h3>
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />
      ))}
    </ul>
  </>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

# At a glance

``` javascript

```