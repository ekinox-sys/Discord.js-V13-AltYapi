const { Client, Intents, Discord, Collection } = require('discord.js')
const fs = require('fs'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require("./config");

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);
}

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} İsmi ile aktif, !Anıl İyi Kodlamalar Diler!`);
});



client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(config.token);

//HS Development
// Yardımları İçin $erhat/18'e Sonsuz Teşekkürler <3