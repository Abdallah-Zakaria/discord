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
  command(client,'servers', message=>{
    client.guilds.cache.forEach(guild =>{
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })
  command(client,['cc','clearchannel'],message=>{
    console.log(message.member)
    // Before give the bot permission to delete messages
    if(message.member.hasPermission('ADMINISTRATOR')){
      message.channel.messages.fetch().then(result=>{
        message.channel.bulkDelete(result)
      })
    }
  })
});

client.login(token);
