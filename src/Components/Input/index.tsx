import { inputType } from "../type.check"
import './input.css'

const Input = ({ type, inputType, placeholder, name, icon, register, errors, styles, maxLength }: inputType) => {


    switch (type) {
        case "text":
            return (
                <>
                    <div className="input-wrap" style={{ border: errors?.[name] && "1px solid red" }}>
                        {icon && <img src={icon} className="input-image" />}
                        <input style={styles} type={inputType} maxLength={maxLength} className="input-field" {...register(name)} placeholder={placeholder} />
                    </div>
                    <div style={{ lineHeight: 1.2, color: "red", fontSize: 14, marginTop: 5 }}>{errors?.[name]?.message}</div>
                </>
            )
        case "select":
            return (
                <>
                    <div className="input-wrap" >
                        <select className="input-select"  {...register(name)} style={{ border: errors?.[name] && "1px solid red" }}>
                            <option className="option" value="">Select Stack</option>
                            <option className="option" value="Front-end Trainee">Front-end Trainee</option>
                            <option className="option" value="Back-end Trainee">Back-end Trainee</option>
                        </select>
                    </div>
                    <div style={{ lineHeight: 2, color: "red", fontSize: 14 }}>{errors?.[name]?.message}</div>
                </>
            )
        default:
            return null
    }
}

export default Input