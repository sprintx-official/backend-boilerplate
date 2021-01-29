/* eslint-disable */
const winston = require("winston");
const express = require("express");
const router = express.Router();
const validateUser = require("./userValidate");

const users = [
  { id: 1, name: "Salman" },
  { id: 2, name: "Hamza" },
  { id: 3, name: "Ahmad" },
  { id: 4, name: "Qais" },
  { id: 5, name: "Umrani" },
];

router.get("/", (req, res) => {
  res.send(users);
});
//HTTP Get Requests
router.get("/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) throw new Error("Could not get the given id");
  // res.status(404).send("The user with the given Id not found.");
  res.send(user);
});

//HTTP Post Requests
router.post("/", (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.send(user);
});

// router.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });

// HTTP Put(Update) Request
router.put("/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given Id not found.");

  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  res.send(user);
});

// HTTP Delete Request
router.delete("/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("The user with the given Id not found.");

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

module.exports = router;
