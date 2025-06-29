package com.payment.payment_service.service;

import com.payment.payment_service.data.Payment;
import com.payment.payment_service.data.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public ResponseEntity<?> makePayment(Payment payment){

        try {
            Payment newPayment = paymentRepository.save(payment);
            return ResponseEntity.status(200).body(newPayment);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e);
        }
    }

    public ResponseEntity<?> getPaymentById(int id) {

        if (!paymentRepository.existsById(id)) {
            return ResponseEntity.status(404).body("Payment Not found");
        }

        Optional<Payment> payment = paymentRepository.findById(id);
        return ResponseEntity.ok(payment);
    }

    public ResponseEntity<?> cancelPayment(int id){

        Optional<Payment> optPayment = paymentRepository.findById(id);

        if (optPayment.isEmpty()){
            return ResponseEntity.status(404).body("Payment not found");
        }

        Payment existingPayment = optPayment.get();

        if (!existingPayment.getStatus().equalsIgnoreCase("Pending")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Only Pending payments can be canceled");
        }

        existingPayment.setStatus("Canceled");
        paymentRepository.save(existingPayment);

        return ResponseEntity.ok("Payment is successfully canceled");
    }
}
