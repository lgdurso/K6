//import Login from "..//requests//Login.js";
import { sleep } from "k6";
import { credentials, Login } from "..//requests//Login.js";

import { group } from "k6";

let login = new Login();

export const options = {
  vus: 1,
  duration: "10s",
};
export function setup() {
  // 2. setup code
}

export default function () {
  let token = login.getToken();
  console.log('token',token);
}
