const { getPgCourseEmailTemplate } = require("../emailtemplate/pgcourse")
const { getExitStudentEmailTemplate } = require("../emailtemplate/exitstudentemailtemp");
// const { getMembershipEmailTemplate } = require("../emailer/membership");
// const { HealthLake } = require('aws-sdk');

// const { getEmailTemplate } = require("../emailer/enquiry")
const NodeMailerDetails = require('./NodeMailerDetails');

class EmailDetails  {
    
    nodeMailerServiceObj;
    constructor() {
        this.nodeMailerServiceObj = new NodeMailerDetails();
    }

    // sendEnquiryEmail(pg_cource) {
    //     const emailContent = getEmailTemplate(enquiry.name, enquiry.email, enquiry.mobile, enquiry.message);
    //     this.sendMailer(emailContent,'Thank You for Contacting Us (www.almanacsocialwelfare.com)',enquiry.email);
    // }

    sendPgCourseEmail(user) {
        const emailContent = getPgCourseEmailTemplate(user);
        this.sendMailer(emailContent,'Kalyani university for PG COURSE',user.email);
    }

    sendExitStudentEmail(exitUser) {
        const emailContent = getExitStudentEmailTemplate(exitUser);
        this.sendMailer(emailContent,'Acknowledgement for EXIT STUDENT',exitUser.email);
    }

    // sendMembershipEmail(membership) {
    //     const emailContent = getMembershipEmailTemplate(membership);
    //     this.sendMailer(emailContent,'Acknowledgement for Membership',membership.email_id);
    // }

    sendMailer(emailContent,mailSubject,email){
        this.nodeMailerServiceObj.sendMailer(emailContent,mailSubject,email);
    }
}

module.exports = EmailDetails;