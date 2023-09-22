import "./home.css"

const Landing_page = () => {



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
                    <div className="hero-section-title">
                        Love Feast 2024
                    </div>
                    <h1>Ticket Purchase Portal</h1>
                    <p>Welcome <br />Please click the button below to begin your ticket <br /> purchase.</p>
                    {/* <a href="https://tix.africa/discover/cyonfeast"> */}
                    <button className="hero-section-button">Get Started</button>
                    {/* </a> */}

                </span>
                <span className="hero-section-bottom-right">
                    <img src="/heroImage.svg" alt="" />
                </span>
            </div>
        </div>
    )
};

export default Landing_page;
