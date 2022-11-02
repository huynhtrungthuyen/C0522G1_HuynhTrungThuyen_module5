package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class SaveAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer accountId;
    private String accountCreateDate;
    private String accountStartDate;
    private String accountMoney;
    private String accountPercent;
    private String accountPromotion;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customerId")
//    @JsonBackReference
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "account_time_id", referencedColumnName = "timesId")
//    @JsonBackReference
    private Times times;

    public SaveAccount() {
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getAccountCreateDate() {
        return accountCreateDate;
    }

    public void setAccountCreateDate(String accountCreateDate) {
        this.accountCreateDate = accountCreateDate;
    }

    public String getAccountStartDate() {
        return accountStartDate;
    }

    public void setAccountStartDate(String accountStartDate) {
        this.accountStartDate = accountStartDate;
    }

    public String getAccountMoney() {
        return accountMoney;
    }

    public void setAccountMoney(String accountMoney) {
        this.accountMoney = accountMoney;
    }

    public String getAccountPercent() {
        return accountPercent;
    }

    public void setAccountPercent(String accountPercent) {
        this.accountPercent = accountPercent;
    }

    public String getAccountPromotion() {
        return accountPromotion;
    }

    public void setAccountPromotion(String accountPromotion) {
        this.accountPromotion = accountPromotion;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Times getTimes() {
        return times;
    }

    public void setTimes(Times times) {
        this.times = times;
    }
}
