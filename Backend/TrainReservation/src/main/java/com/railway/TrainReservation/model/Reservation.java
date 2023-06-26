package com.railway.TrainReservation.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//@AllArgsConstructor

@Entity
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private String sex;
	private int age;
	private String address;
	private long mobileNo;
	private String modeOfPayment;
	private String className;
	private String seatPreferences;
	private int ticketQuantity;
	private String origin;
	private String destination;
	private Date date;
	private long pnr;
	private int seatNumber;

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber() {
		this.seatNumber = (int) Math.floor(Math.random() * 72) + 1;
	}

	public Reservation() {

	}

	public Reservation(int id, String name, String sex, int age, String address, long mobileNo, String modeOfPayment,
			String className, String seatPreferences, int ticketQuantity, String origin, String destination, Date date,
			long pnr) {
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.address = address;
		this.mobileNo = mobileNo;
		this.modeOfPayment = modeOfPayment;
		this.className = className;
		this.seatPreferences = seatPreferences;
		this.ticketQuantity = ticketQuantity;
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.pnr = pnr;
	}

	public Reservation(int id, String name, String sex, int age, String address, long mobileNo, String modeOfPayment,
			String className, String seatPreferences, int ticketQuantity, String origin, String destination, Date date,
			long pnr, int seatNumber) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.address = address;
		this.mobileNo = mobileNo;
		this.modeOfPayment = modeOfPayment;
		this.className = className;
		this.seatPreferences = seatPreferences;
		this.ticketQuantity = ticketQuantity;
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.pnr = pnr;
		this.seatNumber = seatNumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getModeOfPayment() {
		return modeOfPayment;
	}

	public void setModeOfPayment(String modeOfPayment) {
		this.modeOfPayment = modeOfPayment;
	}

	public String getSeatPreferences() {
		return seatPreferences;
	}

	public void setSeatPreferences(String seatPreferences) {
		this.seatPreferences = seatPreferences;
	}

	public int getTicketQuantity() {
		return ticketQuantity;
	}

	public void setTicketQuantity(int ticketQuantity) {
		this.ticketQuantity = ticketQuantity;
	}

	public void setPnr(long pnr) {
		this.pnr = pnr;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public long getPnr() {
		return pnr;
	}

	public void setPnr() {
		this.pnr = (long) Math.floor(Math.random() * 9_000_000_00L) + 1_000_000_00L;
	}

	@Override
	public String toString() {
		return "Reservation{" + "id='" + id + '\'' + ", name='" + name + '\'' + ", sex='" + sex + '\'' + ", age=" + age
				+ ", address='" + address + '\'' + ", mobileNo=" + mobileNo + ", modeOfPayment='" + modeOfPayment + '\''
				+ ", className='" + className + '\'' + ", seatPreferences='" + seatPreferences + '\''
				+ ", ticketQuantity=" + ticketQuantity + ", origin='" + origin + '\'' + ", destination='" + destination
				+ '\'' + ", date=" + date + ", pnr=" + pnr + ", seatNumber=" + '}';
	}
}
