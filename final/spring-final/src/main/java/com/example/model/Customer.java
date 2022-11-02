package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customerId;
    private String customerName;

    @OneToMany(mappedBy = "customer")
    //    @JsonManagedReference
//    @JsonIgnore
    @JsonBackReference
    private Set<SaveAccount> saveAccounts;

    public Customer() {
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Set<SaveAccount> getSaveAccounts() {
        return saveAccounts;
    }

    public void setSaveAccounts(Set<SaveAccount> saveAccounts) {
        this.saveAccounts = saveAccounts;
    }
}
