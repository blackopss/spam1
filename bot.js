const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "347377586017665026"; // ايدي السررفر
var channel = "496250530323234827";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('6969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969696969  ')
    },5);
})




client.login(process.env.BOT_TOKEN); 
