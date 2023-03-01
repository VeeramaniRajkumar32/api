const nodemailer = require ('nodemailer');
const Mail = require('../model/mailModel');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// const transporter = nodemailer.createTransport ({ 
//     service: 'gmail', 
//     auth: { 
//             user: 'youre@gmail.com', 
//             pass: 'yourePassword' 
//         } 
//     });

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'terrance.rippin@ethereal.email',
        pass: 'ybxkbqHFrz7WTy4qDJ'
    }
});


  


    //   transporter.sendMail (mailOptions, function (err, info) { 
    //     if (err) 
    //       console.log (err) 
    //     else 
    //       console.log (info); 
    //  });


exports.mail = async (req, res) => {
    const { to, cc, bcc, subject, message, attachment, account } = req.body;
    console.log(req.body);
    let errors = [];
  
    if (!to || !subject || !message ) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    let mailOptions = { 
        from: 'terrance.rippin@ethereal.email',  
        to: to,  
        subject: subject, 
        // html: `<a href='https://github.com/VeeramaniRajkumar32/'>link</a>` 
        html: `<h1>${message}</h1>` 
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    if (errors.length > 0) {

      res.render('register', {
        errors,
        to,
        subject,
        message,
        account
      });
    } else {
      const newMail = new Mail({
        to,
        cc,
        bcc,
        subject,
        message,
        attachment,
        account
      });
  
      newMail
        .save()
        .then(mail => {
          req.flash(
            'success_msg',
            'mail sent'
          );
        })
        .catch(err => console.log(err));
    }
  }