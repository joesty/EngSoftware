// import React from "react";
import api from "../services/api";

class Enterprise {
  constructor(name, cnpj, tel, email, password) {
    this.name = name;
    this.cnpj = cnpj;
    this.tel = tel;
    this.email = email;
    this.password = password;
  }
  async createEnterprise() {
    api
      .post("/api/register_enterprise/", {
        name: this.name,
        email: this.email,
        password: this.password,
        cnpj: this.cnpj,
        phone_number: this.tel,
      })
      .then(function (response) {
        //console.log(response)
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return "false";
      });
  }
}

export default Enterprise;
