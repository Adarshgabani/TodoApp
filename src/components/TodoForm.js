import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/TodoContext';

const TodoForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.labelStyle}>Title:</Text>
            <TextInput style={styles.textInputStyle} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.labelStyle}>Content:</Text>
            <TextInput style={styles.textInputStyle} value={content} onChangeText={(text) => setContent(text)} />
            <Button
                title="Save"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

TodoForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        fontSize: 18,
        borderColor: 'black',
        marginBottom: 15,
        paddingVertical: 5,
        margin: 5,

    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5

    }
});

export default TodoForm; 