import { useEffect, useState } from "react"

const Generate = () => {
    const [data, setData] = useState<string>()


    const generate = async (data: any) => {
        const code = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`
        setData(code)
    }

    useEffect(() => {
        generate("thecurveafrica16@gmail.com")
    }, [])

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <img src={data} />
        </div>
    )
};

export default Generate;
