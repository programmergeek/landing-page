import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PrimaryButton, SecondaryButton } from '../Buttons'
import { Card } from '../Cards'
import styles from './ContactMe.module.css'

type Inputs = {
    email: string,
    message: string
}

export const ContactMe: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data.message)

    return (
        <section id={styles['contact-me']} className='grid bg-green-200 w-full mx-auto mt-10 py-5 relative'>
            <div id={styles.header} className='w-fit mx-auto relative'>
                <h1 className='z-20 font-roboto text-3xl font-semibold text-center lg:mb-11 mb-5 text-green-700'>Get in touch</h1>
                <div className='bg-green-500 w-[103%] h-3 absolute top-5 z-0 opacity-[30%]'></div>
            </div>
            <div id={styles.message} className='md:mr-5'>
                <img src="/images/avatar.png" className='rounded-full w-52 mx-auto z-20' alt="" />
                <div className='font-roboto mt-10'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, perspiciatis aliquid velit, reprehenderit esse placeat eius iusto consequuntur corporis culpa accusantium facere laborum tempore laboriosam iure autem doloribus dolor vitae.
                </div>
            </div>
            <div id={styles.form} className='w-full'>
                <form  onSubmit={handleSubmit(onSubmit)} className='mt-5 lg:w-11/12 lg:ml-auto'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <input placeholder='email' className='focus:outline-none w-full rounded-md border-2 p-2 font-roboto bg-background border-green-300 h-9' type="text" {...register("email", {required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                            {errors.email && <span className='text-sm text-red-600 font-semibold italic font-roboto'>Please enter a valid email address</span>}
                        </div>
                        <div>
                            <textarea placeholder='message' className='focus:outline-none w-full rounded-md border-2 p-2 font-roboto bg-background border-green-300' id="" cols={30} rows={10} {...register("message", {required: true, minLength: 15, maxLength: 300})} ></textarea>
                            {errors.message && <span className='text-sm text-red-600 font-semibold italic font-roboto'>Please leave a message between 15 and 300 characters long</span>}
                        </div>
                    </div>
                    <PrimaryButton>Send Message</PrimaryButton>
                </form>
            </div>
        </section>
    );
}