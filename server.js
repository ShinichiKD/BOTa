'use strict';


const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Version 1.0.9');
});


client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!server') {
      // Send "pong" to the same channel
      message.channel.send('https://elchupaworld.aternos.me/');
      
    }
  });
  client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!comandos') {
      // Send "pong" to the same channel
      message.channel.send('( !server | !mods )');
      
    }
  });

  const fs = require('fs');
  client.on('message', message => {
    
    if (message.content === '!mods') {
     
      const buffer = fs.readFileSync('./mods');

      //const buffer2 = fs.readFileSync('./AppleSkin-mc1.16.1-forge-1.0.14.jar');
       //const buffer3 = fs.readFileSync('./FallingTree-1.16.1-2.2.1.jar');
       //const buffer4 = fs.readFileSync('./forgemod_VoxelMap-1.10.7_for_1.16.1.jar');
       //const buffer5 = fs.readFileSync('./ironchest-1.16.1-11.0.1.jar');
       //const buffer6 = fs.readFileSync('./jei-1.16.1-7.0.0.6.jar');
       //const buffer7 = fs.readFileSync('./OptiForge-MC1.16.1-0.1.7.jar');
       //const buffer8 = fs.readFileSync('./torohealth-1.16.1-forge-2.jar');
  
      
      const attachment = new MessageAttachment(buffer, 'Mods');


       //const attachment2 = new MessageAttachment(buffer2, 'AppleSkin-mc1.16.1-forge-1.0.14.jar');
       //const attachment3 = new MessageAttachment(buffer3, 'FallingTree-1.16.1-2.2.1.jar');
       //const attachment4 = new MessageAttachment(buffer4, 'forgemod_VoxelMap-1.10.7_for_1.16.1.jar');
       //const attachment5 = new MessageAttachment(buffer5, 'ironchest-1.16.1-11.0.1.jar');
       //const attachment6 = new MessageAttachment(buffer6, 'jei-1.16.1-7.0.0.6.jar');
      // const attachment7= new MessageAttachment(buffer7, 'OptiForge-MC1.16.1-0.1.7.jar');
       //const attachment8 = new MessageAttachment(buffer8, 'torohealth-1.16.1-forge-2.jar');
      
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author}, MODS:`, attachment);
       //message.channel.send(attachment2);
       //message.channel.send(attachment3);
       //message.channel.send(attachment4);
       //message.channel.send(attachment5);
       //message.channel.send(attachment6);
       //message.channel.send(attachment7);
       //message.channel.send(attachment8);
    }
  });


client.login(process.env.token);