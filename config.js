const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="asdfghjkl.softnx.com@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "g";
global.website=process.env.GURL || "g" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201030982295";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "201030982295,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_03_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpkM3FNU0wrTVdKTEtIZU4yN2VadnhBZEFTRmRRRWJNQisxNmJCYkU3N1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDMwOTgyMjk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNkQ5NUVFQkNENTY4NDVFQjdCRUI2QjY2QkQ0OTE4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5MjMwMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwMzA5ODIyOTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEQzZCMTA2MENBNUEyMTkzNjNEODE5N0M4RTJDN0U5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyMzAyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtbGtoQU1fYVE3YUs2aEJ3YkphUlhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzZWQxMDY3LWM4NTMtNDkwNi05MWNkLWNjNDZlYzdlOWY2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDcwLFxuICAgICAgMTMwLFxuICAgICAgMTg3LFxuICAgICAgMTczLFxuICAgICAgMjUyLFxuICAgICAgMjU0LFxuICAgICAgMTc4LFxuICAgICAgMjEyLFxuICAgICAgMTIzLFxuICAgICAgMjEyLFxuICAgICAgMjQzLFxuICAgICAgNyxcbiAgICAgIDU4LFxuICAgICAgNjcsXG4gICAgICAxODUsXG4gICAgICA3NCxcbiAgICAgIDExNyxcbiAgICAgIDE3OSxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDI1MCxcbiAgICAgIDYsXG4gICAgICAyNSxcbiAgICAgIDM2LFxuICAgICAgMTE0LFxuICAgICAgNzYsXG4gICAgICAxODIsXG4gICAgICAxNDAsXG4gICAgICAxNTcsXG4gICAgICAxNDYsXG4gICAgICAyNDgsXG4gICAgICA4MyxcbiAgICAgIDI0MSxcbiAgICAgIDAsXG4gICAgICAyMjMsXG4gICAgICA2OCxcbiAgICAgIDE5MCxcbiAgICAgIDY5LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJON1hZOTRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwMzA5ODIyOTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzMxODE0NjQ3ODI1MToyMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4ya4pyoQ29vbCBSRUJFTOKcqPCfjJpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdm1xY1FIRVB6VTJMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQ1Z3EzMGt4bU95WVc0TjZkMENTdUgzenJiOTBBSEZOZkRHcFBwcHBaREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzNLRFk3YWM3UVdCYThReVBiVThzNEw4TnYyM080bmZQcU5VanhKVmpoQnBsSzZrWk9YNlI4a1Y4RWsxQnJVME1mcVdDS2crYkFmSndFSzkyWmQzQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHZ1TlUrbFBaYlUvdjN3STNFOTU3T2xRZ3diQ0J2bEg4WFpzd0JURVl0bHZnZmd1V0lhWlFhdzRyYWl3cnIxNU5VK2JmSUJhRWV6alhZbEt3WXpCQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDMwOTgyMjk1OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkyMzAxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZybFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnJsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWC9EZlFkSnFIb0lCc2ExOEwwQTNha1ZrRXpmYytwQm1UVEc4cWczaHBPRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIyMzM5Mzg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5MjMwMTQ5MjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
