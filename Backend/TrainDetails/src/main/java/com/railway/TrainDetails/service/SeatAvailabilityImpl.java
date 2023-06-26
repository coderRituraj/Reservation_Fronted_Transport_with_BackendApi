package com.railway.TrainDetails.service;

import com.railway.TrainDetails.repositories.SeatRepository;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

public abstract class SeatAvailabilityImpl implements SeatRepository {
    @PersistenceContext
    private EntityManager entityManager;

    
    @Override
    public Object[] reduceAvailableSeats(String seat_id) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("reduce_seat_count");
        query.registerStoredProcedureParameter("seat_id", String.class, ParameterMode.IN);

        query.setParameter("seat_id", seat_id);

        query.execute();

        Object[] result = (Object[]) query.getSingleResult();

        return result;
    }

}