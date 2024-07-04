import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD,
    }
})
export async function POST(request){
    const body = await request.json()
    console.log(body)

    try {
        const mail = await transporter.sendMail({
            from: body.email,
            to: process.env.USER_NAME,
            subject: body.subject,
            text: body.message
        })
        Response.json(mail)
    } catch (error) {
        console.log(error.message)
    }
    
    // return Response.json({
    //     message: "Email send successful"
    // })
}