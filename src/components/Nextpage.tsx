import { useNavigate } from "react-router-dom";
import "../components/todocomponents/todo.css";
import Button from "./todocomponents/button";

const Nextpage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <span>Back to Home page</span>
            </Button>
        </div>
    );
};

export default Nextpage;
