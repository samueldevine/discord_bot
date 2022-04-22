// Run dotenv
require('dotenv').config();
// import fetch from "node-fetch";

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

// function get_summoner_data(summoner_name) {
//     fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}`)
//         .then(response => {
//             return response.json();
//         })
//         .then(users => {
//             console.log(users);
//         });
// };

client.on('messageCreate', msg => {
    switch (msg.content) {
        case 'ping':
            msg.reply('pong');
            break;
        // case 'bwolf77':
        //     response = get_summoner_data('bwolf77');
        //     msg.reply(response);
        //     break;
    }
});
