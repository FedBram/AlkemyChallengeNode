import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config()

sgMail.setApiKey(process.env.MAIL_API_KEY);

const sendMail = (user) => {

    const msg = {
        to: user.email,
        from: process.env.EMAIL_FROM,
        subject: `Welcome ${user.email}`,
        text: 'Your registration was successful'
    };

    sgMail
    .send(msg)
    .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
    })
    .catch((error) => {
        console.log(error)
    })
}

export { sendMail }
