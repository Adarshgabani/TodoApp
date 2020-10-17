import createDataContext from './createDataContext';


const todoReducer = (state, actions) => {

    switch (actions.type) {
        case 'edit_todo':
            return state.map((todo) => {
                return todo.id === actions.payload.id ? actions.payload : todo;

            })
        case 'add_todo':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: actions.payload.title,
                content: actions.payload.content
            }];
        case 'delete_todo':
            return state.filter((todos) => todos.id !== actions.payload);
        default:
            return state;

    }
};


const addTodo = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_todo', payload: { title, content } });
        if (callback) {
            callback();
        }
    };
};

const deleteTodo = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_todo', payload: id })
    };
};

const editTodo = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_todo', payload: { id, title, content } })
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    todoReducer,
    { addTodo, deleteTodo, editTodo },
    [{ title: "TEST TODO", content: "SOME TEST CONTENT", id: 7 }]

);