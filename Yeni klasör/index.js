const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const app = express()
const listener = app.listen(process.env.PORT, () => {
console.log("TURBO&HEX BOT SCRIMS " + listener.address().port);
}) 

const prefix = '!'; ///pre
////
 
const owners = ['867252233786621984','893278243787005972']

//// DEV HEEEEEEX&TURBOOOOO
////نتمنا لكل كوبي بيستر رحله سعيده////

/////


///// CMD
client.on('message', msg =>{
if(msg.content === prefix +"uptime"){
  if (!owners.includes(msg.author.id)) return ;
    msg.delete();
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const up = new Discord.MessageEmbed()
      .setColor("#010101")
   //// DEV HEEEEEEX&TURBOOOOO   
      .setAuthor(`UPTIME`, msg.guild.iconURL({ dynamic: true }))
        
				
      .addField('> SECONDS', `**${seconds}**`)
      .addField('> MINUTES', `**${minutes}**`)
      .addField('> HOURS', `**${hours}**`)
      .addField('> DAYS', `**${days}**`)
 
  .setThumbnail(msg.guild.iconURL({ dynamic: true }))
        
  .setFooter(msg.author.id , msg.author.displayAvatarURL({ dynamic: true}))
  .setTimestamp()
      msg.channel.send(up)   
}
});
/////////)
//// DEV HEEEEEEX&TURBOOOOO
client.on('message', msg => {
  let moonlight = msg.content
    .split(' ')
    .slice('1')
    .join(' ');
  if (msg.author.bot) return;
  if (msg.content.startsWith(prefix + 'embed')) {
  if (!owners.includes(msg.author.id)) return ;
    msg.delete();
    let moonlight1 = new Discord.MessageEmbed()
      .setColor('RANDOM') 
      .setAuthor(msg.guild , msg.guild.iconURL({ dynamic: true }))
 //// DEV HEEEEEEX&TURBOOOOO     
      .setTimestamp()
      
.setThumbnail(msg.guild.iconURL({ dynamic: true }))
//// DEV HEEEEEEX&TURBOOOOO                
     .setFooter(msg.author.id, msg.author.displayAvatarURL({ dynamic: true}))
//// DEV HEEEEEEX&TURBOOOOO
   .setDescription(`**${moonlight}**`);
    msg.channel.send(moonlight1);
  }
});

// SEND MESSAGE USER
//// DEV HEEEEEEX&TURBOOOOO
client.on('message', message => {
  let args = message.content.split(' ');
  if (message.content.startsWith(prefix + 'send')) { 
	  if (!owners.includes(message.author.id)) return ;
			message.delete()
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]);
    if (!args[1]) return message.channel.send('Mention user / 🆔');
    if (!member) return message.channel.send('Unknown user'); 

    let msg = args.slice(2).join(' ');
		
    if (!msg) return message.channel.send('Please type the massage'); 
//// DEV HEEEEEEX&TURBOOOOO
    member.send(`${member},${msg}`).catch(e => {
      message.react('✅'); 

      return message.channel.send('Private' + member.user.username + 'Locked');
    }); 
//// DEV HEEEEEEX&TURBOOOOO
    message.channel.send(
      'Message Received ✅ : ' + member.user.tag
    );
  }
}); 
//////
client.on('message', message => {
	if (message.content.startsWith(prefix + 'say')) {
				  if (!owners.includes(message.author.id)) return ;
			message.delete()
		let channel = message.mentions.channels.first();
//// DEV HEEEEEEX&TURBOOOOO
		let args = message.content
			.split(' ')
			.slice(2)
			.join(' ');
		if (!channel) return message.channel.send('Mention channel');
		if (!args) return message.channel.send('Please type the massage');
		channel.send(args);
	}
});

////////
///////
client.on("message", msg => {
  if(msg.content.startsWith(prefix + "ping"))
  return msg.reply(`**🏓 Pong ${client.ws.ping}ms**`)
}) 
//////
client.on('message', async (message) => {
if (message.content.toLowerCase().startsWith(prefix+ "se")) {
var args = message.content.split(":")
var urlend;args[0].includes("a")? urlend ="gif":urlend="png"
const exampleEmbed = new Discord.MessageEmbed()
 //// DEV HEEEEEEX&TURBOOOOO  
      .setColor('#010101') .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setTitle('Emoji Link')
    .setURL(`https://cdn.discordapp.com/emojis/${args[2].replace(">","")}.${urlend}`)
    .setImage(`https://cdn.discordapp.com/emojis/${args[2].replace(">","")}.${urlend}`)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL());

message.channel.send(exampleEmbed)
}
})


//// DEV HEEEEEEX&TURBOOOOO//// DEV HEEEEEEX&TURBOOOOO//// DEV HEEEEEEX&TURBOOOOO
  
////// LIST
    
  client.on("message", message =>{
//// DEV HEEEEEEX&TURBOOOOO
	  var cmd = message.content.split(' ')[0]
  
  if(cmd == prefix + "List" || cmd == prefix + "list" || cmd == "LS" || cmd == "ls") {
 //// DEV HEEEEEEX&TURBOOOOO   
    let args = message.content.split(" ").slice(1)
if(
    !args || 
    args.length > 25 || !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "🆔 الرول "))
if(!message.member.roles.cache.has('🆔 الرول')) return;
  //// DEV HEEEEEEX&TURBOOOOO
    message.channel.send(
     ` **__LIST__**

يـرجـي الالـتـزام بـمـكـان الاسـكواد المـحـدد في الـروم** 
**عدم الحضور بدون عذر سوف يعرضك  للحظر من****المشاركة في السكريمات القادمة


𝗙𝗔𝗜𝗟𝗨𝗥𝗘 𝗧𝗢 𝗔𝗧𝗧𝗘𝗡𝗗 𝗪𝗜𝗧𝗛𝗢𝗨𝗧 𝗔𝗡 𝗘𝗫𝗖𝗨𝗦𝗘 𝗪𝗜𝗟𝗟 𝗕𝗔𝗡 𝗬𝗢𝗨 𝗙𝗥𝗢𝗠 𝗣𝗥𝗔𝗧𝗨𝗖𝗜𝗣𝗔𝗧𝗜𝗡𝗚 𝗜𝗡 𝗧𝗛𝗘 𝗡𝗘𝗫𝗧 𝗦𝗖𝗥𝗜𝗠𝗦.
**__𝖳𝖤𝖠𝖬 𝖲𝖫𝖮𝖳__**

      
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟭: ${args[0] ? args[0] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟮: ${args[1] ? args[1] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟯: ${args[2] ? args[2] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟰: ${args[3] ? args[3] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟱: ${args[4] ? args[4] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟲: ${args[5] ?args[5] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟳: ${args[6] ? args[6] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟴: ${args[7] ? args[7] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟬𝟵: ${args[8] ? args[8] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟬: ${args[9] ? args[9] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟭: ${args[10] ? args[10] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟮: ${args[11] ? args[11] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟯: ${args[12] ? args[12] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟰: ${args[13] ? args[13] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟱: ${args[14] ? args[14] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟲: ${args[15] ? args[15] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟳: ${args[16] ? args[16] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟴: ${args[17] ? args[17] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟭𝟵: ${args[18] ? args[18] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟬: ${args[19] ? args[19] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟭: ${args[20] ? args[20] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟮: ${args[21] ? args[21] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟯: ${args[22] ? args[22] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟰: ${args[23] ? args[23] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗧𝗘𝗔𝗠 𝟮𝟱: ${args[24] ? args[24] : "𝗘𝗠𝗣𝗧𝗬"}

> || @here ||`
      
      )
    
  }
})
/////ID PASS
client.on("message", message =>{
//// DEV HEEEEEEX&TURBOOOOO
	  var cmd = message.content.split(' ')[0]
  
  if(cmd == prefix + "id" || cmd == prefix + "Id" || cmd == "id" || cmd == "id") {
    
    let args = message.content.split(" ").slice(1)
if(
    !args || 
    args.length > 4 || !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "🆔 الرول "))
if(!message.member.roles.cache.has('🆔 الرول')) return;
//// DEV HEEEEEEX&TURBOOOOO  
    message.channel.send(
     ` 
**__ID PASS__**
      
> ➢ 𝗠𝗔𝗣: ${args[0] ? args[0] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗜𝗗: ${args[1] ? args[1] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗣𝗔𝗦𝗦: ${args[2] ? args[2] : "𝗘𝗠𝗣𝗧𝗬"}
> ➢ 𝗦𝗧𝗔𝗥𝗧: ${args[3] ? args[3] : "𝗘𝗠𝗣𝗧𝗬"}



> || @here ||`
      
      )
    
  }
})

///////// SCRIM RREG

//// DEV HEEEEEEX&TURBOOOOO//// DEV HEEEEEEX&TURBOOOOO
client.on("message", msg =>{
//// DEV HEEEEEEX&TURBOOOOO
var cmd = msg.content.split(' ')[0]
  
  if(cmd == prefix + "التسجيل" || cmd == prefix + "registration" || cmd == "reg" || cmd == "تسجيل") {
//// DEV HEEEEEEX&TURBOOOOO

if(!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.has((r) => r.name === "اسم الرول"))
if(!msg.member.roles.cache.has('ايدي الرول')) return;
    msg.channel.send(new Discord.MessageEmbed() 
//// DEV HEEEEEEX&TURBOOOOO
.setTitle("__𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡__")
.setColor("RANDOM")
.setDescription(
`> PLEASE REGISTER YOUR TEAM THE FOLLOWING FORMAT:
> T: TEAM | <@${msg.author.id}>
> TL:  ${msg.guild} 
`)

. setImage("خط"));
msg.delete();
}
}); 

// OPEN SCRIM

     client.on("message", msg =>{
//// DEV HEEEEEEX&TURBOOOOO
	  var cmd = msg.content.split(' ')[0]
  
  if(cmd == prefix + "Open" || cmd == prefix + "open" || cmd ==  "O" || cmd == "o") {
//// DEV HEEEEEEX&TURBOOOOO

if(!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.some((r) => r.name === "اسم الرتبة"))
if(!msg.member.roles.cache.has('ايدي الرتبة'));
//// DEV HEEEEEEX&TURBOOOOO
    msg.channel.send(`>  ** REGISTERATION IS NOW OPENED **
  
 
> **تم فتح التسجيل**
@everyone `)
    
msg.delete();
  }
}); 

// SCRIM

     client.on("message", msg =>{
//// DEV HEEEEEEX&TURBOOOOO
	  var cmd = msg.content.split(' ')[0]
  
  if(cmd == prefix + "Close" || cmd == prefix + "close" || cmd ==  "C" || cmd == "c") {
//// DEV HEEEEEEX&TURBOOOOO

if(!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.some((r) => r.name === "اسم الرول"))
if(!msg.member.roles.cache.has('ايدي الرتبة'));

    msg.channel.send(`> ** REGISTERATION CLOSED LIST WILL BE READY IN FEW MINUTES ** 
  
 
> **التسجيل قفل والليست هتنزل خلال دقائق**  @everyone `)
    
msg.delete();
  }
});  
/////////
client.on("message", msg =>{
//// DEV HEEEEEEX&TURBOOOOO
	  var cmd = msg.content.split(' ')[0]
  //// DEV HEEEEEEX&TURBOOOOO
  if(cmd == prefix + "feedback" || cmd == prefix + "feedback" || cmd ==  "F" || cmd == "f") {

//// DEV HEEEEEEX&TURBOOOOO
if(!msg.member.hasPermission('ADMINISTRATOR') && !msg.member.roles.cache.some((r) => r.name === "اسم الرول"))
if(!msg.member.roles.cache.has('ايدي الرتبة'));

    msg.channel.send(`> ** THANK YOU FOR JOIN ${msg.guild} REGISTERATION PLEASE FEEDBACK **
  
  
 
>  @everyone `)
    
msg.delete();
  }
});  

//// 


var _0xfe9f=["\x64\x69\x73\x63\x6F\x72\x64\x2D\x62\x75\x74\x74\x6F\x6E\x73","\x6D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x68\x65\x6C\x70","\x64\x65\x6C\x65\x74\x65","\x79\x79","\x73\x65\x74\x49\x44","\x44\x45\x56\x45\x4C\x4F\x50\x45\x52","\x73\x65\x74\x4C\x61\x62\x65\x6C","\x67\x72\x65\x65\x6E","\x73\x65\x74\x53\x74\x79\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x65\x4A\x38\x63\x47\x6B\x4A\x39\x67\x35","\x73\x65\x74\x55\x52\x4C","\x49\x4E\x56\x49\x54\x45","\x75\x72\x6C","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x52\x41\x4E\x44\x4F\x4D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","","\x74\x61\x67","\x61\x75\x74\x68\x6F\x72","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x67\x75\x69\x6C\x64","\x69\x63\x6F\x6E\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x69\x64","\x75\x73\x65\x72","\x63\x6C\x69\x63\x6B\x65\x72","\x63\x72\x65\x61\x74\x65\x42\x75\x74\x74\x6F\x6E\x43\x6F\x6C\x6C\x65\x63\x74\x6F\x72","\x63\x6F\x6C\x6C\x65\x63\x74","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x3E\x20\x5F\x5F\x2A\x2A\x43\x4F\x4D\x4D\x41\x4E\x44\x53\x2A\x2A\x5F\x5F\x0D\x0A\x2A\x2A","\x62\x6F\x74\x0D\x0A","\x70\x69\x6E\x67\x0D\x0A","\x75\x70\x74\x69\x6D\x65\x0D\x0A","\x73\x65\x0D\x0A","\x73\x65\x6E\x64\x20\x2B\x20\x40\x6D\x65\x6E\x74\x69\x6F\x6E\x2C\x69\x64\x0D\x0A","\x73\x61\x79\x20\x2B\x20\x23\x6D\x65\x6E\x74\x69\x6F\x6E\x0D\x0A","\x65\x6D\x62\x65\x64\x0D\x0A\x3E\x20\x5F\x5F\x53\x43\x52\x49\x4D\x20\x43\x4F\x4D\x4D\x41\x4E\x44\x53\x5F\x5F\x0D\x0A","\x6F\x70\x65\x6E\x0D\x0A","\x63\x6F\x6C\x73\x65\x0D\x0A","\x6C\x69\x73\x74\x0D\x0A","\x69\x64\x0D\x0A","\x72\x65\x67\x69\x73\x74\x72\x61\x74\x69\x6F\x6E\x0D\x0A","\x65\x6E\x64\x2A\x2A\x0D\x0A\x44\x45\x56\x20\x42\x59\x3A\x20\x0D\x0A\x0D\x0A\x3C\x40\x38\x39\x33\x32\x37\x38\x32\x34\x33\x37\x38\x37\x30\x30\x35\x39\x37\x32\x3E\x2C\x3C\x40\x38\x36\x37\x32\x35\x32\x32\x33\x33\x37\x38\x36\x36\x32\x31\x39\x38\x34\x3E\x0D\x0A\x0D\x0A\x5B\x53\x65\x72\x76\x65\x72\x20\x53\x75\x70\x70\x6F\x72\x74\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x36\x57\x36\x67\x32\x48\x62\x39\x75\x33\x29","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x44\x45\x44\x45\x56\x45\x4C\x4F\x50\x45\x52","\x65\x64\x69\x74","\x6F\x6E","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];const {MessageButton,MessageActionRow}=require(_0xfe9f[0]);require(_0xfe9f[0])(client);client[_0xfe9f[51]](_0xfe9f[1],async (_0x896ex1)=>{if(_0x896ex1[_0xfe9f[2]]=== prefix+ _0xfe9f[3]){_0x896ex1[_0xfe9f[4]]();const _0x896ex2=require(_0xfe9f[0]);let _0x896ex3= new _0x896ex2.MessageButton()[_0xfe9f[10]](_0xfe9f[9])[_0xfe9f[8]](_0xfe9f[7])[_0xfe9f[6]](_0xfe9f[5]);let _0x896ex4= new _0x896ex2.MessageButton()[_0xfe9f[10]](_0xfe9f[14])[_0xfe9f[8]](_0xfe9f[13])[_0xfe9f[12]](_0xfe9f[11]);let _0x896ex5= await _0x896ex1[_0xfe9f[27]][_0xfe9f[26]]({embed: new Discord.MessageEmbed()[_0xfe9f[25]](`${_0xfe9f[18]}${_0x896ex1[_0xfe9f[23]]}${_0xfe9f[18]}`,_0x896ex1[_0xfe9f[23]][_0xfe9f[24]]({dynamic:true}))[_0xfe9f[22]](`${_0xfe9f[18]}${_0x896ex1[_0xfe9f[20]][_0xfe9f[19]]}${_0xfe9f[18]}`,_0x896ex1[_0xfe9f[20]][_0xfe9f[21]]({dynamic:true}))[_0xfe9f[17]](_0xfe9f[16])[_0xfe9f[15]](),buttons:[_0x896ex3,_0x896ex4]});let _0x896ex6=_0x896ex5[_0xfe9f[31]]((_0x896ex3)=>{return _0x896ex3[_0xfe9f[30]][_0xfe9f[29]][_0xfe9f[28]]=== _0x896ex1[_0xfe9f[20]][_0xfe9f[28]]});_0x896ex6[_0xfe9f[51]](_0xfe9f[32],(_0x896ex7)=>{if(_0x896ex7[_0xfe9f[28]]=== _0xfe9f[5]){_0x896ex5[_0xfe9f[50]]({embed: new Discord.MessageEmbed()[_0xfe9f[17]](_0xfe9f[16])[_0xfe9f[25]](`${_0xfe9f[49]}`,_0x896ex1[_0xfe9f[23]][_0xfe9f[24]]({dynamic:true}))[_0xfe9f[48]](`${_0xfe9f[34]}${prefix}${_0xfe9f[35]}${prefix}${_0xfe9f[36]}${prefix}${_0xfe9f[37]}${prefix}${_0xfe9f[38]}${prefix}${_0xfe9f[39]}${prefix}${_0xfe9f[40]}${prefix}${_0xfe9f[41]}${prefix}${_0xfe9f[42]}${prefix}${_0xfe9f[43]}${prefix}${_0xfe9f[44]}${prefix}${_0xfe9f[45]}${prefix}${_0xfe9f[46]}${prefix}${_0xfe9f[47]}`)[_0xfe9f[33]](_0xfe9f[18])[_0xfe9f[22]](`${_0xfe9f[18]}${_0x896ex1[_0xfe9f[20]][_0xfe9f[19]]}${_0xfe9f[18]}`,_0x896ex1[_0xfe9f[20]][_0xfe9f[21]]({dynamic:true}))[_0xfe9f[15]](),buttons:[_0x896ex3,_0x896ex4]})}})}}); ;client[_0xfe9f[54]](process[_0xfe9f[53]][_0xfe9f[52]])