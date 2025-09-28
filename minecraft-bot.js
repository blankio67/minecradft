const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'server.address.com', // Replace with the Minecraft server address
  port: 25565,                // Replace with the port (default is 25565)
  username: 'your@email.com', // Your Microsoft account email
  password: 'yourpassword',   // Your Microsoft account password
  auth: 'microsoft',          // Use 'microsoft' for modern accounts
});

bot.on('login', () => {
  console.log('Bot logged in!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hello ${username}, you said: ${message}`);
});

bot.on('kicked', console.log);
bot.on('error', console.log);