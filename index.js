"use strict";
const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();
const token = process.env.TOKEN;

const command = require("./command");

client.on("ready", () => {
  console.log("the client is ready");
  command(client, ["test1", "test2"], (message) => {
    message.channel.send("Pong!");
  });
});

client.login(token);
