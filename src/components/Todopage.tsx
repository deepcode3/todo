import { useState } from "react";
import AddtodoComponent from "./todocomponents/AddtodoComponent";
import TodoComponent from "./todocomponents/TodoComponent";

const TodoPage = () => {
    const [todos, setTodos] = useState<any>({ todos: [] });
    const addTodos = (title: string, description: string) => {
        setTodos({
            todos: [
                ...todos.todos,
                { title, description, completed: false, id: todos.todos.length + 1 },
            ], //rest operators is used
        });
    };
    const deleteTodos = (id: number) => {
        setTodos({
            todos: todos.todos.filter((t: any) => t.id !== id),
        });
    };
    const clearTodos = () => {
        setTodos({
            todos: [],
        });
    };
    const toggleTodos = (id: number) => {
        setTodos({
            todos: todos.todos.map((todo: any) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        });
    };
    return (
        <div>
            <AddtodoComponent add={addTodos} />
            <hr />
            <TodoComponent
                todos={todos}
                toggleTodos={toggleTodos}
                deleteTodos={deleteTodos}
                clearTodos={clearTodos}
            />
        </div>
    );
};

export default TodoPage;
