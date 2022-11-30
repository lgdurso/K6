import { getPassword, getUrl, getUsername } from "..\\utils\\Utils.js";
import http from "k6/http";
import { group } from "k6";
import { SharedArray } from "k6/data";

let credentials={"token":"","expiredToken":0};

 class Login {
  
  constructor() {
    this.url = getUrl() + "/iam/v1/sso/login";
    this.headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.body = {
      login: getUsername(),
      password: getPassword(),
    };
    this.body = JSON.stringify(this.body);
  }

  getLogin() {
    const url=this.url;
    const body = this.body;
    const headers = this.headers;

    
      let res = http.post(url, body, headers,{tags: {
        name: "Login",
      }});
      credentials.token=res.json().responsePayload.access_token;
      credentials.expiredToken=Date.now()+3600*1000*3
      return credentials.token;
   
  }

  
   getToken() {
    if (credentials.token == null ||credentials.expiredToken==0 || credentials.expiredToken < Date.now()) {
      console.log("Calculate Token");
      login.getLogin();
    } 
    return credentials.token;
  }
}

module.exports={credentials,Login}
