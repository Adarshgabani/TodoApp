import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const todoReducer = (state, actions) => {


    switch (actions.type) {
        case 'get_todos':
            return actions.payload
        case 'edit_todo':
            return state.map((todo) => {
                return todo.id === actions.payload.id ? actions.payload : todo;

            })

        case 'delete_todo':
            return state.filter((todos) => todos.id !== actions.payload);
        default:
            return state;

    }
};


const getTodos = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/todos');

        dispatch({ type: 'get_todos', payload: response.data })
    };
};

const addTodo = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/todos', { title, content })
        if (callback) {
            callback();
        }
    };
};

const deleteTodo = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/todos/${id}`)
        dispatch({ type: 'delete_todo', payload: id })
    };
};

const editTodo = (dispatch) => {

    return async (id, title, content, callback) => {
        await jsonServer.put(`/todos/${id}`, { title, content })

        dispatch({ type: 'edit_todo', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    todoReducer,
    { addTodo, deleteTodo, editTodo, getTodos },
    []

);