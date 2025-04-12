module.exports = {
  name: "ping",
  alias: ["ping"],
  description: "බොට්ගේ ප්‍රතිචාර වේලාව පෙන්වයි",
  category: "info",
  use: ".ping",
  async run({ msg, sock }) {
    const start = new Date().getTime();

    // Send initial loading message
    let loadingMsg = await sock.sendMessage(msg.from, {
      text: "╭─⏳ *Ping Check...*\n├── ධාවනය වෙමින්...\n╰── කරුණාකර රැඳී සිටින්න...",
      quoted: msg
    });

    // Measure response time
    const end = new Date().getTime();
    const ping = end - start;

    // Edit the message with the result
    await sock.sendMessage(msg.from, {
      text: `╭─📡 *Ping Result*\n├── 📶 *Response Time:* ${ping} ms\n╰── ✅ *Bot Active!*`,
      edit: loadingMsg.key
    });
  },
};
