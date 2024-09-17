const transtport = require("../config/nodemailerconfig");

const sentemail = async (user) => {
    console.log(user);
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Welcome to Our Service!',
        text: `Hi ${user.name}, Welcome to our platform! We're excited to have you on board.`,
      };


      try {
        await transtport.sendMail(mailOptions);
        console.log('Welcome email sent to ' + user.email);
      } catch (error) {
        console.error('Error sending email: ', error);
      }
}

module.exports = sentemail;