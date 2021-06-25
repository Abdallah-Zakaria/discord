'use strict';

require('dotenv').config();
const prefix = process.env.PREFIX;

module.exports= (client, aliases,callback)=>{
  if(typeof aliases === 'string'){
    aliases=[aliases] // to handle the string aliases.
  }
  client.on('message', message=>{
    const {content} = message;
    aliases.forEach(alias=>{
      const command = `${prefix}${alias}`;
      // console.log(content , command)
      if(content.startsWith(`${command} `) || content === command){
        console.log(`The command ${command} is running.`)
        callback(message);
      }
    })
  })
}