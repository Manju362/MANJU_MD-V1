const { cmd } = require('../lib/command');

cmd({
  pattern: 'owner',
  desc: 'Bot owner contact info',
  category: 'info',
  filename: __filename,
}, async (client, m) => {
  const ownerNumber = '94766863255';
  const ownerName = 'Pathum Rajapakshe';

  const caption = `
*👑 BOT OWNER DETAILS 👑*

╭───────────────◆
│ *📛 නම:* ${ownerName}
│ *📞 නම්බර්:* wa.me/${ownerNumber}
│ *💬 WhatsApp:* Always Active
│ *🌐 GitHub:* github.com/Manju362
╰───────────────◆

_ඔබට ගැටලුවක් ඇත්නම් Ownerව සම්බන්ධ කරන්න._
`.trim();

  await client.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdReply: {
        title: 'Pathum Rajapakshe - Owner',
        body: 'Click to Contact via WhatsApp',
        thumbnailUrl: 'https://telegra.ph/file/ea0ae33a6e3cdb3c160dd.jpg',
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: `https://wa.me/${ownerNumber}`
      }
    }
  }, { quoted: m });
});
