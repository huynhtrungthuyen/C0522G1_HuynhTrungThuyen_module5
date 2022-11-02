package com.example.service;

import com.example.model.SaveAccount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ISaveAccountService {
    List<SaveAccount> findAll();

    Optional<SaveAccount> findById(Integer id);

    SaveAccount save(SaveAccount saveAccount);

    void remove(Integer id);

    void update(SaveAccount saveAccount);

    Page<SaveAccount> findAllSaveAccount(Pageable pageable);
}
