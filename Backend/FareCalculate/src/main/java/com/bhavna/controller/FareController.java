package com.bhavna.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhavna.Service.FareService;

import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin("*")
@RestController
@RequestMapping("/fare")
public class FareController{
	@Autowired
	private FareService fareService;

	public FareController(FareService fareService) {
		super();
		this.fareService = fareService;
	}
	@GetMapping("/{vehicleType}/{distance}")
	public double calculateFare(@PathVariable String vehicleType , @PathVariable double distance) {
		//return ResponseEntity.ok(fareService.calculateFare(vehicleType, distance));
		return fareService.calculateFare(vehicleType, distance);
	}
		
	

}
