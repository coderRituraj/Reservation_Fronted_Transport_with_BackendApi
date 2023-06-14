package com.railway.TrainDetails.repositories;

import com.railway.TrainDetails.models.Train_details;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface TrainRepository extends JpaRepository<Train_details, String> {


   // List<Train_details> findBySort(String origin, String destination);
	
	Optional<Train_details> findByOriginAndDestinationAndDate(String origin, String destination, Date date);

}
