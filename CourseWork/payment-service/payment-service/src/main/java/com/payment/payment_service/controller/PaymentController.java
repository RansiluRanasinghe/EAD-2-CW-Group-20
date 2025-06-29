package com.payment.payment_service.controller;

import com.payment.payment_service.data.Payment;
import com.payment.payment_service.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping(path = "/payments/pay")
    public ResponseEntity<?> makePayment(@RequestBody Payment payment) {
        return paymentService.makePayment(payment);
    }

    @GetMapping(path = "/payments/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable int id) {
        return paymentService.getPaymentById(id);
    }

    @PatchMapping(path = "/payments/{id}/cancel")
    public ResponseEntity<?> cancelPayment(@PathVariable int id) {
        return paymentService.cancelPayment(id);
    }
}
