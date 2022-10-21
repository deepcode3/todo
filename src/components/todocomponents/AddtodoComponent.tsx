import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

const AddtodoComponent = ({ add }: { add: (text: string) => void }) => {
    const [todo, setTodo] = useState<string>("");
    const submit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!todo) {
            alert("please enter a todo");
        } else {
            add(todo);
            setTodo("");
        }
    };

    return (
        <div className="AddTodo">
            <form>
                <input
                    className="Todoform"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button className="Addbutton" onClick={submit}>
                    Add
                </button>
            </form>
            <Link className="link" to="/next">
                next page
            </Link>
        </div>
    );
};

export default AddtodoComponent;
