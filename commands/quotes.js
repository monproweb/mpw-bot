/* eslint-disable no-inline-comments */
/* eslint-disable no-shadow */
const Discord = require('discord.js');
const axios = require('axios');
const undertale = require('../data/quotes.json');

exports.run = async (message) => {
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
						`https://api.giphy.com/v1/gifs/random?tag=cat&rating=g&api_key=${process.env.GIPHY_API_KEY}`,
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
						`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&hd=true`,
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
						'https://api.github.com/repos/GitCodeCareer/discord-bot/stargazers',
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
						'https://api.github.com/repos/GitCodeCareer/discord-bot',
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
				axios.spread((randomquote, quoteoftheday, giphy, nasa, stargazers, discordbot) => {

					function setThumbnail() {
						let thumbnail; // No set yet.
						if (nasa.data.media_type == 'video') { // If media type is a video.
							thumbnail = discordbot.data.owner.avatar_url; // orgs avatar_url
							message.channel.send(nasa.data.url); // Send youtube video URL on discord.
						}
						else {
							thumbnail = nasa.data.url; // Nasa image as expected.
						}
						return thumbnail; // Return image.
					}

					function random_stargazer(stargazers) {
						return stargazers[Math.floor(Math.random() * stargazers.length)];
					}
					const rstargazer = random_stargazer(stargazers.data);

					function random_undertale(undertale) {
						return undertale[Math.floor(Math.random() * undertale.length)];
					}
					const rundertale = random_undertale(undertale);

					const quoteEmbed = new Discord.MessageEmbed()
						.setColor('044ce7')
						.setTitle('⚡' + nasa.data.title + ' 🎯 🌕 🚀 ✨')
						.setURL(discordbot.data.html_url)
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
						.addField('😺 ' + giphy.data.data.title, discordbot.data.stargazers_count + ' 🌟', true)
						.setImage(giphy.data.data.image_url)
						.setTimestamp()
						.setFooter(
							discordbot.data.description,
							discordbot.data.owner.avatar_url,
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
};
