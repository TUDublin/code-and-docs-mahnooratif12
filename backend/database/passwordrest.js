import mysql from 'mysql'; 

app.post('/api/forgot-password', (req, res) => {
    const email = req.body.email;

    // Check if the email exists in your database and generate a reset token

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: 'Click this link to reset your password: http://example.com/reset-password?token=YOUR_GENERATED_TOKEN',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({ success: false, message: 'Error sending email' });
        }
        res.json({ success: true, message: 'Password reset link sent' });
    });
});


