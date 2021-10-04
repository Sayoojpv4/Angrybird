/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const PR = 'System Status';

const Language = require('../language');
const Lang = Language.getString('sewpropbot');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'aliv', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nOS       :Mac OS	68k,Power PC ×86_64\nKernel   : 4.4.0- 1093 - aws\nPackage  : 342 (apk)\nSell     : bash 8.0.0\nTerminal : Java Script\nCPU      : AMD Ryzen 9 5900X 12 cores 3.7GHz 105W\nRAM      : Corsair Vengeance LED 16GB Kit (2 x 8GB) 3200MHz\nMemory   : 5120GB / 10240GB (Seagate BarraCuda)\nDownloading : 897mbps\nUploading   : 997mbps\nping        :12```'})

    }));
    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nOS       :Mac OS	68k,Power PC ×86_64\nKernel   : 4.4.0- 1093 - aws\nPackage  : 342 (apk)\nSell     : bash 8.0.0\nTerminal : Java Script\nCPU      : AMD Ryzen 9 5900X 12 cores 3.7GHz 105W\nRAM      : Corsair Vengeance LED 16GB Kit (2 x 8GB) 3200MHz\nMemory   : 5120GB / 10240GB (Seagate BarraCuda)\nDownloading : 897mbps\nUploading   : 997mbps\nping        :12```'})

    }));
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nOS       :Mac OS	68k,Power PC ×86_64\nKernel   : 4.4.0- 1093 - aws\nPackage  : 342 (apk)\nSell     : bash 8.0.0\nTerminal : Java Script\nCPU      : AMD Ryzen 9 5900X 12 cores 3.7GHz 105W\nRAM      : Corsair Vengeance LED 16GB Kit (2 x 8GB) 3200MHz\nMemory   : 5120GB / 10240GB (Seagate BarraCuda)\nDownloading : 897mbps\nUploading   : 997mbps\nping        :12```'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'aliv', fromMe: false, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nOS       :Mac OS	68k,Power PC ×86_64\nKernel   : 4.4.0- 1093 - aws\nPackage  : 342 (apk)\nSell     : bash 8.0.0\nTerminal : Java Script\nCPU      : AMD Ryzen 9 5900X 12 cores 3.7GHz 105W\nRAM      : Corsair Vengeance LED 16GB Kit (2 x 8GB) 3200MHz\nMemory   : 5120GB / 10240GB (Seagate BarraCuda)\nDownloading : 897mbps\nUploading   : 997mbps\nping        :12```'})

    }));
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nGithub Link     :https://tinyurl.com/yhu58jt6\nAudio Commands  : https://tinyurl.com/yjlwwwes\nSticker Commands     : https://tinyurl.com/yho37ybj\nContact     : https://wa.me/919207168374```'})

    }));
    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: PR}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.imgur.com/zjGsfgd.jpeg";
    r_text[1] = "https://i.imgur.com/zjGsfgd.jpeg";

    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '_*Coded By Sayooj*_\n\n```\nOS       :Mac OS	68k,Power PC ×86_64\nKernel   : 4.4.0- 1093 - aws\nPackage  : 342 (apk)\nSell     : bash 8.0.0\nTerminal : Java Script\nCPU      : AMD Ryzen 9 5900X 12 cores 3.7GHz 105W\nRAM      : Corsair Vengeance LED 16GB Kit (2 x 8GB) 3200MHz\nMemory   : 5120GB / 10240GB (Seagate BarraCuda)\nDownloading : 897mbps\nUploading   : 997mbps\nping        :12```'})

    }));
}

