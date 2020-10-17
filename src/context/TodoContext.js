import createDataContext from './createDataContext';


const todoReducer = (state, actions) => {

    switch (actions.type) {
        case 'add_todo':
            return [...state, { title: `Todo #${state.length + 1}` }];
        default:
            return state;

    }
};


const addTodo = dispatch => {
    return () => {
        dispatch({ type: 'add_todo' });
    };
};


export const { Context, Provider } = createDataContext(
    todoReducer,
    { addTodo },
    []

);