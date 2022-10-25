import { useState, MouseEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import "./todo.css";

const AddtodoComponent = ({ add }: { add: (text: string, text2: string) => void }) => {
    const [todo, setTodo] = useState<string>("");
    const [tododescription, setTodoDescription] = useState<string>("");

    const submit = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (!todo && !tododescription) {
            alert("please enter a todo");
        } else {
            add(todo, tododescription);
            setTodo("");
            setTodoDescription("");
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
                    placeholder="title"
                />
                <input
                    className="Todoform"
                    value={tododescription}
                    onChange={(e) => {
                        setTodoDescription(e.target.value);
                    }}
                    placeholder="description"
                />
                <Button className="Addbutton" onClick={submit}>
                    Add
                </Button>
            </form>
            <Button className={"Nextlist"}>
                <Link className="link" to="/next">
                    Next
                </Link>
            </Button>
        </div>
    );
};

export default AddtodoComponent;
