import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import TodoForm from '../components/TodoForm';
import { Context } from '../context/TodoContext';

const CreateScreen = ({ navigation }) => {
    const { addTodo } = useContext(Context);

    return <TodoForm onSubmit={(title, content) => {
        addTodo(title, content, () => {
            navigation.navigate('Index');
        });
    }} />
};





export default CreateScreen;
