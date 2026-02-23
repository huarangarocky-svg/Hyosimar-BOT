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

    gacha: `
\`˚.⋆ֹ　 ꒰　G A C H A  ꒱　ㆍ₊⊹\`
> Comandos de 𝗚𝗮𝗰𝗵𝗮 para reclamar y colecciónar personajes.
> *${_p}buycharacter • ${_p}buychar • ${_p}buyc* + [nombre]
> ⚘ Comprar un personaje en venta.
> *${_p}charimage • ${_p}waifuimage • ${_p}cimage • ${_p}wimage* + [nombre]
> ⚘ Ver una imagen aleatoria de un personaje.
> *${_p}charinfo • ${_p}winfo • ${_p}waifuinfo* + [nombre]
> ⚘ Ver información de un personaje.
> *${_p}claim • ${_p}c • ${_p}reclamar* + {citar personaje}
> ⚘ Reclamar un personaje.
> *${_p}delclaimmsg*
> ⚘ Restablecer el mensaje al reclamar un personaje.
> *${_p}deletewaifu • ${_p}delwaifu • ${_p}delchar* + [nombre]
> ⚘ Eliminar un personaje reclamado.
> *${_p}favoritetop • ${_p}favtop*
> ⚘ Ver el top de personajes favoritos.
> *${_p}gachainfo • ${_p}ginfo • ${_p}infogacha*
> ⚘ Ver tu información de gacha.
> *${_p}giveallharem* + [@usuario]
> ⚘ Regalar todos tus personajes a otro usuario.
> *${_p}givechar • ${_p}givewaifu • ${_p}regalar* + [@usuario] [nombre]
> ⚘ Regalar un personaje a otro usuario.
> *${_p}robwaifu • ${_p}robarwaifu* + [@usuario]
> ⚘ Robar un personaje a otro usuario.
> *${_p}harem • ${_p}waifus • ${_p}claims* + <@usuario>
> ⚘ Ver tus personajes reclamados.
> *${_p}haremshop • ${_p}tiendawaifus • ${_p}wshop* + <Pagina>
> ⚘ Ver los personajes en venta.
> *${_p}removesale • ${_p}removerventa* + [precio] [nombre]
> ⚘ Eliminar un personaje en venta.
> *${_p}rollwaifu • ${_p}rw • ${_p}roll*
> ⚘ Waifu o husbando aleatorio.
> *${_p}sell • ${_p}vender* + [precio] [nombre]
> ⚘ Poner un personaje a la venta.
> *${_p}serieinfo • ${_p}ainfo • ${_p}animeinfo* + [nombre]
> ⚘ Información de un anime.
> *${_p}serielist • ${_p}slist • ${_p}animelist*
> ⚘ Listar series del bot.
> *${_p}setclaimmsg • ${_p}setclaim* + [mensaje]
> ⚘ Modificar el mensaje al reclamar un personaje.
> *${_p}trade • ${_p}intercambiar* + [Tu personaje] : [Personaje 2]
> ⚘ Intercambiar un personaje con otro usuario.
> *${_p}vote • ${_p}votar* + [nombre]
> ⚘ Votar por un personaje para subir su valor.
> *${_p}waifusboard • ${_p}waifustop • ${_p}topwaifus • ${_p}wtop* + [número]
> ⚘ Ver el top de personajes con mayor valor.`,

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

    economia: `
\`˚.⋆ֹ　 ꒰　E C O N O M I A  ꒱　ㆍ₊⊹\`
> Comandos de 𝗘𝗰𝗼𝗻𝗼𝗺𝗶𝗮 para ganar dinero.
> *${_p}w • ${_p}work • ${_p}trabajar*
> ⚘ Ganar coins trabajando.
> *${_p}slut • ${_p}prostituirse*
> ⚘ Ganar coins prostituyéndote.
> *${_p}coinflip • ${_p}flip • ${_p}cf* + [cantidad] <cara/cruz>
> ⚘ Apostar coins en un cara o cruz.
> *${_p}crime • ${_p}crimen*
> ⚘ Ganar coins rapido.
> *${_p}roulette • ${_p}rt* + [red/black] [cantidad]
> ⚘ Apostar coins en una ruleta.
> *${_p}casino • ${_p}apostar • ${_p}slot* + [cantidad]
> ⚘ Apuestar coins en el casino.
> *${_p}balance • ${_p}bal • ${_p}bank* + <usuario>
> ⚘ Ver cuantos coins tienes en el banco.
> *${_p}deposit • ${_p}dep • ${_p}depositar • ${_p}d* + [cantidad] | all
> ⚘ Depositar tus coins en el banco.
> *${_p}withdraw • ${_p}with • ${_p}retirar* + [cantidad] | all
> ⚘ Retirar tus coins del banco.
> *${_p}economyinfo • ${_p}einfo*
> ⚘ Ver tu información de economía en el grupo.
> *${_p}givecoins • ${_p}pay • ${_p}coinsgive* + [usuario] [cantidad]
> ⚘ Dar coins a un usuario.
> *${_p}miming • ${_p}minar • ${_p}mine*
> ⚘ Realizar trabajos de minería y ganar coins.
> *${_p}daily • ${_p}diario*
> ⚘ Reclamar tu recompensa diaria.
> *${_p}cofre • ${_p}coffer*
> ⚘ Reclamar tu cofre diario.
> *${_p}weekly • ${_p}semanal*
> ⚘ Reclamar tu recompensa semanal.
> *${_p}monthly • ${_p}mensual*
> ⚘ Reclamar tu recompensa mensual.
> *${_p}steal • ${_p}robar • ${_p}rob* + [@mencion]
> ⚘ Intentar robar coins a un usuario.
> *${_p}economyboard • ${_p}eboard • ${_p}baltop* + <pagina>
> ⚘ Ver tu información de economía en el grupo.
> *${_p}aventura • ${_p}adventure*
> ⚘ Aventuras para ganar coins y exp.
> *${_p}curar • ${_p}heal*
> ⚘ Curar salud para salir de aventuras.
> *${_p}cazar • ${_p}hunt*
> ⚘ cazar animales para ganar coins y exp.
> *${_p}fish • ${_p}pescar*
> ⚘ Ganar coins y exp pescando.
> *${_p}mazmorra • ${_p}dungeon*
> ⚘ Explorar mazmorras para ganar coins y exp.`,

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
> ⚘ Descender a un usuario de administrador.
> *${_p}economy* + [enable/disable]
> ⚘ Activar/desactivar los comandos de economía.
> *${_p}gacha* + [enable/disable]
> ⚘ Activar/desactivar los comandos de Gacha y Games.
> *${_p}welcome • ${_p}bienvenida* + [enable/disable]
> ⚘ Activar/desactivar la bienvenida y despedida.
> *${_p}setbye* + [texto]
> ⚘ Establecer un mensaje de despedida personalizado.
> *${_p}setprimary* + [@bot]
> ⚘ Establece un bot como primario del grupo.
> *${_p}setwelcome* + [texto]
> ⚘ Establecer un mensaje de bienvenida personalizado.
> *${_p}kick* + <@usuario> | {mencion}
> ⚘ Expulsar a un usuario del grupo.
> *${_p}nsfw* + [enable/disable]
> ⚘ Activar/desactivar los comandos NSFW.
> *${_p}onlyadmin* + [enable/disable]
> ⚘ Permitir que solo los administradores puedan utilizar los comandos.
> *${_p}open • ${_p}abrir*
> ⚘ Abrir el grupo para que todos los usuarios puedan enviar mensajes.
> *${_p}promote* + <@usuario> | {mencion}
> ⚘ Ascender a un usuario a administrador.
> *${_p}add • ${_p}añadir • ${_p}agregar* + {número}
> ⚘ Mencionar a los admins para solicitar ayuda.
> *${_p}restablecer • ${_p}revoke*
> ⚘ Restablecer enlace del grupo.
> *${_p}addwarn • ${_p}warn* + <@usuario> | {mencion}
> ⚘ Advertir aún usuario.
> *${_p}unwarn • ${_p}delwarn* + <@usuario> | {mencion}
> ⚘ Quitar advertencias de un usuario.
> *${_p}advlist • ${_p}listadv*
> ⚘ Ver lista de usuarios advertidos.
> *${_p}listnum • ${_p}kicknum* [texto]
> ⚘ Eliminar usuarios con prefijo de país.
> *${_p}gpbanner • ${_p}groupimg*
> ⚘ Cambiar la imagen del grupo.
> *${_p}gpname • ${_p}groupname* [texto]
> ⚘ Cambiar la nombre del grupo.
> *${_p}gpdesc • ${_p}groupdesc* [texto]
> ⚘ Cambiar la descripción del grupo.
> *${_p}del • ${_p}delete* + {citar un mensaje}
> ⚘ Eliminar un mensaje.
> *${_p}gp • ${_p}infogrupo*
> ⚘ Ver la Informacion del grupo.
> *${_p}link*`,

    nsfw: `
\`˚.⋆ֹ　 ꒰　N S F W  ꒱　ㆍ₊⊹\`
> *${_p}danbooru • ${_p}dbooru* + [Tags]
> ⚘ Buscar imagenes en Danbooru
> *${_p}gelbooru • ${_p}gbooru* + [Tags]
> ⚘ Buscar imagenes en Gelbooru
> *${_p}rule34 • ${_p}r34* + [Tags]
> ⚘ Buscar imagenes en Rule34
> *${_p}xvideos •${_p}xvideosdl* + [Link]
> ⚘ Descargar un video Xvideos. 
> *${_p}xnxx •${_p}xnxxdl* + [Link]
> ⚘ Descargar un video Xnxx.
> *${_p}anal* + <mencion>
> ⚘ Hacer un anal
> *${_p}waifu*
> ⚘ Buscá una waifu aleatorio.
> *${_p}bath* + <mencion>
> ⚘ Bañarse
> *${_p}blowjob • ${_p}mamada • ${_p}bj* + <mencion>
> ⚘ Dar una mamada
> *${_p}boobjob* + <mencion>
> ⚘ Hacer una rusa
> *${_p}cum* + <mencion>
> ⚘ Venirse en alguien.
> *${_p}fap* + <mencion>
> ⚘ Hacerse una paja
> *${_p}ppcouple • ${_p}ppcp*
> ⚘ Genera imagenes para amistades o parejas.
> *${_p}footjob* + <mencion>
> ⚘ Hacer una paja con los pies
> *${_p}fuck • ${_p}coger • ${_p}fuck2* + <mencion>
> ⚘ Follarte a alguien
> *${_p}cafe • ${_p}coffe*
> ⚘ Tomate un cafecito con alguien
> *${_p}violar • ${_p}perra* + <mencion>
> ⚘ Viola a alguien
> *${_p}grabboobs* + <mencion>
> ⚘ Agarrrar tetas
> *${_p}grop* + <mencion>
> ⚘ Manosear a alguien
> *${_p}lickpussy* + <mencion>
> ⚘ Lamer un coño
> *${_p}rule34 • ${_p}r34* + [Tags]
> ⚘ Buscar imagenes en Rule34
> *${_p}sixnine • ${_p}69* + <mencion>
> ⚘ Haz un 69 con alguien
> *${_p}spank • ${_p}nalgada* + <mencion>
> ⚘ Dar una nalgada
> *${_p}suckboobs* + <mencion>
> ⚘ Chupar tetas
> *${_p}undress • ${_p}encuerar* + <mencion>
> ⚘ Desnudar a alguien
> *${_p}yuri • ${_p}tijeras* + <mencion>
> ⚘ Hacer tijeras.`,

    anime: `
\`˚.⋆ֹ　 ꒰　A N I M E  ꒱　ㆍ₊⊹\`
> Comandos de reacciones de anime.
> *${_p}angry • ${_p}enojado* + <mencion>
> ⚘ Estar enojado
> *${_p}bath • ${_p}bañarse* + <mencion>
> ⚘ Bañarse
> *${_p}bite • ${_p}morder* + <mencion>
> ⚘ Muerde a alguien
> *${_p}bleh • ${_p}lengua* + <mencion>
> ⚘ Sacar la lengua
> *${_p}blush • ${_p}sonrojarse* + <mencion>
> ⚘ Sonrojarte
> *${_p}bored • ${_p}aburrido* + <mencion>
> ⚘ Estar aburrido
> *${_p}clap • ${_p}aplaudir* + <mencion>
> ⚘ Aplaudir
> *${_p}coffee • ${_p}cafe • ${_p}café* + <mencion>
> ⚘ Tomar café
> *${_p}cry • ${_p}llorar* + <mencion>
> ⚘ Llorar por algo o alguien
> *${_p}cuddle • ${_p}acurrucarse* + <mencion>
> ⚘ Acurrucarse
> *${_p}dance • ${_p}bailar* + <mencion>
> ⚘ Sacate los pasitos prohíbidos
> *${_p}dramatic • ${_p}drama* + <mencion>
> ⚘ Drama
> *${_p}drunk • ${_p}borracho* + <mencion>
> ⚘ Estar borracho
> *${_p}eat • ${_p}comer* + <mencion>
> ⚘ Comer algo delicioso
> *${_p}facepalm • ${_p}palmada* + <mencion>
> ⚘ Darte una palmada en la cara
> *${_p}happy • ${_p}feliz* + <mencion>
> ⚘ Salta de felicidad
> *${_p}hug • ${_p}abrazar* + <mencion>
> ⚘ Dar un abrazo
> *${_p}impregnate • ${_p}preg • ${_p}preñar • ${_p}embarazar* + <mencion>
> ⚘ Embarazar a alguien
> *${_p}kill • ${_p}matar* + <mencion>
> ⚘ Toma tu arma y mata a alguien
> *${_p}kiss • ${_p}muak* + <mencion>
> ⚘ Dar un beso
> *${_p}kisscheek • ${_p}beso* + <mencion>
> ⚘ Beso en la mejilla
> *${_p}laugh • ${_p}reirse* + <mencion>
> ⚘ Reírte de algo o alguien
> *${_p}lick • ${_p}lamer* + <mencion>
> ⚘ Lamer a alguien
> *${_p}love • ${_p}amor • ${_p}enamorado • ${_p}enamorada* + <mencion>
> ⚘ Sentirse enamorado
> *${_p}pat • ${_p}palmadita • ${_p}palmada* + <mencion>
> ⚘ Acaricia a alguien
> *${_p}poke • ${_p}picar* + <mencion>
> ⚘ Picar a alguien
> *${_p}pout • ${_p}pucheros* + <mencion>
> ⚘ Hacer pucheros
> *${_p}punch • ${_p}pegar • ${_p}golpear* + <mencion>
> ⚘ Dar un puñetazo
> *${_p}run • ${_p}correr* + <mencion>
> ⚘ Correr
> *${_p}sad • ${_p}triste* + <mencion>
> ⚘ Expresar tristeza
> *${_p}scared • ${_p}asustado • ${_p}asustada* + <mencion>
> ⚘ Estar asustado
> *${_p}seduce • ${_p}seducir* + <mencion>
> ⚘ Seducir a alguien
> *${_p}shy • ${_p}timido • ${_p}timida* + <mencion>
> ⚘ Sentir timidez
> *${_p}slap • ${_p}bofetada* + <mencion>
> ⚘ Dar una bofetada
> *${_p}sleep • ${_p}dormir* + <mencion>
> ⚘ Tumbarte a dormir
> *${_p}smoke • ${_p}fumar* + <mencion>
> ⚘ Fumar
> *${_p}spit • ${_p}escupir* + <mencion>
> ⚘ Escupir
> *${_p}step • ${_p}pisar* + <mencion>
> ⚘ Pisar a alguien
> *${_p}think • ${_p}pensar* + <mencion>
> ⚘ Pensar en algo
> *${_p}walk • ${_p}caminar* + <mencion>
> ⚘ Caminar
> *${_p}wink • ${_p}guiñar* + <mencion>
> ⚘ Guiñar el ojo
> *${_p}cringe • ${_p}avergonzarse* + <mencion>
> ⚘ Sentir vergüenza ajena
> *${_p}smug • ${_p}presumir* + <mencion>
> ⚘ Presumir con estilo
> *${_p}smile • ${_p}sonreir* + <mencion>
> ⚘ Sonreír con ternura
> *${_p}highfive • ${_p}5* + <mencion>
> ⚘ Chocar los cinco
> *${_p}bully • ${_p}bullying* + <mencion>
> ⚘ Molestar a alguien
> *${_p}handhold • ${_p}mano* + <mencion>
> ⚘ Tomarse de la mano
> *${_p}wave • ${_p}hola* + <mencion>
> ⚘ Saludar con la mano`
    }

       const category = args[0]?.toLowerCase()
    let selectedMenu = menus[category]

    if (!selectedMenu) {
      selectedMenu = Object.values(menus).join('\n\n')
    }

    const txt = `${menuHeader}\n\n${selectedMenu}\n\n> ✐ Powered By Panda Mods`

    conn.sendMessage(m.chat, {
      image: menuImage,
      caption: txt,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363403176894973@newsletter',
          serverMessageId: '',
          newsletterName: '【 ✰ 】HYOSIMAR APKS'
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
