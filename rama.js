/*SC ORI PUNYA ORANG INDIA HAHAHAHHA*/
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cooldown = new Map();
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')
const { aiovideodl } = require('./lib/scrapers.js')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const hx = require("hxz-api");
const xfar = require('xfarr-api');
const { bcils, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper');
LahKokTam = `R-BOT`
violet = `e939-5eff-ded0`
smbol = `≻`
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = rama = async (rama, m, chatUpdate, map, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await rama.decodeJid(rama.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await rama.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const cmd =
			map.command.get(m.body.trim().split(/ +/).shift().toLowerCase()) ||
			[...map.command.values()].find((x) =>
				x.alias.find((x) => x.toLowerCase() == m.body.trim().split(/ +/).shift().toLowerCase())
			) ||
			map.command.get(cmdName) ||
			[...map.command.values()].find((x) => x.alias.find((x) => x.toLowerCase() == cmdName));	   
			 
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
//Y
function printSpam(rama, isGc, sender, groupName) {
	if (isGc) {
		return rama.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"), "in", color(groupName, "lime"));
	}
	if (!isGc) {
		return rama.logger.warn("Detect SPAM", color(sender.split("@")[0], "lime"));
	}
}		
		//RANDOM\\
		function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
        }     
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        try {				  
pporgs = await rama.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pporng = await getBuffer(pporgs)
const fakh = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${command}`,
                 "title": `RamaGans`,
                 'jpegThumbnail': fs.readFileSync('./GojoMedia/gojo.jpg')
                        }
	                  } 
                     }	
const more = String.fromCharCode(8206);

const readMore = more.repeat(4001);                     	
		//group target \\
const reply = (teks) => {
            rama.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` R-BOT`, "previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/dae77f99fe46e5ec47c75.png`,"thumbnail": "","sourceUrl": "https://chat.whatsapp.com/KTm4p53s6457qcV5aDOAPI"}}}, { quoted: m})
        }
let emot = pickRandom(["🗿", "👍", "💨", "🩱", "🐷", "🐒", "🌝", "💩", "👻", "🔥", "🖕", "🐦","🔐","✔️","🤪","☠️","💎","😈"])        
       /* const replys = (teks) => {
            rama.sendMessage(m.chat, { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true, mediaType:  2, mediaUrl: 'https://youtu.be/8TFyVqKo4dI', title: `Hai kak ${pushname}`, body: `Create By Rama`, sourceUrl: 'http://s.id/0x404', thumbnail: await( await rama.getFile(pporng)).data
        }*/

        //Public & Self\\
        if (!rama.public) {
            if (!m.key.fromMe) return
        }

         // Push Message To Console && Auto Read
        if (m.message) {
            rama.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await rama.setStatus(`${rama.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(` _____[ *ANTI LINK* ]_____\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return m.reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await rama.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return m.reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh`)
        rama.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./GojoMedia/sticker/${anji}.webp`)
					rama.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					rama.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/image/${anjh}.jpg`)
					rama.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					rama.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: rama.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, rama.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        rama.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            rama.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await rama.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, rama.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await rama.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await rama.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    rama.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    rama.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) rama.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) rama.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) rama.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    rama.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) rama.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) rama.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    rama.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
       /* case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var rama = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await rama.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, rama, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}}])
  }
  break
        case 'userlimit': case 'limit':
{      
   let txt = ` _____[ *ALL LIMIT USER* ]_____\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = ` _____[ *LEADERBOARD* ]_____\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     rama.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return m.reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return m.reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  m.reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return m.reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return m.reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return m.reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return m.reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return m.reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return m.reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, emot,)
 let monaynya = 15000 * emot,
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < emot,) return m.reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, emot,)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return m.reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return m.reply('Your Blood Is Full')
 if (isPotion < 1) return m.reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     rama.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break*/
	    case 'afk': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await rama.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await rama.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            rama.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            m.reply(`TicTacToe🎮 Session Does Not Exist`)
            } else m.reply('?')
            } catch (e) {
            m.reply('Damaged')
            }
            }
            break
         /*   case 'suitpvp': case 'suit': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  m.reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await rama.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) rama.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break*/
            case 'chat': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!q) return m.reply(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    rama.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    rama.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    rama.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    rama.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    rama.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    rama.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    rama.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if ('family100'+m.chat in _family100) {
                    m.reply('There Are Still Unfinished Sessions!')
                    m.reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await rama.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return m.reply(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (Query)\n3. word\n4. sentence\n5. lyrics (Query)\n6. blank (Query)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await rama.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    rama.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, rama.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    rama.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, rama.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    rama.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, rama.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    rama.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, rama.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    rama.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, rama.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    rama.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    rama.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, rama.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
		
	case 'react': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                rama.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                rama.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, jawab, rama.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, jawab, rama.user.name, m, {mentions: menst})
            }
            break
            /*case 'is':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
rama.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
rama.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
rama.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
/*case 'how':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
rama.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
rama.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
rama.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
rama.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
rama.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					rama.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'bc':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'sexy':
      case 'hot': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, jawab, rama.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return m.reply(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
rama.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return m.reply(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'checkdeath':
             if (!text) return m.reply(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return m.reply(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break*/
            case 'react': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                rama.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return m.reply(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(`Invalid Link!`)
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await rama.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                await rama.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
               if (!isCreator) return m.reply(`${mess.owner}`)
               if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif Has Been Successfully Changed to\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break
	case 'kick': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!isCreator) return m.reply(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!isCreator) return m.reply(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rama.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) m.reply(`${mess.admin}`)
                if (!text) m.reply(`Where Is The Text?`)
                await rama.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) m.reply(`${mess.admin}`)
                if (!text) m.reply(`Where Is The Text?`)
                await rama.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                await rama.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                await rama.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)                
                if (!isAdmins) return m.reply(`${mess.admin}`)
let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                rama.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            //if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
            if (!isAdmins) return m.reply(`${mess.admin}`)
            rama.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'anuu': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            //if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
            //if (!isAdmins) return m.reply(`${mess.admin}`)
            if (!isCreator) return m.reply(`${mess.owner}`)
            rama.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return m.reply(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += ` *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            if (m.chat in vote) m.reply(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return m.reply(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            m.reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* _____[ *VOTE* ]_____*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: rama.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            rama.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            if (!(m.chat in vote)) return m.reply(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) m.reply(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* _____[ *VOTE* ]_____*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: rama.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            rama.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            if (!(m.chat in vote)) return m.reply(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* _____[ *VOTE* ]_____*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
*${smbol}* Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: rama.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            rama.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return m.reply(`${mess.group}`)
if (!(m.chat in vote)) return m.reply(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `* _____[ *VOTE* ]_____*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
*${smbol}* Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
*${smbol}* Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `*${smbol}* ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${rama.user.id}
`
rama.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.isGroup) return m.reply(`${mess.group}`)
            if (!(m.chat in vote)) return m.reply(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            m.reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
                if (args[0] === 'close'){
                    await rama.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successful Closing The Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await rama.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successful Opening The Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `Group Mode`, rama.user.name, m)

             }
            }
            break
            case 'editinfo': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
             if (args[0] === 'open'){
                await rama.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await rama.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Closed Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `Mode Edit Info`, rama.user.name, m)

            }
            }
            break
            case 'antilink': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `Antilink Mode`, rama.user.name, m)
                }
             }
             break
             case 'mute': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) return m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                m.reply(`${rama.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                m.reply(`${rama.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `Mute Bot`, rama.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!m.isGroup) return m.reply(`${mess.group}`)
                let response = await rama.groupInviteCode(m.chat)
                rama.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.isGroup) m.reply(`${mess.group}`)
                if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
                if (!isAdmins) return m.reply(`${mess.admin}`)
                if (!text) return m.reply(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await rama.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await rama.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.quoted) m.reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply(`The Message Was Not Sent By A Bot!`)
                rama.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return m.reply(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await rama.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '.',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'BOT GRUP',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }
                            }]
                      let txt = ` _____[ *R-BOT HERE🎉* ]_____\n\n${text}`
                      rama.send5ButImg(i, txt, rama.user.name, global.thumb, btn)
                    }
                m.reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return m.reply(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'BOT GRUP',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }
                            }]
                      let txt = ` _____[ *R-BOT HERE 🎉* ]_____\n\n${text}`
                      rama.send5ButImg(yoi, txt, rama.user.name, global.thumb, btn)
		}
		m.reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!m.quoted) return m.reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return m.reply(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                rama.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await rama.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 *Name :* ${nama}\n💫 *User :* @${i.split('@')[0]}\n💫 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 rama.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `*GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await rama.groupMetadata(i)
                     teks += `\n*Name :* ${metadata.subject}\n*ID :* ${metadata.id}`
                 }
                 rama.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    rama.sendText(m.chat, 'Online List:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!quoted) return m.reply(`Reply Video/Image With Caption ${prefix + command}`)
            //m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await rama.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await rama.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
m.reply(mess.wait)
mee = await rama.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await rama.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.quoted.text && !text) return m.reply(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!m.quoted.text && !text) return m.reply(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	        if (!text) return m.reply(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await rama.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!quoted) return m.reply(`Reply Image`)
                if (!/webp/.test(mime)) m.reply(`Reply Sticker With Caption *${prefix + command}*`)
                m.reply(mess.wait)
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    rama.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!quoted) m.reply(`Reply Image`)
                if (!/webp/.test(mime)) return m.reply(`Reply Sticker With Caption *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await rama.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            rama.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (/document/.test(mime)) return m.reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            rama.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${rama.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            rama.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!quoted) return m.reply(`Reply Image`)
                if (!/webp/.test(mime)) return m.reply(`Reply Sticker With Caption *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await rama.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
           /* case 'imagenobg': case 'removebg': case 'remove-bg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	    if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await rama.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    rama.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break*/
	    case 'yts': case 'ytsearch': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Example : ${prefix + command} Anime Story Whatsapp`)
                m.reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded On : ${i.ago}\nUrl : ${i.url}\n\n─────────────────\n\n`
                }
                rama.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Example : ${prefix + command} gojo shiba inu`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += ` *Title* : ${g.title}\n`
                teks += ` *Description* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
        if (!text) return m.reply(`Example : ${prefix + command} gojo`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*------- _____[ *GIMAGE SEARCH* ]_____-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: rama.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'song': case 'ytplay': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'MUSIC'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `Judul : ${anu.title}
Duration : ${anu.timestamp}
Viewes : ${anu.views}
Channel : ${anu.author.url}
${readMore}
${anu.description}`,
                    footer: rama.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                m.reply(mess.wait)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                //rama.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${isUrl(text)}\nExt : MP3\nResolution : ${args[1] || '320kbps'}`, m)
                rama.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let { ytv } = require('./lib/y2mate')
                if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                m.reply(mess.wait)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                rama.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'ytvd': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
   /*if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)*/
rama.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: `${global.myweb}`,
sourceUrl: `${global.myweb}`
}}}, {quoted:m})
}
break
case 'ytad': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
   /*if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)*/
rama.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: `${global.myweb}`,
sourceUrl: `${global.myweb}`
}}}, {quoted:m})
}
break
	    case 'getmusicxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                rama.sendImage(m.chat, media.thumb, ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolution : ${args[1] || '128kbps'}`, m)
                rama.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideoxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                rama.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                rama.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
            }
            break
            case 'drakorxxx':
                if (!text) return m.reply('What Are You Looking For??')
                await m.reply(mess.wait)
                nexusnw.Drakor(`${text}`).then(async data => {
                    let txt = `*----- _____[ *DRAKOR-SEARCH* ]_____-----*\n\n`
                    for (let i of data) {
                        txt += `*Title :* ${i.judul}\n`
                        txt += `*Years :* ${i.years}\n`
                        txt += `*Genre :* ${i.genre}\n`
                        txt += `*Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'animexxx':{
                if (!text) return m.reply(`What Anime Are You Looking For??`)
                await m.reply(mess.wait)
                nexusnw.Anime(q).then(async data => {
                    let txt = `*------- _____[ *ANIME-SEARCH* ]_____-------*\n\n`
                    for (let i of data) {
                        txt += `*Title :* ${i.judul}\n`
                        txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch",
						"url": `${myweb}`
						}
					}
				]
				await rama.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
                if (!text) return m.reply(`What Anime Character Are You Looking For??`)
                await m.reply(mess.wait)
                nexusnw.Character(q).then(async data => {
                    let txt = `*--- _____[ *CHARACTER-SEARCH* ]_____---*\n\n`
                    for (let i of data) {
                        txt += `*Character :* ${i.character}\n`
                        txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "BOT GRUP",
						"url": `${myweb}`
						}
					}
				]
				await rama.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return m.reply(`What Manga Are You Looking For??`)
                await m.reply(mess.wait)
                nexusnw.Manga(`${text}`).then(async data => {
                    let txt = `*------ _____[ *MANGA-SEARCH* ]_____------*\n\n`
                    for (let i of data) {
                         txt += `*Title :* ${i.judul}\n`
                         txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "BOT GRUP",
						"url": `${myweb}`
						}
					}
				]
				await rama.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
           /* case 'waifu': case 'bully': case 'neko': case 'shinobu': case 'megumin': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(mess.wait)
                rama.sendMessage(m.chat, { image: { url: `https://fatiharridho.herokuapp.com/api/sfw/${command}` }, caption: 'Generated Random ' + command }, { quoted: m })           
             }
            break*/
	    case 'couplepp':  case 'ppcouple': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                rama.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                rama.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: rama.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` Title : ${result.title}\n Category : ${result.type}\n Detail : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: rama.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\n Source : ${result.source}\nMedia Url : ${result.image}`,
                    footer: rama.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                let anu = await fetchJson(api('zenz', '/randomtext/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            /*case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Enter Text, Example : ${prefix + command} Xeon`)
                m.reply(mess.wait)
                rama.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break*/
            case 'circuit': case 'classic8bit': case 'color-fireworks': case 'cool-metal': case 'cutegirl': case 'dark-gold-metal': case 'decorated-cookie': case 'deluxe-gold': case 'deluxe-silver': case 'dinamo': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'fabric-text': case 'firework': case 'floraltext': case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-angel': case 'galaxy-effect': case 'galaxy-effect2': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'gemstone': case 'genji-overwatch': case 'glitchtext': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-fox': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'gradientlogo': case 'graffiti-color': case 'graffiti-text3':
case '1917-style': case '3d-effect': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dgalaxy-metal': case '3dgold': case '3dgolden': case '3dgradient': case '3dlove': case '3dluxury': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3drosegold': case '3dscifi': case '3dsilver': case '3dspace': case '3dstone': case '3dtext-effect': case '3dunderwater': case '3dvintage': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'avengers': case 'azzenka-league-of-kings': case 'balloons-cards': case 'balloons-love': case 'bearlogo': case 'bg-crossfire': case 'birthday-cake': case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blackpink': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effectcase': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})        
            if (!text) return m.reply(`Example : ${prefix + command} text`)
                m.reply(mess.wait)


                rama.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/textpro/${command}?apikey=${violet}&text=${text}` }, caption: `Text Pro ${command}` }, { quoted: m})


	        }


            break
              case 'wanted': case 'ytcomment': case 'beautiful': case 'jail': case 'fotojatoh': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'gay': case 'rip': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})                          
	        	if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
	        	m.reply(mess.wait)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await rama.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                rama.sendMessage(m.chat, { image: buf, caption: `Effect ${command}` }, { quoted: m}).catch((err) => m.reply(jsonformat(err)))
                }
                break
	 /*   case 'nomerhoki': case 'nomorhoki': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!Number(text)) return m.reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Phone Number :* ${anu.message.nomer_hp}\n *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Dream :* ${anu.message.mimpi}\n *Meaning :* ${anu.message.arti}\n *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Your Name :* ${anu.message.nama_anda.nama}\n *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n *Couple Name :* ${anu.message.nama_pasangan.nama}\n *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Your Name :* ${anu.message.nama_anda.nama}\n *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n *Couple Name :* ${anu.message.nama_pasangan.nama}\n *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Husband's Name :* ${anu.message.suami.nama}\n *Husband Born :* ${anu.message.suami.tgl_lahir}\n *Wife's Name :* ${anu.message.istri.nama}\n *Born Wife :* ${anu.message.istri.tgl_lahir}\n *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Your Name :* ${anu.message.nama_anda.nama}\n *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n *Couple Name :* ${anu.message.nama_pasangan.nama}\n *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n *Positive Side :* ${anu.message.sisi_positif}\n *Negative Side :* ${anu.message.sisi_negatif}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Meaning :* ${anu.message.arti}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Born :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendImage(m.chat,  anu.message.gambar, ` *Your Name :* ${anu.message.nama_anda}\n *Couple Name :* ${anu.message.nama_pasangan}\n *Positive Side :* ${anu.message.sisi_positif}\n *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Wedding Date :* ${anu.message.tanggal}\n *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!ext)throw `Example : ${ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Born :* ${anu.message.hari_lahir}\n *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Born :* ${anu.message.hari_lahir}\n *Sustenance :* ${anu.message.rejeki}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Born :* ${anu.message.hari_lahir}\n *Profession :* ${anu.message.pekerjaan}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Analysis :* ${anu.message.analisa}\n *Root Number :* ${anu.message.angka_akar}\n *Nature :* ${anu.message.sifat}\n *Element :* ${anu.message.elemen}\n *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Analysis :* ${anu.message.analisa}\n *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendImage(m.chat, anu.message.image, ` *Born :* ${anu.message.tgl_lahir}\n *Tarot Symbol :* ${anu.message.simbol_tarot}\n *Meaning :* ${anu.message.arti}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Born :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Kua Number :* ${anu.message.angka_kua}\n *Group :* ${anu.message.kelompok}\n *Character :* ${anu.message.karakter}\n *Good Sector :* ${anu.message.sektor_baik}\n *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Born :* ${anu.message.tgl_lahir}\n *When Challenged :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Born :* ${anu.message.tgl_lahir}\n *Results :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Day Of Birth :* ${anu.message.hari_lahir}\n *Date Of Birth :* ${anu.message.tgl_lahir}\n *Fateful Day :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Day Of Birth :* ${anu.message.hari_lahir}\n *Date Of Birth :* ${anu.message.tgl_lahir}\n *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Day Of Birth :* ${anu.message.hari_lahir}\n *Date Of Birth :* ${anu.message.tgl_lahir}\n *Sustenance Direction :* ${anu.message.arah_rejeki}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Born :* ${anu.message.tgl_lahir}\n *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Date :* ${anu.message.tanggal}\n *Number Of Neptune :* ${anu.message.jumlah_neptu}\n *Day Character :* ${anu.message.watak_hari}\n *Dragon Day :* ${anu.message.naga_hari}\n *Good Hour :* ${anu.message.jam_baik}\n *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Born :* ${anu.message.tgl_lahir}\n *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Name :* ${anu.message.nama}\n *Born :* ${anu.message.tgl_lahir}\n *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Date :* ${anu.message.tgl_memancing}\n *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Results :* ${anu.message.result}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Zodiac :* ${anu.message.zodiak}\n *Number :* ${anu.message.nomor_keberuntungan}\n *Aroma :* ${anu.message.aroma_keberuntungan}\n *Planet :* ${anu.message.planet_yang_mengitari}\n *Flower :* ${anu.message.bunga_keberuntungan}\n *Color :* ${anu.message.warna_keberuntungan}\n *Stone :* ${anu.message.batu_keberuntungan}\n *Element :* ${anu.message.elemen_keberuntungan}\n *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                rama.sendText(m.chat, ` *Results :* ${anu.message}`, m)
            }
            break*/
	    case 'stalker': case 'stalk': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Your Daily Limit Has Expired')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return m.reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/stalker/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return m.reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return m.reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/stalker/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return m.reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/stalker/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return m.reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/stalker/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return m.reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/stalker/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return m.reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    rama.sendMedia(m.chat, anu.caption.profile_hd, '', ` Full Name : ${anu.caption.full_name}\n User Name : ${anu.caption.user_name}\n ID ${anu.caption.user_id}\n Following : ${anu.caption.followers}\n Followers : ${anu.caption.following}\n Bussines : ${anu.caption.bussines}\n Professional : ${anu.caption.profesional}\n Verified : ${anu.caption.verified}\n Private : ${anu.caption.private}\n Bio : ${anu.caption.biography}\n Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return m.reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(` Name : ${anu.name}\n Version : ${Object.keys(anu.versions)}\n Created : ${tanggal(anu.time.created)}\n Modified : ${tanggal(anu.time.modified)}\n Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n Description : ${anu.description}\n Homepage : ${anu.homepage}\n Keywords : ${anu.keywords}\n Author : ${anu.author.name}\n License : ${anu.license}\n Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	       /* case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	        m.reply(mess.wait)                 
  if (!text.includes('tiktok')) return reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${text}`).catch(e => {
 m.reply(`_Error in send media`) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    rama.sendMessage(from, { video: { url: musim_duren_v }, caption: `ok` }, { quoted: m })
   }
            break
           /* case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	        m.reply(mess.wait)              
if (!text) return reply('Input URL')
	  if (!text.includes('tiktok')) return reply('Itu bukan link tiktok!')
	let url = (await fetch(text)).url
	let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
	let data = res.aweme_detail.video.play_addr.url_list
	if (!data.length) throw 'Can\'t download video!'
	let meta = await getInfo(url).catch(_ => {})
	await m.reply('_In progress, please wait..._')
	let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${usedPrefix}tomp3` }]
	rama.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: meta?.description || null, footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })   
}
break     */    
            case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Enter Query Link!`)
                m.reply(mess.wait)
                let anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
                let buttons = [
                    /*{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},*/
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video.nowm },
                    caption: `TiktokDownload`,
                    footer: '.r76',
                    buttons: buttons,
                    headerType: 5
                }
                rama.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }}) 	             
             if (!text) throw '*Enter Link Tiktok!*'
             m.reply(mess.wait)
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                let anm = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
                rama.sendMessage(m.chat, { audio: { url: anm.result.video.mp4 }, mimetype: 'audio/mp4'}, { quoted: m })   
            }
            break	       
/*case 'ig': case 'igdl': case 'instagram':{
 rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(mess.wait)               
                 if (!args[0]) return m.reply(`Use example ${prefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
//  await m.reply(`${l}🔄${r}Ｌｏａｄｉｎｇ．．．`)
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
        for (const { url } of results) await rama.sendFileUrl(m.chat, url, 'instagram.mp4', `NI YANG PENTING WORK`, m)
            }
  break*/  
             
	        case 'pindl': case 'pinterestdl': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!text) return m.reply(`Enter Query Link!`)
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                rama.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
	        if (!text) return m.reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper.js')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '️Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
 Title : ${anu.title}
 Author : ${anu.author.name}
 Like : ${anu.like}
 Caption : ${anu.caption}
 Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: rama.user.name,
			buttons,
			headerType: 4
		    }
		    rama.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        rama.sendMessage(m.chat, { image: { url }, caption: ` Title : ${anu.title}\n Author : ${anu.author.name}\n Like : ${anu.like}\n Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!text) return m.reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		rama.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqraxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return m.reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		rama.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		rama.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		rama.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		rama.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		rama.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadisxxx': case 'hadistxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!args[0]) return m.reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return m.reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquranxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!args[0]) return m.reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return m.reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		rama.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurahxxx': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
		if (!args[0]) return m.reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return m.reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = ` _____[ *Tafsir Surah* ]_____

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await rama.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                rama.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': case 'addcmd': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.quoted) return m.reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return m.reply(`SHA256 Hash Missing`)
                if (!text) return m.reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return m.reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return m.reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return m.reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                rama.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.quoted) return m.reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return m.reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return m.reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.quoted) return m.reply(`Reply Message You Want To Save In Database`)
                if (!text) return m.reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return m.reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' Not Listed In The Message List`)
                rama.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' _____[ *DATABASE LIST* ]_____\n\n'
		for (let i of seplit) {
		    teks += `💫 *Name :* ${i.nama}\n💫 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            if (!isCreator) return m.reply(`${mess.owner}`)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		m.reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	   /* case 'anonymous': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                rama.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await rama.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, rama.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   m.reply(false)
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await rama.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, rama.user.name, m)
                    m.reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await rama.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, rama.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await rama.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, rama.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, rama.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    m.reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await rama.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await rama.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, rama.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await rama.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, rama.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await rama.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, rama.user.name, m)
                }
                break
            }*/
            case 'public': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                rama.public = true
                m.reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                if (!isCreator) return m.reply(`${mess.owner}`)
                rama.public = false
                m.reply('Successful Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                rama.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						rama.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
/*
case 'ass': const _0xadb8ed=_0x449f;function _0x449f(_0x20a193,_0x1be6da){const _0x31167f=_0x3116();return _0x449f=function(_0x449f7e,_0xb9cbed){_0x449f7e=_0x449f7e-0x103;let _0x46fc88=_0x31167f[_0x449f7e];return _0x46fc88;},_0x449f(_0x20a193,_0x1be6da);}(function(_0x5deb74,_0x2e7fc7){const _0x14fa77=_0x449f,_0x251e42=_0x5deb74();while(!![]){try{const _0x3b66be=parseInt(_0x14fa77(0x10b))/0x1*(-parseInt(_0x14fa77(0x111))/0x2)+-parseInt(_0x14fa77(0x104))/0x3*(parseInt(_0x14fa77(0x10f))/0x4)+-parseInt(_0x14fa77(0x113))/0x5+parseInt(_0x14fa77(0x10a))/0x6*(parseInt(_0x14fa77(0x108))/0x7)+parseInt(_0x14fa77(0x106))/0x8+parseInt(_0x14fa77(0x112))/0x9*(parseInt(_0x14fa77(0x115))/0xa)+-parseInt(_0x14fa77(0x109))/0xb*(parseInt(_0x14fa77(0x103))/0xc);if(_0x3b66be===_0x2e7fc7)break;else _0x251e42['push'](_0x251e42['shift']());}catch(_0x12e6b7){_0x251e42['push'](_0x251e42['shift']());}}}(_0x3116,0x9ccd7));function _0x3116(){const _0x22912a=['botnma','5093976kDUVeI','chat','301SKFaOJ','22nDPbHU','175866EdorUE','3vudQbL','wait','ass','https://wallebotapi.mitomods.com/docs/nsfw/ass?apikey=Donitas','98780dxRbOC','R-\x20BOT\x20MD','377582GmFUAy','1395189TrloKJ','3902970sfuiOH','NEXT','50nuYxYQ','sendMessage','2468100nqsNQO','33PyxFbb'];_0x3116=function(){return _0x22912a;};return _0x3116();}{m.reply(mess[_0xadb8ed(0x10c)]);let buttons=[{'buttonId':_0xadb8ed(0x10d),'buttonText':{'displayText':_0xadb8ed(0x114)},'type':0x1}],anu=await fetchJson(_0xadb8ed(0x10e)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0xadb8ed(0x110),'footer':global[_0xadb8ed(0x105)],'buttons':buttons,'headerType':0x4};rama[_0xadb8ed(0x116)](m[_0xadb8ed(0x107)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'ahegao': function _0x4531(){const _0x44de99=['botnma','ahegao','216836oiQhpI','result','28rupMOq','2dFBcle','85WiyEmZ','chat','1412483jKZVPm','5726048DZvhsm','1572999qLOFKM','18GbyHoD','sendMessage','wait','1256958qJURWK','556270uYIwYN','11177650jJJUEO'];_0x4531=function(){return _0x44de99;};return _0x4531();}function _0x1fe1(_0x456378,_0x5e6bf7){const _0x453109=_0x4531();return _0x1fe1=function(_0x1fe182,_0x24787f){_0x1fe182=_0x1fe182-0x13e;let _0x45c2ad=_0x453109[_0x1fe182];return _0x45c2ad;},_0x1fe1(_0x456378,_0x5e6bf7);}const _0x2a852b=_0x1fe1;(function(_0x326157,_0x178f5f){const _0x3ed89d=_0x1fe1,_0x27bc0a=_0x326157();while(!![]){try{const _0x418b0d=-parseInt(_0x3ed89d(0x140))/0x1*(parseInt(_0x3ed89d(0x14e))/0x2)+-parseInt(_0x3ed89d(0x142))/0x3+parseInt(_0x3ed89d(0x14b))/0x4*(parseInt(_0x3ed89d(0x13e))/0x5)+parseInt(_0x3ed89d(0x146))/0x6*(-parseInt(_0x3ed89d(0x14d))/0x7)+parseInt(_0x3ed89d(0x141))/0x8*(parseInt(_0x3ed89d(0x143))/0x9)+parseInt(_0x3ed89d(0x148))/0xa+parseInt(_0x3ed89d(0x147))/0xb;if(_0x418b0d===_0x178f5f)break;else _0x27bc0a['push'](_0x27bc0a['shift']());}catch(_0x393d89){_0x27bc0a['push'](_0x27bc0a['shift']());}}}(_0x4531,0xb6474));{m.reply(mess[_0x2a852b(0x145)]);let buttons=[{'buttonId':_0x2a852b(0x14a),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ahegao?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x2a852b(0x14c)]},'caption':'R-\x20BOT\x20MD','footer':global[_0x2a852b(0x149)],'buttons':buttons,'headerType':0x4};rama[_0x2a852b(0x144)](m[_0x2a852b(0x13f)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'bdsm': const _0x30a91b=_0x1e9a;(function(_0x5e7936,_0x45128a){const _0x24ad84=_0x1e9a,_0x429465=_0x5e7936();while(!![]){try{const _0x2ada1b=parseInt(_0x24ad84(0xda))/0x1+-parseInt(_0x24ad84(0xdb))/0x2+parseInt(_0x24ad84(0xdc))/0x3+-parseInt(_0x24ad84(0xe1))/0x4*(-parseInt(_0x24ad84(0xd7))/0x5)+parseInt(_0x24ad84(0xe3))/0x6*(-parseInt(_0x24ad84(0xde))/0x7)+parseInt(_0x24ad84(0xe5))/0x8+-parseInt(_0x24ad84(0xe6))/0x9;if(_0x2ada1b===_0x45128a)break;else _0x429465['push'](_0x429465['shift']());}catch(_0x2a2e6e){_0x429465['push'](_0x429465['shift']());}}}(_0x397f,0xb4ccd));function _0x1e9a(_0x10b2ec,_0x447ec7){const _0x397f0c=_0x397f();return _0x1e9a=function(_0x1e9a83,_0x438064){_0x1e9a83=_0x1e9a83-0xd7;let _0xb6474a=_0x397f0c[_0x1e9a83];return _0xb6474a;},_0x1e9a(_0x10b2ec,_0x447ec7);}{m.reply(mess[_0x30a91b(0xe2)]);let buttons=[{'buttonId':'bdsm','buttonText':{'displayText':_0x30a91b(0xd9)},'type':0x1}],anu=await fetchJson(_0x30a91b(0xe0)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x30a91b(0xdf),'footer':global[_0x30a91b(0xe4)],'buttons':buttons,'headerType':0x4};rama[_0x30a91b(0xdd)](m[_0x30a91b(0xd8)],buttonMessage,{'quoted':m});}function _0x397f(){const _0x44c6c5=['chat','NEXT','822061VJisDH','717102guNUxo','4037805gXjPrn','sendMessage','21cUNdXI','R-\x20BOT\x20MD','https://wallebotapi.mitomods.com/docs/nsfw/bdsm?apikey=Donitas','317972PUpriU','wait','1737858ZKWBXP','botnma','1637488iAcVJz','4357242fXNQtX','5ZbGCSV'];_0x397f=function(){return _0x44c6c5;};return _0x397f();}
                    break
                    
                    case 'blowjob': const _0x582929=_0xd87a;(function(_0x4ec9b2,_0x9446e0){const _0x581c70=_0xd87a,_0x28dff9=_0x4ec9b2();while(!![]){try{const _0x4ced47=parseInt(_0x581c70(0x1bc))/0x1+parseInt(_0x581c70(0x1b0))/0x2*(parseInt(_0x581c70(0x1ba))/0x3)+parseInt(_0x581c70(0x1b1))/0x4*(-parseInt(_0x581c70(0x1b5))/0x5)+parseInt(_0x581c70(0x1af))/0x6+parseInt(_0x581c70(0x1bb))/0x7+-parseInt(_0x581c70(0x1b3))/0x8*(parseInt(_0x581c70(0x1b6))/0x9)+-parseInt(_0x581c70(0x1b9))/0xa*(parseInt(_0x581c70(0x1ae))/0xb);if(_0x4ced47===_0x9446e0)break;else _0x28dff9['push'](_0x28dff9['shift']());}catch(_0x2ba969){_0x28dff9['push'](_0x28dff9['shift']());}}}(_0x3715,0x4d2d7));function _0xd87a(_0x23168d,_0x2bbabf){const _0x3715c2=_0x3715();return _0xd87a=function(_0xd87a9,_0x43a8e8){_0xd87a9=_0xd87a9-0x1ae;let _0x553857=_0x3715c2[_0xd87a9];return _0x553857;},_0xd87a(_0x23168d,_0x2bbabf);}function _0x3715(){const _0x343963=['NEXT','664433EFJMNg','1146918OBsAPH','102mMcNGa','4MJHuKI','botnma','8OtOyNL','sendMessage','2328515YDCZVa','989658kkNEYn','result','https://wallebotapi.mitomods.com/docs/nsfw/blowjob?apikey=Donitas','30rIFPkO','11901MyMOkM','3634302oKcWQe','160337TWawqo','wait','chat'];_0x3715=function(){return _0x343963;};return _0x3715();}{m.reply(mess[_0x582929(0x1bd)]);let buttons=[{'buttonId':'blowjob','buttonText':{'displayText':_0x582929(0x1bf)},'type':0x1}],anu=await fetchJson(_0x582929(0x1b8)),buttonMessage={'image':{'url':''+anu[_0x582929(0x1b7)]},'caption':'R-\x20BOT\x20MD','footer':global[_0x582929(0x1b2)],'buttons':buttons,'headerType':0x4};rama[_0x582929(0x1b4)](m[_0x582929(0x1be)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'cuckold': const _0x2ca982=_0x58be;(function(_0x21a7b8,_0x4876b0){const _0x32f84b=_0x58be,_0x319bfc=_0x21a7b8();while(!![]){try{const _0x1ff575=-parseInt(_0x32f84b(0x178))/0x1*(-parseInt(_0x32f84b(0x189))/0x2)+parseInt(_0x32f84b(0x179))/0x3+parseInt(_0x32f84b(0x186))/0x4+parseInt(_0x32f84b(0x177))/0x5*(parseInt(_0x32f84b(0x180))/0x6)+parseInt(_0x32f84b(0x187))/0x7+parseInt(_0x32f84b(0x17c))/0x8+parseInt(_0x32f84b(0x17e))/0x9*(-parseInt(_0x32f84b(0x184))/0xa);if(_0x1ff575===_0x4876b0)break;else _0x319bfc['push'](_0x319bfc['shift']());}catch(_0x5cc33e){_0x319bfc['push'](_0x319bfc['shift']());}}}(_0x275e,0xea73c));function _0x275e(){const _0x1d84b1=['109404ARnWlk','NEXT','2616510fvwnXd','R-\x20BOT\x20MD','chat','sendMessage','2960DcRMYw','botnma','214508bourFr','9342739dqLrnG','result','1282744bSKzIj','5ZvAcSK','1AJVUwM','1684557Ntswrc','cuckold','https://wallebotapi.mitomods.com/docs/nsfw/cuckold?apikey=Donitas','12249696AjJsFQ','wait'];_0x275e=function(){return _0x1d84b1;};return _0x275e();}function _0x58be(_0x298e36,_0x4dc4a9){const _0x275e44=_0x275e();return _0x58be=function(_0x58bea8,_0x38b31c){_0x58bea8=_0x58bea8-0x177;let _0x573d52=_0x275e44[_0x58bea8];return _0x573d52;},_0x58be(_0x298e36,_0x4dc4a9);}{m.reply(mess[_0x2ca982(0x17d)]);let buttons=[{'buttonId':_0x2ca982(0x17a),'buttonText':{'displayText':_0x2ca982(0x17f)},'type':0x1}],anu=await fetchJson(_0x2ca982(0x17b)),buttonMessage={'image':{'url':''+anu[_0x2ca982(0x188)]},'caption':_0x2ca982(0x181),'footer':global[_0x2ca982(0x185)],'buttons':buttons,'headerType':0x4};rama[_0x2ca982(0x183)](m[_0x2ca982(0x182)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'cum': function _0x2fd1(_0x106d8d,_0x45d326){const _0x2a5c3b=_0x2a5c();return _0x2fd1=function(_0x2fd13b,_0x2b8ec8){_0x2fd13b=_0x2fd13b-0x12f;let _0xd4b958=_0x2a5c3b[_0x2fd13b];return _0xd4b958;},_0x2fd1(_0x106d8d,_0x45d326);}const _0x5b0145=_0x2fd1;(function(_0x2db56b,_0x1f7180){const _0x48d9fc=_0x2fd1,_0x261391=_0x2db56b();while(!![]){try{const _0x29d007=-parseInt(_0x48d9fc(0x12f))/0x1*(-parseInt(_0x48d9fc(0x141))/0x2)+-parseInt(_0x48d9fc(0x13a))/0x3+parseInt(_0x48d9fc(0x13e))/0x4+parseInt(_0x48d9fc(0x13f))/0x5*(parseInt(_0x48d9fc(0x138))/0x6)+-parseInt(_0x48d9fc(0x13b))/0x7*(-parseInt(_0x48d9fc(0x133))/0x8)+-parseInt(_0x48d9fc(0x137))/0x9*(parseInt(_0x48d9fc(0x136))/0xa)+-parseInt(_0x48d9fc(0x130))/0xb;if(_0x29d007===_0x1f7180)break;else _0x261391['push'](_0x261391['shift']());}catch(_0x7c9d71){_0x261391['push'](_0x261391['shift']());}}}(_0x2a5c,0x71b37));function _0x2a5c(){const _0x5ba11f=['1376190gEpYpy','1084874sHQkaN','botnma','result','1781928KQpQKH','1780bJDHYH','wait','9406PqcViI','55npkkxW','3841717wZBENy','NEXT','chat','16iDpTmK','R-\x20BOT\x20MD','https://wallebotapi.mitomods.com/docs/nsfw/cum?apikey=Donitas','1670ZMiEMM','28449HPUWWS','13272bJyHnX','cum'];_0x2a5c=function(){return _0x5ba11f;};return _0x2a5c();}{m.reply(mess[_0x5b0145(0x140)]);let buttons=[{'buttonId':_0x5b0145(0x139),'buttonText':{'displayText':_0x5b0145(0x131)},'type':0x1}],anu=await fetchJson(_0x5b0145(0x135)),buttonMessage={'image':{'url':''+anu[_0x5b0145(0x13d)]},'caption':_0x5b0145(0x134),'footer':global[_0x5b0145(0x13c)],'buttons':buttons,'headerType':0x4};rama['sendMessage'](m[_0x5b0145(0x132)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'ero': function _0x21a0(){const _0x3dca6f=['20vrjKRJ','2201766DtwSYl','578611rriDPt','wait','141640USsKBY','sendMessage','20fqIqJV','157366qDvUOU','botnma','1452324BaaDAw','759984Qjfrqu','5136939OcZkla','7JsAces','result','1XzHIbi','NEXT','ero','chat'];_0x21a0=function(){return _0x3dca6f;};return _0x21a0();}const _0x133d5d=_0x5bbc;function _0x5bbc(_0xb503f,_0x113222){const _0x21a057=_0x21a0();return _0x5bbc=function(_0x5bbcf2,_0x3ccf2d){_0x5bbcf2=_0x5bbcf2-0x1bd;let _0x1bf75b=_0x21a057[_0x5bbcf2];return _0x1bf75b;},_0x5bbc(_0xb503f,_0x113222);}(function(_0x1f9372,_0x42eb6d){const _0x41bf4a=_0x5bbc,_0x4cf031=_0x1f9372();while(!![]){try{const _0x56b378=-parseInt(_0x41bf4a(0x1bf))/0x1*(-parseInt(_0x41bf4a(0x1ca))/0x2)+parseInt(_0x41bf4a(0x1cc))/0x3+-parseInt(_0x41bf4a(0x1c3))/0x4*(parseInt(_0x41bf4a(0x1c7))/0x5)+parseInt(_0x41bf4a(0x1c4))/0x6*(parseInt(_0x41bf4a(0x1bd))/0x7)+parseInt(_0x41bf4a(0x1cd))/0x8+-parseInt(_0x41bf4a(0x1ce))/0x9+-parseInt(_0x41bf4a(0x1c9))/0xa*(-parseInt(_0x41bf4a(0x1c5))/0xb);if(_0x56b378===_0x42eb6d)break;else _0x4cf031['push'](_0x4cf031['shift']());}catch(_0x315e59){_0x4cf031['push'](_0x4cf031['shift']());}}}(_0x21a0,0x65f05));{m.dripsantividreply(mess[_0x133d5d(0x1c6)]);let buttons=[{'buttonId':_0x133d5d(0x1c1),'buttonText':{'displayText':_0x133d5d(0x1c0)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ero?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x133d5d(0x1be)]},'caption':'R-\x20BOT\x20MD','footer':global[_0x133d5d(0x1cb)],'buttons':buttons,'headerType':0x4};rama[_0x133d5d(0x1c8)](m[_0x133d5d(0x1c2)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'fendom': function _0xc027(){const _0x304d7e=['104QZoQpu','wait','https://wallebotapi.mitomods.com/docs/nsfw/femdom?apikey=Donitas','6185352oGpJVq','fendom','8027240tkPYjB','428526ztnxyM','chat','result','2kJhlgC','15333320ScQLOG','botnma','NEXT','6430alqXaj','sendMessage','R-\x20BOT\x20MD','9rdjaMl','4959178YqfBJz','70008nLzHcI'];_0xc027=function(){return _0x304d7e;};return _0xc027();}const _0x31df39=_0x1ade;(function(_0x1be92c,_0x4608bb){const _0x4b7219=_0x1ade,_0x502989=_0x1be92c();while(!![]){try{const _0x5576b=parseInt(_0x4b7219(0x108))/0x1*(parseInt(_0x4b7219(0xf8))/0x2)+parseInt(_0x4b7219(0x101))/0x3*(-parseInt(_0x4b7219(0x102))/0x4)+parseInt(_0x4b7219(0xfc))/0x5+parseInt(_0x4b7219(0x105))/0x6+-parseInt(_0x4b7219(0x100))/0x7+-parseInt(_0x4b7219(0x107))/0x8+-parseInt(_0x4b7219(0xff))/0x9*(-parseInt(_0x4b7219(0xf9))/0xa);if(_0x5576b===_0x4608bb)break;else _0x502989['push'](_0x502989['shift']());}catch(_0x3d0311){_0x502989['push'](_0x502989['shift']());}}}(_0xc027,0xa4e71));function _0x1ade(_0x406daa,_0x227acb){const _0xc027bf=_0xc027();return _0x1ade=function(_0x1adea0,_0x59ee95){_0x1adea0=_0x1adea0-0xf7;let _0x22ef2d=_0xc027bf[_0x1adea0];return _0x22ef2d;},_0x1ade(_0x406daa,_0x227acb);}{m.reply(mess[_0x31df39(0x103)]);let buttons=[{'buttonId':_0x31df39(0x106),'buttonText':{'displayText':_0x31df39(0xfb)},'type':0x1}],anu=await fetchJson(_0x31df39(0x104)),buttonMessage={'image':{'url':''+anu[_0x31df39(0xf7)]},'caption':_0x31df39(0xfe),'footer':global[_0x31df39(0xfa)],'buttons':buttons,'headerType':0x4};rama[_0x31df39(0xfd)](m[_0x31df39(0x109)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'foot': const _0x4b2646=_0x3fab;(function(_0x3c3d40,_0x1eb7f0){const _0x40228d=_0x3fab,_0x10c5bc=_0x3c3d40();while(!![]){try{const _0x4c7ec8=parseInt(_0x40228d(0x14e))/0x1*(parseInt(_0x40228d(0x15d))/0x2)+parseInt(_0x40228d(0x15b))/0x3+parseInt(_0x40228d(0x157))/0x4+parseInt(_0x40228d(0x159))/0x5*(-parseInt(_0x40228d(0x15c))/0x6)+parseInt(_0x40228d(0x14f))/0x7+-parseInt(_0x40228d(0x152))/0x8+-parseInt(_0x40228d(0x15e))/0x9;if(_0x4c7ec8===_0x1eb7f0)break;else _0x10c5bc['push'](_0x10c5bc['shift']());}catch(_0xb35706){_0x10c5bc['push'](_0x10c5bc['shift']());}}}(_0x117e,0x7a0ee));function _0x3fab(_0x489215,_0xabe436){const _0x117e1c=_0x117e();return _0x3fab=function(_0x3fab9a,_0x47ebea){_0x3fab9a=_0x3fab9a-0x14e;let _0xbac4fe=_0x117e1c[_0x3fab9a];return _0xbac4fe;},_0x3fab(_0x489215,_0xabe436);}function _0x117e(){const _0xbc3288=['result','1818544wOxwfq','sendMessage','644855UiJdUN','foot','1444725HrtzKj','30FrGCFw','1295214AHfDcx','5692824OiByEe','1wXGErM','4150797qqHbFb','botnma','wait','3195584gVefky','https://wallebotapi.mitomods.com/docs/nsfw/foot?apikey=Donitas','R-\x20BOT\x20MD','NEXT'];_0x117e=function(){return _0xbc3288;};return _0x117e();}{m.reply(mess[_0x4b2646(0x151)]);let buttons=[{'buttonId':_0x4b2646(0x15a),'buttonText':{'displayText':_0x4b2646(0x155)},'type':0x1}],anu=await fetchJson(_0x4b2646(0x153)),buttonMessage={'image':{'url':''+anu[_0x4b2646(0x156)]},'caption':_0x4b2646(0x154),'footer':global[_0x4b2646(0x150)],'buttons':buttons,'headerType':0x4};rama[_0x4b2646(0x158)](m['chat'],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'gangbang': function _0xe975(_0x159cbe,_0x1a1f6b){const _0xbd2375=_0xbd23();return _0xe975=function(_0xe97543,_0xfaebcc){_0xe97543=_0xe97543-0xa2;let _0x2add0b=_0xbd2375[_0xe97543];return _0x2add0b;},_0xe975(_0x159cbe,_0x1a1f6b);}const _0x31c93e=_0xe975;(function(_0x34f6de,_0xc47e69){const _0x1bd83a=_0xe975,_0x2f044e=_0x34f6de();while(!![]){try{const _0x4b4556=-parseInt(_0x1bd83a(0xaa))/0x1+-parseInt(_0x1bd83a(0xa6))/0x2+parseInt(_0x1bd83a(0xa4))/0x3+-parseInt(_0x1bd83a(0xa9))/0x4+parseInt(_0x1bd83a(0xab))/0x5+parseInt(_0x1bd83a(0xa5))/0x6+-parseInt(_0x1bd83a(0xac))/0x7;if(_0x4b4556===_0xc47e69)break;else _0x2f044e['push'](_0x2f044e['shift']());}catch(_0x1a09c2){_0x2f044e['push'](_0x2f044e['shift']());}}}(_0xbd23,0x9f945));function _0xbd23(){const _0x3c4f6b=['gangbang','sendMessage','botnma','chat','3659247QsAofT','7443054GIdCkj','1476024qGUVot','wait','result','2316992EcEJJJ','61942YarfjT','2722435PUkgOQ','6803342KdTEtR'];_0xbd23=function(){return _0x3c4f6b;};return _0xbd23();}{m.reply(mess[_0x31c93e(0xa7)]);let buttons=[{'buttonId':_0x31c93e(0xad),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/gangbang?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x31c93e(0xa8)]},'caption':'R-\x20BOT\x20MD','footer':global[_0x31c93e(0xa2)],'buttons':buttons,'headerType':0x4};rama[_0x31c93e(0xae)](m[_0x31c93e(0xa3)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'glasses': function _0x53c9(_0x429892,_0x3cc253){const _0x1ceefe=_0x1cee();return _0x53c9=function(_0x53c92d,_0x1f9276){_0x53c92d=_0x53c92d-0xac;let _0x33eaaa=_0x1ceefe[_0x53c92d];return _0x33eaaa;},_0x53c9(_0x429892,_0x3cc253);}function _0x1cee(){const _0x25d02d=['NEXT','20mOgQMX','50yTlkag','result','wait','2xsEsvT','glasses','2432526QSPzIT','3387LGBWDu','300852KNpHGV','chat','1274026EdaQJc','452930usPFTW','403953fcaTko','21zLGOEK','360096epCFOb'];_0x1cee=function(){return _0x25d02d;};return _0x1cee();}const _0xb37883=_0x53c9;(function(_0x59d677,_0x34868c){const _0x4b2423=_0x53c9,_0x17fc3c=_0x59d677();while(!![]){try{const _0x4a3066=-parseInt(_0x4b2423(0xae))/0x1+parseInt(_0x4b2423(0xb8))/0x2*(parseInt(_0x4b2423(0xbb))/0x3)+-parseInt(_0x4b2423(0xb4))/0x4*(-parseInt(_0x4b2423(0xaf))/0x5)+parseInt(_0x4b2423(0xba))/0x6*(parseInt(_0x4b2423(0xb1))/0x7)+parseInt(_0x4b2423(0xb2))/0x8+parseInt(_0x4b2423(0xac))/0x9+parseInt(_0x4b2423(0xb5))/0xa*(parseInt(_0x4b2423(0xb0))/0xb);if(_0x4a3066===_0x34868c)break;else _0x17fc3c['push'](_0x17fc3c['shift']());}catch(_0x50a03a){_0x17fc3c['push'](_0x17fc3c['shift']());}}}(_0x1cee,0xa0baf));{m.reply(mess[_0xb37883(0xb7)]);let buttons=[{'buttonId':_0xb37883(0xb9),'buttonText':{'displayText':_0xb37883(0xb3)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/glasses?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xb37883(0xb6)]},'caption':'R-\x20BOT\x20MD','footer':global['botnma'],'buttons':buttons,'headerType':0x4};rama['sendMessage'](m[_0xb37883(0xad)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'hentai': const _0x557bd7=_0x3f2e;function _0x3f2e(_0x5b985f,_0xddfec4){const _0x1de90c=_0x1de9();return _0x3f2e=function(_0x3f2e9a,_0x52f2b2){_0x3f2e9a=_0x3f2e9a-0xc5;let _0x1d4ee1=_0x1de90c[_0x3f2e9a];return _0x1d4ee1;},_0x3f2e(_0x5b985f,_0xddfec4);}(function(_0x3914ac,_0x19aaf5){const _0x55b090=_0x3f2e,_0x5db243=_0x3914ac();while(!![]){try{const _0x999abf=parseInt(_0x55b090(0xcb))/0x1+-parseInt(_0x55b090(0xc5))/0x2+-parseInt(_0x55b090(0xcc))/0x3*(-parseInt(_0x55b090(0xc7))/0x4)+-parseInt(_0x55b090(0xd2))/0x5+parseInt(_0x55b090(0xd3))/0x6+parseInt(_0x55b090(0xc6))/0x7+-parseInt(_0x55b090(0xcf))/0x8;if(_0x999abf===_0x19aaf5)break;else _0x5db243['push'](_0x5db243['shift']());}catch(_0x4d6a62){_0x5db243['push'](_0x5db243['shift']());}}}(_0x1de9,0xc1657));function _0x1de9(){const _0x29aa05=['botnma','https://wallebotapi.mitomods.com/docs/nsfw/hentai?apikey=Donitas','10321936sHviRH','wait','sendMessage','2850540bThNsq','2947980ojZRCL','hentai','result','936718BeETIs','3448900EhDIAq','4GRJYMS','chat','R-\x20BOT\x20MD','NEXT','1055826EhkRDM','3243012IjQTKo'];_0x1de9=function(){return _0x29aa05;};return _0x1de9();}{m.reply(mess[_0x557bd7(0xd0)]);let buttons=[{'buttonId':_0x557bd7(0xd4),'buttonText':{'displayText':_0x557bd7(0xca)},'type':0x1}],anu=await fetchJson(_0x557bd7(0xce)),buttonMessage={'image':{'url':''+anu[_0x557bd7(0xd5)]},'caption':_0x557bd7(0xc9),'footer':global[_0x557bd7(0xcd)],'buttons':buttons,'headerType':0x4};rama[_0x557bd7(0xd1)](m[_0x557bd7(0xc8)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'masturbation': const _0x4885dc=_0x39be;(function(_0x4a710a,_0x501687){const _0x314ea1=_0x39be,_0x15ad79=_0x4a710a();while(!![]){try{const _0x31306d=parseInt(_0x314ea1(0x13b))/0x1+parseInt(_0x314ea1(0x144))/0x2+parseInt(_0x314ea1(0x138))/0x3*(-parseInt(_0x314ea1(0x145))/0x4)+parseInt(_0x314ea1(0x13d))/0x5+parseInt(_0x314ea1(0x13c))/0x6+-parseInt(_0x314ea1(0x143))/0x7+-parseInt(_0x314ea1(0x13e))/0x8;if(_0x31306d===_0x501687)break;else _0x15ad79['push'](_0x15ad79['shift']());}catch(_0x156ce3){_0x15ad79['push'](_0x15ad79['shift']());}}}(_0x2db1,0x632dd));function _0x2db1(){const _0x4b0ce4=['5319874ivXSxh','343508uSHufn','1032GItPlt','sendMessage','7263jqAoDL','chat','NEXT','767421ERuKoN','2017512WpkwiI','3415895tEdPKN','1342152gbfRyz','masturbation','https://wallebotapi.mitomods.com/docs/nsfw/masturbation?apikey=Donitas','R-\x20BOT\x20MD','result'];_0x2db1=function(){return _0x4b0ce4;};return _0x2db1();}function _0x39be(_0x202be7,_0x5f1496){const _0x2db1e9=_0x2db1();return _0x39be=function(_0x39bef8,_0x181e4b){_0x39bef8=_0x39bef8-0x137;let _0xa4f1b8=_0x2db1e9[_0x39bef8];return _0xa4f1b8;},_0x39be(_0x202be7,_0x5f1496);}{m.reply(mess['wait']);let buttons=[{'buttonId':_0x4885dc(0x13f),'buttonText':{'displayText':_0x4885dc(0x13a)},'type':0x1}],anu=await fetchJson(_0x4885dc(0x140)),buttonMessage={'image':{'url':''+anu[_0x4885dc(0x142)]},'caption':_0x4885dc(0x141),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};rama[_0x4885dc(0x137)](m[_0x4885dc(0x139)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'neko': function _0x32ab(){const _0x4bb5c9=['442936QBYDwG','174198mbfNBQ','370TIUWVi','botnma','7sDVjyt','chat','4180WFizDU','2057085PKdiwN','1880vGNOcd','13288Dtzmjl','sendMessage','40VzPOsK','3135564JqARhG','result','2223894JcYUbE','neko'];_0x32ab=function(){return _0x4bb5c9;};return _0x32ab();}const _0xe7198c=_0x5d77;function _0x5d77(_0x319f47,_0x202d8d){const _0x32ab09=_0x32ab();return _0x5d77=function(_0x5d7766,_0x36f4a5){_0x5d7766=_0x5d7766-0x1cf;let _0x27f02e=_0x32ab09[_0x5d7766];return _0x27f02e;},_0x5d77(_0x319f47,_0x202d8d);}(function(_0x2fb1da,_0x5ba1ac){const _0x4b1c41=_0x5d77,_0x404c95=_0x2fb1da();while(!![]){try{const _0x1a9066=parseInt(_0x4b1c41(0x1da))/0x1*(parseInt(_0x4b1c41(0x1de))/0x2)+-parseInt(_0x4b1c41(0x1d9))/0x3*(parseInt(_0x4b1c41(0x1d3))/0x4)+parseInt(_0x4b1c41(0x1cf))/0x5+parseInt(_0x4b1c41(0x1d6))/0x6*(parseInt(_0x4b1c41(0x1dc))/0x7)+parseInt(_0x4b1c41(0x1d8))/0x8+-parseInt(_0x4b1c41(0x1d4))/0x9+-parseInt(_0x4b1c41(0x1d0))/0xa*(-parseInt(_0x4b1c41(0x1d1))/0xb);if(_0x1a9066===_0x5ba1ac)break;else _0x404c95['push'](_0x404c95['shift']());}catch(_0x128a7f){_0x404c95['push'](_0x404c95['shift']());}}}(_0x32ab,0xddded));{m.reply(mess['wait']);let buttons=[{'buttonId':_0xe7198c(0x1d7),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/neko?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xe7198c(0x1d5)]},'caption':'R-\x20BOT\x20MD','footer':global[_0xe7198c(0x1db)],'buttons':buttons,'headerType':0x4};rama[_0xe7198c(0x1d2)](m[_0xe7198c(0x1dd)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'orgy': const _0x53f892=_0x258a;function _0x258a(_0x288261,_0x35748f){const _0x2afae5=_0x2afa();return _0x258a=function(_0x258a73,_0x2c6b6e){_0x258a73=_0x258a73-0x1dc;let _0x461db8=_0x2afae5[_0x258a73];return _0x461db8;},_0x258a(_0x288261,_0x35748f);}(function(_0xe86978,_0x59f3a4){const _0x1b8578=_0x258a,_0xf8390c=_0xe86978();while(!![]){try{const _0x58697b=parseInt(_0x1b8578(0x1e6))/0x1*(-parseInt(_0x1b8578(0x1e3))/0x2)+-parseInt(_0x1b8578(0x1e0))/0x3+parseInt(_0x1b8578(0x1e4))/0x4*(-parseInt(_0x1b8578(0x1e8))/0x5)+parseInt(_0x1b8578(0x1dc))/0x6*(parseInt(_0x1b8578(0x1e5))/0x7)+parseInt(_0x1b8578(0x1eb))/0x8+parseInt(_0x1b8578(0x1ea))/0x9*(-parseInt(_0x1b8578(0x1ec))/0xa)+parseInt(_0x1b8578(0x1de))/0xb;if(_0x58697b===_0x59f3a4)break;else _0xf8390c['push'](_0xf8390c['shift']());}catch(_0x14c2e9){_0xf8390c['push'](_0xf8390c['shift']());}}}(_0x2afa,0x5a65a));{m.reply(mess[_0x53f892(0x1e1)]);let buttons=[{'buttonId':'orgy','buttonText':{'displayText':_0x53f892(0x1dd)},'type':0x1}],anu=await fetchJson(_0x53f892(0x1e7)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x53f892(0x1df),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};rama[_0x53f892(0x1e2)](m[_0x53f892(0x1e9)],buttonMessage,{'quoted':m});}function _0x2afa(){const _0x26e94d=['wait','sendMessage','42xZkCLe','4pcOWox','7kGQNac','7554kqNxpR','https://wallebotapi.mitomods.com/docs/nsfw/orgy?apikey=Donitas','796285sLhnVD','chat','63pMrUmd','5784576SVZCuM','700280TTvpbE','3563706sZKpaj','NEXT','5001612vpTrRb','R-\x20BOT\x20MD','1780086nQOMte'];_0x2afa=function(){return _0x26e94d;};return _0x2afa();}
                    break
                    
                    case 'panties': function _0xc46f(){const _0x15cf6b=['chat','botnma','4153680mcaeiO','10dskSOg','6VZGKUe','https://wallebotapi.mitomods.com/docs/nsfw/panties?apikey=Donitas','panties','result','411971LGkalH','5345496FwFokC','1574937DlDbQe','wait','NEXT','73537hWPSvW','R-\x20BOT\x20MD','5772445fuusqU','870954wEriPw','sendMessage'];_0xc46f=function(){return _0x15cf6b;};return _0xc46f();}const _0x42cb40=_0x1864;(function(_0x1cd42a,_0x42582c){const _0x8d8311=_0x1864,_0x594a3a=_0x1cd42a();while(!![]){try{const _0x2f503b=-parseInt(_0x8d8311(0xab))/0x1*(parseInt(_0x8d8311(0xb3))/0x2)+parseInt(_0x8d8311(0xae))/0x3+parseInt(_0x8d8311(0xb2))/0x4+-parseInt(_0x8d8311(0xad))/0x5+parseInt(_0x8d8311(0xa2))/0x6*(-parseInt(_0x8d8311(0xa6))/0x7)+parseInt(_0x8d8311(0xa7))/0x8+parseInt(_0x8d8311(0xa8))/0x9;if(_0x2f503b===_0x42582c)break;else _0x594a3a['push'](_0x594a3a['shift']());}catch(_0x2c7643){_0x594a3a['push'](_0x594a3a['shift']());}}}(_0xc46f,0x9042b));function _0x1864(_0x275477,_0x1f2753){const _0xc46fe4=_0xc46f();return _0x1864=function(_0x186434,_0x36524d){_0x186434=_0x186434-0xa2;let _0x3824f7=_0xc46fe4[_0x186434];return _0x3824f7;},_0x1864(_0x275477,_0x1f2753);}{m.reply(mess[_0x42cb40(0xa9)]);let buttons=[{'buttonId':_0x42cb40(0xa4),'buttonText':{'displayText':_0x42cb40(0xaa)},'type':0x1}],anu=await fetchJson(_0x42cb40(0xa3)),buttonMessage={'image':{'url':''+anu[_0x42cb40(0xa5)]},'caption':_0x42cb40(0xac),'footer':global[_0x42cb40(0xb1)],'buttons':buttons,'headerType':0x4};rama[_0x42cb40(0xaf)](m[_0x42cb40(0xb0)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'pussy': const _0x5d1ac1=_0x35f7;(function(_0x515431,_0x70562f){const _0x52c802=_0x35f7,_0x4bc375=_0x515431();while(!![]){try{const _0x2e851b=parseInt(_0x52c802(0x7c))/0x1*(-parseInt(_0x52c802(0x86))/0x2)+parseInt(_0x52c802(0x8a))/0x3*(parseInt(_0x52c802(0x8d))/0x4)+parseInt(_0x52c802(0x85))/0x5+parseInt(_0x52c802(0x87))/0x6*(parseInt(_0x52c802(0x88))/0x7)+-parseInt(_0x52c802(0x80))/0x8*(parseInt(_0x52c802(0x7d))/0x9)+parseInt(_0x52c802(0x89))/0xa+-parseInt(_0x52c802(0x84))/0xb;if(_0x2e851b===_0x70562f)break;else _0x4bc375['push'](_0x4bc375['shift']());}catch(_0x366ecb){_0x4bc375['push'](_0x4bc375['shift']());}}}(_0x49e2,0x99615));function _0x35f7(_0x289517,_0x2517a0){const _0x49e200=_0x49e2();return _0x35f7=function(_0x35f7b0,_0x1c6d27){_0x35f7b0=_0x35f7b0-0x7c;let _0x290623=_0x49e200[_0x35f7b0];return _0x290623;},_0x35f7(_0x289517,_0x2517a0);}function _0x49e2(){const _0x4b7ab0=['chat','pussy','https://wallebotapi.mitomods.com/docs/nsfw/pussy?apikey=Donitas','12379422UPfGhI','5262460AgrkWy','2XzkqcF','274782pMMPVY','126urFRZW','9615280iRCPnf','268275jsepKO','NEXT','botnma','24vtNotI','1195213IOocCQ','684YUWPKz','sendMessage','wait','44848SOtwrq'];_0x49e2=function(){return _0x4b7ab0;};return _0x49e2();}{m.reply(mess[_0x5d1ac1(0x7f)]);let buttons=[{'buttonId':_0x5d1ac1(0x82),'buttonText':{'displayText':_0x5d1ac1(0x8b)},'type':0x1}],anu=await fetchJson(_0x5d1ac1(0x83)),buttonMessage={'image':{'url':''+anu['result']},'caption':'R-\x20BOT\x20MD','footer':global[_0x5d1ac1(0x8c)],'buttons':buttons,'headerType':0x4};rama[_0x5d1ac1(0x7e)](m[_0x5d1ac1(0x81)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'thighs': function _0x4b34(_0x22ae9d,_0x1b7b0f){const _0x5955d9=_0x5955();return _0x4b34=function(_0x4b34b7,_0x1ddb61){_0x4b34b7=_0x4b34b7-0x1c2;let _0x5d4211=_0x5955d9[_0x4b34b7];return _0x5d4211;},_0x4b34(_0x22ae9d,_0x1b7b0f);}const _0x2221a2=_0x4b34;function _0x5955(){const _0x110e7d=['sendMessage','1093970DSMAQE','botnma','NEXT','https://wallebotapi.mitomods.com/docs/nsfw/thighs?apikey=Donitas','2151395PpSjci','R-\x20BOT\x20MD','12JMKCVS','19922TmhQUR','wait','492009FBnOUm','72SnrqXB','194080tRRKnp','thighs','5970767VVepYL','121fRvIMb','18GszdWR','51CORiEY','343612uKXWeo','chat'];_0x5955=function(){return _0x110e7d;};return _0x5955();}(function(_0x579e1e,_0x50f2d8){const _0x5d2342=_0x4b34,_0x332d42=_0x579e1e();while(!![]){try{const _0x3a00a0=parseInt(_0x5d2342(0x1d3))/0x1*(parseInt(_0x5d2342(0x1cc))/0x2)+parseInt(_0x5d2342(0x1d5))/0x3*(-parseInt(_0x5d2342(0x1c2))/0x4)+parseInt(_0x5d2342(0x1c9))/0x5*(parseInt(_0x5d2342(0x1d4))/0x6)+parseInt(_0x5d2342(0x1ce))/0x7+-parseInt(_0x5d2342(0x1d0))/0x8*(-parseInt(_0x5d2342(0x1cf))/0x9)+parseInt(_0x5d2342(0x1c5))/0xa+-parseInt(_0x5d2342(0x1d2))/0xb*(parseInt(_0x5d2342(0x1cb))/0xc);if(_0x3a00a0===_0x50f2d8)break;else _0x332d42['push'](_0x332d42['shift']());}catch(_0x3df376){_0x332d42['push'](_0x332d42['shift']());}}}(_0x5955,0xd39ae));{m.reply(mess[_0x2221a2(0x1cd)]);let buttons=[{'buttonId':_0x2221a2(0x1d1),'buttonText':{'displayText':_0x2221a2(0x1c7)},'type':0x1}],anu=await fetchJson(_0x2221a2(0x1c8)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x2221a2(0x1ca),'footer':global[_0x2221a2(0x1c6)],'buttons':buttons,'headerType':0x4};rama[_0x2221a2(0x1c4)](m[_0x2221a2(0x1c3)],buttonMessage,{'quoted':m});}
                    break*/
                    					
				case 'waifu': case 'loli':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					rama.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenuxxx": 
if (!text) return m.reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
m.reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
m.reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
m.reply("Success Changing Menu To "+q)
}
break
                    case 'bug': case 'report': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                    	if(!text) return m.reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	rama.sendMessage(`6282142108243@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
m.reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
                     /*case 'alive': case 'bot':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `┌─❖
│ _____[ *Hi 👋* ]_____
└┬❖  _____[ *${pushname}* ]_____
┌┤✑  Shashi burina thaicho🎉
││✑  🖐️!!
│└───────────────┈ ⳹
│  _____[ *BOT INFO* ]_____
 *÷>* 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
 *÷>* 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
 *÷>* 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
 *÷>* 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
 *÷>* 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
 *÷>* 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
 *÷>* 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
 *÷>* 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬──────────────┈ ⳹
   │✑  Please Select The Button Below
   └───────────────┈ ⳹`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'BOT GRUP',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                rama.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break*/
         /* case 'help': case 'bot': case 'list': case 'menu': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: `
┌─❖
│ *Hi 👋*
└❖ [ *${pushname}* ]
 │ *->* *WHATSAPP BOTS*
 └───────────────┈ ⳹
  `,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')}, 
                            hydratedFooterText: `_____[ *BOT INFO* ]_____
 ÷> 𝗦𝗽𝗲𝗲𝗱 
 : ${latensie.toFixed(4)} miliseconds
 ÷> 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 
 : ${runtime(process.uptime())}
 ÷> 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 
 : ${global.botname}
 ÷> 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 
 : ${global.ownername} 
 ÷> 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 
 : ${os.hostname()}
 ÷> 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 
 : ${os.platform()}
 ÷> 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 
 : ${Object.keys(global.db.data.users).length}
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'BOT GRUP',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All MENU',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'LIST MENU',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                rama.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                rama.sendMessage(m.chat, { audio: fs.readFileSync('./noLT.m4a'), mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
                break
                case 'command': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `\n *Please Choose The Menu* \n`,
                    buttonText: "CLICK HERE",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main Features",
								"rows": [
									{
										"title": "Main Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "Rpg Menu",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "Random Menu",
										"description": "Displays The List Of Random Features",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Random Anime Menu",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "TXT-to-IMG Menu",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "Islamic Menu",
										"description": "Displays The List Of Islamic Features",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Horoscope Menu",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							{
								"title": "Chat With Fellow Users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }           
            }), {quoted: m})
            rama.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
    case 'donasi': case 'donate': 
    m.reply(`DONASI SE IKLASNYA\n0823-3809-8038(Gopay)\n082142108243(pulsa)`)
    break
    case 'sewabot': case 'sewa': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                rama.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/9aae92f026c1ee0ce8ce9.jpg' }, caption: `*Hi Bro ${m.pushName}\nJika Kamu Ingin memasukkan, bot ini\n ke grup kamu transfer pulsa ke 082142108243(Telkomsel) atau\n gopay 0823-3809-8038 Harga 20k oke kalo udah \n lu bisa ss bukti pembayaran lalu lu kirim ke wa.me//6282142108243 dan kirim link grup juga agar bot bisa segera join` }, { quoted: m })
            }
            break
    case 'runtime':
    m.reply(`Runtime: ${runtime(process.uptime())}`)
    break      
            case 'sc': case 'script': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
                m.reply(`GitHub : https://github.com/ \n`)
            }
            break
case 'help': case 'bot': case 'list': case 'menu': case 'allmenu': {
rama.sendMessage(m.chat, { react: { text: emot, key: m.key }})
timestampe = speed();
latensie = speed() - timestampe 
let num = `${m.sender}` 
let nums = `6282142108243@s.whatsapp.net`	
         //MENU\\

let anuuuu = `Hai ${pushname} Selamat Menggunakan Bot ini 😊

  *BOT INFO*
🚄Speed : ${latensie.toFixed(4)} miliseconds
🕕Runtime : ${runtime(process.uptime())}
💻Host : ${os.hostname()}
🔭Plaform : ${os.platform()}
  
  *OWNER MENU*
  *${smbol}* ${prefix}chat [option]
  *${smbol}* ${prefix}join [link]
  *${smbol}* ${prefix}leave
  *${smbol}* ${prefix}block [user]
  *${smbol}* ${prefix}unblock [user]
  *${smbol}* ${prefix}bcgroup [text]
  *${smbol}* ${prefix}bcall [text] 
  *${smbol}* ${prefix}setppbot [image]
  *${smbol}* ${prefix}setexif
 
  *GROUP MENU*
  *${smbol}* ${prefix}grouplink
  *${smbol}* ${prefix}ephemeral [option]
  *${smbol}* ${prefix}setgcpp [image]
  *${smbol}* ${prefix}setname [text]
  *${smbol}* ${prefix}setdesc [text]
  *${smbol}* ${prefix}group [text]
  *${smbol}* ${prefix}editinfo [option]
  *${smbol}* ${prefix}add [user]
  *${smbol}* ${prefix}kick [reply/tag]
  *${smbol}* ${prefix}hidetag [text]
  *${smbol}* ${prefix}tagall [text]
  *${smbol}* ${prefix}antilink [on/off]
  *${smbol}* ${prefix}mute [on/off]
  *${smbol}* ${prefix}promote [reply/tag]
  *${smbol}* ${prefix}demote [reply/tag]
  *${smbol}* ${prefix}vote
  *${smbol}* ${prefix}devote
  *${smbol}* ${prefix}upvote
  *${smbol}* ${prefix}checkvote
  *${smbol}* ${prefix}delvote

  *DOWNLOAD MENU*
  *${smbol}* ${prefix}ytmp3 [url|quality]
  *${smbol}* ${prefix}ytmp4 [url|quality]
  *${smbol}* ${prefix}getmusic [yt link]
  *${smbol}* ${prefix}getvideo [yt link]
  *${smbol}* ${prefix}tiktok [link]
  *${smbol}* ${prefix}umma [query]
  
  *SEARCH MENU*
  *${smbol}* ${prefix}play [query]
  *${smbol}* ${prefix}song [query]
  *${smbol}* ${prefix}yts [query]
  *${smbol}* ${prefix}google [query]
  *${smbol}* ${prefix}gimage [query]
  *${smbol}* ${prefix}pinterest [query]
  *${smbol}* ${prefix}wallpaper [query]
  *${smbol}* ${prefix}wikimedia [query]
  *${smbol}* ${prefix}ytsearch [query]
  *${smbol}* ${prefix}ringtone [query]
 
  *RANDOM MENU*
  *${smbol}* ${prefix}coffee
  *${smbol}* ${prefix}animequote (Query)
  *${smbol}* ${prefix}couplepp

  *CONVERT MENU*
  *${smbol}* ${prefix}toimage [reply stick]
  *${smbol}* ${prefix}sticker [reply img|gif]
  *${smbol}* ${prefix}emojimix [moji+moji]
  *${smbol}* ${prefix}tovideo [reply img]
  *${smbol}* ${prefix}togif [reply stick]
  *${smbol}* ${prefix}tourl [reply img]
  *${smbol}* ${prefix}tovn [reply aud]
  *${smbol}* ${prefix}tomp3 [reply vn]
  *${smbol}* ${prefix}smeme [reply image (text)] 
  *${smbol}* ${prefix}toaudio [reply vid]
  *${smbol}* ${prefix}ebinary [reply txt]
  *${smbol}* ${prefix}dbinary [reply txt]
  *${smbol}* ${prefix}styletext [text]
  *${smbol}* ${prefix}bass [reply aud]
  *${smbol}* ${prefix}blown [reply aud]
  *${smbol}* ${prefix}deep [reply aud]
  *${smbol}* ${prefix}earrape [reply aud]
  *${smbol}* ${prefix}fast [reply aud]
  *${smbol}* ${prefix}fat [reply aud]
  *${smbol}* ${prefix}nightcore [reply aud]
  *${smbol}* ${prefix}reverse [reply aud]
  *${smbol}* ${prefix}robot [reply aud]
  *${smbol}* ${prefix}slow [reply aud]
  *${smbol}* ${prefix}squirrel [reply aud]
 
  *ANIME RANDOM*        
  *${smbol}* ${prefix}cry
  *${smbol}* ${prefix}kill
  *${smbol}* ${prefix}hug
  *${smbol}* ${prefix}pat
  *${smbol}* ${prefix}lick
  *${smbol}* ${prefix}kiss
  *${smbol}* ${prefix}bite
  *${smbol}* ${prefix}yeet
  *${smbol}* ${prefix}neko
  *${smbol}* ${prefix}bully
  *${smbol}* ${prefix}bonk
  *${smbol}* ${prefix}wink
  *${smbol}* ${prefix}poke
  *${smbol}* ${prefix}nom
  *${smbol}* ${prefix}slap
  *${smbol}* ${prefix}smile
  *${smbol}* ${prefix}wave
  *${smbol}* ${prefix}awoo
  *${smbol}* ${prefix}blush
  *${smbol}* ${prefix}smug
  *${smbol}* ${prefix}glomp
  *${smbol}* ${prefix}happy
  *${smbol}* ${prefix}dance
  *${smbol}* ${prefix}cringe
  *${smbol}* ${prefix}cuddle
  *${smbol}* ${prefix}highfive
  *${smbol}* ${prefix}shinobu
  *${smbol}* ${prefix}megumin
  *${smbol}* ${prefix}handhold
 
  *TEXT PRO*        
  *${smbol}* ${prefix}circuit
  *${smbol}* ${prefix}classic8bit
  *${smbol}* ${prefix}color-fireworks
  *${smbol}* ${prefix}cool-metal
  *${smbol}* ${prefix}cutegirl
  *${smbol}* ${prefix}dark-gold-metal
  *${smbol}* ${prefix}decorated-cookie
  *${smbol}* ${prefix}deluxe-gold
  *${smbol}* ${prefix}deluxe-silver
  *${smbol}* ${prefix}dinamo
  *${smbol}* ${prefix}double-exposure
  *${smbol}* ${prefix}dragon-fire
  *${smbol}* ${prefix}eroded-metal
  *${smbol}* ${prefix}fabric-text
  *${smbol}* ${prefix}firework
  *${smbol}* ${prefix}floraltext
  *${smbol}* ${prefix}fox-crossfire
  *${smbol}* ${prefix}fun-certify1
  *${smbol}* ${prefix}fun-certify2
  *${smbol}* ${prefix}futuristic
  *${smbol}* ${prefix}galaxy-angel
  *${smbol}* ${prefix}galaxy-effect
  *${smbol}* ${prefix}galaxy-effect2
  *${smbol}* ${prefix}galaxy-text
  *${smbol}* ${prefix}galaxy-text-3
  *${smbol}* ${prefix}gankk-league-of-kings
  *${smbol}* ${prefix}gemstone
  *${smbol}* ${prefix}genji-overwatch
  *${smbol}* ${prefix}glitchtext
  *${smbol}* ${prefix}glossy
  *${smbol}* ${prefix}glossy-bluemetal
  *${smbol}* ${prefix}glossy-carbon
  *${smbol}* ${prefix}glossy-chrome
  *${smbol}* ${prefix}gold-avenger
  *${smbol}* ${prefix}gold-barcar
  *${smbol}* ${prefix}gold-batman
  *${smbol}* ${prefix}gold-bird2
  *${smbol}* ${prefix}gold-eagle
  *${smbol}* ${prefix}gold-effect
  *${smbol}* ${prefix}gold-fox
  *${smbol}* ${prefix}gold-glitter
  *${smbol}* ${prefix}gold-lion
  *${smbol}* ${prefix}gold-lion2
  *${smbol}* ${prefix}gold-star
  *${smbol}* ${prefix}gold-tiger
  *${smbol}* ${prefix}golden-letter
  *${smbol}* ${prefix}gr-crossfire
  *${smbol}* ${prefix}gradientlogo
  *${smbol}* ${prefix}graffiti-color
  *${smbol}* ${prefix}graffiti-text3
  *${smbol}* ${prefix}1917-style 
  *${smbol}* ${prefix}3d-effect 
  *${smbol}* ${prefix}3d-rubystone 
  *${smbol}* ${prefix}3d-text-sub-zombie 
  *${smbol}* ${prefix}3dengraved 
  *${smbol}* ${prefix}3dgalaxy-metal 
  *${smbol}* ${prefix}3dgold 
  *${smbol}* ${prefix}3dgolden 
  *${smbol}* ${prefix}3dgradient 
  *${smbol}* ${prefix}3dlove 
  *${smbol}* ${prefix}3dluxury 
  *${smbol}* ${prefix}3dneonlight 
  *${smbol}* ${prefix}3dpapercut 
  *${smbol}* ${prefix}3drainbow 
  *${smbol}* ${prefix}3drealistic 
  *${smbol}* ${prefix}3drosegold 
  *${smbol}* ${prefix}3dscifi 
  *${smbol}* ${prefix}3dsilver 
  *${smbol}* ${prefix}3dspace 
  *${smbol}* ${prefix}3dstone 
  *${smbol}* ${prefix}3dtext-effect 
  *${smbol}* ${prefix}3dunderwater 
  *${smbol}* ${prefix}3dvintage 
  *${smbol}* ${prefix}3dwaterpipe 
  *${smbol}* ${prefix}alice-league-of-kings 
  *${smbol}* ${prefix}angel-wing-galaxy 
  *${smbol}* ${prefix}anubis 
  *${smbol}* ${prefix}arch-crossfire 
  *${smbol}* ${prefix}art-shader 
  *${smbol}* ${prefix}assassins-creed 
  *${smbol}* ${prefix}avengers 
  *${smbol}* ${prefix}azzenka-league-of-kings 
  *${smbol}* ${prefix}balloons-cards 
  *${smbol}* ${prefix}balloons-love 
  *${smbol}* ${prefix}bearlogo 
  *${smbol}* ${prefix}bg-crossfire 
  *${smbol}* ${prefix}birthday-cake 
  *${smbol}* ${prefix}birthday-cards 
  *${smbol}* ${prefix}birthday-greeting 
  *${smbol}* ${prefix}birthday-roses 
  *${smbol}* ${prefix}black-metal 
  *${smbol}* ${prefix}blackpink 
  *${smbol}* ${prefix}blood-frosted 
  *${smbol}* ${prefix}blood-text 
  *${smbol}* ${prefix}blue-effect 
  *${smbol}* ${prefix}blue-glitter 
  *${smbol}* ${prefix}brickwall 
  *${smbol}* ${prefix}brokentext 
  *${smbol}* ${prefix}bubble-effect 
  *${smbol}* ${prefix}bulb-effect 
 
  *IMAGE EFEK*
  *${smbol}* ${prefix}blur [reply image]
  *${smbol}* ${prefix}beautiful [reply image]
  *${smbol}* ${prefix}ytcomment [reply image]
  *${smbol}* ${prefix}wanted [reply image]
  *${smbol}* ${prefix}triggeredwebp [reply image]
  *${smbol}* ${prefix}fotojatoh [reply image]
  *${smbol}* ${prefix}imagesketch [reply image]
  *${smbol}* ${prefix}pixelate [reply image]
  *${smbol}* ${prefix}jail [reply image]
  *${smbol}* ${prefix}rip [reply image]
  *${smbol}* ${prefix}gay [reply image]
  *${smbol}* ${prefix}burn [reply image]
  *${smbol}* ${prefix}invert [reply image]
  *${smbol}* ${prefix}shit [reply image]`
let btn = [
        	{ urlButton: { displayText: `Grup Bot 👥`, url : `https://chat.whatsapp.com/KTm4p53s6457qcV5aDOAPI` } },
            { urlButton: { displayText: `Youtube ▶️`, url: `https://youtube.com/c/RamaGans` } },
           // { quickReplyButton: { displayText: `All Menu 🍱`, id: 'allmenu'} },
            //{ quickReplyButton: { displayText: `List Menu 🍢`, id: 'command'} },
            { quickReplyButton: { displayText: `Owner 👨‍💻`, id: 'owner'} }
        	]        	
rama.send5ButImg(from, anuuuu,  `${LahKokTam}`, global.thumb, btn)
}
break
    /*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'BOT GRUP',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                rama.relayMessage(m.chat, template.message, { messageId: template.key.id })*/
/*const fakemenu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `👨‍💻`, 
                    jpegThumbnail: global.thumb
                          }
                        }
                      }

/*let buttonMessage= {
'document':{ url : `http://s.id/0x404` },
'mimetype': 'application/pdf',
'fileName': `ALL COMMANDS BOT`,
'fileLength': 90181872727,
'pageCount': 1976,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{ 
'showAdAttribution': true,
'mediaUrl': 'http://s.id/0x404',
'mediaType': 2,
'previewType': 'pdf',
 let butsh = [{
 urlButton: {
 displayText: 'BOT GRUP',
 url: `${myweb}`
 }
 }, {
 quickReplyButton: {
 displayText: 'PING',
 id: 'ping'
 }
 }, {
 quickReplyButton: {
 displayText: 'OWNER',
 id: 'owner'
 }
 }]
let ramaKTS = { text: `${anu}`, mentions: [num,nums],
contextInfo:{ externalAdReply: 
{title: `Hai kak ${pushname}`,
body: `${Object.keys(global.db.data.users).length} USER`,
thumbnailUrl: `${pporgs}`,
renderLargerThumbnail:true,
sourceUrl: `...`,
mediaType: 1,
}},
}
 rama.sendMessage(m.chat,ramaKTS,{quoted: m})              
 }
 /*contextInfo:{"externalAdReply": 
 {"title": ` ${global.botname}`,
 "body": ` R-BOT`, 
 "previewType": "PHOTO",
 "thumbnailUrl": ``,
 "thumbnail": fs.readFileSync('./GojoMedia/gojo.jpg'),
 "sourceUrl": "..."}}*/
/* 
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await rama.send5ButImg(from, `
 _____[ *MAIN* ]_____
  *${smbol}* ${prefix}alive
  *${smbol}* ${prefix}script
*${smbol}* ${prefix}speedtest
*${smbol}* ${prefix}ping
*${smbol}* ${prefix}owner
*${smbol}* ${prefix}menu
*${smbol}* ${prefix}delete
*${smbol}* ${prefix}chatinfo
*${smbol}* ${prefix}quoted
*${smbol}* ${prefix}listpc
*${smbol}* ${prefix}listgc
*${smbol}* ${prefix}donate
*${smbol}* ${prefix}report [bug]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break


case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await rama.send5ButImg(from, `
 _____[ *GROUP* ]_____	        
*${smbol}* ${prefix}grouplink
*${smbol}* ${prefix}ephemeral [option]
*${smbol}* ${prefix}setgcpp [image]
*${smbol}* ${prefix}setname [text]
*${smbol}* ${prefix}setdesc [text]
*${smbol}* ${prefix}group [text]
*${smbol}* ${prefix}editinfo [option]
*${smbol}* ${prefix}add [user]
*${smbol}* ${prefix}kick [reply/tag]
*${smbol}* ${prefix}hidetag [text]
*${smbol}* ${prefix}tagall [text]
*${smbol}* ${prefix}antilink [on/off]
*${smbol}* ${prefix}mute [on/off]
*${smbol}* ${prefix}promote [reply/tag]
*${smbol}* ${prefix}demote [reply/tag]
*${smbol}* ${prefix}vote
*${smbol}* ${prefix}devote
*${smbol}* ${prefix}upvote
*${smbol}* ${prefix}checkvote
*${smbol}* ${prefix}delvote
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await rama.send5ButImg(from, `
 _____[ *RPG* ]_____	        
*${smbol}* ${prefix}hunting
*${smbol}* ${prefix}mining
*${smbol}* ${prefix}heal
*${smbol}* ${prefix}limituser
*${smbol}* ${prefix}profile
*${smbol}* ${prefix}inventory
*${smbol}* ${prefix}leaderboard
*${smbol}* ${prefix}buy [option]
*${smbol}* ${prefix}sell [option]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await rama.send5ButImg(from, `
 _____[ *FUN* ]_____	        
*${smbol}* ${prefix}how [text
*${smbol}* ${prefix}when [text]
*${smbol}* ${prefix}is [text]
*${smbol}* ${prefix}what [text]
*${smbol}* ${prefix}can [text]
*${smbol}* ${prefix}rate [text]
*${smbol}* ${prefix}wangy [text]
*${smbol}* ${prefix}beautifulcheck [tag]
*${smbol}* ${prefix}awesomecheck [tag]
*${smbol}* ${prefix}prettycheck [tag]
*${smbol}* ${prefix}lesbiancheck [tag]
*${smbol}* ${prefix}gaycheck [tag]
*${smbol}* ${prefix}cutecheck [tag]
*${smbol}* ${prefix}uglycheck [tag]
*${smbol}* ${prefix}hornycheck [tag]
*${smbol}* ${prefix}charactercheck [tag]
*${smbol}* ${prefix}lovelycheck [tag]
*${smbol}* ${prefix}couple
*${smbol}* ${prefix}mysoulmate
*${smbol}* ${prefix}hot
*${smbol}* ${prefix}sexy
*${smbol}* ${prefix}kind
*${smbol}* ${prefix}handsome
*${smbol}* ${prefix}beautiful
*${smbol}* ${prefix}cute
*${smbol}* ${prefix}pretty
*${smbol}* ${prefix}lesbian
*${smbol}* ${prefix}noob
*${smbol}* ${prefix}bastard
*${smbol}* ${prefix}foolish
*${smbol}* ${prefix}nerd
*${smbol}* ${prefix}asshole
*${smbol}* ${prefix}gay
*${smbol}* ${prefix}smart
*${smbol}* ${prefix}stubble
*${smbol}* ${prefix}dog
*${smbol}* ${prefix}horny
*${smbol}* ${prefix}cunt
*${smbol}* ${prefix}wibu
*${smbol}* ${prefix}tictactoe
*${smbol}* ${prefix}delttt
*${smbol}* ${prefix}guess [option]
*${smbol}* ${prefix}math [mode]
*${smbol}* ${prefix}suitpvp [tag]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(picak+'Owner Menu')
await rama.send5ButImg(from, `
 _____[ *OWNER* ]_____	        
*${smbol}* ${prefix}grouplink
*${smbol}* ${prefix}ephemeral [option]
*${smbol}* ${prefix}setgcpp [image]
*${smbol}* ${prefix}setname [text]
*${smbol}* ${prefix}setdesc [text]
*${smbol}* ${prefix}group [text]
*${smbol}* ${prefix}editinfo [option]
*${smbol}* ${prefix}add [user]
*${smbol}* ${prefix}kick [reply/tag]
*${smbol}* ${prefix}hidetag [text]
*${smbol}* ${prefix}tagall [text]
*${smbol}* ${prefix}antilink [on/off]
*${smbol}* ${prefix}mute [on/off]
*${smbol}* ${prefix}promote [reply/tag]
*${smbol}* ${prefix}demote [reply/tag]
*${smbol}* ${prefix}vote
*${smbol}* ${prefix}devote
*${smbol}* ${prefix}upvote
*${smbol}* ${prefix}checkvote
*${smbol}* ${prefix}delvote
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await rama.send5ButImg(from, `
 _____[ *DOWNLOADER* ]_____	        
*${smbol}* ${prefix}ytmp3 [url|quality]
*${smbol}* ${prefix}ytmp4 [url|quality]
*${smbol}* ${prefix}getmusic [yt link]
*${smbol}* ${prefix}getvideo [yt link]
*${smbol}* ${prefix}umma [query]
*${smbol}* ${prefix}joox [query]
*${smbol}* ${prefix}soundcloud [url]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await rama.send5ButImg(from, `
 _____[ *SEARCHER* ]_____	        
*${smbol}* ${prefix}play [query]
*${smbol}* ${prefix}song [query]
*${smbol}* ${prefix}yts [query]
*${smbol}* ${prefix}google [query]
*${smbol}* ${prefix}gimage [query]
*${smbol}* ${prefix}pinterest [query]
*${smbol}* ${prefix}wallpaper [query]
*${smbol}* ${prefix}wikimedia [query]
*${smbol}* ${prefix}ytsearch [query]
*${smbol}* ${prefix}ringtone [query]
*${smbol}* ${prefix}webtoon [query]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await rama.send5ButImg(from, `
 _____[ *RANDOM* ]_____	        
*${smbol}* ${prefix}coffee
*${smbol}* ${prefix}animequote (Query)
*${smbol}* ${prefix}couplepp
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await rama.send5ButImg(from, `
 _____[ *RANDOM ANIME* ]_____	        
*${smbol}* ${prefix}loli
*${smbol}* ${prefix}bully
*${smbol}* ${prefix}cuddle
*${smbol}* ${prefix}cry
*${smbol}* ${prefix}hug
*${smbol}* ${prefix}awoo
*${smbol}* ${prefix}kiss
*${smbol}* ${prefix}lick
*${smbol}* ${prefix}pat
*${smbol}* ${prefix}smug
*${smbol}* ${prefix}bonk
*${smbol}* ${prefix}yeet
*${smbol}* ${prefix}blush
*${smbol}* ${prefix}smile
*${smbol}* ${prefix}wave
*${smbol}* ${prefix}highfive
*${smbol}* ${prefix}handhold
*${smbol}* ${prefix}nom
*${smbol}* ${prefix}glomp
*${smbol}* ${prefix}bite
*${smbol}* ${prefix}slap
*${smbol}* ${prefix}kill
*${smbol}* ${prefix}happy
*${smbol}* ${prefix}wink
*${smbol}* ${prefix}poke
*${smbol}* ${prefix}dance
*${smbol}* ${prefix}cringe
*${smbol}* ${prefix}cry
*${smbol}* ${prefix}kill
*${smbol}* ${prefix}hug
*${smbol}* ${prefix}pat
*${smbol}* ${prefix}lick
*${smbol}* ${prefix}kiss
*${smbol}* ${prefix}bite
*${smbol}* ${prefix}yeet
*${smbol}* ${prefix}neko
*${smbol}* ${prefix}bully
*${smbol}* ${prefix}bonk
*${smbol}* ${prefix}wink
*${smbol}* ${prefix}poke
*${smbol}* ${prefix}nom
*${smbol}* ${prefix}slap
*${smbol}* ${prefix}smile
*${smbol}* ${prefix}wave
*${smbol}* ${prefix}awoo
*${smbol}* ${prefix}blush
*${smbol}* ${prefix}smug
*${smbol}* ${prefix}glomp
*${smbol}* ${prefix}happy
*${smbol}* ${prefix}dance
*${smbol}* ${prefix}cringe
*${smbol}* ${prefix}cuddle
*${smbol}* ${prefix}highfive
*${smbol}* ${prefix}shinobu
*${smbol}* ${prefix}megumin
*${smbol}* ${prefix}handhold
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await rama.send5ButImg(from, `
 _____[ *TEXT PRO* ]_____	        
*${smbol}* ${prefix}circuit
*${smbol}* ${prefix}classic8bit
*${smbol}* ${prefix}color-fireworks
*${smbol}* ${prefix}cool-metal
*${smbol}* ${prefix}cutegirl
*${smbol}* ${prefix}dark-gold-metal
*${smbol}* ${prefix}decorated-cookie
*${smbol}* ${prefix}deluxe-gold
*${smbol}* ${prefix}deluxe-silver
*${smbol}* ${prefix}dinamo
*${smbol}* ${prefix}double-exposure
*${smbol}* ${prefix}dragon-fire
*${smbol}* ${prefix}eroded-metal
*${smbol}* ${prefix}fabric-text
*${smbol}* ${prefix}firework
*${smbol}* ${prefix}floraltext
*${smbol}* ${prefix}fox-crossfire
*${smbol}* ${prefix}fun-certify1
*${smbol}* ${prefix}fun-certify2
*${smbol}* ${prefix}futuristic
*${smbol}* ${prefix}galaxy-angel
*${smbol}* ${prefix}galaxy-effect
*${smbol}* ${prefix}galaxy-effect2
*${smbol}* ${prefix}galaxy-text
*${smbol}* ${prefix}galaxy-text-3
*${smbol}* ${prefix}gankk-league-of-kings
*${smbol}* ${prefix}gemstone
*${smbol}* ${prefix}genji-overwatch
*${smbol}* ${prefix}glitchtext
*${smbol}* ${prefix}glossy
*${smbol}* ${prefix}glossy-bluemetal
*${smbol}* ${prefix}glossy-carbon
*${smbol}* ${prefix}glossy-chrome
*${smbol}* ${prefix}gold-avenger
*${smbol}* ${prefix}gold-barcar
*${smbol}* ${prefix}gold-batman
*${smbol}* ${prefix}gold-bird2
*${smbol}* ${prefix}gold-eagle
*${smbol}* ${prefix}gold-effect
*${smbol}* ${prefix}gold-fox
*${smbol}* ${prefix}gold-glitter
*${smbol}* ${prefix}gold-lion
*${smbol}* ${prefix}gold-lion2
*${smbol}* ${prefix}gold-star
*${smbol}* ${prefix}gold-tiger
*${smbol}* ${prefix}golden-letter
*${smbol}* ${prefix}gr-crossfire
*${smbol}* ${prefix}gradientlogo
*${smbol}* ${prefix}graffiti-color
*${smbol}* ${prefix}graffiti-text3
*${smbol}* ${prefix}1917-style 
*${smbol}* ${prefix}3d-effect 
*${smbol}* ${prefix}3d-rubystone 
*${smbol}* ${prefix}3d-text-sub-zombie 
*${smbol}* ${prefix}3dengraved 
*${smbol}* ${prefix}3dgalaxy-metal 
*${smbol}* ${prefix}3dgold 
*${smbol}* ${prefix}3dgolden 
*${smbol}* ${prefix}3dgradient 
*${smbol}* ${prefix}3dlove 
*${smbol}* ${prefix}3dluxury 
*${smbol}* ${prefix}3dneonlight 
*${smbol}* ${prefix}3dpapercut 
*${smbol}* ${prefix}3drainbow 
*${smbol}* ${prefix}3drealistic 
*${smbol}* ${prefix}3drosegold 
*${smbol}* ${prefix}3dscifi 
*${smbol}* ${prefix}3dsilver 
*${smbol}* ${prefix}3dspace 
*${smbol}* ${prefix}3dstone 
*${smbol}* ${prefix}3dtext-effect 
*${smbol}* ${prefix}3dunderwater 
*${smbol}* ${prefix}3dvintage 
*${smbol}* ${prefix}3dwaterpipe 
*${smbol}* ${prefix}alice-league-of-kings 
*${smbol}* ${prefix}angel-wing-galaxy 
*${smbol}* ${prefix}anubis 
*${smbol}* ${prefix}arch-crossfire 
*${smbol}* ${prefix}art-shader 
*${smbol}* ${prefix}assassins-creed 
*${smbol}* ${prefix}avengers 
*${smbol}* ${prefix}azzenka-league-of-kings 
*${smbol}* ${prefix}balloons-cards 
*${smbol}* ${prefix}balloons-love 
*${smbol}* ${prefix}bearlogo 
*${smbol}* ${prefix}bg-crossfire 
*${smbol}* ${prefix}birthday-cake 
*${smbol}* ${prefix}birthday-cards 
*${smbol}* ${prefix}birthday-greeting 
*${smbol}* ${prefix}birthday-roses 
*${smbol}* ${prefix}black-metal 
*${smbol}* ${prefix}blackpink 
*${smbol}* ${prefix}blood-frosted 
*${smbol}* ${prefix}blood-text 
*${smbol}* ${prefix}blue-effect 
*${smbol}* ${prefix}blue-glitter 
*${smbol}* ${prefix}brickwall 
*${smbol}* ${prefix}brokentext 
*${smbol}* ${prefix}bubble-effect 
*${smbol}* ${prefix}bulb-effect 
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await rama.send5ButImg(from, `
 _____[ *CONVERTER* ]_____	        
*${smbol}* ${prefix}toimage [reply stick]
*${smbol}* ${prefix}sticker [reply img|gif]
*${smbol}* ${prefix}emojimix [moji+moji]
*${smbol}* ${prefix}tovideo [reply img]
*${smbol}* ${prefix}togif [reply stick]
*${smbol}* ${prefix}tourl [reply media]
*${smbol}* ${prefix}tovn [reply aud]
*${smbol}* ${prefix}tomp3 [reply vn]
*${smbol}* ${prefix}toaudio [reply vid]
*${smbol}* ${prefix}ebinary [reply txt]
*${smbol}* ${prefix}dbinary [reply txt]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await rama.send5ButImg(from, `
 _____[ *DATABASE* ]_____	        
*${smbol}* ${prefix}setcmd
*${smbol}* ${prefix}listcmd
*${smbol}* ${prefix}delcmd
*${smbol}* ${prefix}lockcmd
*${smbol}* ${prefix}addmsg
*${smbol}* ${prefix}listmsg
*${smbol}* ${prefix}getmsg
*${smbol}* ${prefix}delmsg
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await rama.send5ButImg(from, `
 _____[ *ANONYMOUS CHAT* ]_____	        
*${smbol}* ${prefix}anonymous
*${smbol}* ${prefix}start
*${smbol}* ${prefix}next
*${smbol}* ${prefix}leave
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(picak+'Islamic Menu')
await rama.send5ButImg(from, `
 _____[ *ISLAMIC* ]_____	        
*${smbol}* ${prefix}juzamma
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await rama.send5ButImg(from, `
 _____[ *VOICE CHANGER* ]_____	        
*${smbol}* ${prefix}bass [reply aud]
*${smbol}* ${prefix}blown [reply aud]
*${smbol}* ${prefix}deep [reply aud]
*${smbol}* ${prefix}earrape [reply aud]
*${smbol}* ${prefix}fast [reply aud]
*${smbol}* ${prefix}fat [reply aud]
*${smbol}* ${prefix}nightcore [reply aud]
*${smbol}* ${prefix}reverse [reply aud]
*${smbol}* ${prefix}robot [reply aud]
*${smbol}* ${prefix}slow [reply aud]
*${smbol}* ${prefix}squirrel [reply aud]
`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(picak+'Horoscope Menu')
await rama.send5ButImg(from, `
 _____[ *HOROSCOPE* ]_____	        
*${smbol}* ${prefix}nomorhoki (Query)
*${smbol}* ${prefix}artimimpi (Query)
*${smbol}* ${prefix}artinama (Query)
*${smbol}* ${prefix}ramaljodoh (Query)
*${smbol}* ${prefix}ramaljodohbali (Query)
*${smbol}* ${prefix}suamiistri (Query)
*${smbol}* ${prefix}ramalcinta (Query)
*${smbol}* ${prefix}cocoknama (Query)
*${smbol}* ${prefix}pasangan (Query)
*${smbol}* ${prefix}jadiannikah (Query)
*${smbol}* ${prefix}sifatusaha (Query)
*${smbol}* ${prefix}rezeki (Query)
*${smbol}* ${prefix}pekerjaan (Query)
*${smbol}* ${prefix}nasib (Query)
*${smbol}* ${prefix}penyakit (Query)
*${smbol}* ${prefix}tarot (Query)
*${smbol}* ${prefix}fengshui (Query)
*${smbol}* ${prefix}haribaik (Query)
*${smbol}* ${prefix}harisangar (Query)
*${smbol}* ${prefix}harisial (Query)
*${smbol}* ${prefix}nagahari (Query)
*${smbol}* ${prefix}arahrezeki (Query)
*${smbol}* ${prefix}peruntungan (Query)
*${smbol}* ${prefix}weton (Query)
*${smbol}* ${prefix}karakter (Query)
*${smbol}* ${prefix}keberuntungan (Query)
*${smbol}* ${prefix}memancing (Query)
*${smbol}* ${prefix}masasubur (Query)
*${smbol}* ${prefix}zodiak (Query)
*${smbol}* ${prefix}shio (Query)`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break*/
case 'thanksto': case 'tqto': case 'tqtt':
var unicorn = await getBuffer(picak+'Developer')
await rama.send5ButImg(from, `
Thanks to Me ( NexusNw)
Alien-Alfa (For helping me to deploy qr in replit and answered my every doubts regard this project)
DGXeon ( 45% Credits goes to him ,in this script)
And Again Me (King Nexus 🎉)  Who Helped Assemble This Sexy Script !!!`,`${LahKokTam}`,unicorn, [{"urlButton": {"displayText": "BOT GRUP","url": `${myweb}`}},{"quickReplyButton": {"displayText": "DONASI","id": 'donate'}},{"quickReplyButton": {"displayText": "OWNER","id": 'owner'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
/* const now = Date.now();
		const timestamps = cooldown.get(m);
		const cdAmount = (cmd.options.cooldown || 5) * 1000;
		if (timestamps.has(m)) {
			const expiration = timestamps.get(m) + cdAmount;
			if (now < expiration) {
				if (isGroup) {
					let timeLeft = (expiration - now) / 1000;
					printSpam(rama, isGroup, sender, groupName);
					return await rama.sendMessage(
						m.chat,
						{
							text: `Terdeteksi Spam, Mohon Tunggu _${timeLeft.toFixed(1)} Detik!!!_`,
						},
						{ quoted: m }
					);
				} else if (!isGroup) {
					let timeLeft = (expiration - now) / 1000;
					printSpam(rama, isGroup, sender);
					return await rama.sendMessage(
						m.chat,
						{
							text: `Terdeteksi Spam, Mohon Tunggu _${timeLeft.toFixed(1)} Detik!!!_`,
						},
						{ quoted: m }
					);
				}
			}
		}
if (optionsCmd.isSpam) {
	timestamps.set(m, now);
		}*/		               
			 if (budy.startsWith('Assalamualaikum')) {
                 num = `${m.sender}`
                 rama.sendMessage(m.chat, { text: `Walaikumsalam kak @${num.split("@")[0]}`, contextInfo: {mentionedJid: [num]}, m})
                }               
             if (budy.startsWith('Tes')) {
                const fakeH = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `BOT NYALA KAK`, 
                    jpegThumbnail: global.thumb
                          }
                        }
                      }

let buttonMessage= {
'document':{ url : `http://s.id/0x404` },
'mimetype': 'application/pdf',
'fileName': `Hai kak ${pushname}`,
'fileLength': 90181872727,
'pageCount': 1976,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{ 
'showAdAttribution': true,
'mediaUrl': 'http://s.id/0x404',
'mediaType': 2,
'previewType': 'pdf',
'title': `ON KAK`,
'body': `${Object.keys(global.db.data.users).length} USER`,
'thumbnail': fs.readFileSync('./GojoMedia/gojo.jpg'),
'sourceUrl': 'https://wa.me/message/4DCK3UGKERTGC1'}},
'caption': `BOT ON KAK `,
'footer': `BOT`,
'buttons':[
{'buttonId':  `.menu`,'buttonText':{'displayText':'MENU'},'type':1},
{'buttonId': `.owner`,'buttonText':{'displayText':'OWNER'},'type':1}
],
'headerType':6}

 rama.sendMessage(m.chat,buttonMessage, { quoted: fakeH})               
                }   
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    rama.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
