import { useNavigate } from "react-router-dom";
import "./home.css"
import Button from "../Components/Button";

const Landing_page = () => {

    const navigate = useNavigate()


    return (
        <div className="hero-section">
            <div className="hero-section-top">
                <img src="/logo.svg" alt="logo" />
                <span className="hero-section-top-text">
                    <p>Catholic Youth Organisation of Nigeria</p>
                    <p>St. Charles Catholic Church, Olodi</p>
                </span>
            </div>

            <div className="hero-section-bottom">
                <span className="hero-section-bottom-left">
                    <h1>Ticket Purchase Portal</h1>
                    <p>Welcome <br />Please click the button below to begin your ticket <br /> purchase.</p>
                    <Button type="out-line" children="Get Started" handleClick={() => navigate("/book/event")} />
                </span>
                <span className="hero-section-bottom-right">
                    <img src="/heroImage.svg" alt="" />
                </span>
            </div>
        </div>
    )
};

export default Landing_page;
