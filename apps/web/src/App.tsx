import { useEffect, useState } from 'react';
import { TODO, TodoType } from './utils/types';
import './App.css';
import { addTodo, deleteTodo, getTodos, updateTodo } from './service';
import CustomToast from './Components/CustomToast';

function App() {
    const [todo, setTodo] = useState<TODO>('');
    const [todoList, setTodoList] = useState<TodoType[]>([]);
    const [editTodo, setEditTodo] = useState<number | null>(null);
    const [showToast, setShowToast] = useState<string>('');

    const handleGetTodos = async () => {
        await getTodos().then((data) => {
            setTodoList(data?.rows ? data?.rows : []);
        });
    };

    const handleAddTodo = (todo: TODO) => {
        addTodo(todo).then((res) => {
            setShowToast(res?.data?.message);
            res?.data?.message && handleGetTodos();
        });
    };

    const handleDeleteTodo = (id: number) => {
        deleteTodo(id).then((res) => {
            setShowToast(res?.data?.message);
            res?.data?.message && handleGetTodos();
        });
    };

    const handleUpdateTodo = (id: number, todo: TODO) => {
        updateTodo(id, todo).then((res) => {
            setShowToast(res?.data?.message);
            res?.data?.message && handleGetTodos();
        });
    };

    useEffect(() => {
        handleGetTodos();
    }, []);

    return (
        <>
            <div>TODO LIST</div>
            {todoList.map((todo, index) => (
                <div className="todo-list" key={`todo-${index}`}>
                    <input type="checkbox" />
                    <div onClick={({ detail }) => setEditTodo(detail === 2 ? todo.id : null)}>
                        {todo.id !== editTodo ? (
                            <p>{todo.todo}</p>
                        ) : (
                            <input
                                type="text"
                                onClick={(e) => e.stopPropagation()}
                                onBlur={({ target: { value } }) => handleUpdateTodo(todo.id, value)}
                                defaultValue={todo.todo}
                            />
                        )}
                    </div>
                    <input type="button" value="delete" onClick={() => handleDeleteTodo(todo.id)} />
                </div>
            ))}
            <input
                type="text"
                name="todoItem"
                id="todoItem"
                placeholder="Enter Todo"
                onChange={({ target: { value } }) => setTodo(value ?? '')}
            />
            <button onClick={() => handleAddTodo(todo)}>Add Todo</button>
            {showToast && <CustomToast message={showToast} />}
        </>
    );
}

export default App;
