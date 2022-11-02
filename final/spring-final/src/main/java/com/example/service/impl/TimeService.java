package com.example.service.impl;

import com.example.model.Times;
import com.example.repository.ITimeRepository;
import com.example.service.ITimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeService implements ITimeService {
    @Autowired
    private ITimeRepository iTimeRepository;

    @Override
    public List<Times> findAll() {
        return iTimeRepository.findAll();
    }
}
