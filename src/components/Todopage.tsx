import { useState } from "react";
import "./styles.css";
import AddtodoComponent from "./todocomponents/AddtodoComponent";
import TodoComponent from "./todocomponents/TodoComponent";

type ITodo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

type ITodos = {
    todos: ITodo[]; //  Todos is an array of Todo
};

const TodoPage = () => {
    const [todos, setTodos] = useState<ITodos>({ todos: [] });
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
            todos: todos.todos.filter((t: ITodo) => t.id !== id),
        });
    };
    const clearTodos = () => {
        setTodos({
            todos: [],
        });
    };
    const toggleTodos = (id: number) => {
        setTodos({
            todos: todos.todos.map((t: ITodo) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            ),
        });
    };
    return (
        <div className="Container">
            <div className="Card">
                <h2 className="title">TODO'S</h2>
                <AddtodoComponent add={addTodos} />

                <TodoComponent
                    todos={todos}
                    toggleTodos={toggleTodos}
                    deleteTodos={deleteTodos}
                    clearTodos={clearTodos}
                />
            </div>
        </div>
    );
};

export default TodoPage;
