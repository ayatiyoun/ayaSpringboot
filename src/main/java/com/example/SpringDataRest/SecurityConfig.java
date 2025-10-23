package com.example.SpringDataRest; // adapte selon ton package

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // désactive CSRF
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()); // toutes les routes accessibles
        return http.build();
    }
}
