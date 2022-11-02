package com.example.controller;

import com.example.model.Customer;
import com.example.model.SaveAccount;
import com.example.model.Times;
import com.example.service.ICustomerService;
import com.example.service.ISaveAccountService;
import com.example.service.ITimeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
public class SaveAccountController {
    @Autowired
    private ISaveAccountService iSaveAccountService;

    @Autowired
    private ITimeService iTimeService;

    @Autowired
    private ICustomerService iCustomerService;

//    @GetMapping("/saveAccounts")
//    public ResponseEntity<List<SaveAccount>> getSaveAccountList() {
//        return new ResponseEntity<>(iSaveAccountService.findAll(), HttpStatus.OK);
//    }

    @GetMapping("/saveAccount")
    public ResponseEntity<Page<SaveAccount>> getSaveAccountListPage(Pageable pageable) {
        Page<SaveAccount> saveAccountList = iSaveAccountService.findAllSaveAccount(pageable);
        if (saveAccountList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(saveAccountList, HttpStatus.OK);
    }

    @GetMapping("/saveAccount/{id}")
    public ResponseEntity<SaveAccount> getSaveAccount(@PathVariable int id) {
        SaveAccount saveAccount = iSaveAccountService.findById(id).get();
        return new ResponseEntity<>(saveAccount, HttpStatus.OK);
    }

    @GetMapping("/times")
    public ResponseEntity<List<Times>> getTimeList() {
        return new ResponseEntity<>(iTimeService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/customer")
    public ResponseEntity<List<Customer>> getCustomerList() {
        return new ResponseEntity<>(iCustomerService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/saveAccount/add")
    public ResponseEntity<SaveAccount> createSaveAccount(@RequestBody SaveAccount saveAccount) {
        iSaveAccountService.save(saveAccount);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/saveAccount/edit/{id}")
    public ResponseEntity<SaveAccount> updateSaveAccount(@PathVariable Integer id,
                                                         @RequestBody SaveAccount saveAccount) {
        SaveAccount currentSaveAccount = iSaveAccountService.findById(id).get();
        if (currentSaveAccount == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
//        currentSaveAccount.setAccountCreateDate(saveAccount.getAccountCreateDate());
//        currentSaveAccount.setAccountStartDate(saveAccount.getAccountStartDate());
//        currentSaveAccount.setAccountMoney(saveAccount.getAccountMoney());
//        currentSaveAccount.setAccountPercent(saveAccount.getAccountPercent());
//        currentSaveAccount.setAccountPromotion(saveAccount.getAccountPromotion());
//        currentSaveAccount.setCustomer(saveAccount.getCustomer());
//        currentSaveAccount.setTimes(saveAccount.getTimes());
        BeanUtils.copyProperties(saveAccount, currentSaveAccount);

        iSaveAccountService.update(currentSaveAccount);
        return new ResponseEntity<>(currentSaveAccount, HttpStatus.OK);
    }

    @DeleteMapping("/saveAccount/delete/{id}")
    public ResponseEntity<SaveAccount> deleteSaveAccount(@PathVariable Integer id) {
        Optional<SaveAccount> saveAccount = iSaveAccountService.findById(id);
        if (!saveAccount.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iSaveAccountService.remove(id);
        return new ResponseEntity<>(saveAccount.get(), HttpStatus.NO_CONTENT);
    }
}
