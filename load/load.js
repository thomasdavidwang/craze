const yalies = require("yalies");
const Amplify = require("");

const api = new yalies.API(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODU2NjgsInN1YiI6InJ4NDUifQ.DWfBvTXm_sN2ynhRsB-JKoycpoH8H1WRbbzvBstqz00"
);

api
  .people({
    query: "",
  })
  .then((people) => {
    for (let person of people) {
      console.log(person.first_name);
      console.log(person.last_name);
      console.log(person.email);
      console.log(person.image);
      console.log(person.phone);
    }
  });
