const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Create a new Eris bot instance using the bot token from environmental variable
const bot = new Eris(process.env.TOKEN);

// ID of the channel where you want to send messages
const channelId = "1129860768381288590"; // Replace with your channel ID

// Event handler for bot errors
bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

// Connect the bot to Discord
bot.connect();

// Event handler for when the bot is ready
bot.on("ready", () => {
  console.log("Bot is ready!");

  // Send a message every 3 seconds in the specified channel
  setInterval(() => {
    const channel = bot.getChannel(channelId);
    if (channel) {
      channel.createMessage("<@&1127001668899311679>");
    } else {
      console.error("Channel not found.");
    }
  }, 3000); // 3000 milliseconds = 3 seconds
});


