import React from "react";
import Button from "./button";
import { ITodo, ITodos } from "../../interface";

const TodoComponent: React.FC<{
    todos: ITodos;
    toggleTodos: (id: number) => void;
    deleteTodos: (id: number) => void;
    clearTodos: () => void;
}> = ({ todos, toggleTodos, deleteTodos, clearTodos }) => {
    const deleteTodo = (id: number) => {
        deleteTodos(id);
    };
    const clearTodo = () => {
        clearTodos();
    };
    return (
        <div>
            {todos.todos.length ? (
                <ul className="todos">
                    {todos.todos.map((t: ITodo) => (
                        <li key={t.id} className="Todolist">
                            <p
                                style={{
                                    textDecoration: t.completed ? "line-through" : "none",
                                }}
                                className="headding"
                            >
                                {t.title}
                            </p>
                            <p className="description"> {t.description}</p>

                            <input
                                className="checkbox"
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => toggleTodos(t.id)}
                            />
                            <Button
                                className={"deleteButton"}
                                onClick={() => {
                                    deleteTodo(t.id);
                                }}
                            >
                                Delete
                            </Button>
                        </li>
                    ))}
                    <Button
                        className={"clearButton"}
                        onClick={() => {
                            clearTodo();
                        }}
                    >
                        Clear All
                    </Button>
                </ul>
            ) : (
                <div className="NoTodos">No Todo has been created</div>
            )}
        </div>
    );
};

export default TodoComponent;
