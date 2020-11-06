import discord
import json

with open('./config.json') as config_file:
    data = json.load(config_file)

token = data['token']


class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self, message):
        print('Message from {0.author}: {0.content}'.format(message))


client = MyClient()
client.run(token)
