const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "453341584151412740"; // ايدي السررفر
var channel = "475628893945069599";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('LEGENDS IN TOP OF MY DICK YALL')
    },5);
})




client.login(process.env.BOT_TOKEN); 
