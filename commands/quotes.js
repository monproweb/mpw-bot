/* eslint-disable no-shadow */
const Discord = require('discord.js');
const axios = require('axios');
const undertale = require('../data/undertale.json');
const { giphyApiKey, nasaApiKey } = require('../config.json');

module.exports = {
	name: 'quotes',
	description: '🟠 Provide motivation and determination from the web!',
	execute(message) {
		try {
			axios
				.all([
					axios
						.get('http://quotes.stormconsultancy.co.uk/random.json')
						.catch(function(error) {
							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
								message.channel.send(
									'⭐ The request was made and the server responded with a status code that falls out of the range of 2xx',
								);
							}
							else if (error.request) {
								console.log(error.request);
								message.channel.send(
									'⭐ The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
								);
							}
							else {
								console.log('Error', error.message);
								message.channel.send(
									'⭐ Something happened in setting up the request that triggered an Error',
								);
							}
							console.log(error.config);
						}),
					axios.get('https://quotes.rest/qod.json').catch(function(error) {
						if (error.response) {
							// The request was made and the server responded with a status code
							// that falls out of the range of 2xx
							console.log(error.response.data);
							console.log(error.response.status);
							console.log(error.response.headers);
							message.channel.send(
								'🌠 The request was made and the server responded with a status code that falls out of the range of 2xx',
							);
						}
						else if (error.request) {
							console.log(error.request);
							message.channel.send(
								'🌠 The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
							);
						}
						else {
							console.log('Error', error.message);
							message.channel.send(
								'🌠 Something happened in setting up the request that triggered an Error',
							);
						}
						console.log(error.config);
					}),
					axios
						.get(
							`https://api.giphy.com/v1/gifs/random?tag=cat&rating=g&api_key=${giphyApiKey}`,
						)
						.catch(function(error) {
							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
								message.channel.send(
									'🖼️ The request was made and the server responded with a status code that falls out of the range of 2xx',
								);
							}
							else if (error.request) {
								console.log(error.request);
								message.channel.send(
									'🖼️ The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
								);
							}
							else {
								console.log('Error', error.message);
								message.channel.send(
									'🖼️ Something happened in setting up the request that triggered an Error',
								);
							}
							console.log(error.config);
						}),
					axios
						.get(
							`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&hd=true`,
						)
						.catch(function(error) {
							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
								message.channel.send(
									'🛰️ The request was made and the server responded with a status code that falls out of the range of 2xx',
								);
							}
							else if (error.request) {
								console.log(error.request);
								message.channel.send(
									'🛰️ The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
								);
							}
							else {
								console.log('Error', error.message);
								message.channel.send(
									'🛰️ Something happened in setting up the request that triggered an Error',
								);
							}
							console.log(error.config);
						}),
					axios
						.get(
							'https://api.github.com/repos/monproweb/mpw-bot/stargazers',
						)
						.catch(function(error) {
							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
								message.channel.send(
									'😺 The request was made and the server responded with a status code that falls out of the range of 2xx',
								);
							}
							else if (error.request) {
								console.log(error.request);
								message.channel.send(
									'😺 The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
								);
							}
							else {
								console.log('Error', error.message);
								message.channel.send(
									'😺 Something happened in setting up the request that triggered an Error',
								);
							}
							console.log(error.config);
						}),
					axios
						.get(
							'https://api.github.com/repos/monproweb/mpw-bot',
						)
						.catch(function(error) {
							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
								message.channel.send(
									'😺 The request was made and the server responded with a status code that falls out of the range of 2xx',
								);
							}
							else if (error.request) {
								console.log(error.request);
								message.channel.send(
									'😺 The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
								);
							}
							else {
								console.log('Error', error.message);
								message.channel.send(
									'😺 Something happened in setting up the request that triggered an Error',
								);
							}
							console.log(error.config);
						}),
				])
				.then(
					axios.spread((randomquote, quoteoftheday, giphy, nasa, stargazers, mpwbot) => {

						function setThumbnail() {
							// No set yet.
							let thumbnail;
							// If media type is a video.
							if (nasa.data.media_type == 'video') {
								// MonProWeb avatar_url
								thumbnail = mpwbot.data.owner.avatar_url;
								// Send youtube video URL on discord.
								message.channel.send(nasa.data.url);
							}
							else {
								// Nasa image as expected.
								thumbnail = nasa.data.url;
							}
							// Return image.
							return thumbnail;
						}

						function random_stargazer(stargazers) {
							return stargazers[Math.floor(Math.random() * stargazers.length)];
						}
						const rstargazer = random_stargazer(stargazers.data);

						function random_undertale(undertale) {
							return undertale[Math.floor(Math.random() * undertale.length)];
						}
						const rundertale = random_undertale(undertale);

						// inside a command, event listener, etc.
						const quoteEmbed = new Discord.MessageEmbed()
							.setColor('ec6f18')
							.setTitle('⚡' + nasa.data.title + ' 🎯 🌕 🚀 ✨')
							.setURL(mpwbot.data.html_url)
							.setAuthor(
								rstargazer.login,
								rstargazer.avatar_url,
								rstargazer.html_url,
							)
							.setDescription(nasa.data.explanation)
							.setThumbnail(setThumbnail())
							.addField('⭐ Quote', '“' + randomquote.data.quote + '”' + ' —' + randomquote.data.author, true)
							.addField(
								'🌠 Quote Of The Day',
								'“' + quoteoftheday.data.contents.quotes[0].quote + '”' + ' —' + quoteoftheday.data.contents.quotes[0].author, quoteoftheday.data.contents.quotes[0].tags
								,
								true,
							)
							.addField('☄️ Undertale', '“' + rundertale.quote + '”' + ' —' + rundertale.author, true)
							.addField('😺 ' + giphy.data.data.title, mpwbot.data.stargazers_count + ' 🌟', true)
							.setImage(giphy.data.data.image_url)
							.setTimestamp(mpwbot.data.updated_at)
							.setFooter(
								mpwbot.data.description,
								mpwbot.data.owner.avatar_url,
							);
						message.channel.send(quoteEmbed);
					}),
				);
		}
		catch (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				message.channel.send(
					'🤖 The request was made and the server responded with a status code that falls out of the range of 2xx',
				);
			}
			else if (error.request) {
				console.log(error.request);
				message.channel.send(
					'🤖 The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js',
				);
			}
			else {
				console.log('Error', error.message);
				message.channel.send(
					'🤖 Something happened in setting up the request that triggered an Error',
				);
			}
			console.log(error.config);
		}
	},
};