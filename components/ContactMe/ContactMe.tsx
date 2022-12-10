import React from 'react'
import { Card } from '../Cards'

export const ContactMe: React.FC = () => {
    return (
        <section id='contactMe'>
            <Card className=''>
                <h1>Contact Me</h1>
                <input type="text" />
                <textarea name="message" id="" cols={30} rows={10} ></textarea>
                
            </Card>
        </section>
    )
}