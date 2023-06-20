package com.bhavna.entity;

public class Fare {
	private String vehicleType;
	private double fareAmount;
	
	public Fare() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Fare(String vehicleType, double fareAmount) {
		super();
		this.vehicleType = vehicleType;
		this.fareAmount = fareAmount;
	}
	public String getVehicleType() {
		return vehicleType;
	}
	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}
	public double getFareAmount() {
		return fareAmount;
	}
	public void setFareAmount(double fareAmount) {
		this.fareAmount = fareAmount;
	}
	@Override
	public String toString() {
		return "Fare [vehicleType=" + vehicleType + ", fareAmount=" + fareAmount + "]";
	}

}
