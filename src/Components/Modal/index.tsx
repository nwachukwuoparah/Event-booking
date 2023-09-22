import Button from "../Button";
import "./modal.css"
const Modal = ({ check, buytickets, title, type, styles }: { check: () => void, buytickets?: () => void, title: string, type?: boolean, styles?: any }) => {




    return (
        <div className="modal">
            <div className="modal-card">
                <p style={styles}>{title}</p>
                <div className="modal-button">
                    <Button
                        type="filled"
                        style={{ width: type ? "100%" : "45%" }}
                        children="Confirm"
                        handleClick={type ? check : buytickets}
                    />
                    {!type && <Button
                        type="out-line"
                        style={{
                            width: "45%",
                            backgroundColor: "rgba(240, 247, 243, 1)",
                            border: "1px solid rgba(217, 217, 217, 1)"
                        }}
                        children="Cancel"
                        handleClick={check}
                    />}
                </div>
            </div>
        </div>
    )
};

export default Modal;
