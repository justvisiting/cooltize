

var mailer = require("nodemailer");

function sendmail(body, callback) {
    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "mail@cooltize.com",
            pass: "@34SDF#$#%ef#4sdfds#psdvmefr"
        }
    });

    var mail = {
        from: "Auto Mailer <mail@cooltize.com>",
        to: "support@cooltize.com",
        subject: "Send Email Using Node.js",
        text: body,
        html: body
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            callback(error, null);
            console.log(error);
        }else{
            callback(null, "mail sent");
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });
}

exports.sendmail = sendmail;