import { inputType } from "../type.check"
import './input.css'

const Input = ({ type, placeholder, name, register, errors }: inputType) => {

    return (
        <>
            <div className="input-wrap" style={{ border: errors?.[name] && "1px solid red" }}>
                <input type={type} className="input-field" {...register(name)} placeholder={placeholder} />
            </div>
            <div style={{ lineHeight: 1.2, color: "red", fontSize: 14, marginTop: 5 }}>{errors?.[name]?.message}</div>
        </>
    )

}

export default Input