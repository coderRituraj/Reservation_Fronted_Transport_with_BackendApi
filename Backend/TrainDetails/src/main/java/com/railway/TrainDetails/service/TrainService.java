package com.railway.TrainDetails.service;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TrainService {

    @Autowired
    private TrainRepository trainRepository;


    public Train_details addTrain(Train_details train) {
        return trainRepository.save(train);
    }

    public List<Train_details> getContact() {
        List<Train_details> train = trainRepository.findAll();
        System.out.println("Getting data from DB : " + train);
        return train;
    }

    public Optional<Train_details> getTrainbyId(String id) {
        return trainRepository.findById(id);
    }
    
    public Optional<Train_details> getTrainbyOriginAndDestinationAndDateAndCoachClass(String origin, String destination, Date date){
    	return trainRepository.findByOriginAndDestinationAndDate(origin, destination, date);
    }

    public void deleteTrain(Train_details train) {
        trainRepository.delete(train);
    }


}