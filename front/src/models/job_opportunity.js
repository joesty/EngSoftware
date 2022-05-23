import React from "react";
import api from "../services/api";

class Job_Opportunity{
    constructor(title, salary, workload, meal_ticket, health_insurance, transportation_vouchers, study_incentive, home_office_help, city_state, description, enterprise_id){
        this.tile = title;
        this.salary = salary;
        this.workload = workload; 
        this.meal_ticket = meal_ticket;
        this.health_insurance = health_insurance;
        this.transportation_vouchers = transportation_vouchers;
        this.study_incentive = study_incentive;
        this.home_office_help = home_office_help;
        this.city_state = city_state;
        this.description = description;
        this.enterprise_id = enterprise_id;
    }
    async createJob(){
        api.post("/jobs/",{ 
            tile: this.tile,
            salary: this.salary,
            workload: this.workload,
            meal_ticket: this.meal_ticket,
            health_insurance: this.health_insurance,
            transportation_vouchers: this.transportation_vouchers,
            study_incentive: this.study_incentive,
            home_office_help: this.home_office_help,
            city_state: this.city_state,
            description: this.description,
            enterprise_id: this.enterprise_id
        }).then(function (response){
            return("true")
        }).catch(function (error){
            console.log(error)
            return("false")
        });
    };
}

export default Job_Opportunity;