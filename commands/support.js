/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Icons = require('../UI/Icons');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support server of this Bot'),
    async execute(interaction) {
        const supportServerLink = "https://discord.gg/rapidfire-corporation";
        const youtubeLink = "https://www.youtube.com/watch?v=Tib93X9T77s";

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: 'Support Server',
                iconURL: Icons.dotIcon,
                url: 'https://discord.gg/xQF9f9yUEM'
            })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- YouTube - ${youtubeLink}`)
            .setImage('https://media.discordapp.net/attachments/1290903467228925972/1297436039400525824/R5.png?ex=6715eaf8&is=67149978&hm=041c3ea0a1c858a20ba33c2710fe94925ddd5f50b1bb445b489cd883b8703e09&34fb&')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
