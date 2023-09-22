import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import "./confirm.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { Otp } from "../Components/schema";
import Button from "../Components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { confirmOtp } from "../Components/Api/mutate";
import { useEffect, useState } from "react";
import Modal from "../Components/Modal";

const Confirm = () => {
    const { ref } = useParams()
    const [active, setActive] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<any>(
        {
            resolver: yupResolver(Otp)
        }
    )

    const check = () => {
        setModal(!modal)
    }

    const {
        error: confirmError,
        data: confirmData,
        isLoading: confirmIsLoading,
        mutate: confirmMutate,
    } = useMutation(["confirm"], confirmOtp, {
        onSuccess: async (data: any) => {
            if (data) {
                check()
                console.log(data?.data?.data?.message)
            }
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message)
        }
    });

    useEffect(() => {
        console.log(confirmError)
        console.log(confirmData)
        console.log(confirmIsLoading)
    }, [confirmError, confirmData, confirmIsLoading])

    useEffect(() => {
        if (watch("token")) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [watch("token")])

    return (
        <>
            {modal && <Modal styles={{ fontSize: "20px",lineHeight:"30px" }} title={confirmData?.data?.data?.message} check={check} type={true} />}
            <div className="confirm-wrap">
                <img src="/logo.svg" className="logo" />
                <div className="confirm-contain">
                    <img src="/lock_outline.svg" className="logo" />
                    <span>
                        <p>Easy Peasy</p>
                        <p>Enter the 6-digit code sent to your phone</p>
                    </span>
                    <div className="confirm-input-wrap">
                        <Input
                            register={register}
                            errors={errors}
                            name="token"
                            type="text"
                            placeholder="OTP"
                            inputType="text"
                            styles={{ textAlign: "center", fontSize: "24px", color: "rgba(2, 48, 71, 1)", fontWeight: 500 }}
                            maxLength={6}
                        />
                        <Button
                            disabled={!active ? true : confirmIsLoading}
                            style={{
                                marginTop: 15,
                                backgroundImage: !active && `linear-gradient(to bottom, rgba(183, 183, 182, 1), rgba(183, 183, 182, 1)`,
                            }}
                            handleClick={handleSubmit((data) => {
                                console.log({ ...data, reference: ref })
                                confirmMutate({ ...data, reference: ref })
                            })}
                            isLoading={confirmIsLoading}
                            type="filled"
                            children="Proceed"
                        />
                    </div>
                </div>
            </div>
        </>

    )
};

export default Confirm;
