package com.bhavna.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bhavna.entity.Fare;

@Service
public class FareService {
	private Map<String, Fare> fareMap;

	public FareService() {
		fareMap = new HashMap<>();
		fareMap.put("Suv", new Fare("Suv", 25.0));
		fareMap.put("Hatchback", new Fare("Hatchback", 15.0));
		fareMap.put("Sedan", new Fare("Sedan", 20.0));
		fareMap.put("Bike", new Fare("Bike", 8.0));
		fareMap.put("Auto", new Fare("Auto", 10.0));

	}
	public double calculateFare(String vehicleType, double distance) {
		Fare fare= fareMap.get(vehicleType);
		if(fare==null) {
			throw new IllegalArgumentException("Invalid Vehicle type");
		}
		//return new Fare(vehicleType, fare.getFareAmount()*distance);
		return fare.getFareAmount()*distance;
	}

}
