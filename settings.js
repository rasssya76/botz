//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6282142108243','62887436223985']
global.premium = ['6282142108243']
global.ownernomer = '6282142108243'
global.ownername = 'RAMA'
global.botname = 'WHATSAPP-BOT'
global.footer = 'WHATSAPP-BOT'
global.ig = 'https://chat.whatsapp.com/KTm4p53s6457qcV5aDOAPI'
global.region = 'Indonesia, JawaTimur, Madiun'
global.sc = 'https://github.com/'
global.myweb = 'https://chat.whatsapp.com/KTm4p53s6457qcV5aDOAPI'
global.packname = 'WHATSAPP-BOT'
global.author = 'R-BOT'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿','*','#','&','+','/','@','¥','∆']
global.sp = '⭔'
global.mess = {
    success: 'NIH JANGAN SPAM GW KONTOL ',
    admin: 'Yahahahha Bukan Admin Sok keras',
    botAdmin: 'JADDIN GW ADMIN COKKK',
    owner: 'LU BUKAN OWNER Gw KONTOL!',
    group: 'CHAT GW DI GRUP!',
    private: 'Khusus Di private Chat !',
    bot: 'This Feature Is Only For Bot',
    wait: '                  WAIT                 ',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'YAHHAHAHA LIMIT LU HABIS TUNGGU BESOK LAGI BANGSAT JANGAN SPAM GW KONTOL',
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
