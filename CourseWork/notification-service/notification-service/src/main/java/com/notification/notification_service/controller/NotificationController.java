package com.notification.notification_service.controller;

import com.notification.notification_service.controller.dto.AppointmentEmailBody;
import com.notification.notification_service.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/send-email")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping(path = "/registration", params = {"email", "patientName"})
    public ResponseEntity<?> sendRegistrationEmail(@RequestParam String email, @RequestParam String patientName) {
        notificationService.sendRegistrationEmail(email, patientName);
        return ResponseEntity.ok("Email sent Successfully");
    }

    @GetMapping(path = "/confirmation", params = {"email", "patientName"})
    public ResponseEntity<?> sendConfirmationEmail(@RequestParam String email, @RequestParam String patientName, @RequestBody AppointmentEmailBody emailBody) {
        notificationService.sendConfirmEmail(
                email, patientName,
                emailBody.getDoctorName(), emailBody.getDate(), emailBody.getTime(), emailBody.getAppointmentId());

        return ResponseEntity.ok("Email sent Successfully");
    }

    @GetMapping(path = "/cancellation", params = {"email", "patientName"})
    public ResponseEntity<?> sendCancellationEmail(@RequestParam String email, @RequestParam String patientName, @RequestBody AppointmentEmailBody emailBody) {
        notificationService.sendCancelEmail(
                email, patientName,
                emailBody.getDoctorName(), emailBody.getDate(), emailBody.getTime(), emailBody.getAppointmentId());

        return ResponseEntity.ok("Email sent Successfully");
    }
}
