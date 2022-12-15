import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PrimaryButton, SecondaryButton } from '../Buttons'
import styles from './ContactMe.module.css'

type Inputs = {
    name:string,
    email: string,
    message: string
}

export const ContactMe: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await fetch('/api/messages',{
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    return (
        <section id='contact'>
            <div id={styles['contact-me']} className='grid bg-green-100 w-full mx-auto mt-10 py-24 relative'>
                <div id={styles.header} className='w-fit mx-auto relative'>
                    <h1 className='z-20 font-roboto text-3xl font-semibold text-center lg:mb-11 mb-5 text-green-700'>Get in touch</h1>
                    <div className='bg-green-500 w-[103%] h-3 absolute top-5 z-0 opacity-[30%]'></div>
                </div>
                <div id={styles.message} className='md:mr-5'>
                    <img src="/images/messenger.png" className='w-52 mx-auto z-20' alt="" />
                    <div className='font-roboto mt-10'>
                        Hey, thanks for coming by. If you think think I'll be a good fit for your team or you just would like to get to know me then leave a message, meeting new people is always fun. Hope ot hear from you soon.  
                    </div>
                </div>
                <div id={styles.form} className='w-full'>
                    <form  onSubmit={handleSubmit(onSubmit)} className='mt-5 lg:w-11/12 lg:ml-auto'>
                        <div className='flex flex-col gap-3'>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <input placeholder='name' className='focus:outline-none w-full rounded-md border-2 p-2 font-roboto border-green-300 h-9' type="text" {...register("name", {required: true})} />
                                    {errors.name && <span className='text-sm text-red-600 font-roboto'>Please enter your name</span>}
                                </div>
                                <div>
                                    <input placeholder='email' className='focus:outline-none w-full rounded-md border-2 p-2 font-roboto border-green-300 h-9' type="text" {...register("email", {required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                                    {errors.email && <span className='text-sm text-red-600 font-roboto'>Please enter a valid email address</span>}
                                </div>
                            </div>
                            <div>
                                <textarea placeholder='message' className='focus:outline-none w-full rounded-md border-2 p-2 font-roboto border-green-300 resize-none' id=""  cols={30} rows={10} {...register("message", {required: true, minLength: 15, maxLength: 300})} ></textarea>
                                {errors.message && <span className='text-sm text-red-600 font-roboto'>Please leave a message between 15 and 300 characters long</span>}
                            </div>
                        </div>
                        <PrimaryButton>Send Message</PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
}