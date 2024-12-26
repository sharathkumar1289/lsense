import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;

        // Create a transporter using your default email credentials
        let transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this if you're using a different service
            auth: {
                user: process.env.EMAIL_USER, // Your email (e.g., noreply@yourcompany.com)
                pass: process.env.EMAIL_PASS, // Password for the email
            },
        });

        try {
            // Send email with the contact form details
            await transporter.sendMail({
                from: process.env.EMAIL_FROM, // Email that appears in the "From" field
                to: 'sharathkumarbalne@gmail.com', // The company's email to receive submissions
                subject: 'New Contact Form Submission', // Subject of the email
                html: `<h1>Contact Form Submission</h1>
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>`,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
