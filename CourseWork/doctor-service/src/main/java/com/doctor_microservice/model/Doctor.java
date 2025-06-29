package com.doctor_microservice.model;

import  jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Entity
@Data
@Table(name = "doctors")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    private int age;

    private String address;

    @Email
    @NotBlank
    @Column(unique = true)
    private String email;

    private String nic;

    @NotBlank
    private String contactNumber;

    private String role;

    @NotBlank(message = "Specialization required")
    private String specialization;

    private String availability;

    @NotBlank
    private String password;
}