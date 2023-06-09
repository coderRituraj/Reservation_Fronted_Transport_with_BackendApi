package com.spring.jwt;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@EnableEurekaClient
@EnableWebMvc
public class SpringBootSecurityJwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSecurityJwtApplication.class, args);
		System.out.println("done with jwt");
	}
	
	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.build()
				.apiInfo(apiDetails());
	}
	private ApiInfo apiDetails() {
		return new ApiInfo(
				"Train Security API",
				"Sample API for Railway Reservation System",
				"1.0",
				"Free to use",
				new springfox.documentation
				.service
				.Contact("sam", null, "sam@gmail.com"),
				"",
				"",
				Collections.emptyList());
	}
	
	
}
