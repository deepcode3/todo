import { useNavigate } from "react-router-dom";

const Nextpage = () => {
    const navigate = useNavigate();
    return (
        <div className="section__todos">
            <button onClick={() => navigate(-1)}>Back to Home page</button>
        </div>
    );
};

export default Nextpage;
