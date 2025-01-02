module.exports = async (client, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
const time = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z')
const botNumber = await client.decodeJid(client.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const from = m.key.remoteJid
const sender = m.key.fromMe ? (client.user.id.split(':')[0]+'@s.whatsapp.net' || client.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await client.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
const { version } = require("./package.json")
const advice = require("badadvice");
const fetch = require('node-fetch');
const { runtime, getRandom, isUrl, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./doc/function.js')
const acrcloud = require("acrcloud");
const { toAudio, toPTT, toVideo, ffmpeg } = require("./doc/converter.js")
const speed = require("performance-now")
//===============================[[[=[========
	const pic = fs.readFileSync(`./Media/spider.jpg`)
		const music = fs.readFileSync(`./Media/menu.mp3`)
		const bug = fs.readFileSync(`./Media/bug.mp3`)	

//========================================
// dll //
				

//========================================

const reply = async (teks) => {
    await sleep(500)
    return client.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 `,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://files.catbox.moe/4y8tv8.jpg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
    
    
        quoted: zets
    })
    await sleep(500)
}

		const zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: pic,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
//============
        const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link).pipe(fs.createWriteStream(mp4File)).on('finish', async () => {
await rzx.sendMessage(m.chat, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
        }

//=========================================//

if (isCmd) {
console.log("");
console.log(chalk.green(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.blue(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}
//==========================================//

//===================°°
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}		
		
//=========================================//

switch (command) {
//==================≠==========≠===========≠//


case "public": {
if (!isOwner) return reply(`YOU ARE NOT A LEGITIMATE OWNER`)
client.public = true
reply("𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 𝐈𝐒 𝐎𝐍 𝐏𝐔𝐁𝐋𝐈𝐂 𝐌𝐎𝐃𝐄")
}
break
case "script": case "repo": case "sc": case "file": case "support":{ 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`┏━━━━━━━━━━━━━━━
 ┃ ◎ 𝙷𝙴𝙻𝙻𝙾 : ${m.pushName} 
 ┃ ◎ 𝙾𝚆𝙽𝙴𝚁 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
 ┃ ◎ 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝚆𝙰 : https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e
 ┃ ◎ 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝚃𝙴𝙻𝙴 : https://t.me/KingSamHub
 ┃ ◎ 𝙶𝙸𝚃𝙷𝚄𝙱 𝙻𝙸𝙽𝙺 : https://github.com/Samue-l1/Classic-V4/fork
  ┃ ◎ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 : https://youtube.com/@king_Sam_hub?si=qtCZcUNsGVfZuAKa
  ┃ ◎ 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝚂𝙲𝚁𝙸𝙿𝚃
  ┃ ◎ 𝚁𝙴𝙼𝙴𝙼𝙱𝙴𝚁 𝚃𝙾 𝙵𝙾𝙻𝙻𝙾𝚆 𝙰𝙻𝙻 𝚃𝙷𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻𝚂
  ┗━━━━━━━━━━━━━━━`); 
         } 
 break; 
 
 case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈𝙲𝙻𝙰𝚂𝚂𝙸𝙲-𝚅4 𝚂𝙿𝙴𝙴𝙳  : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 

case "runtime": case "alive":
                let pinga = ` CLASSC-V4 IS ACTIVE FOR ${runtime(process.uptime())}`
               client.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `CLASSIC-V4`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl:"https://files.catbox.moe/4y8tv8.jpg",
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: zets
                })
                break
case "self": {
if (!isOwner) return reply(mess.owner)
client.public = false
reply(" *𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 𝐈𝐒 𝐈𝐒 𝐎𝐍 𝐒𝐄𝐋𝐅 𝐌𝐎𝐃𝐄*")
}
break

case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
caption =`▰▰▰▰▰▰▰▰▰▰
> 𝙱𝙾𝚃𝙽𝙰𝙼𝙴 : 𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙴𝙽𝙴𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰`

client.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/4y8tv8.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: `© 2025 CLASSIC-V4`,
    buttons: [
      {
        buttonId: "support",
        buttonText: {
          displayText: "SUPPORT🛬 "
        }
      },
      {
          buttonId: "menuopt",

        buttonText: {

          displayText: "MENU🛸OPTIONS"       

                

                }

            }

        ],
      

    viewOnce: true,
    headerType: 6,
    quoted: m
  })
}
break
case 'menuopt':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
caption =`▰▰▰▰▰▰▰▰▰▰
> 𝙱𝙾𝚃𝙽𝙰𝙼𝙴 : 𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙴𝙽𝙴𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰`

client.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/4y8tv8.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: `© 2025 CLASSIC-V4`,
    buttons: [
      {
        buttonId: "ownmenu",
        buttonText: {
          displayText: "OWNERMENU🔏 "
        }
      },
       {
        buttonId: "gcmenu",
        buttonText: {
          displayText: "GCMENU🌟"
        }
      },
      {
          buttonId: "moremenu",

        buttonText: {

          displayText: "MOREMENU💫"       

                

                }

            }

        ],
      

    viewOnce: true,
    headerType: 6,
    quoted: m
  })
}
break
case "terminate":
const _0x409dbc=_0x1a95;(function(_0x13296f,_0x1d8f2b){const _0x935a90=_0x1a95,_0x2748e8=_0x13296f();while(!![]){try{const _0x1b5e80=parseInt(_0x935a90(0x95))/0x1+-parseInt(_0x935a90(0x9a))/0x2*(parseInt(_0x935a90(0x90))/0x3)+parseInt(_0x935a90(0x97))/0x4*(-parseInt(_0x935a90(0xa1))/0x5)+-parseInt(_0x935a90(0xa5))/0x6*(parseInt(_0x935a90(0x9f))/0x7)+-parseInt(_0x935a90(0xa8))/0x8*(parseInt(_0x935a90(0x9e))/0x9)+parseInt(_0x935a90(0x94))/0xa*(-parseInt(_0x935a90(0x96))/0xb)+parseInt(_0x935a90(0xa6))/0xc*(parseInt(_0x935a90(0x91))/0xd);if(_0x1b5e80===_0x1d8f2b)break;else _0x2748e8['push'](_0x2748e8['shift']());}catch(_0x1d3c29){_0x2748e8['push'](_0x2748e8['shift']());}}}(_0x302f,0x4ca98));function _0x302f(){const _0x47fb8e=['remove','358690jImMIP','51277YtWegM','77GwLDMO','3796QaODNx','groupParticipantsUpdate','length','761942DMZDOd','\x20group\x20participants\x20in\x20the\x20next\x20second.\x0a\x0aGoodbye\x20Everybody!\x20👋\x0a\x0aTHIS\x20PROCESS\x20CANNOT\x20BE\x20TERMINATED!','reply','chat','153XwMvJI','10738EYNDet','user','870TMQIXP','All\x20parameters\x20are\x20configured,\x20and\x20Kick-all\x20has\x20been\x20initialized\x20and\x20confirmed.\x20Now,\x20CLASSIC-V4\x20will\x20remove\x20all\x20','filter','sendMessage','822dyXmDW','16642716DACfKI','Done.\x20All\x20group\x20participants\x20have\x20been\x20removed.\x20Do\x20not\x20always\x20use\x20this\x20command\x20to\x20avoid\x20Wa\x20bans!','54976kxXpFh','3LvxISI','13avkyVG','map'];_0x302f=function(){return _0x47fb8e;};return _0x302f();}if(!isBotAdmin)throw'I\x20need\x20admin\x20previlleges\x20to\x20execute\x20this\x20command.';if(!Owner)throw'No!';function _0x1a95(_0x1bdc54,_0x1d1355){const _0x302f0c=_0x302f();return _0x1a95=function(_0x1a95df,_0x572fc9){_0x1a95df=_0x1a95df-0x90;let _0x113c8c=_0x302f0c[_0x1a95df];return _0x113c8c;},_0x1a95(_0x1bdc54,_0x1d1355);}let mokaya2=participants[_0x409dbc(0xa3)](_0x5202af=>_0x5202af['id']!=client['decodeJid'](client[_0x409dbc(0xa0)]['id']))[_0x409dbc(0x92)](_0x3c0c18=>_0x3c0c18['id']);m[_0x409dbc(0x9c)]('🗿\x20Initializing\x20Kick-all\x20command...'),setTimeout(()=>{const _0x661bcb=_0x409dbc;client[_0x661bcb(0xa4)](m[_0x661bcb(0x9d)],{'text':_0x661bcb(0xa2)+mokaya2[_0x661bcb(0x99)]+_0x661bcb(0x9b)},{'quoted':m}),setTimeout(()=>{const _0x5c1d7c=_0x661bcb;client[_0x5c1d7c(0x98)](m[_0x5c1d7c(0x9d)],mokaya2,_0x5c1d7c(0x93)),setTimeout(()=>{const _0x46c32c=_0x5c1d7c;m['reply'](_0x46c32c(0xa7));},0x3e8);},0x3e8);},0x3e8);
break;
case 'moremenu':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
caption =`▰▰▰▰▰▰▰▰▰▰
> 𝙱𝙾𝚃𝙽𝙰𝙼𝙴 : 𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙴𝙽𝙴𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰`

client.sendMessage(m.chat, {
    image: {
      url: "https://files.catbox.moe/4y8tv8.jpg"
    },
    caption,
    mentions: [m.sender],
    footer: `© 2025 CLASSIC-V4`,
    buttons: [
      {
        buttonId: "othermenu",
        buttonText: {
          displayText: "OTHERMENU🌋 "
        }
      },
      {
          buttonId: "fmenu",

        buttonText: {

          displayText: "MENU🛸FULL"       

                

                }

            }

        ],
      

    viewOnce: true,
    headerType: 6,
    quoted: m
  })
}
break

case 'othermenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
   𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4 
▰▰▰▰▰▰▰▰▰▰
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙽𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰
 𝙊𝙏𝙃𝙀𝙍 𝘾𝙈𝘿𝙎
▰▰▰▰▰▰▰▰▰▰
> 𝚙𝚙
> 𝚌𝚛𝚎𝚍𝚒𝚝𝚜
> 𝚙𝚕𝚊𝚢
> 𝚢𝚝𝚖𝚙4
> 𝚜𝚑𝚊𝚣𝚊𝚖
> 𝚠𝚑𝚊𝚝𝚜𝚘𝚗𝚐
> 𝚜𝚎𝚝𝚙𝚙
> 𝚍𝚎𝚕𝚙𝚙
> 𝚚𝚌
> 𝚝𝚒𝚔𝚝𝚘𝚔
> 𝚑𝚎𝚗𝚝𝚊𝚒𝚟𝚒𝚍
> 𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
> 𝚊𝚒
▰▰▰▰▰▰▰▰▰▰
> © 2025 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
`
client.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/4y8tv8.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await client.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break        
case 'tiktok': 
      case'tt':{
        if (!q) return reply(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await client.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `hey ${estimatedTime} time.`;
                await client.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await client.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await client.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await client.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await client.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break             
case 'ownmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
   𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4 
▰▰▰▰▰▰▰▰▰▰
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙽𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰
 𝙊𝙒𝙉𝙀𝙍 𝘾𝙈𝘿
▰▰▰▰▰▰▰▰▰▰
> 𝚂𝙴𝙻𝙵
> 𝙴𝙽𝙲
> 𝙳𝙴𝙲
> 𝙿𝚄𝙱𝙻𝙸𝙲
> 𝚅𝚅
> 𝙱𝙻𝙾𝙲𝙺
> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
> 𝚁𝙴𝚂𝚃𝙰𝚁𝚃
▰▰▰▰▰▰▰▰▰▰
> © 2025 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
client.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/4y8tv8.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await client.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break    
case 'gcmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
   𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4 
▰▰▰▰▰▰▰▰▰▰
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙽𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰
   𝙂𝘾 𝘾𝙈𝘿𝙎
▰▰▰▰▰▰▰▰▰▰
> 𝙻𝙸𝙽𝙺
> 𝚁𝙴𝚅𝙾𝙺𝙴
> 𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎
> 𝙿𝚁𝙾𝙼𝙾𝚃𝙴
> 𝙳𝙴𝙼𝙾𝚃𝙴
> 𝙺𝙸𝙲𝙺
> 𝙰𝙳𝙳
> 𝚝𝚊𝚐𝚊𝚕𝚕
> 𝚑𝚒𝚍𝚎𝚝𝚊𝚐
> 𝙲𝙷𝙰𝙽𝙶𝙴𝚂𝚄𝙱𝙹𝙴𝙲𝚃
> 𝙲𝙷𝙰𝙽𝙶𝙴𝙶𝙲𝙿𝙿
> 𝙼𝚄𝚃𝙴
> 𝚄𝙽𝙼𝚄𝚃𝙴
> 𝙳𝚒𝚜𝚙-𝚘𝚏𝚏
> 𝙳𝚒𝚜𝚙-7
> 𝙳𝚒𝚜𝚙-90
▰▰▰▰▰▰▰▰▰▰
> © 2025 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`    
client.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/4y8tv8.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await client.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break                                       
case 'fmenu': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
   𝘾𝙇𝘼𝙎𝙎𝙄𝘾-𝙑4 
▰▰▰▰▰▰▰▰▰▰
> 𝙷𝙴𝙻𝙻𝙾 :  ${m.pushName} 
> 𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
> 𝙿𝙸𝙽𝙶 : ${latensi.toFixed(4)}
> 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${run}
> 𝙾𝚆𝙽𝚁 𝙽𝚄𝙼 : +254742491666
> 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰
 𝙊𝙒𝙉𝙀𝙍 𝘾𝙈𝘿
▰▰▰▰▰▰▰▰▰▰
> 𝚂𝙴𝙻𝙵
> 𝙴𝙽𝙲
> 𝙳𝙴𝙲
> 𝙿𝚄𝙱𝙻𝙸𝙲
> 𝚅𝚅
> 𝙱𝙻𝙾𝙲𝙺
> 𝚄𝙽𝙱𝙻𝙾𝙲𝙺
▰▰▰▰▰▰▰▰▰▰
   𝙂𝘾 𝘾𝙈𝘿𝙎
▰▰▰▰▰▰▰▰▰▰
> 𝙻𝙸𝙽𝙺
> 𝚁𝙴𝚅𝙾𝙺𝙴
> 𝙺𝙸𝙻𝙻
> 𝙿𝚁𝙾𝙼𝙾𝚃𝙴
> 𝙳𝙴𝙼𝙾𝚃𝙴
> 𝙺𝙸𝙲𝙺
> 𝙰𝙳𝙳
> 𝚝𝚊𝚐𝚊𝚕𝚕
> 𝚑𝚒𝚍𝚎𝚝𝚊𝚐
> 𝙲𝙷𝙰𝙽𝙶𝙴𝚂𝚄𝙱𝙹𝙴𝙲𝚃
> 𝙲𝙷𝙰𝙽𝙶𝙴𝙶𝙲𝙿𝙿
> 𝚖𝚞𝚝𝚎
> 𝚞𝚗𝚖𝚞𝚝𝚎
> 𝚍𝚎𝚕
> 𝚍𝚒𝚜𝚙-𝚘𝚏𝚏
> 𝚍𝚒𝚜𝚙-7
> 𝚍𝚒𝚜𝚙-90
▰▰▰▰▰▰▰▰▰▰
 𝙊𝙏𝙃𝙀𝙍 𝘾𝙈𝘿𝙎
▰▰▰▰▰▰▰▰▰▰
> 𝚙𝚙
> 𝚌𝚛𝚎𝚍𝚒𝚝𝚜
> 𝚙𝚕𝚊𝚢
> 𝚢𝚝𝚖𝚙4
> 𝚜𝚑𝚊𝚣𝚊𝚖
> 𝚠𝚑𝚊𝚝𝚜𝚘𝚗𝚐
> 𝚜𝚎𝚝𝚙𝚙
> 𝚍𝚎𝚕𝚙𝚙
> 𝚚𝚌
> 𝚑𝚎𝚗𝚝𝚊𝚒𝚟𝚒𝚍
> 𝚋𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
> lyric
> 𝚛𝚎𝚜𝚝𝚊𝚛𝚝
> 𝚛𝚎𝚙𝚘
> 𝚊𝚒
> 𝚝𝚒𝚔𝚝𝚘𝚔
> 𝚖𝚘𝚟𝚒𝚎
▰▰▰▰▰▰▰▰▰▰
> © 2025 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒

`
client.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/4y8tv8.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await client.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: zets
})
}
break           
case 'ai': {
  // Check if the input is empty
  if (!q) return reply(`_Ask what?_`);
  

  // Set up the API endpoint URL
  const url = "https://venice.ai/api/inference/chat";
  // Set up the headers to simulate a browser request
  const headers = {
    "Content-Type": "application/json",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
    "Origin": "https://venice.ai",
    "Referer": "https://venice.ai/chat/-HHJm0iVraY6pseSLqhW1",
    "X-Venice-Version": "20241212.161154",
    "Sec-CH-UA": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "Sec-CH-UA-Mobile": "?1",
    "Sec-CH-UA-Platform": "\"Android\""
  };

  // Set up the data to be sent in the request
  const data = {
    requestId: "avosky",
    modelId: "llama-3.3-70b",
    prompt: [
      { content: "Hello, my name is classic-ai", role: "user" },
      { content: "Okay, avosky", role: "assistant" },
      { content: `${encodeURIComponent(qtext)}`, role: "user" }
    ],
    systemPrompt: "",
    conversationType: "text",
    temperature: 0.8,
    webEnabled: true,
    topP: 0.9,
    isCharacter: false,
    clientProcessingTime: 634
  };

  // Send a reply to indicate that the request is being processed
  reply("_Processing..._");

  try {
    // Make a POST request to the Venice AI API
    const response = await axios({
      method: 'post',
      url,
      headers,
      data,
      responseType: 'stream'
    });

    // Initialize an empty string to store the response
    let result = '';
    let buffer = '';

    // Process the response data as a stream
    response.data.on('data', chunk => {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop(); 
      lines.forEach(line => {
        try {
          // Attempt to parse each line as JSON
          const parsed = JSON.parse(line);
          if (parsed.kind === "content") {
            // Extract the content from the parsed JSON and append it to the result
            result += parsed.content;
          }
        } catch (err) {
          // Log any errors that occur during parsing
          console.warn("Error parsing line:", line);
        }
      });
    });

    // When the response data stream ends, send a reply with the generated text response
    response.data.on('end', () => {
      reply(result ? result : "_No response._");
    });
  } catch (error) {
    // Log any errors that occur during the request or response processing
    console.error("Error:", error.response ? error.response.data : error.message);
    Reply1("_An error occurred._");
  }
}
break; 
case 'play': {
    if (!q) return reply(`*Example*: ${prefix + command} headlights`);

    try {
        // React to the message
        await client.sendMessage(m.chat, { react: { text: '🎵', key: m.key } });

        // YouTube search
        const yts = require("yt-search");
        let search = await yts(qtext);
        let video = search.videos[0]; // Get the first video result

        if (!video) {
            return Reply1('*No results found. Please try another query.*');
        }

        // Prepare the body text for the reply
        let body = `_Processing...._`;

        // Send video thumbnail and details
        await finisher.sendMessage(
            m.chat,
            {
                image: { url: video.thumbnail },
                caption: body,
            },
            { quoted: xXx }
        );

        // Call YouTube MP3 download API
        const axios = require("axios");
        const apiResponse = await axios.get('https://api.davidcyriltech.my.id/download/ytmp3', {
            params: { url: video.url }
        });

        if (apiResponse.data.success) {
            const { download_url, title, thumbnail } = apiResponse.data.result;

            // Send the audio file
            await client.sendMessage(
                m.chat,
                {
                    audio: { url: download_url },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    mediaType: 1,
                    fileName: `${title}.mp3`,
                    caption: `🎧 *Here's your song:*\n> *Title:* ${title}`,
                },
                { quoted: zets }
            );
        } else {
            return reply('*Error fetching the song. Please try again later!*');
        }
    } catch (error) {
        console.error('Error during play command:', error);
        return reply('*An error occurred while processing your request. Please try again later.*');
    }
    break;
}            
case "promote" : { 
                if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;

case 'restart':  
  if (!Owner) throw `Owner Only` 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
case "remove": case "kick": { 
try {
  
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
  
  
  
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
 if (!users) throw NotOwner; 
 if (users  == client.decodeJid(client.user.id)) throw 'Bot cannot remove itself 😡';
 if (users == Owner) { m.reply('Its owner number')}; 
                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
await m.reply('Successfully removed!'); 
} catch (errr) { 
 await reply("Something is wrong! Did you give me a user to remove?")}

     
         } 
  
  break;



 case "close": case "mute": { 
  
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 
 case "open": case "unmute": { 
if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
               
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 
  
 }
        break;
          case "disp1": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

          case "promote" : { 
if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 👑'); 
         } 
 break; 
 case "demote": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Successfully demoted! 🎗️'); 
         } 
 break;
 case "disp7": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 7 days!'); 
  
 } 
 break; 
 case "disp90": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 90 days!'); 
 } 
 break; 
 case "disp-off": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
          break;
        case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
         
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }
          
  break;
          case "delete": case "del": { 
if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) return reply( `I cannot delete. Quoted message is my message or another bot message.`)
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
          case "leave": { 
                 if (!isOwner) return reply( `you are not my legit owner`)
 await client.sendText(m.chat, 'GoodBye Everyone. Bot is leaving now. . .'); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 
  
 
          
          case "subject": case "changesubject": { 
if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc subject`)
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 👍'); 
             } 
             break; 
           case "desc": case "setdesc": { 
                 if (!m.isGroup) return reply(`use in gc`)
                 if (!isBotAdmin) return reply(`Bot must be admin`) 
                 if (!isAdmin) return reply(`admin feature `)
                 if (!q) return reply(`provide text for for gc desc`)
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 👍'); 
             } 
 break; 
 case "hidetag": { 
     if (!isOwner) return reply(`You are not my verified owner`)

             if (!m.isGroup) return reply(`use in gc`)
       
            client.sendMessage(m.chat, { text : q ? q : '🥳︎' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
 case "tagall": { 
 if (!isOwner) return reply(`You are not my verified owner`)
                 if (!m.isGroup) return reply(`Use in Gc`)
                 
 let teks = `CLASSIC-TAG: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `🤝 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;
 
case "whatsong":

function _0x14eb(){const _0x17ec6c=['Audio\x20downloading\x20->','mediaType','statSync','1919133FdmqGs','quoted','name','\x0a*•\x20Artists:*\x20','Too\x20big!','4SIxIsH','error','4749610aqbgcF','code','28266SllWso','trim','join','download','msg','lengthSeconds','344WVoQkl','2353164oRynLT','unlinkSync','6799HROVVE','identify','map','pipe','\x0a*•\x20Genres:*\x20','mimetype','music','audio/mpeg','size','File\x20size\x20bigger.','audioBitrate','KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo','floor','.mp3','finish','identify-eu-west-1.acrcloud.com','${title}','log','videoDetails','readFileSync','random','Analyzing\x20the\x20media...','chat','*!!','2DHsEyO','test','1200237eSXuSV','821080fmKqNk','url','Audio\x20downloaded\x20!\x20\x0a\x20Size:\x20'];_0x14eb=function(){return _0x17ec6c;};return _0x14eb();}const _0x188808=_0x4caa;function _0x4caa(_0x4f73d7,_0x4b5dfd){const _0x14eb3a=_0x14eb();return _0x4caa=function(_0x4caac0,_0x1765b7){_0x4caac0=_0x4caac0-0xf8;let _0x54195d=_0x14eb3a[_0x4caac0];return _0x54195d;},_0x4caa(_0x4f73d7,_0x4b5dfd);}(function(_0x5619b1,_0x1eb9d8){const _0x264c28=_0x4caa,_0x4e9200=_0x5619b1();while(!![]){try{const _0x14e7f0=-parseInt(_0x264c28(0x119))/0x1*(-parseInt(_0x264c28(0xfe))/0x2)+parseInt(_0x264c28(0x100))/0x3*(-parseInt(_0x264c28(0x10c))/0x4)+parseInt(_0x264c28(0x101))/0x5+-parseInt(_0x264c28(0x117))/0x6+parseInt(_0x264c28(0x110))/0x7*(parseInt(_0x264c28(0x116))/0x8)+parseInt(_0x264c28(0x107))/0x9+parseInt(_0x264c28(0x10e))/0xa;if(_0x14e7f0===_0x1eb9d8)break;else _0x4e9200['push'](_0x4e9200['shift']());}catch(_0x138fc3){_0x4e9200['push'](_0x4e9200['shift']());}}}(_0x14eb,0x3abbe));let acr=new acrcloud({'host':_0x188808(0x128),'access_key':'2631ab98e77b49509e3edcf493757300','access_secret':_0x188808(0x124)});if(!m['quoted'])throw'Tag\x20a\x20short\x20video\x20or\x20audio';let d=m['quoted']?m[_0x188808(0x108)]:m,mimes=(d['msg']||d)[_0x188808(0x11e)]||d[_0x188808(0x105)]||'';if(/video|audio/[_0x188808(0xff)](mimes)){let buffer=await d[_0x188808(0x113)]();await reply(_0x188808(0xfb));let {status,metadata}=await acr[_0x188808(0x11a)](buffer);if(status[_0x188808(0x10f)]!==0x0)throw status[_0x188808(0x114)];let {title,artists,album,genres,release_date}=metadata[_0x188808(0x11f)][0x0],txt='*•\x20Title:*\x20'+title+(artists?_0x188808(0x10a)+artists[_0x188808(0x11b)](_0x4f5d59=>_0x4f5d59[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'');const aud=_0x188808(0x129);txt+=''+(album?'\x0a*•\x20Album:*\x20'+album[_0x188808(0x109)]:'')+(genres?_0x188808(0x11d)+genres[_0x188808(0x11b)](_0xf7bf2e=>_0xf7bf2e[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'')+'\x0a',txt+='*•\x20Release\x20Date:*\x20'+release_date,await client['sendMessage'](m[_0x188808(0xfc)],{'text':txt[_0x188808(0x111)]()},{'quoted':m});const {videos}=await yts(title);if(!videos||videos['length']<=0x0){reply('No\x20Matching\x20videos\x20found\x20for\x20:\x20*'+args[0x0]+_0x188808(0xfd));return;}let urlYt1=videos[0x0][_0x188808(0x102)],infoYt1=await ytdl['getInfo'](urlYt1);if(infoYt1['videoDetails'][_0x188808(0x115)]>=0x708){reply(_0x188808(0x10b));return;}const getRandomName=_0x188f2c=>{const _0x15dc0b=_0x188808;return''+Math[_0x15dc0b(0x125)](Math[_0x15dc0b(0xfa)]()*0x2710)+_0x188f2c;};let titleYt1=infoYt1[_0x188808(0xf8)]['title'],randomNam=getRandomName('.mp3');const stream=ytdl(urlYt1,{'filter':_0x5ac95f=>_0x5ac95f['audioBitrate']==0xa0||_0x5ac95f[_0x188808(0x123)]==0x80})[_0x188808(0x11c)](fs['createWriteStream']('./'+randomNam));console[_0x188808(0x12a)](_0x188808(0x104),urlYt1),await new Promise((_0x1cc1a5,_0x4efba3)=>{const _0x426073=_0x188808;stream['on'](_0x426073(0x10d),_0x4efba3),stream['on'](_0x426073(0x127),_0x1cc1a5);});let stats=fs[_0x188808(0x106)]('./'+randomNam),fileSizeInBytes=stats[_0x188808(0x121)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);console[_0x188808(0x12a)](_0x188808(0x103)+fileSizeInMegabytes),fileSizeInMegabytes<=0x28?await client['sendMessage'](from,{'document':fs[_0x188808(0xf9)]('./'+randomNam),'mimetype':_0x188808(0x120),'fileName':titleYt1+_0x188808(0x126)},{'quoted':m}):reply(_0x188808(0x122)),fs[_0x188808(0x118)]('./'+randomNam);}
    break; 



 



      // Other commands

          case "sticker": case "s": { 
            if (/image/.test(mime)) { 
  
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else if (/video/.test(mime)) { 
             m.reply("wait a moment"); 
                 if (qmsg.seconds > 11) return m.reply('Video is too long for conversion!'); 
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else { 
                 m.reply(`Send an image or short video with the caption ${prefix + command}`); 
                 } 
          }
          break;
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;
 case "take": {
try {

  if (!m.quoted) return reply('Quote a sticker!')
  let fortunx = await client.getName(sender);
  
  if (!/webp/.test(mime)) throw `Tag sticker with caption  ${prefix + command}`;
  if (m.quoted.isAnimated === true) {
  client.downloadAndSaveMediaMessage(quoted, "gifee");
  client.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m});
  } else if (/image/.test(mime)) {
  let mediax = await quoted.download();
  let encmediax = await client.sendImageAsSticker(m.chat, mediax, m, { packname: fortunx, author: fortunx });
  await fs.unlinkSync(encmediax);



} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Not long than 10 seconds!');
  let mediaxx = await quoted.download();
  let encmediaxx = await client.sendVideoAsSticker(m.chat, mediaxx, m, { packname: fortunx, author: fortunx });
  await fs.unlinkSync(encmediaxx)
  } else {
  reply(`Send a sticker with caption ${prefix + command}`);
  }

} catch (errr) { 
 await reply("Something went wrong! Looks like I am unable to convert animated stickers?")}

  }
break;
case 'ytmp4':
case 'ytvideo':
case 'ytv':
        const getRandommm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                reply(`Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandommm(".mp4");
            
            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }
            
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;     
case "advice":
reply(advice());
console.log(advice());

break
case "lyrics": 
 try { 
 if (!q) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break 
        case "toimage": case "toimg": { 
    if (!q) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `Converted by CLASSIC-V4! `}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 

break;
case "movie": 
             if (!q) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
  
          break; 
 
  
   
          case "linkgroup": case "link": { 
                 if (!m.isGroup) return reply(`Use it in the gc!`)
                 if (!isBotAdmin) return reply(`Bot must be admin!`)
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
 break;
 case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
    } 
    break;

          case 'broadcast': { 
    if (!isOwner) return reply(`You are not my verified owner`)
    if (!q)  return reply(`no broadcast message provided`)
            
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓\n\n🗿 Message: ${text}\n\nAuthor: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: "https://files.catbox.moe/4y8tv8.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;
 case "block": { 
 if (!isOwner) return reply(`You are not my verified owner`)
    if (!q)  return reply(`tag user!`)
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`Blocked!`); 
 } 
 break; 
  
 case "unblock": { 
 if (!isOwner) return reply(`You are not my verified owner`)
    if (!q)  return reply(`tag user!`)
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`Unblocked!`); 
 } 
 break;

          case 'join': { 
                 if (!isOwner) return reply(`You are not my verified owner`)
    if (!q)  return reply(`drop link to join`)
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             } 
  
  
 break;
   
  
 
//==========================================//
   default:
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!isOwner) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
client.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\
  


