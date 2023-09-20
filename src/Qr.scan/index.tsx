import { useState, useEffect } from "react"

const Qr = () => {
    useState
    const [data, setData] = useState<string>()


    const generate = async (data: any) => {
        const code = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`
        setData(code)
    }

    useEffect(() => {
        generate("nwachukwuoparah@gmail.com")
    }, [])

    return (<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <img src={data} />
    </div>)
};

export default Qr;

