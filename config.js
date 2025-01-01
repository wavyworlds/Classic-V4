require("./doc/module.js")

/*

# Base By 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
# Owner ? : 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
!- do not delete this credit

*/

global.prefix = ['','!','.',',','馃悿','馃椏']
global.owner = ['254742491666']
global.ownMain = '254742491666'
global.NamaOwner = '饾暥饾枎饾枔饾枌 饾暰饾枂饾枓' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'CLASSIC-V4' //
global.author = '饾暥饾枎饾枔饾枌 饾暰饾枂饾枓' //
global.packname = 'CLASSIC-V4' //
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.linkgc = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
