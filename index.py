import discord
import json
import logging

with open('./config.json') as config_file:
    data = json.load(config_file)

token = data['token']
client = discord.Client()


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    await client.change_presence(activity=discord.Game(name='monproweb.io'))


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(token)
logging.basicConfig(level=logging.INFO)
