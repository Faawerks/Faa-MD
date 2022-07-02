let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Dana」
│ •  [0857-4295-2493]
│ •  [0857-4295-2493]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
