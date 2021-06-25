const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();
const token = process.env.TOKEN;

client.on('ready',()=>{
  console.log('the client is ready')
})

client.login(token)