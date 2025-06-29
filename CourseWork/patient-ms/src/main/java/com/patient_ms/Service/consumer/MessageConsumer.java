package com.patient_ms.Service.consumer;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.patient_ms.Data.PatientRepository;
import com.patient_ms.dto.AppointmentCheckRequest;
import com.patient_ms.dto.AppointmentResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageConsumer {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private PatientRepository patientRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageConsumer.class);

    @RabbitListener(queues = "${rabbitmq.patient.queue}")
    public void msgConsumer(AppointmentCheckRequest request, Message message) {

        LOGGER.info("Received appointment check request for Patient ID: {}", request.getPatientId());

        boolean isExists = patientRepository.existsById(request.getPatientId());

        AppointmentResponse response = new AppointmentResponse();
        response.setDoctorId(request.getDoctorId());
        response.setPatientId(request.getPatientId());
        response.setDoctorExists(false);
        response.setPatientExists(isExists);

        String replyTo = message.getMessageProperties().getReplyTo();
        String correlationId = message.getMessageProperties().getCorrelationId();

        MessageProperties properties = new MessageProperties();
        properties.setCorrelationId(correlationId);
        properties.setContentType(MessageProperties.CONTENT_TYPE_JSON);

        Message replyMsg = new Message(serialize(response), properties);

        assert replyTo != null;
        rabbitTemplate.send("", replyTo, replyMsg);

        LOGGER.info("Patient validation response sent. Patient exists: {}", isExists);

    }

    private byte[] serialize(AppointmentResponse response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsBytes(response);
        } catch (Exception e) {
            throw new RuntimeException("Error serializing response", e);
        }
    }
}
