const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const slack = require('slack');

/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = function(user, channel, text = '', command = {}, botToken = null,callback)
{
	console.log(user, channel, text, command, botToken)
	slack.groups.create({token: "xoxp-422393262816-422985680051-422991929907-06ba8cd17d0beef88428abcd0acc60db", name: "woohoo"}, callback);
	// callback(null, {
 //    text: `Hello, <@${user}>...\nYou said: ${text}`,
 //    attachments: [
 //      // You can customize your messages with attachments.
 //      // See https://api.slack.com/docs/message-attachments for more info.
 //    ]
 //  });	
};
/*
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  //slack.groups.create("xoxb-422393262816-424156236135-WYKRzaBPEek9Fz5nE2QzVa3s","woohoo",true,callback);
  callback(null, {
    text: `Hello, <@${user}>...\nYou said: ${text}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};
*/