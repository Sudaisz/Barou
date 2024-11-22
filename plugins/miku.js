const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "𝔅𝔞𝔯𝔬𝔲",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `👋 𝙷𝚎𝚕𝚕𝚘 ${pushname} 𝙸'𝚖 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠

*Im 𝔅𝔞𝔯𝔬𝔲 𝔪𝔡 Whatsapp Bot Create By 𝔅𝔢𝔶𝔬𝔫𝔡 💚✨*

| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB
| *Owner*: 𝔅𝔞𝔯𝔬𝔲

I am 𝔅𝔞𝔯𝔬𝔲 𝔪𝔡 whatsapp bot. How can I help you.
To get the menu, type as .menu . If you need to know something about the bot,
type as owner and direct the question to me. Good day.

*°᭄♣𝔅𝔞𝔯𝔬𝔲 𝔪𝔡*

 > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝔅𝔞𝔯𝔬𝔲 𝔳𝔦𝔢𝔴𝔰`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
