import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoPage from "./components/Todopage";
import Nextpage from "./components/Nextpage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<TodoPage />} />
                <Route path="/next" element={<Nextpage />} />
            </Routes>
        </div>
    );
}
export default App;
