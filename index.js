const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

//inicializacion del bot
client.on("ready", () => {
  //conect the bot with the name of the bot - user is the bot info -
  console.log(`the bot is connect as ${client.user.tag}`);
  // bot status, online choice
  client.user.setStatus("online");
});

client.on("message", (message) => {
  //reciving the message (only the content)
  console.log(message.content);
  if (message.content === "hola") {
    message.reply("buenas! soy Welio, un bot buena onda creado por pab");
  }
  //send a request to the author of the message in the chanel
  if (message.content === "Hola") {
    message.channel.send(`que la pases piola! ${message.author}`);
  }
  //if one message includes ... sen this message to the chanel
  if (message.content.includes("dead")) {
    message.channel.send("holaa! forever welios!!");
  }
  if (message.content === "Red hot chili peppers") {
    message.channel.send("https://www.instagram.com/chilipeppers/?hl=es");
    message.channel.send(
      "https://www.youtube.com/channel/UCEuOwB9vSL1oPKGNdONB4ig"
    );
  }

  if (message.content === "!dead") {
    const embed = new MessageEmbed().addField(
      "Enjoy the life",
      "you are the best!"
    );
    message.channel.send(embed);
  }
});

client.login("ODQwNDExNjAwNDEwMjQ3MTg4.YJX0Sw.I-VrB49ZqMWoCveH4vQHHm-FJCY");
