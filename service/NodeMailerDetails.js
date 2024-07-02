const nodemailer = require('nodemailer');

class NodeMailerDetails {
    // attachmentFile = []
    constructor(){
        this.transporter = nodemailer.createTransport({
            // service: 'gmail',

            host:process.env.MAIL_HOST,
                port: 465,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
        });
    }

    sendMailer(body,subject,email,attachment){
// process.env.SENDER_EMAIL
        const mailObj = {
            from: `University of Kalyani (DETS)`,
            to: email,
            // cc: process.env.SENDER_EMAIL,
            subject: subject,
            html: body,
            // attachments: (!!attachment && attachment.length > 0) ? attachment : []
        };

        return new Promise((resolve, reject) => {
            this.transporter.sendMail(mailObj, (error, info) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(info);
                }
            });
        });
    }
}
module.exports = NodeMailerDetails