const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://imeshhansana:RealIMA2009@imeshhansana.t6zllfm.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94701490028";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "imesh",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "imesh",
  ownername:process.env.OWNER_NAME|| "It'x imesh",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_07_03_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0F6OVFGb2RKYkF6NWpBRE5taXNUMFBKR25lVE4xL0UzYWh0Rm5hZUVXRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjRBVTVUNTJuWFlLeUpScGJkVlFOYTdrUC9QRzd0R3RsNWU5aGx2MDRNaXM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkxSWDUxd2hUR1ozZzl6WkJ6anBBVjRrMUdlQk1lVmx0dUJaSUloSzVuRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkc2WlptLzVNN0tZQ2g2cVVxS1AxcUV4YUpPTXhjcTNWbGlWMUc3aFpjamc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRVBXMWl3d2V5Tm9SVHpTYys4NGZIR2JDTDcrNW4vODNIbkFJTVFzNkxFUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm0zdG5HMHNFWldvanhFelBMczFGR0o5MldjZ0krWEhWaFBObGxiZGJBZ1E9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI2TEU3V2lyVEYwc3FpVy8xSmpYUXdyYjNhZFhycGdrcEIrQU5vcExYR25BPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYWMvaWZIOVNIbThvQU5kbmtmenhhUVpsQzV2b1J1WWVjUjg4eCtaS01pUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPSlkyclFKSHJFSnY0UmRybWc4eWpSTkhWdjh3UTZaYncwWG1CQkVYd2M5bXRabkl5WXpQdkNqRU03OXN3ajhvdk8yVzBrd01HRnFzWXJjRlZxdElpZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MzksXCJhZHZTZWNyZXRLZXlcIjpcIjEwT09IL0FHZEtHQnhUdWlUZDFxNERnamFtaS9HWDNBbGk4ODNiSmRpQ2M9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcwMTQ5MDAyOEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI3ODIxOTFBQUQyQTgwQ0E0QTZEQTZDQTY5N0NGM0VBMVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEwOTU4MDQxfV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiYkxPR0x5ZU9RSXF1MEVJdUhDNElld1wiLFwicGhvbmVJZFwiOlwiZjVmN2NlNGQtNmUwOC00YWNlLWE5NzYtNDg5NjA5NjA0N2UyXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnZThFQm5kb0FTZG5oMExSUlJBZjBiTWpqRGM9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaHlPbEpzVFhZaGRHRkhKWmJyNHJOVC94cTVJPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkE2RFBMNkI2XCIsXCJtZVwiOntcImlkXCI6XCI5NDcwMTQ5MDAyODoxN0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxNDE1MTA5ODUxNjI4OTI6MTdAbGlkXCIsXCJuYW1lXCI6XCJpbWVzaFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUCsrK0xFR0VOVEw3SzhHR0FVZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkQ5Qk1wNkhNVkNaK0laV1ZGL1hBVlpPTG54QjZGMi9YdHRWTjVJenpyVGc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ5alhkZEE2bjY1NTB1NzhvaTlvaXh2Wm9QWlBGakVtaDZkNloyS1pKU2R0UFg0M25GRzdXbWtFRUpCY1p5c0xkTG9rNHpxSVBnU0FDang1S3RPTENCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInZjdHYzNkNWejJReFpMMDkvUXJaV0x6TUJLL29HWjhKeEF1emYvTWFLLzhmVyswNHU5V3hFYU02dVluSHA3U2hoNzVBMmlGQ3Nkb1JoejFsa1dtb2pBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDcwMTQ5MDAyODoxN0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRL1FUS2VoekZRbWZpR1ZsUmYxd0ZXVGk1OFFlaGR2MTdiVlRlU004NjA0XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDk1ODAzOSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFFa2hcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFa2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TmdhUk4waDdmQlZCdGlYbEZUWnV2bDNLOFdmZVdjanNLem5ZTndaZDBJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTUzNDczMjYsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcwODc5OTc3Njg4NVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public ",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
