import fs from 'fs'

let handler = async (m, { conn, usedPrefix: _p, args, sender }) => {
  try {
    const username = m.pushName || conn.getName(sender) || sender.split('@')[0]
    
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.keys(global.plugins || {}).length

    const menuImages = ['menu.jpg', 'menu2.jpg', 'menu3.jpg', 'menu4.jpg', 'menu5.jpg', 'menu6.jpg' , 'menu7.jpg']
    
    let existingImages = []
    
    for (let imgName of menuImages) {
      const imgPath = `./src/assets/${imgName}`
      if (fs.existsSync(imgPath)) {
        existingImages.push(imgPath)
      }
    }

    let menuImage = global.icono
    
    if (existingImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * existingImages.length)
      const randomImagePath = existingImages[randomIndex]
      menuImage = fs.readFileSync(randomImagePath)
    } 

    const menuHeader = `
「💙」 ¡Hola! *${username}*, Soy *${botname}*
> Aquí tienes la lista de comandos.

╭┈ ↷
│❀ 𝗠𝗼𝗱𝗼 » Público
│ᰔ 𝗧𝗶𝗽𝗼 » ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
│❀ 𝗖𝗿𝗲𝗮𝗱𝗼𝗿𝗮 » ${etiqueta}
│⚘ 𝗣𝗿𝗲𝗳𝗶𝗷𝗼 » ${_p}
│✰ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀 » ${totalreg.toLocaleString()}
│⚘ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 » ${vs}
│🜸 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 » Multi Device
╰─────────────────
`.trim()

    const menus = {
      info: `
\`˚.⋆ֹ　 ꒰　I N F O - B O T  ꒱　ㆍ₊⊹\`
> Comandos de 𝗜𝗻𝗳𝗼-𝗯𝗼𝘁.
> *${_p}help • ${_p}menu*
> ⚘ Ver el menú de comandos.
> *${_p}sug • ${_p}suggest*
> ⚘ Sugerir nuevas funciones al desarrollador.
> *${_p}reporte • ${_p}report*
> ⚘ Reportar fallas o problemas del bot.
> *${_p}p • ${_p}ping*
> ⚘ Ver la velocidad de respuesta del Bot.
> *${_p}status • ${_p}system*
> ⚘ Ver estado del sistema de alojamiento.
> *${_p}ds • ${_p}fixmsg*
> ⚘ Eliminar archivos de sesión innecesarios.`,

    descargas: `
\`˚.⋆ֹ　 ꒰　D E S C A R G A S  ꒱　ㆍ₊⊹\`
> Comandos de 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝘀 para descargar archivos de varias fuentes.
> *${_p}tiktok • ${_p}tt* + [Link] / [busqueda]
> ⚘ Descargar un video de TikTok.
> *${_p}mediafire • ${_p}mf* + [Link]
> ⚘ Descargar un archivo de MediaFire.
> *${_p}mega • ${_p}mg* + [Link]
> ⚘ Descargar un archivo de MEGA.
> *${_p}play • ${_p}play2 • ${_p}ytmp3 • ${_p}ytmp4* + [Cancion] : [Link]
> ⚘ Descargar una cancion o vídeo de YouTube.
> *${_p}facebook • ${_p}fb* + [Link]
> ⚘ Descargar un video de Facebook.
> *${_p}twitter • ${_p}x* + [Link]
> ⚘ Descargar un video de Twitter/X.
> *${_p}ig • ${_p}instagram* + [Link]
> ⚘ Descargar un reel de Instagram.
> *${_p}pinterest • ${_p}pin* + [busqueda] : [Link]
> ⚘ Buscar y descargar imagenes de Pinterest.
> *${_p}image • ${_p}imagen* + [busqueda]
> ⚘ Buscar y descargar imagenes de Google.
> *${_p}ytsearch • ${_p}search* + [busqueda]
> ⚘ Buscar videos de YouTube.`,


      utilidades: `
\`˚.⋆ֹ　 ꒰　U T I L I D A D E S  ꒱　ㆍ₊⊹\`
> Comandos de 𝗨𝘁𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀.
> *${_p}calcular • ${_p}cal*
> ⚘ Calcular tipos de ecuaciones.
> *${_p}sticker • ${_p}s • ${_p}wm*
> ⚘ Convertir una imagen/video a sticker.
> *${_p}toimg • ${_p}img*
> ⚘ Convertir un sticker a imagen.
> *${_p}read • ${_p}readviewonce*
> ⚘ Ver imágenes viewonce.
> *${_p}translate • ${_p}traducir • ${_p}trad*
> ⚘ Traducir palabras en otros idiomas.
> *${_p}tourl • ${_p}catbox*
> ⚘ Convertidor de imágen/video en urls.`,

     
    bots: `
\`˚.⋆ֹ　 ꒰　B O T S  ꒱　ㆍ₊⊹\`
> Comandos para registrar tu propio Bot.
> *${_p}qr • ${_p}code*
> ⚘ Crear un Sub-Bot con un codigo QR/Code.
> *${_p}bots • ${_p}botlist*
> ⚘ Ver el numero de bots activos.
> *${_p}status • ${_p}estado*
> ⚘ Ver estado del bot.
> *${_p}p • ${_p}ping*
> ⚘ Medir tiempo de respuesta.
> *${_p}join* + [Invitacion]
> ⚘ Unir al bot a un grupo.
> *${_p}leave • ${_p}salir*
> ⚘ Salir de un grupo.
> *${_p}logout*
> ⚘ Cerrar sesion del bot.
> *${_p}setpfp • ${_p}setimage*
> ⚘ Cambiar la imagen de perfil.
> *${_p}setstatus* + [estado]
> ⚘ Cambiar el estado del bot.
> *${_p}setusername* + [nombre]
> ⚘ Cambiar el nombre de usuario.`,

    
    perfil: `
\`˚.⋆ֹ　 ꒰　P E R F I L  ꒱　ㆍ₊⊹\`
> Comandos de 𝗣𝗲𝗿𝗳𝗶𝗹 para ver y configurar tu perfil.
> *${_p}leaderboard • ${_p}lboard • ${_p}top* + <Paginá>
> ⚘ Top de usuarios con más experiencia.
> *${_p}level • ${_p}lvl* + <@Mencion>
> ⚘ Ver tu nivel y experiencia actual.
> *${_p}marry • ${_p}casarse* + <@Mencion>
> ⚘ Casarte con alguien.
> *${_p}profile* + <@Mencion>
> ⚘ Ver tu perfil.
> *${_p}setbirth* + [fecha]
> ⚘ Establecer tu fecha de cumpleaños.
> *${_p}setdescription • ${_p}setdesc* + [Descripcion]
> ⚘ Establecer tu descripcion.
> *${_p}setgenre* + Hombre | Mujer
> ⚘ Establecer tu genero.
> *${_p}delgenre • ${_p}delgenero*
> ⚘ Eliminar tu género.
> *${_p}delbirth* + [fecha]
> ⚘ Borrar tu fecha de cumpleaños.
> *${_p}divorce*
> ⚘ Divorciarte de tu pareja.
> *${_p}setfavorite • ${_p}setfav* + [Personaje]
> ⚘ Establecer tu claim favorito.
> *${_p}deldescription • ${_p}deldesc*
> ⚘ Eliminar tu descripción.`,

    grupos: `
\`˚.⋆ֹ　 ꒰　G R U P O S  ꒱　ㆍ₊⊹\`
> Comandos para Administradores de grupos.
> *${_p}tag • ${_p}hidetag* + [mensaje]
> ⚘ Envía un mensaje mencionando a todos los usuarios del grupo.
> *${_p}detect • ${_p}alertas* + [enable:disable]
> ⚘ Activar:desactivar las alertas de promote/demote.
> *${_p}antilink • ${_p}antienlace* + [enable/disable]
> ⚘ Activar/desactivar el antienlace.
> *${_p}bot* + [enable/disable]
> ⚘ Activar/desactivar al bot.
> *${_p}close • ${_p}cerrar*
> ⚘ Cerrar el grupo para que solo los administradores puedan enviar mensajes.
> *${_p}demote* + <@usuario> | {mencion}
> ⚘ Descender a un usuario de administrador.`,

    

    }

       const category = args[0]?.toLowerCase()
    let selectedMenu = menus[category]

    if (!selectedMenu) {
      selectedMenu = Object.values(menus).join('\n\n')
    }

    const txt = `${menuHeader}\n\n${selectedMenu}\n\n> ✐ Power by HYOSIMAR HT`

    conn.sendMessage(m.chat, {
      image: menuImage,
      caption: txt,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363403176894973@newsletter',
          serverMessageId: '',
          newsletterName: '【 ✰ 】PANDA MODS'
        }
      }
    }, { quoted: m })

  } catch (e) {
    conn.sendMessage(m.chat, {
      text: `✰ Error en el menú:\n${e}`
    }, { quoted: m })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'comandos', 'commands']
handler.group = true

export default handler
