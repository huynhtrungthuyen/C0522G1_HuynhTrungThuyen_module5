package com.example.repository;

import com.example.model.SaveAccount;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ISaveAccountRepository extends JpaRepository<SaveAccount, Integer> {
//    @Query(value = "select * from save_account;", nativeQuery = true)
//    Page<SaveAccount> findAllSaveAccount(Pageable pageable);
}
