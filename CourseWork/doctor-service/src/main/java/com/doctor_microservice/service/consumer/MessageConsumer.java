package com.doctor_microservice.service.consumer;

import com.doctor_microservice.dto.AppointmentCheckRequest;
import com.doctor_microservice.dto.AppointmentResponse;
import com.doctor_microservice.model.DoctorRepository;
import com.doctor_microservice.service.DoctorService;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    private DoctorRepository doctorRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(MessageConsumer.class);

    @RabbitListener(queues = "${rabbitmq.doctor.queue}")
    public void msgConsumer(AppointmentCheckRequest request, Message message) {

        LOGGER.info("Received appointment check request for Doctor ID: {}", request.getDoctorId());

        boolean isExists = doctorRepository.existsById((long) request.getDoctorId());

        AppointmentResponse response = new AppointmentResponse();
        response.setDoctorId(request.getDoctorId());
        response.setPatientId(request.getPatientId());
        response.setDoctorExists(isExists);
        response.setPatientExists(false);

        String replyTo = message.getMessageProperties().getReplyTo();
        String correlationId = message.getMessageProperties().getCorrelationId();

        MessageProperties properties = new MessageProperties();
        properties.setCorrelationId(correlationId);
        properties.setContentType(MessageProperties.CONTENT_TYPE_JSON);

        Message replyMsg = new Message(serialize(response), properties);

        assert replyTo != null;
        rabbitTemplate.send("", replyTo, replyMsg);

        LOGGER.info("Doctor validation response sent. Doctor exists: {}", isExists);

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
