const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const slack = require('slack');
const { WebClient } = require('@slack/client');
const web = new WebClient("xoxb-422393262816-424156236135-WYKRzaBPEek9Fz5nE2QzVa3s")
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
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
	console.log(user, channel, text, command, botToken)
	//slack.groups.archive({token: "xoxp-422393262816-422985680051-422991929907-06ba8cd17d0beef88428abcd0acc60db", name: text}, callback);
	console.log(web.groups)
	web.groups.list()
		.then(function(result){
			let group = result.groups.find(g => g.name === text); 
			if (group) {
				return slack.groups.archive({token: "xoxp-422393262816-422985680051-422991929907-06ba8cd17d0beef88428abcd0acc60db", name: group.id});
			}
			Promise.reject('Not found');
		})
		.then(function (result) {
			return callback(null, {
				text: 'Group deleted'
			});
		})
		.catch(function(err){
			console.log(err);
			return callback(null, {
				text: 'Group not found'
			});
		});
};
