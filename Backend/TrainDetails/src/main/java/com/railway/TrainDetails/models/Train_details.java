package com.railway.TrainDetails.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

@Entity
public class Train_details {

	@javax.persistence.Id
	private String id;

	private Date date;

	private String trainNumber;

	private String trainName;

	private String arrTime;

	private String depTime;

	private String origin;

	private String destination;

	private double fare;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name = "seatDisplay", joinColumns = @javax.persistence.JoinColumn(name = "numb", referencedColumnName = "id"), inverseJoinColumns = @javax.persistence.JoinColumn(name = "Seatavailability", referencedColumnName = "id"))
	private List<SeatAvailability> seats;
	

	public List<SeatAvailability> getSeats() {
		return seats;
	}

	public void setSeats(List<SeatAvailability> seats) {
		this.seats = seats;
	}

	public Train_details() {
		super();
	}

	public Train_details(String id, Date date, String trainNumber, String trainName, String arrTime, String depTime,
			String origin, String destination, double fare) {
		super();
		this.id = id;
		this.date = date;
		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.arrTime = arrTime;
		this.depTime = depTime;
		this.origin = origin;
		this.destination = destination;
		this.fare = fare;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(String trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getArrTime() {
		return arrTime;
	}

	public void setArrTime(String arrTime) {
		this.arrTime = arrTime;
	}

	public String getDepTime() {
		return depTime;
	}

	public void setDepTime(String depTime) {
		this.depTime = depTime;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	@Override
	public String toString() {
		return "Train_details [id=" + id + ", date=" + date + ", trainNumber=" + trainNumber + ", trainName="
				+ trainName + ", arrTime=" + arrTime + ", depTime=" + depTime + ", origin=" + origin + ", destination="
				+ destination + ", fare=" + fare + "]";
	}

	/*
	 * @Override public String toString() { return
	 * String.format("Train_details[id='%s',trainName='%s',depTime='%s'," +
	 * "origin='%s',destination='%s']"); }
	 */

	/*
	 * @Override public String toString() { return
	 * String.format("Train[trainid = '%s', trainName = '%s', startStation = '%s',"
	 * + " endStation = '%s', no_of_seats = '%s', duration = '%s']", trainid,
	 * trainName, startStation, endStation, no_of_seats, duration); }
	 */

}
