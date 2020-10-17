import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/TodoContext';


const IndexScreen = () => {
    const { state, addTodo } = useContext(Context);

    return (
        <View>
            <Text>IndexScreen  </Text>
            <Button title="Add Todo" onPress={addTodo} />
            <FlatList
                data={state}
                keyExtractor={(todo) => todo.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;