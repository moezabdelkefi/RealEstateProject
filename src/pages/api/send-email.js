import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, whatsapp, selectedDate, selectedTime } =
      req.body;

    // Log received data for debugging
    console.log("Received Data:", {
      firstName,
      lastName,
      email,
      whatsapp,
      selectedDate,
      selectedTime,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "moezabdelkefi17@gmail.com",
        pass: "exne sxsn krtf ljuz",
      },
    });

    try {
      await transporter.sendMail({
        from: '"Real Estate Booking"',
        to: email,
        subject: "Booking Confirmation",
        text: `
          Hello ${firstName} ${lastName},
          
          Your booking is confirmed for ${selectedDate} at ${selectedTime}.
          
          **Your Details:**
          - Name: ${firstName} ${lastName}
          - Email: ${email}
          - WhatsApp: ${whatsapp}
          
          Thank you!
        `,
        html: `
          <p>Hello <strong>${firstName} ${lastName}</strong>,</p>
          <p>Your booking is confirmed for <strong>${selectedDate}</strong> at <strong>${selectedTime}</strong>.</p>
          <p><strong>Your Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          </ul>
          <p>Thank you!</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
