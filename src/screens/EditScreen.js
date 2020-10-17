import React, { useState, useContext } from 'react';
import TodoForm from '../components/TodoForm';
import { Context } from '../context/TodoContext';


const EditScreen = ({ navigation }) => {
    const { state, editTodo } = useContext(Context);

    const id = navigation.getParam('id');

    const todo = state.find((todo) => todo.id === id);


    return <TodoForm
        initialValues={{ title: todo.title, content: todo.content }}
        onSubmit={(title, content) => {
            editTodo(id, title, content, () => navigation.pop());

        }}
    />
};



export default EditScreen;