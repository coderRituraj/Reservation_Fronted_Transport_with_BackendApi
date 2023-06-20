package com.railway.TrainReservation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;



@SpringBootApplication
@EnableEurekaClient
public class TrainReservation {
	public static void main(String[] args) {
		SpringApplication.run(TrainReservation.class, args);
		System.out.println("done");
	}

}
