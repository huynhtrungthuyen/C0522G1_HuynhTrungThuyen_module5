package com.example.service.impl;

import com.example.model.SaveAccount;
import com.example.repository.ISaveAccountRepository;
import com.example.service.ISaveAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SaveAccountService implements ISaveAccountService {
    @Autowired
    private ISaveAccountRepository iSaveAccountRepository;

    @Override
    public List<SaveAccount> findAll() {
        return iSaveAccountRepository.findAll();
    }

    @Override
    public Optional<SaveAccount> findById(Integer id) {
        return iSaveAccountRepository.findById(id);
    }

    @Override
    public SaveAccount save(SaveAccount saveAccount) {
        return iSaveAccountRepository.save(saveAccount);
    }

    @Override
    public void remove(Integer id) {
        iSaveAccountRepository.deleteById(id);
    }

    @Override
    public void update(SaveAccount saveAccount) {
        iSaveAccountRepository.save(saveAccount);
    }

    @Override
    public Page<SaveAccount> findAllSaveAccount(Pageable pageable) {
        return iSaveAccountRepository.findAll(pageable);
    }
}
