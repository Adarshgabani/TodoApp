import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/TodoContext';
import { Feather } from '@expo/vector-icons'


const IndexScreen = ({ navigation }) => {
    const { state, deleteTodo, getTodos } = useContext(Context);
    useEffect(() => {
        getTodos()

        const listener = navigation.addListener('didFocus', () => {
            getTodos()
        });

        return () => {
            listener.remove();
        }
    }, [])
    return (
        <View>

            <FlatList
                data={state}
                keyExtractor={(todo) => `${todo.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Show', { id: item.id }) }} >
                            <View style={styles.rowStyle}>
                                <Text style={styles.textStyle} >{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteTodo(item.id)} >
                                    <Feather style={styles.iconStyle} name="trash" />

                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};




IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,

    },
    textStyle: {
        fontSize: 20,

    },
    iconStyle: {
        fontSize: 24,
    }
});

export default IndexScreen;