package com.railway.TrainDetails;

import com.railway.TrainDetails.models.Train_details;
import com.railway.TrainDetails.repositories.TrainRepository;
import com.railway.TrainDetails.service.TrainService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class TrainDetailsApplicationTests {

    @Autowired
    private TrainService trainService;

    @MockBean
    private TrainRepository trainrepository;

    @Test
    public void getTrainTest() {
        when(trainrepository.findAll())
                .thenReturn(Stream
                        .of(new Train_details("1", Date.valueOf("2023-06-25"), "10765", "AMT EXPRESS", "9AM", "10AM", "Badnera", "Amravati", 100),
                                new Train_details("2",Date.valueOf("2023-09-26"), "12365", "NGP EXPRESS", "10AM", "11AM", "PUNE", "Nagpur", 500))
                        .collect(Collectors.toList()));
        assertEquals(2, trainService.getContact().size());
    }

    @Test
    public void saveTrainTest() {
        Train_details train = new Train_details("3",Date.valueOf("2023-07-26"), "10721", " EXPRESS", "9AM", "10AM", "HYDRABAD", "NAGPUR", 500);
        when(trainrepository.save(train)).thenReturn(train);
        assertEquals(train, trainService.addTrain(train));

    }

    @Test
    public void deleteUserTest() {
        Train_details train = new Train_details("1",Date.valueOf("2023-08-26"), "09765", "AMT EXPRESS", "9AM", "10AM", "Badnera", "Amravati", 100);
        trainService.deleteTrain(train);
        verify(trainrepository, times(1)).delete(train);
    }

}