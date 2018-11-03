const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Destek Olduğunuz İçin Teşekkürler ;) ** Link: https://discordbots.org/bot/506817004024627210');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek ver', 'destek ol', 'oy ver', 'oy vermek'],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Botun destek(oy) linkini gösterir.',
  usage: 'oyver'
};
