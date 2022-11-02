package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer timesId;
    private String timesName;

    @OneToMany(mappedBy = "times")
    //    @JsonManagedReference
//    @JsonIgnore
    @JsonBackReference
    private Set<SaveAccount> saveAccounts;

    public Times() {
    }

    public Integer getTimesId() {
        return timesId;
    }

    public void setTimesId(Integer timesId) {
        this.timesId = timesId;
    }

    public String getTimesName() {
        return timesName;
    }

    public void setTimesName(String timesName) {
        this.timesName = timesName;
    }

    public Set<SaveAccount> getSaveAccounts() {
        return saveAccounts;
    }

    public void setSaveAccounts(Set<SaveAccount> saveAccounts) {
        this.saveAccounts = saveAccounts;
    }
}
