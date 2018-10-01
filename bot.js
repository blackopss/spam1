const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
    setTimeout(function() {
        member.createDM().then(function (channel) {
            return channel.send(`
**
:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:
Hello there! You've just received a lovely invite to a lovely server! 
Why don't you take your time to go ahead and join and look around?
We will gladly love to see you there!  ฅ(＾・ω・＾ฅ)
https://discord.gg/HQhddSs
:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:　♡　:hearts:
**`);
        }).catch(err => console.log(err));
    }, 120000)
});



client.login(process.env.BOT_TOKEN); 
