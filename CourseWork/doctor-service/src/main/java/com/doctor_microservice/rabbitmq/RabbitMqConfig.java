package com.doctor_microservice.rabbitmq;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfig {

    @Value("${rabbitmq.doctor.queue}")
    private String doctorQueue;

    @Value("${rabbitmq.patient.queue}")
    private String patientQueue;

    @Value("${rabbitmq.reply.queue}")
    private String replyQueueName;

    @Value("${rabbitmq.exchange}")
    private String exchangeName;

    @Value("${rabbitmq.routing.doctor.key}")
    private String doctorRoutingKey;

    @Value("${rabbitmq.routing.patient.key}")
    private String patientRoutingKey;

    @Bean
    public Queue doctorQueue() {
        return new Queue(doctorQueue);
    }

    @Bean
    public Queue patientQueue() {
        return new Queue(patientQueue);
    }

    @Bean
    public Queue replyQueue() {
        return new Queue(replyQueueName);
    }

    @Bean
    public TopicExchange topicExchange() {
        return new TopicExchange(exchangeName);
    }

    @Bean
    public Binding doctorBinding() {
        return BindingBuilder.bind(doctorQueue()).to(topicExchange()).with(doctorRoutingKey);
    }

    @Bean
    public Binding patientBinding() {
        return BindingBuilder.bind(patientQueue()).to(topicExchange()).with(patientRoutingKey);
    }

    @Bean
    public MessageConverter converter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(converter());
        return rabbitTemplate;
    }
}

