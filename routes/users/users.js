const users = require("express").Router();
const { getUser } = require("../../queries/users")

users.get("/:id", getUser);

// users.get("/", getUsers);

// users.post("/", createUser);

// users.patch("/:id", updateUser)

// users.delete("/", deleteUser)

module.exports = users;