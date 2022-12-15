import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        req.body = JSON.parse(req.body)
        var success = false
        const transporter = createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls:{
                rejectUnauthorized: false
            }
        })
        transporter.verify().then(console.log).catch(console.log)
        transporter.sendMail({
            from: `"Job Message Bot" <${process.env.EMAIL}>`,
            to: process.env.MY_EMAILS,
            html: `Name:${req.body.name} <br/><br/> Email:${req.body.email} <br/><br/> ${req.body.message}`
        }).then(() => {success = true}).catch(console.error)
        if(success){
            res.status(200)
        }else{
            res.status(400).json("something went wrong")
        }
    }else{
        res.status(404).json('Invalid path')
    }
}