import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Card } from '../Cards'

type Inputs = {
    email: string,
    message: string
}

export const ContactMe: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data.message)

    return (
        <section id='contactMe'>
            <Card className=''>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">
                        Email Address:
                        <input type="text" {...register("email", {required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                        {errors.email && <span>Please enter a valid email address</span>}
                    </label>
                    <label htmlFor="message">
                        Message:
                        <textarea id="" cols={30} rows={10} {...register("message", {required: true, minLength: 15, maxLength: 300})} ></textarea>
                        {errors.message && <span>Please leave a message between 15 and 300 characters long</span>}
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </Card>
        </section>
    );
}