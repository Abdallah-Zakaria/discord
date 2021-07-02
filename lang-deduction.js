"use strict";

const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();
const token = process.env.TOKEN;

client.on("ready", () => {
  console.log("the bot is ready");
  client.on("message", (message) => {
    const { content } = message;
    const arabic = /[\u0600-\u06FF]/;
    if (arabic.test(content)) {
      message.channel.send("🚨🛑 YOU ARE ONLY ALLOWED TO SPEAK IN ENGLISH HERE! 🛑🚨");
    }
  });
});

client.login(token);
