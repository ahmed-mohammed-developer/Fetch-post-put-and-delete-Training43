/*
fetch(URL, {
  method: "GET"
})
.then(response => response.json())
.then(data => {
  console.log(data)
});

fetch("https://example.com/api/tweets", {
  method: "POST",
  body: JSON.stringify({
    tweet: "Your tweet hreh ..."
  })
})
.then(response => response.json())
.then(data => {
  console.log(data)
});

const up = (firstName, lastName) => {
  fetch("https://api.learnjavascript.online/demo/user.json", {
    method: "PUT",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

export const vot = 189;

export const aa = () => {
  return `Ahdghfhbh`
}

import {Helpers} from "./index.html"

export default class Helper {
  capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
}
import Helper from "./index"

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");
API.get("/notifications/new.json").then(data => {
  console.log(data);
})
API.get("/chapters/all.json").then(data => {
  console.log(data);
});

const API = new FetchWrapper(URL);
API.get(URL).then(data => {
  console.log(data)
});

class FetchWrapper{
  constructor(baseURL){
    this.baseURL = baseURL;
  }
  get(endpoint){

  }
}
*/
class FetchWrapper{
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }
  get(endpoint){
    return fetch(this.baseUrl + endpoint)
    .then(response => response.json())
  }
}