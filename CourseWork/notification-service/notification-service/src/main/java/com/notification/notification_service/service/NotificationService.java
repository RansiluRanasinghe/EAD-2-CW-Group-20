package com.notification.notification_service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendRegistrationEmail(String email, String patientName) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);
        msg.setSubject("Registration confirmation");
        msg.setText("Dear " + patientName + ",\n" +
                "\n" +
                "Congratulations — your registration with **SmartDoc** is complete!\n" +
                "\n" +
                "You can now log in to your SmartDoc account and start booking appointments with top healthcare professionals at your convenience.\n" +
                "\n" +
                "\uD83D\uDCCC What you can do with your SmartDoc account:\n" +
                "- Book doctor appointments quickly and easily\n" +
                "- Manage your upcoming and past appointments\n" +
                "- Receive instant notifications about your bookings and updates\n" +
                "\n" +
                "If you have any questions or need assistance, feel free to reach out to our support team at [support email/phone number].\n" +
                "\n" +
                "Thank you for joining the SmartDoc family — we’re excited to have you with us!\n" +
                "\n" +
                "Best regards,  \n" +
                "The SmartDoc Team ");

        mailSender.send(msg);
    }

    public void sendConfirmEmail(String email, String patientName, String docName, String date, String time, int appointmentId) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);
        msg.setSubject("Appointment confirmation");
        msg.setText("Dear " + patientName + ",\n" +
                "\n" +
                "We’re happy to inform you that your appointment has been successfully booked through SmartDoc.\n" +
                "\n" +
                "\uD83D\uDCCC Appointment Details:\n" +
                "- Doctor: Dr. " + docName + "\n" +
                "- Date: " + date + "\n" +
                "- Time: " + time + "\n" +
                "- Reference Number: " + appointmentId + "\n" +
                "\n" +
                "A confirmation has been recorded in our system. Please arrive 10 minutes before your scheduled time for a smooth check-in process.\n" +
                "\n" +
                "Thank you for choosing SmartDoc for your healthcare needs!\n" +
                "\n" +
                "Best regards,  \n" +
                "The SmartDoc Team  \n" +
                "[SmartDoc Contact Info / Support Email if needed]\n");

        mailSender.send(msg);
    }

    public void sendCancelEmail(String email, String patientName, String docName, String date, String time, int appointmentId) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email);
        msg.setSubject("Appointment Cancellation");
        msg.setText("Dear " + patientName + ",\n" +
                "\n" +
                "We regret to inform you that your appointment with **Dr. [Doctor Name]** scheduled for **[Appointment Date & Time]** has been cancelled.\n" +
                "\n" +
                "\uD83D\uDCCC Appointment Details:\n" +
                "- Doctor: Dr. " + docName + "\n" +
                "- Date: " + date + "\n" +
                "- Time: " + time + "\n" +
                "- Appointment ID: " + appointmentId + "\n" +
                "\n" +
                "If this cancellation was unintentional or you wish to reschedule, please visit your SmartDoc account to book a new appointment at your convenience.\n" +
                "\n" +
                "We sincerely apologize for any inconvenience caused and appreciate your understanding.\n" +
                "\n" +
                "If you have any questions, feel free to reach out to our support team at [support email/phone number].\n" +
                "\n" +
                "Thank you for using SmartDoc.\n" +
                "\n" +
                "Best regards,  \n" +
                "**The SmartDoc Team**  \n" +
                "[SmartDoc Website or Contact Info]\n");

        mailSender.send(msg);
    }
}
