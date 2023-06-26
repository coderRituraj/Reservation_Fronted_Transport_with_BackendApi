package com.railway.TrainDetails.repositories;

import com.railway.TrainDetails.models.SeatAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

public interface SeatRepository extends JpaRepository<SeatAvailability, String> {
//    @Modifying
//    @Query("UPDATE SeatAvailability r SET r.number_Of_seats = r.number_Of_seats - 1 WHERE r.id = :id")
	@Procedure(name = "reduce_seat_count")
	Object[] reduceAvailableSeats(@Param("seat_id") String seat_id);
}
