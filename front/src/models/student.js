// import React from "react";
import api from "../services/api";

class Student {
  constructor(name, last_name, cpf, tel, course, email, password) {
    this.name = name;
    this.last_name = last_name;
    this.cpf = cpf;
    this.tel = tel;
    this.course = course;
    this.email = email;
    this.password = password;
  }
  async createUser() {
    api
      .post("/api/register_student/", {
        first_name: this.name,
        last_name: this.last_name,
        email: this.email,
        course: this.course,
        password: this.password,
        cpf: this.cpf,
        phone_number: this.tel,
      })
      .then(function (response) {
        console.log(response);
        return "true";
      })
      .catch(function (error) {
        console.log(error);
        return "false";
      });
  }
}

export default Student;
