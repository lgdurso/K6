import { SharedArray } from "k6/data";
import { sleep } from "k6";

const data = new SharedArray("configuration", function () {
  const f = JSON.parse(open("..\\main\\resource\\environment.json")).envs;
  return f; // f must be an array[]
});

export function getUrl() {
  return data[0].otalioBaseUrl;
}
export function getUsername() {
  return data[0].username;
}

export function getPassword() {
  return data[0].password;
}

export function getShipName() {
  return data[0].shipName;
}
