import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_INPUT, INSERT, TOGGLE_CHECK, REMOVE } from '../modules/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = () => {
    // const [
    //     {input, todos},
    //     [onChange, onInsert, onToggle, onRemove]
    // ] = ;
    let id = 0;
    const { input, todos } = useSelector(
        state => ({
            input: state.todos.input,
            todos: state.todos.todos,
        }), []);
    console.log(input,todos)
    const dispatch = useDispatch()
    const onChangeInput = useCallback(input => dispatch({ type: CHANGE_INPUT, payload: input }), [dispatch]);
    const onInsert = useCallback(text => dispatch({ type: INSERT, payload: {id: ++id, text} }), [dispatch]);
    const onToggle = useCallback(id => dispatch({ type: TOGGLE_CHECK, payload: id }), [dispatch]);
    const onRemove = useCallback(id => dispatch({ type: REMOVE, payload: id }), [dispatch]);
    
    const onChange = useCallback(
        e => {
            onChangeInput(e.target.value);
        },
        [onChangeInput]
    );

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            onInsert(input);
            onChangeInput('');
        },
        [input, onChangeInput, onInsert]
    );

    return (
        <TodoList 
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodoListContainer;