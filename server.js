'use strict';


const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => {
  console.log('Estoy listo perras');
});


client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!Server') {
      // Send "pong" to the same channel
      message.channel.send('https://elchupaworld.aternos.me/');
      
    }
  });


client.login(process.env.token);