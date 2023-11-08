const yalies = require("yalies");

const api = new yalies.API(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODU2NjgsInN1YiI6InJ4NDUifQ.DWfBvTXm_sN2ynhRsB-JKoycpoH8H1WRbbzvBstqz00"
);

api
  .people({
    query: "Ryan",
    filters: {
      school_code: ["YC"],
      college: ["Grace Hopper"],
      leave: [true],
    },
    page: 1,
    page_size: 10,
  })
  .then((people) => {
    for (let person of people) {
      console.log(person.netid);
    }
  });
