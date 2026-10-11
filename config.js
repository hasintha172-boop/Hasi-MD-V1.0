
const fs = require('fs');

if (fs.existsSync('./config.env')) {
    require('dotenv').config({ path: './config.env' });
}

function convertToBool(value, fallback = 'true') {
    const result = value ?? fallback;
    return String(result).toLowerCase() === 'true';
}

const defaultConfig = {
    // Add your valid HASi-MD Session ID here when available
    SESSION_ID: '',

    ALIVE_IMG:
        'https://github.com/HASi-MD/HASI-MD/blob/main/images/Danuwa%20-%20MD.png?raw=true',

    ALIVE_MSG: '*Hello 👋 HASi-MD Is Alive Now 😍*',

    OPENAI_API_KEY: '',
    GEMINI_API_KEY: '',
    REMOVE_BG_API_KEY: '',
    WEATHER_API_KEY: '',

    // Replace with your own WhatsApp number including country code
    BOT_OWNER: '94764239001',
    ownerNumber: ['94764239001'],

    AUTO_STATUS_REACT: 'true',
    AUTO_STATUS_REPLY: 'true',
    AUTO_STATUS_SEEN: 'true',
    AUTO_READ_STATUS: 'true',

    MODE: 'public'
};

module.exports = {
    SESSION_ID:''
        process.env.SESSION_ID || defaultConfig.SESSION_ID,

    ALIVE_IMG:
        process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,

    ALIVE_MSG:
        process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,

    OPENAI_API_KEY:
        process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,

    GEMINI_API_KEY:
        process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,

    REMOVE_BG_API_KEY:
        process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY,

    WEATHER_API_KEY:
        process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,

    BOT_OWNER:
        process.env.BOT_OWNER || defaultConfig.BOT_OWNER,

    ownerNumber: process.env.ownerNumber
        ? process.env.ownerNumber.split(',')
        : defaultConfig.ownerNumber,

    AUTO_STATUS_REACT:
        process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,

    AUTO_STATUS_REPLY:
        process.env.AUTO_STATUS_REPLY || defaultConfig.AUTO_STATUS_REPLY,

    AUTO_STATUS_SEEN:
        process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,

    AUTO_READ_STATUS: convertToBool(
        process.env.AUTO_READ_STATUS,
        defaultConfig.AUTO_READ_STATUS
    ),

    MODE: process.env.MODE || defaultConfig.MODE
};
