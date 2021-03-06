/* Copyright (C)  2020  Raashii.
 */

const Raashii = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
  token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''
var OFF = ''
var ON = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change Auto bio mode'
  OFF = '๐๐ฎ๐ญ๐จ ๐๐ข๐จ ๐๐๐๐ญ๐ฎ๐ซ๐ ๐ฌ๐ฎ๐๐๐๐ฌ๐ฌ๐๐ฎ๐ฅ๐ฅ๐ฒ ๐ฌ๐ก๐ฎ๐ญ๐๐จ๐ฐ๐ง๐๐ \n          ๐ฉ๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ ๐๐๐ฐ ๐ฆ๐ข๐ง๐ฎ๐ญ๐ ๐งโโ๏ธ'
  ON = '๐๐ฎ๐ญ๐จ ๐๐ข๐จ ๐๐๐๐ญ๐ฎ๐ซ๐ ๐ฌ๐ฎ๐๐๐๐ฌ๐ฌ๐๐ฎ๐ฅ๐ฅ๐ฒ ๐จ๐ฉ๐๐ง๐๐ \n          ๐ฉ๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ ๐๐๐ฐ ๐ฆ๐ข๐ง๐ฎ๐ญ๐ ๐งโโ๏ธ'
}

if (config.LANG == 'ML') {

  rashi_desc = 'Auto bio mode เดฎเดพเดฑเตเดฑเดพเตป'
  OFF = '*AUTO BIO OFF เดเดเตเดเดฟ๐*'
  ON = '*AUTO BIO ON เดเดเตเดเดฟ๐*'
}

Raashii.addCommand({ pattern: 'autobio ?(.*)', fromMe: true, desc: rashi_desc, usage: '.autobio on / off' }, (async (message, match) => {
  if (match[1] == 'off') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['AUTO_BฤฐO']: 'false'
      }
    });
    await message.sendMessage(OFF)
  } else if (match[1] == 'on') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['AUTO_BฤฐO']: 'true'
      }
    });
    await message.sendMessage(ON)
  }
}));
