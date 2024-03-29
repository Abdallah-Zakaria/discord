"use strict";

const addReactions = (message, reactions) => {
  message.react(reactions[0]);
  reactions.shift();
  if (reactions.length > 0) {
    setTimeout(() => addReactions(message, reactions), 750);
  }
};
module.exports = async (client, id, text, reactions = []) => {
  const channnel = await client.channels.fetch(id);
  channnel.messages.fetch().then((messages) => {
    if (messages.size === 0) {
      channnel.send(text).then((message) => {
        addReactions(message, reactions);
      });
    } else {
      for(const message of messages){
        console.log(message)
        message[1].edit(text)
        addReactions(message[1],reactions)
      }
    }
  });
};
