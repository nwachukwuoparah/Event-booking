import { useNavigate } from "react-router-dom";
import "./index.css"

const Landing_page = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontSize: 30 }}>
            <p style={{ cursor: "pointer",color:"blue"}} onClick={() => navigate("/book/event")}>Book Event</p>
        </div>
    )
};

export default Landing_page;
