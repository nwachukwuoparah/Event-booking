import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { IFormInput } from "../Components/type.check";
import "./bool.event.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
// import { signupSchema } from "../../components/schema";
import { useMutation } from "@tanstack/react-query";
// import { signUp } from "../../components/Api/mutate";
import { useEffect, useState } from "react";
const Book_event = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<any>(
        {
            // resolver: yupResolver(signupSchema)
        }
    )

    // const {
    //     error,
    //     data,
    //     isLoading,
    //     mutate,
    // } = useMutation(["book-event"], signUp, {
    //     onSuccess: async (data: any) => {
    //         if (data)
    //             setToste(true)
    //         setTimeout(() => {
    //             navigate("/");
    //         }, 1000)

    //     },
    //     onError: (err: any) => {
    //         setToste(true)
    //         console.log(err?.response?.data?.message)
    //     }
    // });

    const inputData = [
        {
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            inputType: "text",
            icon: "/user.svg"
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            inputType: "text",
            icon: "/user.svg"
        },
        {
            name: "email",
            type: "text",
            placeholder: "Email",
            icon: "/sms.svg",
            inputType: "password",
        },
        {
            name: "phoneNumber",
            type: "text",
            placeholder: "Phone Number",
            icon: "/call.svg",
            inputType: "text",
        },
    ]

    // const onSubmit: SubmitHandler<IFormInput> = (data) => {
    //     const { profilePicture, ...others } = data
    //     mutate({ ...others, profilePicture: profilePicture?.[0] })
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (toste === true)
    //             setToste(false)
    //     }, 3000)

    //     if (watch("profilePicture") !== null && watch("profilePicture")[0] !== undefined) {
    //         const blob = new Blob([watch("profilePicture")?.[0]], { type: "image/jpeg" });
    //         const url = URL.createObjectURL(blob);
    //         setImage(url);
    //     }
    // }, [error, watch("profilePicture")])

    useEffect(() => {
        if (
            watch("firstName")
            && watch("lastName")
            && watch("email")
            && watch("phoneNumber")) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [
        watch("firstName"),
        , watch("lastName")
        , watch("email")
        , watch("phoneNumber")
    ])

    return (
        <div className="book-event">
            <img src="/logo.svg" className="logo" />
            <div className="book-event-contain">
                <p>Sign Up</p>
                {errors?.["profilePicture"] && <span
                    style={{
                        marginTop: -20,
                        marginBottom: 20,
                        color: "red",
                        fontSize: 14,
                        textAlign: "center"
                    }}
                >{`${errors?.["profilePicture"]?.message}`}</span>}

                <div className="book-event-input-wrap">
                    {inputData.map((i, index) => (<Input key={index} {...i} register={register} errors={errors} />))}
                    <Button disabled={false} style={{ marginTop: 15,}} handleClick={handleSubmit(()=>{})} type="filled" children="Create my account" />
                    {/* <Button disabled={!active ? true : isLoading} style={{ marginTop: 15, opacity: !active ? 0.6 : (isLoading && 0.6) }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Create my account" /> */}
                </div>
                
            </div>
        </div>
    )
};

export default Book_event;
