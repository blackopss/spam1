const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "493540109690339338"; // ايدي السررفر
var channel = "493540109690339340";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})



client.on('ready', async() => {
var server = "493540109690339338"; // ايدي السررفر
var channel = "493540109690339340";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})




client.login(process.env.BOT_TOKEN); 
