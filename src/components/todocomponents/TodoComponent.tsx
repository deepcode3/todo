import React from "react";

const TodoComponent: React.FC<{
    todos: any;
    toggleTodos: (id: number) => void;
    deleteTodos: (id: number) => void;
    clearTodos: () => void;
}> = ({ todos, toggleTodos, deleteTodos, clearTodos }) => {
    const deleteTodo = (id: number) => {
        if (window.confirm(`Are you sure you want to delete todo?`)) {
            deleteTodos(id);
        }
    };
    const clearTodo = () => {
        if (window.confirm(`Are you sure you want clear all todo?`)) {
            clearTodos();
        }
    };
    return (
        <div className="Todocontainer">
            <h2>Todos</h2>
            {todos.todos.length ? (
                <div>
                    <ul className="todos">
                        {todos.todos.map((todo: any) => (
                            <li
                                key={todo.id}
                                style={{
                                    background:
                                        todo.id % 2 === 0
                                            ? "rgb(222, 239, 239)"
                                            : "rgb(238, 222, 239)",
                                }}
                                className="Todolist"
                            >
                                <div className="todoText">
                                    <span
                                        style={{
                                            textDecoration: todo.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                        className="title"
                                    >
                                        {todo.title}
                                    </span>
                                    <span style={{ lineHeight: "10px" }}> {todo.description}</span>
                                </div>
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodos(todo.id)}
                                />
                                <button
                                    className="deletelist"
                                    onClick={() => {
                                        deleteTodo(todo.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                        <button
                            className="clearlist"
                            onClick={() => {
                                clearTodo();
                            }}
                        >
                            Clear All
                        </button>
                    </ul>
                </div>
            ) : (
                <div className="todos">No Todo has been created</div>
            )}
        </div>
    );
};

export default TodoComponent;
