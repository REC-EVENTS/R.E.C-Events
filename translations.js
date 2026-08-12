const translations = {
    fr: {
        
        "welcome.event": "EVENT",
        "welcome.discord": "Discord",

        "nav.home": "ACCUEIL",
        "nav.rules": "REGLEMENT",
        "nav.schedule": "PLANNING",
        "nav.teams": "EQUIPES",
        "nav.register": "INSCRIPTION",
        "nav.info": "INFOS",

        "page.title": "R.E.C Rivals",

        "presentation.title": "Présentation de l'évenement",
        "presentation.text": `R.E.C Rivals est le premier grand tournoi compétitif organisé par R.E.C Events. Pendant trois jours consécutifs,
                    six équipes de cinq joueurs s'affronteront à travers une série d'épreuves majeures mêlant PvP, stratégie,
                    coordination et prise de décision. Le format s'inspire des grandes compétitions de créateurs en ligne, adapté à
                    l'univers de Rust et à l'identité de R.E.C Events.
                    <br>
                    <br>
                    La victoire ne se joue pas uniquement au combat. La capacité à travailler en équipe, à adapter sa stratégie en
                    temps réel, à sécuriser ses ressources et à prendre les bonnes décisions sous pression sera tout aussi
                    déterminante. Chaque profil — combattant, leader ou stratège — aura un rôle essentiel à jouer.`,

        "footer.copyright": "© 2026 Satomi (L.K.) — Tous droits réservés",

        "rules.title": "Règlement",
        "rules.text": `uhfuiobububuibuibuiobuibuoi`,


        
        "teams.ironwolves.motto": "Iron Wolves",
        "teams.taskforceviper.motto": "Task Force Viper",
        "teams.ravencompany.motto": "Raven Company",
        "teams.dustraid.motto": "Dust Raiders",
        "teams.phantomunit.motto": "Phantom Unit",
        "teams.blacktide.motto": "Black Tide",

        "planning.title": "Planning de l'événement",
        "planning.day1": "Jour 1",
        "planning.day2": "Jour 2",
        "planning.day3": "Jour 3",
        "planning.afternoon": "Après-midi",
        "planning.evening": "Soir",

        "planning.serverOpen": "Ouverture du serveur",
        "planning.serverClose": "Fermeture du serveur",
        "planning.openingCeremony": "Cérémonie d'ouverture",
        "planning.baseProtectionOn": "Protection de base activée",
        "planning.baseProtectionOff": "Protection de base désactivée",
        "planning.workbench2": "Workbench 2 débloqué",
        "planning.workbench3": "Workbench 3 débloqué",
        "planning.event": "Epreuve",
        "planning.bankRaid": "Raid Banque",
        "planning.closingCeremony": "Cérémonie Fermeture",

        "rules.title": "RÈGLEMENT OFFICIEL - R.E.C RIVALS 2026",
        "rules.respect.title": "RESPECT ET COMPORTEMENT",
        "rules.respect.text": `La participation aux R.E.C Rivals implique le respect de tous les participants, des organisateurs et des spectateurs. Aucun comportement toxique ne sera toléré. Les insultes, le harcèlement, les menaces ainsi que tout propos raciste, homophobe, transphobe, xénophobe ou discriminatoire sont strictement interdits.<br>Toute attitude contraire à l'esprit de l'événement pourra entraîner une sanction immédiate.<br>Toute action visant à contourner l'esprit de la compétition, même si elle n'est pas explicitement interdite dans le présent règlement, pourra être considérée comme antisportive et faire l'objet d'une sanction.<br>Le streamsniping est strictement interdit.<br>Dès leur connexion au serveur Rust, les joueurs doivent obligatoirement être présents dans le salon vocal de leur équipe sur le Discord R.E.C Events, et ce pendant toute la durée de l'événement.<br>
        L'inscription au tournoi R.E.C Rivals 2026 vaut acceptation pleine et entière du présent règlement.<br>`,
        "rules.condition.title": "CONDITIONS DE PARTICIPATION",
        "rules.condition.text": `En s'inscrivant à R.E.C Rivals 2026, chaque participant déclare et certifie être âgé de 18 ans ou plus. L'organisation se réserve le droit d'exclure tout participant dont l'âge déclaré s'avérerait inexact, sans préjudice des conséquences que cela pourrait entraîner pour le participant concerné.`,
        "rules.diffusion.title": "DIFFUSION ET DROIT À L'IMAGE",
        "rules.diffusion.text": `En participant à cet événement, vous acceptez d'être filmé et enregistré (voix, gameplay), que ce soit sur le serveur Rust ou sur les canaux vocaux Discord R.E.C Events, et diffusé en direct et/ou en différé sur Twitch et YouTube par l'organisation.<br>
        Toute demande de retrait d'un passage vous concernant peut être adressée via le canal "support", et sera traitée sous 7jours.<br>
        Les participants sont informés que d'autres participants ou spectateurs peuvent également filmer, streamer ou publier du contenu lié à l'événement de leur propre initiative. L'organisation n'est pas responsable du contenu publié par des tiers en dehors de ses propres canaux officiels (Twitch/YouTube de l'organisation). En participant à l'événement, vous acceptez de pouvoir également apparaître dans ce type de contenu tiers.`,
        "rules.base.title": "CONSTRUCTION DES BASES",
        "rules.base.text": `Chaque équipe doit construire sa base principale sur l'île que son équipe a réclamée. La banque (trou central) doit obligatoirement être intégrée à la construction et rester accessible à tout moment.<br>Il est interdit de construire directement dans la banque, d'en condamner l'accès ou de rendre son utilisation impossible (pas de digicode sur la trappe !).`,
        "rules.raids.title": "RAIDS",
        "rules.raids.text": `Les raids sont autorisés dès le début du tournoi, à l'exception de la période de protection nocturne, active chaque nuit de 01h00 à 10h00 (CEST).<br>Le grief est interdit. Toute action visant à rendre une base définitivement inutilisable ou à empêcher une équipe de continuer à jouer sera sanctionnée.`,
        "rules.points.title": "SYSTÈME DE POINTS",
        "rules.points.text": `Les points sont obtenus grâce aux épreuves officielles ainsi qu'aux tags récupérés sur les joueurs éliminés.<br>Un tag ne rapporte des points qu'après avoir été déposé dans la banque de son équipe. Les éliminations entre membres d'une même équipe ne génèrent aucun tag.<br>Le vol des points stockés dans les banques est impossible avant la phase finale.`,
        "rules.steal.title": "VOL DE POINTS",
        "rules.steal.text": `Le vol de points est uniquement autorisé durant les trois dernières heures du tournoi.<br>Pour réussir un vol, une équipe doit atteindre la banque adverse, lancer une canalisation et la maintenir pendant cinq minutes sans interruption. En cas de mort ou de sortie de la zone, la canalisation est immédiatement annulée. L'équipe attaquée est automatiquement avertie dès le début de la canalisation.`,
        "rules.cheat.title": "TRICHE ET EXPLOITS",
        "rules.cheat.text": `Toute forme de triche est strictement interdite. Cela comprend notamment les logiciels tiers, les scripts, les exploits de bugs ainsi que toute tentative d'obtenir un avantage déloyal.<br>L'ensemble des règles officielles de Facepunch s'applique pendant toute la durée de l'événement.<br>Tout bug ou comportement anormal du serveur doit être signalé à l'organisation. Son utilisation volontaire, même une seule fois, pourra entraîner une sanction.`,
        "rules.restrict.title": "RESTRICTIONS",
        "rules.restrict.text": `Il est interdit de construire dans la banque, de quitter l'île principale pour rejoindre une île extérieure ou une zone non prévue pour le tournoi, ainsi que de contourner volontairement les mécaniques mises en place par les organisateurs.<br>Toute tentative de manipulation de classement ou des règles sera sanctionnée.`,
        "rules.disconect.title": "DÉCONNEXIONS",
        "rules.disconect.text": `Les déconnexions, crashs ou problèmes de connexion des joueurs relèvent de leur responsabilité. Aucun événement ou épreuve ne sera relancé pour ce motif, sauf si le problème provient du serveur ou d'un incident technique général.`,
        "rules.claims.title": "RÉCLAMATIONS",
        "rules.claims.text": `Toute contestation ou réclamation doit être adressée directement aux organisateurs dans le calme et le respect. Les décisions prises par l'organisation sont définitives et ne pourront faire l'objet d'aucun recours.`,
        "rules.sanctions.title": "SANCTIONS",
        "rules.sanctions.text": `Selon la gravité des faits, les organisateurs se réservent le droit d'appliquer toute sanction qu'ils jugeront nécessaire, pouvant aller d'un simple avertissement jusqu'à l'exclusion définitive du tournoi.<br>La participation aux R.E.C Rivals implique l'acceptation pleine et entière du présent règlement.<br>Les organisateurs peuvent modifier ou compléter le règlement si une situation imprévue survient.<br>Toute décision prise par l'organisation est définitive.`,
    
        "cd.days": "JOURS",
        "cd.hours": "HEURES",
        "cd.minutes": "MIN",
        "cd.seconds": "SEC",
        
        
        "info.title": "Map officielle",

        "map.zone1": "Île 1",
        "map.zone2": "Île 2",
        "map.zone3": "Île 3",
        "map.zone4": "Île 4",
        "map.zone5": "Île 5",
        "map.zone6": "Île 6",
        "map.close": "FERMER",

        
        "info.format.title": "Format",
        "info.format.text": `6 équipes de 5 joueurs<br>3 jours de compétition<br>Du vendredi 21 au dimanche 23 août 2026<br>Clôture officielle : 23h00, dimanche 23 août 2026<br>2 à 3 épreuves majeures par journée à horaires fixes`,

        "info.territory.title": "Base et territoire",
        "info.territory.text": `Chaque équipe revendique une île en ordre d'arrivée.<br>Zone de construction délimitée physiquement sur chaque île(14 X 14 fondations carrées).<br>Construction libre à l'intérieur du périmètre, ainsi qu'autour de la zone (hemp et/ou garage).<br>Au centre de chaque île se trouve un trou correspondant à la zone de banque.<br>Le trou doit être intégré à la construction et rester accessible à tout moment.<br>La zone de banque doit pouvoir être atteinte par des assaillants lors d'un raid.`,

        "info.kills.title": "Système de points — Kills",
        "info.kills.text": `Chaque élimination génère un tag physique sur le lieu du décès.<br>Le tag est ramassable par n'importe quel participant.<br>Le tag doit être déposé dans la zone de banque pour valoir des points.<br>Un tag en inventaire ne rapporte aucun point.<br>Les éliminations entre coéquipiers ne génèrent aucun tag.`,

        "info.events.title": "Système de points — Épreuves",
        "info.events.text": `Les épreuves distribuent des points selon le classement obtenu.<br>Le barème varie selon la nature et l'importance de l'épreuve.<br>Les horaires sont fixés à l'avance et communiqués aux équipes.<br>En dehors des épreuves : jeu libre total (PvP, monuments, farming).`,

        "info.tiers.title": "Progression par paliers",
        "info.tiers.t1": "Établissement max niveau 1 — Raid autorisé — Vol de points désactivé",
        "info.tiers.t2": "Établissement max niveau 2 — Raid autorisé — Vol de points désactivé",
        "info.tiers.t3": "Établissement max niveau 3 — Raid autorisé — Vol de points activé (3 dernières heures)",
        "info.tiers.note": "Les paliers sont activés manuellement par les organisateurs.",

        "info.night.title": "Protection nocturne",
        "info.night.text": `Active chaque nuit de 01h00 à 10h00 (CEST).<br>Aucun raid ne peut être initié pendant cette période.<br>Il est interdit de raider une base dont les membres sont absents hors horaires officiels.`,

        "info.final.title": "Phase finale — Vol de points",
        "info.final.text": `Active les 3 dernières heures : de 20h00 à 23h00 (CEST), dimanche 23 août.<br>Atteindre la banque adverse → initier la canalisation → maintenir 5 minutes sans interruption.<br>Tout décès ou sortie de zone annule immédiatement la canalisation.<br>L'équipe défenderesse reçoit une alerte dès l'initiation.<br>En cas de succès : la totalité des points est récupérée sous forme de tags.<br>Les tags doivent être rapportés et déposés dans sa propre banque pour être validés.`,

        "info.ranking.title": "Classement",
        "info.ranking.text": `Tableau de classement affiché en temps réel directement en jeu, visible par tous les participants.<br>Mise à jour automatique.<br>Les organisateurs peuvent masquer temporairement les scores à certains moments stratégiques.`,

        "info.victory.title": "Condition de victoire",
        "info.victory.text": `L'équipe avec le plus de points à 23h00 le dimanche 23 août 2026 est déclarée championne des R.E.C Rivals.<br>Une seule équipe remporte le titre.`,
    
        "discord.button": "Rejoindre le Discord",
    },
    en: {

        "welcome.event": "EVENT",
        "welcome.discord": "Discord",

        "nav.home": "HOME",
        "nav.rules": "RULES",
        "nav.schedule": "SCHEDULE",
        "nav.teams": "TEAMS",
        "nav.register": "REGISTRATION",
        "nav.info": "INFORMATIONS",

        "page.title": "R.E.C Rivals",

        "presentation.title": "Event's owerview",
        "presentation.text": `R.E.C Rivals is the first major competitive tournament organized by R.E.C Events. Over three consecutive days, six teams of 
                        five players will compete across a series of major challenges combining PvP, strategy, coordination, and decision-making. The format is 
                        inspired by major online creator competitions, adapted to the world of Rust and to R.E.C Events' identity.
                        <br>
                        <br>
                        Victory is not decided by combat alone. 
                        The ability to work as a team, adapt strategy in real time, secure resources, and make good decisions under pressure will be just as decisive. 
                        Every profile — fighter, leader, or strategist — will have an essential role to play.`,

        "footer.copyright": "© 2026 Satomi (L.K.) — All rights revserved",
        
        "rules.title": "Rules",
        "rules.text": `uhfuiobububuibuibuiobuibuoi`,


        
        "teams.ironwolves.motto": "Iron Wolves",
        "teams.taskforceviper.motto": "Task Force Viper",
        "teams.ravencompany.motto": "Raven Company",
        "teams.dustraid.motto": "Dust Raiders",
        "teams.phantomunit.motto": "Phantom Unit",
        "teams.blacktide.motto": "Black Tide",

        "planning.title": "Event Schedule",
        "planning.day1": "Day 1",
        "planning.day2": "Day 2",
        "planning.day3": "Day 3",
        "planning.afternoon": "Afternoon",
        "planning.evening": "Evening",

        "planning.serverOpen": "Server Opens",
        "planning.serverClose": "Server Closes",
        "planning.openingCeremony": "Opening Ceremony",

        "planning.baseProtectionOff": "Base Protection Disabled",
        "planning.baseProtectionOn": "Base Protection Enabled",

        "planning.workbench2": "Workbench Tier 2 Unlocked",
        "planning.workbench3": "Workbench Tier 3 Unlocked",

        "planning.event": "Challenge",

        "planning.bankRaid": "Bank Raid",
        "planning.closingCeremony": "Closing Ceremony",
    

        "rules.title": "OFFICIAL RULES - R.E.C RIVALS 2026",
        "rules.respect.title": "RESPECT AND CONDUCT",
        "rules.respect.text": `Participation in R.E.C Rivals requires respect for all participants, organizers and spectators. No toxic behavior will be tolerated. Insults, harassment, threats, and any racist, homophobic, transphobic, xenophobic or discriminatory remarks are strictly prohibited.<br>Any behavior contrary to the spirit of the event may result in immediate sanctions.<br>Any action aimed at circumventing the spirit of the competition, even if not explicitly prohibited in these rules, may be considered unsportsmanlike and result in sanctions.<br>Stream sniping is strictly prohibited.<br>As soon as they connect to the Rust server, players are required to be present in their team's voice channel on the R.E.C Events Discord, and this for the entire duration of the event.`,
        "rules.condition.title": "PARTICIPATION REQUIREMENTS",
        "rules.condition.text": `By registering for R.E.C Rivals 2026, each participant declares and certifies that they are 18 years of age or older.<br>
        The organization reserves the right to exclude any participant whose declared age proves to be inaccurate, without prejudice to any consequences this may entail for the participant concerned.`,
        "rules.diffusion.title": "BROADCASTING AND IMAGE RIGHTS",
        "rules.diffusion.text": `Registration for the R.E.C Rivals 2026 tournament constitutes full and complete acceptance of these rules.<br>
        By participating in this event, you agree to be filmed and recorded (voice, gameplay), whether on the Rust server or on R.E.C Events Discord voice channels, and broadcast live and/or delayed on Twitch and YouTube by the organization.<br>
        Any request to have a segment featuring you removed can be submitted via the "support" channel, and will be processed within 7 days.<br>
        Participants are informed that other participants or spectators may also film, stream, or publish content related to the event on their own initiative. The organization is not responsible for content published by third parties outside its own official channels (organization's Twitch/YouTube).<br>
        By participating in the event, you agree that you may also appear in this type of third-party content.`,
        "rules.base.title": "BASE BUILDING",
        "rules.base.text": `Each team must build their main base on the island that their team has claimed.. The bank (central hole) must be integrated into the construction and remain accessible at all times.<br>It is forbidden to build directly inside the bank, block access to it, or make it impossible to use  (no keypad on the hatch!).`,
        "rules.raids.title": "RAIDS",
        "rules.raids.text": `Raiding is allowed from the start of the tournament, except during the nightly protection period, active every night from 01:00 to 10:00 (CEST).<br>Griefing is forbidden. Any action aimed at making a base permanently unusable or preventing a team from continuing to play will be sanctioned.`,
        "rules.points.title": "POINTS SYSTEM",
        "rules.points.text": `Points are earned through official challenges and tags collected from eliminated players.<br>A tag only earns points once deposited in the team's bank. Eliminations between members of the same team do not generate any tags.<br>Stealing points stored in banks is not possible before the final phase.`,
        "rules.steal.title": "POINT THEFT",
        "rules.steal.text": `Point theft is only allowed during the last three hours of the tournament.<br>To successfully steal points, a team must reach the opposing bank, initiate a channel and maintain it for five minutes without interruption. If a player dies or leaves the zone, the channel is immediately cancelled. The attacked team is automatically notified at the start of the channel.`,
        "rules.cheat.title": "CHEATING AND EXPLOITS",
        "rules.cheat.text": `Any form of cheating is strictly prohibited. This includes third-party software, scripts, bug exploits and any attempt to gain an unfair advantage.<br>All official Facepunch rules apply throughout the event.<br>Any bug or abnormal server behavior must be reported to the organization. Intentional use, even once, may result in sanctions.`,
        "rules.restrict.title": "RESTRICTIONS",
        "rules.restrict.text": `It is forbidden to build inside the bank, leave the main island to reach an outer island or any area not designated for the tournament, or deliberately circumvent the mechanics put in place by the organizers.<br>Any attempt to manipulate rankings or rules will be sanctioned.`,
        "rules.disconect.title": "DISCONNECTIONS",
        "rules.disconect.text": `Disconnections, crashes or connection issues are the players' responsibility. No event or challenge will be restarted for this reason, unless the issue originates from the server or a general technical incident.`,
        "rules.claims.title": "CLAIMS",
        "rules.claims.text": `Any dispute or claim must be addressed directly to the organizers calmly and respectfully. Decisions made by the organization are final and cannot be appealed.`,
        "rules.sanctions.title": "SANCTIONS",
        "rules.sanctions.text": `Depending on the severity of the facts, the organizers reserve the right to apply any sanction they deem necessary, ranging from a simple warning to permanent exclusion from the tournament.<br>Participation in R.E.C Rivals implies full acceptance of these rules.<br>The organizers may modify or supplement the rules if an unforeseen situation arises.<br>Any decision made by the organization is final.`,
    
        "cd.days": "DAYS",
        "cd.hours": "HOURS",
        "cd.minutes": "MIN",
        "cd.seconds": "SEC",


        "info.title": "Official map",


        "map.zone1": "Island 1",
        "map.zone2": "Island 2",
        "map.zone3": "Island 3",
        "map.zone4": "Island 4",
        "map.zone5": "Island 5",
        "map.zone6": "Island 6",
        "map.close": "CLOSE",

        "info.format.title": "Format",
        "info.format.text": `6 teams of 5 players<br>3 days of competition<br>From Friday August 21 to Sunday August 23, 2026<br>Official closing: 11:00 PM, Sunday August 23, 2026<br>2 to 3 major events per day at fixed times`,

        "info.territory.title": "Base and territory",
        "info.territory.text": `Each team claims an island in order of arrival.<br>Construction zone physically delimited on each island (14 X 14 Square Foundations).<br>Free construction inside the perimeter, as well as around the zone (hemp and/or garage).<br>At the center of each island is a hole corresponding to the team's bank zone.<br>The hole must be integrated into the construction and remain accessible at all times.<br>The bank zone must be reachable by attackers during a raid.`,

        "info.kills.title": "Points system — Kills",
        "info.kills.text": `Each elimination generates a physical tag at the location of death.<br>The tag can be picked up by any participant.<br>The tag must be deposited in the bank zone to earn points.<br>A tag in inventory earns no points.<br>Eliminations between teammates generate no tags.`,

        "info.events.title": "Points system — Events",
        "info.events.text": `Events distribute points based on the ranking achieved.<br>The scoring varies depending on the nature and importance of the event.<br>Schedules are set in advance and communicated to teams.<br>Outside of events: total free play (PvP, monuments, farming).`,

        "info.tiers.title": "Tier progression",
        "info.tiers.t1": "Max establishment level 1 — Raid allowed — Point theft disabled",
        "info.tiers.t2": "Max establishment level 2 — Raid allowed — Point theft disabled",
        "info.tiers.t3": "Max establishment level 3 — Raid allowed — Point theft activated (last 3 hours)",
        "info.tiers.note": "Tiers are activated manually by the organizers.",

        "info.night.title": "Night protection",
        "info.night.text": `Active every night from 01:00 to 10:00 (CEST).<br>No raid can be initiated during this period.<br>It is forbidden to raid a base whose members are absent outside official play hours.`,

        "info.final.title": "Final phase — Point theft",
        "info.final.text": `Active for the last 3 hours: from 8:00 PM to 11:00 PM (CEST), Sunday August 23.<br>Reach the opposing bank → initiate the channel → maintain it for 5 minutes without interruption.<br>Any death or leaving the zone immediately cancels the channel.<br>The defending team receives an alert upon initiation.<br>If successful: all points are recovered as tags.<br>Tags must be brought back and deposited in your own bank to be validated.`,

        "info.ranking.title": "Leaderboard",
        "info.ranking.text": `Leaderboard displayed in real time directly in-game, visible to all participants.<br>Automatically updated.<br>Organizers may temporarily hide scores at certain strategic moments.`,

        "info.victory.title": "Victory condition",
        "info.victory.text": `The team with the most points at 11:00 PM on Sunday August 23, 2026 is declared champion of R.E.C Rivals.<br>Only one team wins the title.`,
    
        "discord.button": "Join the Discord",
    },

    es: {

        "welcome.event": "EVENT",
        "welcome.discord": "Discord",

        "nav.home": "INICIO",
        "nav.rules": "REGLAMENTO",
        "nav.schedule": "CALENDARIO",
        "nav.teams": "EQUIPOS",
        "nav.register": "REGISTRO",
        "nav.info": "INFORMACIÓNES",

        "page.title": "R.E.C Rivals",

        "presentation.title": "Presentación del evento",
        "presentation.text": `R.E.C Rivals es el primer gran torneo competitivo organizado por R.E.C Events. Durante tres días consecutivos, seis equipos 
                        de cinco jugadores se enfrentarán en una serie de pruebas importantes que combinan PvP, estrategia, coordinación y toma de decisiones. El formato 
                        se inspira en las grandes competiciones de creadores de contenido en línea, adaptado al universo de Rust y a la identidad de R.E.C Events.
                        <br>
                        <br>
                        La victoria no se decide únicamente en el combate. La capacidad de trabajar en equipo, adaptar la estrategia en tiempo real, asegurar los recursos y tomar
                        buenas decisiones bajo presión será igual de determinante. Cada perfil — combatiente, líder o estratega — tendrá un papel esencial que desempeñar
.`,

        "footer.copyright": "© 2026 Satomi (L.K.) — Reservados todos los derechos",

        "rules.title": "Reglamento",
        "rules.text": `uhfuiobububuibuibuiobuibuoi`,

        
        "teams.ironwolves.motto": "Iron Wolves",
        "teams.taskforceviper.motto": "Task Force Viper",
        "teams.ravencompany.motto": "Raven Company",
        "teams.dustraid.motto": "Dust Raiders",
        "teams.phantomunit.motto": "Phantom Unit",
        "teams.blacktide.motto": "Black Tide",

        "planning.title": "Calendario del evento",
        "planning.day1": "Día 1",
        "planning.day2": "Día 2",
        "planning.day3": "Día 3",
        "planning.afternoon": "Tarde",
        "planning.evening": "Noche",

        "planning.serverOpen": "Apertura del servidor",
        "planning.serverClose": "Cierre del servidor",
        "planning.openingCeremony": "Ceremonia de apertura",

        "planning.baseProtectionOff": "Protección de la base desactivada",
        "planning.baseProtectionOn": "Protección de la base activada",

        "planning.workbench2": "Banco de trabajo nivel 2 desbloqueado",
        "planning.workbench3": "Banco de trabajo nivel 3 desbloqueado",

        "planning.event": "Desafío",

        "planning.bankRaid": "Asalto al Banco",
        "planning.closingCeremony": "Ceremonia de Clausura",
        

        "rules.title": "REGLAMENTO OFICIAL - R.E.C RIVALS 2026",
        "rules.respect.title": "RESPETO Y CONDUCTA",
        "rules.respect.text": `La participación en R.E.C Rivals implica el respeto hacia todos los participantes, organizadores y espectadores. No se tolerará ningún comportamiento tóxico. Los insultos, el acoso, las amenazas y cualquier comentario racista, homófobo, tránsfobo, xenófobo o discriminatorio están estrictamente prohibidos.<br>Cualquier actitud contraria al espíritu del evento podrá conllevar una sanción inmediata.<br>Cualquier acción destinada a eludir el espíritu de la competición, aunque no esté explícitamente prohibida en este reglamento, podrá considerarse antideportiva y dar lugar a sanciones.<br>El stream sniping está estrictamente prohibido.<br>Desde el momento en que se conectan al servidor de Rust, los jugadores deben estar obligatoriamente presentes en el canal de voz de su equipo en el Discord de R.E.C Events, y esto durante toda la duración del evento.`,
        "rules.condition.title": "CONDICIONES DE PARTICIPACIÓN",
        "rules.condition.text": `Al inscribirse en R.E.C Rivals 2026, cada participante declara y certifica tener 18 años de edad o más.<br>
        La organización se reserva el derecho de excluir a cualquier participante cuya edad declarada resulte ser inexacta, sin perjuicio de las consecuencias que esto pudiera acarrear para el participante en cuestión.`,
        "rules.diffusion.title": "DIFUSIÓN Y DERECHO A LA IMAGEN",
        "rules.diffusion.text": `Al participar en este evento, aceptas ser filmado y grabado (voz, gameplay), ya sea en el servidor de Rust o en los canales de voz de Discord de R.E.C Events, y ser transmitido en directo y/o en diferido en Twitch y YouTube por la organización.<br>
        Cualquier solicitud de retiro de un fragmento que te concierna puede enviarse a través del canal "support", y será tramitada en un plazo de 7 días.<br>
        Se informa a los participantes que otros participantes o espectadores también pueden filmar, transmitir en streaming o publicar contenido relacionado con el evento por su propia iniciativa. La organización no se hace responsable del contenido publicado por terceros fuera de sus propios canales oficiales (Twitch/YouTube de la organización).<br>
        Al participar en el evento, aceptas que también puedas aparecer en este tipo de contenido de terceros.`,
        "rules.base.title": "CONSTRUCCIÓN DE BASES",
        "rules.base.text": `Cada equipo debe construir su base principal en la isla que su equipo ha reclamado. El banco (agujero central) debe integrarse obligatoriamente en la construcción y permanecer accesible en todo momento.<br>Está prohibido construir directamente dentro del banco, bloquear su acceso o hacer imposible su uso (¡nada de teclado numérico en la trampilla!).`,
        "rules.raids.title": "RAIDS",
        "rules.raids.text": `Los raids están permitidos desde el inicio del torneo, excepto durante el período de protección nocturna, activo cada noche de 01:00 a 10:00 (CEST).<br>El grief está prohibido. Cualquier acción destinada a hacer una base permanentemente inutilizable o impedir que un equipo continúe jugando será sancionada.`,
        "rules.points.title": "SISTEMA DE PUNTOS",
        "rules.points.text": `Los puntos se obtienen a través de las pruebas oficiales y los tags recogidos de los jugadores eliminados.<br>Un tag solo otorga puntos una vez depositado en el banco del equipo. Las eliminaciones entre miembros del mismo equipo no generan ningún tag.<br>El robo de puntos almacenados en los bancos no es posible antes de la fase final.`,
        "rules.steal.title": "ROBO DE PUNTOS",
        "rules.steal.text": `El robo de puntos solo está permitido durante las últimas tres horas del torneo.<br>Para robar puntos, un equipo debe llegar al banco rival, iniciar una canalización y mantenerla durante cinco minutos sin interrupción. Si un jugador muere o sale de la zona, la canalización se cancela inmediatamente. El equipo atacado es avisado automáticamente al inicio de la canalización.`,
        "rules.cheat.title": "TRAMPAS Y EXPLOITS",
        "rules.cheat.text": `Cualquier forma de trampa está estrictamente prohibida. Esto incluye software de terceros, scripts, exploits de bugs y cualquier intento de obtener una ventaja desleal.<br>Todas las reglas oficiales de Facepunch se aplican durante todo el evento.<br>Cualquier bug o comportamiento anormal del servidor debe ser reportado a la organización. Su uso intencionado, incluso una sola vez, podrá conllevar una sanción.`,
        "rules.restrict.title": "RESTRICCIONES",
        "rules.restrict.text": `Está prohibido construir dentro del banco, abandonar la isla principal para ir a una isla exterior o zona no designada para el torneo, así como eludir deliberadamente las mecánicas establecidas por los organizadores.<br>Cualquier intento de manipular clasificaciones o reglas será sancionado.`,
        "rules.disconect.title": "DESCONEXIONES",
        "rules.disconect.text": `Las desconexiones, crashes o problemas de conexión son responsabilidad de los jugadores. Ningún evento o prueba será reiniciado por este motivo, salvo si el problema proviene del servidor o de un incidente técnico general.`,
        "rules.claims.title": "RECLAMACIONES",
        "rules.claims.text": `Cualquier disputa o reclamación debe dirigirse directamente a los organizadores con calma y respeto. Las decisiones tomadas por la organización son definitivas y no podrán ser recurridas.`,
        "rules.sanctions.title": "SANCIONES",
        "rules.sanctions.text": `Según la gravedad de los hechos, los organizadores se reservan el derecho de aplicar cualquier sanción que consideren necesaria, desde un simple aviso hasta la exclusión definitiva del torneo.<br>La participación en R.E.C Rivals implica la aceptación total del presente reglamento.<br>Los organizadores pueden modificar o completar el reglamento si surge una situación imprevista.<br>Toda decisión tomada por la organización es definitiva.`,
    
        "cd.days": "DÍAS",
        "cd.hours": "HORAS",
        "cd.minutes": "MIN",
        "cd.seconds": "SEG",
        
        "info.title": "Mapa oficial",

        "map.zone1": "Isla 1",
        "map.zone2": "Isla 2",
        "map.zone3": "Isla 3",
        "map.zone4": "Isla 4",
        "map.zone5": "Isla 5",
        "map.zone6": "Isla 6",
        "map.close": "CERRAR",

        "info.format.title": "Formato",
        "info.format.text": `6 equipos de 5 jugadores<br>3 días de competición<br>Del viernes 21 al domingo 23 de agosto de 2026<br>Cierre oficial: 23:00, domingo 23 de agosto de 2026<br>2 a 3 pruebas principales por día a horarios fijos`,

        "info.territory.title": "Base y territorio",
        "info.territory.text": `Cada equipo reclama una isla por orden de llegada.<br>Zona de construcción delimitada físicamente en cada isla (14 X 14 Cimientos cuadrados).<br>Construcción libre dentro del perímetro, así como alrededor de la zona (hemp y/o garaje).<br>En el centro de cada isla hay un agujero correspondiente a la zona de banco del equipo.<br>El agujero debe integrarse en la construcción y permanecer accesible en todo momento.<br>La zona de banco debe poder ser alcanzada por atacantes durante un raid.`,

        "info.kills.title": "Sistema de puntos — Kills",
        "info.kills.text": `Cada eliminación genera un tag físico en el lugar de la muerte.<br>El tag puede ser recogido por cualquier participante.<br>El tag debe depositarse en la zona de banco para valer puntos.<br>Un tag en el inventario no otorga puntos.<br>Las eliminaciones entre compañeros de equipo no generan tags.`,

        "info.events.title": "Sistema de puntos — Pruebas",
        "info.events.text": `Las pruebas distribuyen puntos según la clasificación obtenida.<br>La puntuación varía según la naturaleza e importancia de la prueba.<br>Los horarios se fijan de antemano y se comunican a los equipos.<br>Fuera de las pruebas: juego libre total (PvP, monumentos, farming).`,

        "info.tiers.title": "Progresión por niveles",
        "info.tiers.t1": "Establecimiento máx nivel 1 — Raid permitido — Robo de puntos desactivado",
        "info.tiers.t2": "Establecimiento máx nivel 2 — Raid permitido — Robo de puntos desactivado",
        "info.tiers.t3": "Establecimiento máx nivel 3 — Raid permitido — Robo de puntos activado (últimas 3 horas)",
        "info.tiers.note": "Los niveles son activados manualmente por los organizadores.",

        "info.night.title": "Protección nocturna",
        "info.night.text": `Activa cada noche de 01:00 a 10:00 (CEST).<br>No se puede iniciar ningún raid durante este período.<br>Está prohibido raidear una base cuyos miembros están ausentes fuera de los horarios oficiales.`,

        "info.final.title": "Fase final — Robo de puntos",
        "info.final.text": `Activa las últimas 3 horas: de 20:00 a 23:00 (CEST), domingo 23 de agosto.<br>Llegar al banco rival → iniciar la canalización → mantenerla 5 minutos sin interrupción.<br>Cualquier muerte o salida de la zona cancela inmediatamente la canalización.<br>El equipo defensor recibe una alerta al inicio.<br>En caso de éxito: todos los puntos se recuperan en forma de tags.<br>Los tags deben llevarse y depositarse en el propio banco para ser validados.`,

        "info.ranking.title": "Clasificación",
        "info.ranking.text": `Tabla de clasificación mostrada en tiempo real directamente en el juego, visible para todos los participantes.<br>Actualización automática.<br>Los organizadores pueden ocultar temporalmente las puntuaciones en ciertos momentos estratégicos.`,

        "info.victory.title": "Condición de victoria",
        "info.victory.text": `El equipo con más puntos a las 23:00 del domingo 23 de agosto de 2026 es declarado campeón de R.E.C Rivals.<br>Solo un equipo gana el título.`,
    
        "discord.button": "Unirse al Discord",
    },

};