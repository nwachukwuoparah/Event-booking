import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { IFormInput } from "../Components/type.check";
import "./bool.event.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { bookEventSchema } from "../Components/schema";
import { bookEvent, payKora } from "../Components/Api/mutate";
import Modal from "../Components/Modal";
const Book_event = () => {

    const navigate = useNavigate()
    const [active, setActive] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<any>(
        {
            resolver: yupResolver(bookEventSchema)
        }
    )

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        mutate(data)
    }

    const {
        // error,
        // data,
        isLoading,
        mutate,
    } = useMutation(["book-event"], bookEvent, {
        onSuccess: async (data: any) => {
            if (data)
                setTimeout(() => {
                    navigate("/");
                }, 1000)
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message)
        }
    });

    const {
        error: paymetsError,
        data: paymetsData,
        isLoading: paymetsIsLoading,
        mutate: paymetsMutate,
    } = useMutation(["paymets"], payKora, {
        onSuccess: async (data: any) => {
            const ref = data?.data?.data?.transaction_reference
            navigate(`/confirm/otp/${ref}`)
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message)
        }
    });

    const check = () => {
        setModal(!modal)
    }

    const buytickets = () => {
        let reference = `eventkey${Math.random()}`;
        const data = {
            amount: 5000,
            currency: "GHS",
            reference: reference,
            description: "Payment for love feast",
            notification_url: "https://webhook.site/1c209942-1a66-4cdf-a7ab-78d9cc684ad2",
            redirect_url: "https://webhook.site",
            customer: {
                name: `${watch("firstName")} ${watch("lastName")}`,
                email: watch("email")
            },
            merchant_bears_cost: true,
            mobile_money: {
                number: watch("phoneNumber")
            }
        }
        paymetsMutate(data)
        check()
    }

    useEffect(() => {
        console.log(paymetsError)
        console.log(paymetsData)
        console.log(paymetsIsLoading)
    }, [paymetsIsLoading, paymetsData, paymetsError])


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
            inputType: "email",
        },
        {
            name: "phoneNumber",
            type: "text",
            placeholder: "Phone Number",
            icon: "/call.svg",
            inputType: "text",
        },
    ]


    return (
        <div>
            {modal && <Modal title="Do you wish to proceed?" check={check} buytickets={buytickets} />}
            <div className="book-event">
                <img src="/logo.svg" className="logo" onClick={() => navigate("/")} />
                <div className="book-event-contain">
                    <p>Payment Method</p>
                    <div className="book-event-input-wrap">
                        {inputData.map((i, index) => (<Input key={index} {...i} register={register} errors={errors} />))}
                        <Button
                            disabled={!active ? true : isLoading}
                            style={{
                                marginTop: 15,
                                backgroundImage: !active && `linear-gradient(to bottom, rgba(183, 183, 182, 1), rgba(183, 183, 182, 1)`,
                            }}
                            isLoading={isLoading}
                            handleClick={check}
                            type="filled"
                            children="Proceed"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Book_event;
