package com.railway.TrainDetails;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.sql.Date;
import java.util.Collections;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient

public class TrainDetailsApplication implements CommandLineRunner {
	@Autowired
    private final TrainRepository trainRepository;

    public TrainDetailsApplication(TrainRepository trainRepository) {
        this.trainRepository = trainRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(TrainDetailsApplication.class, args);
        System.out.println("Done 1 !");
    }

	@Override
    public void run(String... args) throws Exception {
		
        /*if (trainRepository.findAll().isEmpty()) {
            trainRepository.save(new Train_details("1", Date.valueOf("2023-06-26"), "12056", "MUMBAI EXPRESS", "17:25", "17:30", "MUMBAI CANTT", "DELHI", 500));
            trainRepository.save(new Train_details("2", Date.valueOf("2023-06-27"), "11056", "INDIAN EXPRESS", "14:25", "14:30", "MUMBAI", "PUNE", 250));
            trainRepository.save(new Train_details("3", Date.valueOf("2023-06-29"), "10503", "SUPER EXPRESS", "09:52", "10:00", "MUMBAI CANTT", "HYDRABAD", 300));
            trainRepository.save(new Train_details("4", Date.valueOf("2023-06-28"), "12007", "new EXPRESS", "09:55","10:00", "MUMBAI CANTT", "BENGLURU", 800));
            trainRepository.save(new Train_details("5", Date.valueOf("2023-06-27"), "11056", "RAJDHANI EXPRESS", "14:25", "14:30", "MUMBAI", "PUNE", 250));
            trainRepository.save(new Train_details("6", Date.valueOf("2023-06-27"), "10058", "SHATABDI EXPRESS", "17:25", "17:35", "MUMBAI", "PUNE", 450));

        }*/

        for (Train_details train_details : trainRepository.findAll()) {
            System.out.println(train_details);
        }
    }
 

    @Bean
    public Docket swaggerConfiguration() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.railway"))
                .build()
                .apiInfo(apiDetails());
    }

    private ApiInfo apiDetails() {
        return new ApiInfo(
                "Train Details API",
                "API for Railway Reservation System",
                "1.0",
                "Free to use",
                new springfox.documentation.service.Contact("Samr", null, "sam1@gmail.com"),
                "",
                "",
                Collections.emptyList());
    }
    
    
    


}
