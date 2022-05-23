import React from "react";
import api from "../services/api";

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;   
    }
    async userLogin(){
        api.post("/api/login/",{ 
            email: this.email,
            password: this.password
        }).then(function (response){
            console.log(response)
            return("true")
        }).catch(function (error){
            console.log(error)
            return("false")
        });
    };
}

export default Student;