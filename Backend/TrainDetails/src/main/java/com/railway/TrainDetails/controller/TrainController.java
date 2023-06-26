package com.railway.TrainDetails.controller;

import com.railway.TrainDetails.models.SeatAvailability;
import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.SeatRepository;
import com.railway.TrainDetails.repositories.TrainRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/search")
public class TrainController {
	
	@Autowired
    private TrainRepository trainRepository;
	
	@Autowired
	private SeatRepository seatRepository;

    public TrainController(TrainRepository trainRepository) {
        this.trainRepository = trainRepository;
    }

    @PostMapping("/addTrain")
    public String saveTrain(@RequestBody Train_details id) {  //convert the body of the HTTP request to the java class object
        trainRepository.save(id);
        return "Added train with id :  " + id.getId();
    }

    @GetMapping("{id}")
    public Optional<Train_details> getTrain(@PathVariable String id) {
        return trainRepository.findById(id);
    } 
    
    @GetMapping("{from}/{to}/{date}")
    public List<Train_details> getTrain(@PathVariable String from, @PathVariable String to, @PathVariable Date date){
    	return trainRepository.findByOriginAndDestinationAndDate(from, to, date);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTrain(@PathVariable String id) {
        trainRepository.deleteById(id);
        return "Train deleted with id : " + id;
    }

    @PutMapping("/update/{id}")
    public Train_details updateTrain(@PathVariable("id") String id, @RequestBody Train_details t) {
        t.setId(id);
        trainRepository.save(t);
        return t;

    }

    @PostMapping("/reduce/{seatId}")
    public ResponseEntity<SeatAvailability> reduceSeatCount(@PathVariable("seatId") String seatId) {
        Object[] result = seatRepository.reduceAvailableSeats(seatId);

        if (result != null && result.length > 1) {
            String id = (String) result[0];
            int numberOfSeats = (int) result[1];

            SeatAvailability updatedSeat = new SeatAvailability();
            updatedSeat.setId(Integer.valueOf(id));
            updatedSeat.setNumber_Of_seats(numberOfSeats);

            return ResponseEntity.ok(updatedSeat);
        }

        return ResponseEntity.notFound().build();
    }


}
