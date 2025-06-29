package com.appointment_ms.service.producer;

import com.appointment_ms.data.Appointment;
import com.appointment_ms.dto.AppointmentCheckRequest;
import com.appointment_ms.dto.AppointmentResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MessageProducer {

    @Value("${rabbitmq.exchange}")
    private String exchangeName;

    @Value("${rabbitmq.routing.doctor.key}")
    private String doctorRoutingKey;

    @Value("${rabbitmq.routing.patient.key}")
    private String patientRoutingKey;

    @Value("${rabbitmq.reply.queue}")
    private String replyQueueName;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageProducer.class);

    public boolean checkDoctorExists(AppointmentCheckRequest request) {
        return sendAndReceive(request, doctorRoutingKey, true);
    }

    public boolean checkPatientExists(AppointmentCheckRequest request) {
        return sendAndReceive(request, patientRoutingKey, false);
    }

    private boolean sendAndReceive(AppointmentCheckRequest request, String routingKey, boolean isDoctor) {
        String correlationId = UUID.randomUUID().toString();

        MessageProperties props = new MessageProperties();
        props.setCorrelationId(correlationId);
        props.setReplyTo(replyQueueName);
        props.setContentType(MessageProperties.CONTENT_TYPE_JSON);

        try {
            byte[] payload = new ObjectMapper().writeValueAsBytes(request);
            Message message = new Message(payload, props);

            Message responseMessage = rabbitTemplate.sendAndReceive(exchangeName, routingKey, message);

            if (responseMessage == null) {
                throw new RuntimeException("No response received for " + (isDoctor ? "doctor" : "patient") + " check");
            }

            AppointmentResponse response = new ObjectMapper().readValue(responseMessage.getBody(), AppointmentResponse.class);
            return isDoctor ? response.isDoctorExists() : response.isPatientExists();

        } catch (Exception e) {
            LOGGER.error("Failed to send/receive message: {}", e.getMessage());
            throw new RuntimeException(e);
        }
    }

    private byte[] serialize(AppointmentCheckRequest request) {

        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsBytes(request);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private AppointmentResponse deserialize(byte[] body) {

        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(body, AppointmentResponse.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
