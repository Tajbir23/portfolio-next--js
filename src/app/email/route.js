import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // updated to true for port 465
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD,
    }
})

export async function POST(request) {
    const body = await request.json();
    console.log(body);

    try {
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        const mailOptions = {
            // from: body.email,
            replyTo: body.email,
            to: process.env.USER_NAME,
            subject: body.subject,
            text: body.message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(info);

        return new Response(JSON.stringify({ info }), { status: 200 });
        
    } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
