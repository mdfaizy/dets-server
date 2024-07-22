const { getPgCourseEmailTemplate } = require("../emailtemplate/pgcourse")
const { getExitStudentEmailTemplate } = require("../emailtemplate/exitstudentemailtemp");

const {sendNewStudentEmailTemplate} =require("../emailtemplate/newAdmissionemailtemailtemplate");
const {getJobTemplate} = require("../emailtemplate/jovEmailtemplate");

const otpTemplate = require("../emailtemplate/emailVerificationTemplate");
// const passwordUpdated=require("../emailtemplate/passwordUpdate");
const NodeMailerDetails = require('./NodeMailerDetails');

class EmailDetails  {
    
    nodeMailerServiceObj;
    constructor() {
        this.nodeMailerServiceObj = new NodeMailerDetails();
    }


    sendEmailVerificationCode(email, otp) {
        console.log("Recipient Email:", email,otp); 
        const emailContent = otpTemplate(otp);
        this.sendMailer(emailContent, 'Email Verification User',email);
    }
    // sendEmailResetPasswordLink(email, url) {
    //     console.log("Recipient Email:", email, url); 
    //     const emailContent = passwordUpdated(url);
    //     // const emailContent = `Your Link for password reset is ${url}. Please click this link to reset your password.`;
    //     this.sendMailer(emailContent, 'Password Reset', email);
    // }


    sendEmailResetPasswordLink(email, url) {
        console.log("Recipient Email:", email, url); 
        const emailContent = `Your Link for password reset is ${url}. Please click this link to reset your password.`;
        this.sendMailer(emailContent, 'Password Reset', email);
    }
    

    sendNewAdmissionCourseEmail(newAdmission) {
        const emailContent = sendNewStudentEmailTemplate(newAdmission);
        this.sendMailer(emailContent,'Kalyani university for New Admission Form Data',newAdmission.email);
    }

    sendPgCourseEmail(user) {
        const emailContent = getPgCourseEmailTemplate(user);
        this.sendMailer(emailContent,'Kalyani university for PG COURSE',user.email);
    }
    sendJobDetailsEmail(data) {
        const emailContent = getJobTemplate(data);
        this.sendMailer(emailContent,'Kalyani university for Job data',data.email);
    }
// 
    sendExitStudentEmail(exitUser) {
        const emailContent = getExitStudentEmailTemplate(exitUser);
        this.sendMailer(emailContent,'Acknowledgement for EXIT STUDENT',exitUser.email);
    }
    sendMailer(emailContent,mailSubject,email){
        this.nodeMailerServiceObj.sendMailer(emailContent,mailSubject,email);
    }
}

module.exports = EmailDetails;