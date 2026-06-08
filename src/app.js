import { games } from "./games.js";

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const colors = {
  micro: "#8ff8d2",
  meso: "#bda0ff",
  macro: "#ffd88a",
  balanced: "#d6ff67",
};

const steamIds = {
  "Geometry Dash": "322170",
  "Aim Lab": "714010",
  "KovaaK's": "824270",
  "Beat Saber": "620980",
  "A Dance of Fire and Ice": "977950",
  "Super Hexagon": "221640",
  "Trackmania": "2225070",
  "Super Meat Boy": "40800",
  "Celeste": "504230",
  "Cuphead": "268910",
  "Neon White": "1533420",
  "Among Us": "945360",
  "Liar's Bar": "3097560",
  "Town of Salem": "334230",
  "Goose Goose Duck": "1568590",
  "Deceit 2": "2064870",
  "Project Winter": "774861",
  "SpyParty": "329070",
  "Jackbox Party Pack": "331670",
  "Pummel Party": "880940",
  "Factorio": "427520",
  "Poly Bridge": "367450",
  "Civilization VI": "289070",
  "Stellaris": "281990",
  "Crusader Kings III": "1158310",
  "Europa Universalis IV": "236850",
  "Dwarf Fortress": "975370",
  "RimWorld": "294100",
  "Oxygen Not Included": "457140",
  "Satisfactory": "526870",
  "Dyson Sphere Program": "1366540",
  "shapez": "1318690",
  "Opus Magnum": "558990",
  "Kerbal Space Program": "220200",
  "Mini Metro": "287980",
  "Mini Motorways": "1127500",
  "Cities: Skylines": "255710",
  "Dorfromantik": "1455840",
  "Baba Is You": "736260",
  "The Witness": "210970",
  "Human Resource Machine": "375820",
  "Jump King": "1061090",
  "Getting Over It": "240720",
  "Elden Ring": "1245620",
  "Dark Souls": "570940",
  "Hollow Knight": "367520",
  "Hades": "1145360",
  "Dead Cells": "588650",
  "The Binding of Isaac": "250900",
  "Spelunky 2": "418530",
  "Noita": "881100",
  "Portal": "400",
  "Portal 2": "620",
  "Terraria": "105600",
  "Street Fighter 6": "1364780",
  "Tekken 8": "1778820",
  "Mortal Kombat 1": "1971870",
  "Brawlhalla": "291550",
  "Guilty Gear Strive": "1384160",
  "Dragon Ball FighterZ": "678950",
  "Fall Guys": "1097150",
  "Gang Beasts": "285900",
  "Party Animals": "1260320",
  "Lethal Company": "1966720",
  "Content Warning": "2881650",
  "Balatro": "2379780",
  "Phasmophobia": "739630",
  "Slay the Spire": "646570",
  "Monster Train": "1102190",
  "Magic: The Gathering Arena": "2141910",
  "Yu-Gi-Oh! Master Duel": "1449850",
  "Gwent": "1284410",
  "Auto Chess": "1530300",
  "Into the Breach": "590380",
  "XCOM 2": "268500",
  "Dota 2": "570",
  "Counter-Strike 2": "730",
  "Rainbow Six Siege": "359550",
  "Overwatch 2": "2357570",
  "Marvel Rivals": "2767030",
  "Rocket League": "252950",
  "Apex Legends": "1172470",
  "PUBG": "578080",
  "Call of Duty: Warzone": "1938090",
  "The Finals": "2073850",
  "Deadlock": "1422450",
  "Hunt: Showdown": "594650",
  "Team Fortress 2": "440",
  "Halo Infinite": "1240440",
  "Paladins": "444090",
  "SMITE": "386360",
  "Destiny 2 PvP": "1085660",
  "Rust": "252490",
  "Sea of Thieves": "1172620",
  "Age of Empires II": "813780",
  "Chivalry 2": "1824220",
  "Mordhau": "629760",
  "Naraka: Bladepoint": "1203220",
  "Stray": "1332010",
  "Firewatch": "383870",
  "Journey": "638230",
  "ABZU": "384190",
  "GRIS": "683320",
  "Outer Wilds": "753640",
  "Subnautica": "264710",
  "Subnautica: Below Zero": "848450",
  "The Elder Scrolls V: Skyrim Special Edition": "489830",
  "Baldur's Gate 3": "1086940",
  "The Witcher 3: Wild Hunt": "292030",
  "Cyberpunk 2077": "1091500",
  "Red Dead Redemption 2": "1174180",
  "Assassin's Creed Odyssey": "812140",
  "Assassin's Creed Origins": "582160",
  "Assassin's Creed Valhalla": "2208920",
  "No Man's Sky": "275850",
  "Stardew Valley": "413150",
  "Valheim": "892970",
  "Palworld": "1623730",
  "Helldivers 2": "553850",
  "Risk of Rain 2": "632360",
  "Vampire Survivors": "1794680",
  "Deep Rock Galactic": "548430",
  "Left 4 Dead 2": "550",
  "Borderlands 2": "49520",
  "Borderlands 3": "397540",
  "Payday 2": "218620",
  "Arma 3": "107410",
  "DayZ": "221100",
  "Ready or Not": "1144200",
  "Insurgency: Sandstorm": "581320",
  "Squad": "393380",
  "Hell Let Loose": "686810",
  "BattleBit Remastered": "671860",
  "Titanfall 2": "1237970",
  "DOOM Eternal": "782330",
  "ULTRAKILL": "1229490",
  "DUSK": "519860",
  "BioShock": "7670",
  "BioShock Infinite": "8870",
  "Prey": "480490",
  "Dishonored": "205100",
  "Dishonored 2": "403640",
  "Control": "870780",
  "Resident Evil 2": "883710",
  "Resident Evil 4": "2050650",
  "Dead Space": "1693980",
  "Outlast": "238320",
  "Amnesia: The Dark Descent": "57300",
  "SOMA": "282140",
  "Alien: Isolation": "214490",
  "The Forest": "242760",
  "Sons Of The Forest": "1326470",
  "Project Zomboid": "108600",
  "7 Days to Die": "251570",
  "Green Hell": "815370",
  "Raft": "648800",
  "Don't Starve Together": "322330",
  "ARK: Survival Evolved": "346110",
  "Grounded": "962130",
  "Frostpunk": "323190",
  "Against the Storm": "1336490",
  "Total War: Warhammer III": "1142710",
  "Total War: Three Kingdoms": "779340",
  "Crusader Kings II": "203770",
  "Hearts of Iron IV": "394360",
  "Victoria 3": "529340",
  "Northgard": "466560",
  "They Are Billions": "644930",
  "FTL: Faster Than Light": "212680",
  "Loop Hero": "1282730",
  "Darkest Dungeon": "262060",
  "Darkest Dungeon II": "1940340",
  "Inscryption": "1092790",
  "Dicey Dungeons": "861540",
  "Brotato": "1942280",
  "Enter the Gungeon": "311690",
  "Hades II": "1145350",
  "Gunfire Reborn": "1217060",
  "Roboquest": "692890",
  "Returnal": "1649240",
  "Dying Light": "239140",
  "Dying Light 2": "534380",
  "Monster Hunter: World": "582010",
  "Monster Hunter Rise": "1446780",
  "Dragon's Dogma 2": "2054970",
  "Nioh 2": "1325200",
  "Sekiro: Shadows Die Twice": "814380",
  "Lies of P": "1627720",
  "Remnant II": "1282100",
  "Starfield": "1716740",
  "Fallout 4": "377160",
  "Fallout: New Vegas": "22380",
  "Kingdom Come: Deliverance": "379430",
  "Mount & Blade II: Bannerlord": "261550",
  "Mass Effect Legendary Edition": "1328670",
  "Dragon Age: Origins": "17450",
  "Dragon Age: Inquisition": "1222690",
  "Disco Elysium": "632470",
  "Persona 5 Royal": "1687950",
  "Persona 4 Golden": "1113000",
  "Yakuza 0": "638970",
  "Like a Dragon: Infinite Wealth": "2072450",
  "Nier: Automata": "524220",
  "Final Fantasy VII Remake Intergrade": "1462040",
  "Final Fantasy XIV Online": "39210",
  "EVE Online": "8500",
  "Black Desert": "582660",
  "Lost Ark": "1599340",
  "Guild Wars 2": "1284210",
  "The Elder Scrolls Online": "306130",
  "Warframe": "230410",
  "Path of Exile": "238960",
  "Last Epoch": "899770",
  "Grim Dawn": "219990",
  "Torchlight II": "200710",
  "Diablo IV": "2344520",
  "Euro Truck Simulator 2": "227300",
  "American Truck Simulator": "270880",
  "Microsoft Flight Simulator": "1250410",
  "Assetto Corsa": "244210",
  "BeamNG.drive": "284160",
  "Forza Horizon 5": "1551360",
  "Football Manager 2024": "2252570",
  "Bloons TD 6": "960090",
  "PowerWash Simulator": "1290000",
  "House Flipper": "613100",
  "House Flipper 2": "1190970",
  "Planet Coaster": "493340",
  "Planet Zoo": "703080",
  "Two Point Hospital": "535930",
  "Two Point Campus": "1649080",
  "The Sims 4": "1222670",
  "Unpacking": "1135690",
  "A Short Hike": "1055540",
  "Spiritfarer": "972660",
  "Dave the Diver": "1868140",
  "Slime Rancher": "433340",
  "Slime Rancher 2": "1657630",
  "My Time at Sandrock": "1084600",
  "Dinkum": "1062520",
  "Core Keeper": "1621690",
  "Cult of the Lamb": "1313140",
  "It Takes Two": "1426210",
  "Overcooked! 2": "728880",
  "PlateUp!": "1599600",
  "Golf With Your Friends": "431240",
  "Ultimate Chicken Horse": "386940",
  "Keep Talking and Nobody Explodes": "341800",
  "Moving Out 2": "1641700",
  "Human: Fall Flat": "477160",
  "Goat Simulator 3": "850190",
  "Viewfinder": "1382070",
  "The Talos Principle": "257510",
  "The Talos Principle 2": "835960",
  "Antichamber": "219890",
  "World of Goo": "22000",
  "Return of the Obra Dinn": "653530",
  "Her Story": "368370",
  "Escape Simulator": "1435790",
  "The Stanley Parable: Ultra Deluxe": "1703340",
  "Papers, Please": "239030",
  "Not For Broadcast": "1147550",
  "Tunic": "553420",
  "Ori and the Blind Forest": "387290",
  "Ori and the Will of the Wisps": "1057090",
  "Rain World": "312520",
  "Blasphemous": "774361",
  "Blasphemous 2": "2114740",
  "Axiom Verge": "332200",
  "Shovel Knight: Treasure Trove": "250760",
  "Pizza Tower": "2231450",
  "Sonic Mania": "584400",
  "Crash Bandicoot N. Sane Trilogy": "731490",
  "Spyro Reignited Trilogy": "996580",
  "Rayman Legends": "242550",
  "Psychonauts 2": "607080",
  "Little Nightmares": "424840",
  "Little Nightmares II": "860510",
  "Limbo": "48000",
  "Inside": "304430",
  "Night in the Woods": "481510",
  "Oxenfree": "388880",
  "Oxenfree II": "1574310",
  "Life is Strange": "319630",
  "Life is Strange 2": "532210",
  "Tell Me Why": "1180660",
  "What Remains of Edith Finch": "501300",
  "Gone Home": "232430",
  "Tacoma": "343860",
  "Before Your Eyes": "1082430",
  "Pentiment": "1205520",
  "Citizen Sleeper": "1578650",
  "Norco": "1221250",
  "Kentucky Route Zero": "231200",
  "Road 96": "1466640",
  "Lake": "1118240",
  "Coffee Talk": "914800",
  "Dredge": "1562430",
  "Pacific Drive": "1458140",
  "Death Stranding": "1850570",
  "Metro Exodus": "412020",
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl": "1643320",
  "Ghostrunner": "1139900",
  "Ghostrunner 2": "2144740",
  "Katana ZERO": "460950",
  "Hotline Miami": "219150",
  "Hotline Miami 2": "274170",
  "Bayonetta": "460790",
  "Devil May Cry 5": "601150",
  "Hi-Fi RUSH": "1817230",
  "For Honor": "304390",
  "Marauders": "1789480",
  "TEKKEN 7": "389730",
  "King of Fighters XV": "1498570",
  "Granblue Fantasy Versus: Rising": "2157560",
  "BlazBlue: Centralfiction": "586140",
  "Rivals of Aether": "383980",
  "MultiVersus": "1818750",
  "Skullgirls 2nd Encore": "245170",
  "Melty Blood: Type Lumina": "1372280",
  "F1 24": "2488620",
  "iRacing": "266410",
  "Dirt Rally 2.0": "690790",
  "Wreckfest": "228380",
  "Riders Republic": "2290180",
  "Lonely Mountains: Downhill": "711540",
  "Descenders": "681280",
};

const officialLinks = {
  "osu!": "https://osu.ppy.sh/",
  "Tetris": "https://tetris.com/play-tetris",
  "Dance Dance Revolution": "https://www.konami.com/amusement/products/am_ddr/",
  "Guitar Hero": "https://www.xbox.com/games/store/guitar-hero-live/bnsdkjb6ng6w",
  "Flappy Bird": "https://flappybird.io/",
  "Subway Surfers": "https://poki.com/en/g/subway-surfers",
  "Rock Paper Scissors": "https://www.rpsgame.org/",
  "Poker": "https://www.pokerstars.com/",
  "Texas Hold'em": "https://www.pokerstars.com/poker/games/texas-holdem/",
  "Coup": "https://www.indieboardsandcards.com/index.php/our-games/coup/",
  "Secret Hitler": "https://www.secrethitler.com/",
  "Werewolf": "https://www.beziergames.com/collections/one-night-ultimate-werewolf",
  "Codenames": "https://codenames.game/",
  "Gartic Phone": "https://garticphone.com/",
  "Mario Party Superstars": "https://www.nintendo.com/us/store/products/mario-party-superstars-switch/",
  "Connect Four": "https://shop.hasbro.com/en-us/product/connect-4-game/",
  "Tic Tac Toe": "https://playtictactoe.org/",
  "Chess": "https://www.chess.com/play",
  "Rubik's Cube": "https://rubiks.com/",
  "Super Mario 64": "https://www.nintendo.com/",
  "Minecraft": "https://www.minecraft.net/",
  "8 Ball Pool": "https://www.miniclip.com/games/8-ball-pool-multiplayer/en/",
  "Super Smash Bros. Ultimate": "https://www.nintendo.com/us/store/products/super-smash-bros-ultimate-switch/",
  "Mario Kart 8 Deluxe": "https://www.nintendo.com/us/store/products/mario-kart-8-deluxe-switch/",
  "Tetris 99": "https://www.nintendo.com/us/store/products/tetris-99-switch/",
  "Hearthstone": "https://hearthstone.blizzard.com/",
  "Teamfight Tactics": "https://teamfighttactics.leagueoflegends.com/",
  "Pokémon VGC": "https://www.pokemon.com/us/play-pokemon",
  "Battleship": "https://shop.hasbro.com/en-us/product/battleship-classic-board-game/",
  "Legends of Runeterra": "https://playruneterra.com/",
  "Risk": "https://shop.hasbro.com/en-us/product/risk-game/",
  "Catan": "https://www.catan.com/",
  "Diplomacy": "https://www.backstabbr.com/",
  "League of Legends": "https://www.leagueoflegends.com/",
  "Valorant": "https://playvalorant.com/",
  "World of Warcraft": "https://worldofwarcraft.blizzard.com/",
  "Fortnite": "https://www.fortnite.com/",
  "Escape from Tarkov": "https://www.escapefromtarkov.com/",
  "StarCraft II": "https://starcraft2.blizzard.com/",
  "Warcraft III": "https://warcraft3.blizzard.com/",
};


const storageKeys = {
  library: "skillmapSteamLibrary",
  hideOwned: "skillmapHideOwned",
  steamSkipped: "skillmapSteamSkipped",
};

function readJsonLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

const state = {
  step: 0,
  quiz: {},
  search: "",
  quick: "all",
  zoom: 100,
  pan: null,
  library: readJsonLocal(storageKeys.library, {}),
  hideOwned: localStorage.getItem(storageKeys.hideOwned) !== "false",
  steamSkipped: localStorage.getItem(storageKeys.steamSkipped) === "true",
  steamConnected: false,
  steamId: "",
  steamLoading: false,
};

const quizQuestions = [
  {
    id: "intent",
    title: "What should the game do for you?",
    helper: "Pick more than one if needed. Strength changes the recommendation.",
    choices: [
      { label: "Give me a competitive ladder to climb", delta: { micro: 20, meso: 18, macro: 14, stress: 20, teamReliance: 10, cozy: -22, story: -10 } },
      { label: "Let me relax without pressure", delta: { cozy: 44, stress: -38, friction: -18, teamReliance: -18, micro: -10 } },
      { label: "Pull me into a world", delta: { immersion: 40, story: 22, exploration: 24, stress: -8 } },
      { label: "Give me systems to solve", delta: { macro: 38, friction: 18, creativity: 10, story: -8 } },
      { label: "Give me funny chaos with people", delta: { meso: 30, teamReliance: 22, novelty: 26, stress: -4 } },
      { label: "Let me build, decorate, or create", delta: { creativity: 44, cozy: 22, macro: 12, stress: -18 } },
    ],
  },
  {
    id: "avoid",
    title: "What should it avoid?",
    helper: "This is the main filter. Mark the dealbreakers strongly.",
    choices: [
      { label: "Sweaty PvP", delta: { stress: -34, teamReliance: -24, cozy: 22, meso: -10 } },
      { label: "Slow chores with no stakes", delta: { cozy: -26, novelty: 30, micro: 16, stress: 8 } },
      { label: "Huge menus before the fun starts", delta: { friction: -44, macro: -14, navigation: 12 } },
      { label: "Getting lost or unclear objectives", delta: { navigation: 44, exploration: -14 } },
      { label: "Team blame", delta: { teamReliance: -46, stress: -18 } },
      { label: "Heavy story when I just want gameplay", delta: { story: -34, micro: 16, macro: 10, pacing: 8 } },
    ],
  },
  {
    id: "competition",
    title: "How much do opponents matter?",
    helper: "This separates competitive games from solo, cozy, and story picks.",
    choices: [
      { label: "I want to beat real players", delta: { micro: 20, meso: 28, stress: 24, teamReliance: 10, cozy: -24 } },
      { label: "One opponent is enough", delta: { meso: 24, teamReliance: -18, stress: 8 } },
      { label: "Co-op is better than versus", delta: { teamReliance: 18, stress: -8, immersion: 14, cozy: 10 } },
      { label: "No players. Give me solo", delta: { teamReliance: -42, stress: -16, immersion: 16 } },
      { label: "Friends and party reads are the point", delta: { meso: 34, teamReliance: 24, novelty: 24, stress: -10 } },
    ],
  },
  {
    id: "feel",
    title: "What should feel good moment to moment?",
    choices: [
      { label: "Fast reactions and clean inputs", delta: { micro: 36, stress: 12 } },
      { label: "Reading what someone will do next", delta: { meso: 36, stress: 8 } },
      { label: "A better plan coming together", delta: { macro: 38, friction: 10 } },
      { label: "Exploring places and noticing details", delta: { exploration: 38, immersion: 26, navigation: 6 } },
      { label: "Characters, story, and mood", delta: { story: 40, immersion: 28, stress: -12 } },
      { label: "Making something that feels like mine", delta: { creativity: 42, cozy: 18, macro: 8 } },
    ],
  },
  {
    id: "hands",
    title: "How active should your hands be?",
    choices: [
      { label: "Very active. I want to execute", delta: { micro: 34, stress: 12 } },
      { label: "Active, but not punishing", delta: { micro: 14, immersion: 10, stress: -8 } },
      { label: "Mostly calm. Thinking over twitch skill", delta: { macro: 28, micro: -14, stress: -14 } },
      { label: "Almost invisible. I care about the vibe", delta: { story: 30, cozy: 24, micro: -22, immersion: 22 } },
    ],
  },
  {
    id: "complexity",
    title: "How much learning curve is acceptable?",
    choices: [
      { label: "Almost none", delta: { friction: -40, cozy: 14, navigation: 12, macro: -12 } },
      { label: "A little, if the fun starts fast", delta: { friction: -16, immersion: 8 } },
      { label: "A lot, if the depth is real", delta: { friction: 32, macro: 28 } },
      { label: "I like studying systems between sessions", delta: { friction: 44, macro: 42, stress: 6 } },
    ],
  },
  {
    id: "direction",
    title: "How clear should the game be about where to go?",
    choices: [
      { label: "Very clear. I hate getting lost", delta: { navigation: 42, friction: -8, exploration: -8 } },
      { label: "Mostly clear with some discovery", delta: { navigation: 18, exploration: 18, immersion: 8 } },
      { label: "I want to wander and figure it out", delta: { exploration: 38, navigation: -16, immersion: 20 } },
      { label: "Direction does not matter if the systems are good", delta: { macro: 26, navigation: -10 } },
    ],
  },
  {
    id: "failure",
    title: "What kind of failure feels fair?",
    choices: [
      { label: "I missed the input", delta: { micro: 30, stress: 8 } },
      { label: "I got outread", delta: { meso: 34, stress: 10 } },
      { label: "My plan was wrong", delta: { macro: 34, friction: 8 } },
      { label: "I do not want much failure", delta: { cozy: 38, stress: -42, friction: -12 } },
    ],
  },
  {
    id: "pace",
    title: "What pace sounds right?",
    choices: [
      { label: "Fast and demanding", delta: { micro: 32, stress: 18, cozy: -14 } },
      { label: "Medium, with action and decisions", delta: { micro: 12, meso: 12, macro: 10 } },
      { label: "Slow and thoughtful", delta: { macro: 30, stress: -16 } },
      { label: "Slow and atmospheric", delta: { immersion: 34, story: 22, cozy: 20, stress: -22 } },
    ],
  },
  {
    id: "session",
    title: "What kind of session do you want?",
    choices: [
      { label: "One more match energy", delta: { micro: 18, meso: 18, novelty: 12, stress: 12 } },
      { label: "Lose track of time", delta: { immersion: 36, exploration: 22, novelty: 18 } },
      { label: "Small peaceful progress", delta: { cozy: 38, stress: -30, friction: -16 } },
      { label: "A puzzle to crack", delta: { macro: 34, micro: -10, stress: -6 } },
      { label: "A story chapter", delta: { story: 42, immersion: 28, stress: -18 } },
    ],
  },
];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function defaultProfile() {
  return {
    micro: 50,
    meso: 50,
    macro: 50,
    immersion: 50,
    navigation: 60,
    friction: 45,
    teamReliance: 45,
    stress: 50,
    novelty: 55,
    story: 45,
    cozy: 35,
    creativity: 40,
    exploration: 50,
  };
}

function weightScale(value) {
  const weight = Number(value) || 0;
  if (weight <= 0) return 0;
  if (weight === 1) return 0.55;
  if (weight === 2) return 1;
  return 1.45;
}

function questionWeights(questionId) {
  const value = state.quiz[questionId];
  if (!value) return {};
  if (typeof value === "number") return { [value]: 2 };
  return value;
}

function questionAnswered(questionId) {
  return Object.values(questionWeights(questionId)).some((value) => Number(value) > 0);
}

function quizProfile() {
  const profile = defaultProfile();
  Object.entries(state.quiz).forEach(([questionId, weights]) => {
    const question = quizQuestions.find((item) => item.id === questionId);
    if (!question) return;
    Object.entries(questionWeights(questionId)).forEach(([choiceIndex, weight]) => {
      const choice = question.choices[Number(choiceIndex)];
      const scale = weightScale(weight);
      if (!choice || !scale) return;
      Object.entries(choice.delta).forEach(([key, amount]) => {
        if (!(key in profile)) return;
        profile[key] = clamp((profile[key] ?? 50) + amount * scale, 0, 100);
      });
    });
  });
  return profile;
}

function gameMatchScore(game, profile) {
  const weights = {
    micro: 1.0,
    meso: 1.0,
    macro: 1.0,
    immersion: 0.78,
    navigation: 0.66,
    friction: 0.74,
    teamReliance: 0.78,
    stress: 0.72,
    novelty: 0.60,
    story: 0.82,
    cozy: 0.92,
    creativity: 0.70,
    exploration: 0.74,
  };
  let distance = 0;
  Object.entries(weights).forEach(([key, weight]) => {
    distance += Math.abs((game[key] ?? 50) - (profile[key] ?? 50)) * weight;
  });
  return Math.max(0, Math.round(100 - distance / 11.7));
}

function normalizeTitle(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function libraryKeys() {
  return Object.keys(state.library || {});
}

function libraryTitleCount() {
  return libraryKeys().filter((key) => !key.startsWith("app:")).length;
}

function libraryRecordForGame(game) {
  if (!state.library || !libraryKeys().length) return null;
  const titleKey = normalizeTitle(game.title);
  if (state.library[titleKey]) return state.library[titleKey];
  const id = game.steamId || steamIds[game.title];
  return id ? state.library[`app:${id}`] || null : null;
}

function isInLibrary(game) {
  return Boolean(libraryRecordForGame(game));
}

function playtimePenalty(game) {
  const record = libraryRecordForGame(game);
  if (!record) return 0;
  const minutes = Number(record.playtime || 0);
  if (minutes >= 30000) return 26;
  if (minutes >= 12000) return 20;
  if (minutes >= 3000) return 12;
  if (minutes >= 600) return 6;
  return 0;
}

function recommendationPool() {
  if (!state.hideOwned || !libraryTitleCount()) return games;
  const filtered = games.filter((game) => !isInLibrary(game));
  return filtered.length >= 5 ? filtered : games;
}

function topMatches(limit = 9) {
  const profile = quizProfile();
  return recommendationPool()
    .map((game) => {
      const owned = isInLibrary(game);
      const baseMatch = gameMatchScore(game, profile);
      const penalty = owned ? Math.max(40, playtimePenalty(game)) : 0;
      return { ...game, match: Math.max(0, baseMatch - penalty), owned };
    })
    .sort((a, b) => {
      if (a.owned !== b.owned) return Number(a.owned) - Number(b.owned);
      return b.match - a.match;
    })
    .slice(0, limit);
}

function dominantAxis(game) {
  const values = [
    ["micro", game.micro],
    ["meso", game.meso],
    ["macro", game.macro],
  ].sort((a, b) => b[1] - a[1]);
  if (values[0][1] - values[2][1] < 16) return "balanced";
  return values[0][0];
}

function describeLike(game) {
  const axis = dominantAxis(game);
  const phrases = [];
  if (game.cozy >= 75) phrases.push("low pressure comfort");
  if (game.story >= 78) phrases.push("story and atmosphere");
  if (game.exploration >= 78) phrases.push("exploration and discovery");
  if (game.creativity >= 78) phrases.push("building or self expression");
  if (axis === "balanced") phrases.push("execution, reads, and planning");
  if (axis === "micro") phrases.push("clean execution");
  if (axis === "meso") phrases.push("reads and adaptation");
  if (axis === "macro") phrases.push("planning and systems");
  if (game.teamReliance <= 25) phrases.push("mostly on you");
  return phrases.slice(0, 2).join(". ") + ".";
}

function describeBounce(game) {
  const warnings = [];
  if (game.friction >= 75) warnings.push("learning curve");
  if (game.teamReliance >= 85) warnings.push("team reliance");
  if (game.stress >= 85) warnings.push("high stress");
  if (game.navigation <= 55) warnings.push("unclear navigation");
  if (game.micro >= 90 && game.macro <= 45) warnings.push("repetition");
  if (game.macro >= 90 && game.micro <= 10) warnings.push("less action");
  if (!warnings.length) return "Only risk: taste mismatch.";
  return `Watch for ${warnings.slice(0, 2).join(" and ")}.`;
}

function steamPosterUrls(id) {
  return [
    `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/library_600x900_2x.jpg`,
    `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${id}/library_600x900_2x.jpg`,
    `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/capsule_616x353.jpg`,
    `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${id}/capsule_616x353.jpg`,
    `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`,
  ];
}

function searchPosterUrl(game) {
  return `https://tse1.mm.bing.net/th?q=${encodeURIComponent(`${game.title} game cover art poster`)}&w=600&h=900&c=7&rs=1&p=0&o=6&pid=Api`;
}

function officialScreenshotUrl(game) {
  const url = game.link || officialLinks[game.title];
  if (!url) return "";
  return `https://image.thum.io/get/width/600/crop/900/${url}`;
}

function posterSources(game) {
  const id = game.steamId || steamIds[game.title];
  const sources = id ? steamPosterUrls(id) : [];
  sources.push(searchPosterUrl(game));
  const officialShot = officialScreenshotUrl(game);
  if (officialShot) sources.push(officialShot);
  return [...new Set(sources.filter(Boolean))];
}

function storeUrl(game) {
  const id = game.steamId || steamIds[game.title];
  if (id) return `https://store.steampowered.com/app/${id}/`;
  if (game.link) return game.link;
  if (officialLinks[game.title]) return officialLinks[game.title];
  return `https://store.steampowered.com/search/?term=${encodeURIComponent(game.title)}`;
}

function posterMarkup(game) {
  const axis = dominantAxis(game);
  const sources = posterSources(game);
  const src = sources[0] || "";
  const initials = escapeHtml(game.initials || game.title.slice(0, 2).toUpperCase());
  const title = escapeHtml(game.title);
  const axisLabel = axis === "balanced" ? "Mix" : axis;
  const link = escapeHtml(storeUrl(game));
  const encodedSources = escapeHtml(JSON.stringify(sources));
  const img = src
    ? `<img src="${src}" data-poster-index="0" data-poster-sources='${encodedSources}' alt="${title} poster" loading="lazy" />`
    : `<img class="is-hidden" alt="" />`;
  return `
    <a class="poster-link" href="${link}" target="_blank" rel="noreferrer" aria-label="Open ${title} store or play page">
      <div class="poster-shell" style="--axis-color:${colors[axis]}">
        ${img}
        <div class="poster-fallback ${src ? "is-hidden" : ""}">
          <strong>${initials}</strong>
          <span>${title}</span>
          <small>${escapeHtml(axisLabel)}</small>
        </div>
      </div>
    </a>
  `;
}

function handlePosterError(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.dataset.posterSources) return;

  let sources = [];
  try {
    sources = JSON.parse(image.dataset.posterSources);
  } catch {
    sources = [];
  }

  const nextIndex = Number(image.dataset.posterIndex || 0) + 1;
  if (sources[nextIndex]) {
    image.dataset.posterIndex = String(nextIndex);
    image.src = sources[nextIndex];
    return;
  }

  image.classList.add("is-hidden");
  image.nextElementSibling?.classList.remove("is-hidden");
}

function renderBars(game) {
  return [
    ["Micro", game.micro, colors.micro],
    ["Meso", game.meso, colors.meso],
    ["Macro", game.macro, colors.macro],
  ].map(([label, value, color]) => `
    <div class="score-row">
      <span>${label}</span>
      <div class="score-bar"><i style="--value:${value}%; --bar-color:${color}"></i></div>
      <strong>${value}</strong>
    </div>
  `).join("");
}

function renderProgress() {
  const answered = quizQuestions.filter((question) => questionAnswered(question.id)).length;
  const current = Math.min(state.step + 1, quizQuestions.length);
  const percent = Math.round((answered / quizQuestions.length) * 100);
  qs("#progressText").textContent = state.step >= quizQuestions.length ? "Done" : `${current} / ${quizQuestions.length}`;
  qs("#progressBar").style.width = `${percent}%`;
}

function weightLabel(value) {
  const labels = ["Off", "Light", "Good", "Strong"];
  return labels[Number(value) || 0] || "Off";
}

function setChoiceWeight(questionId, choiceIndex, value) {
  const weights = { ...questionWeights(questionId) };
  const numeric = Number(value) || 0;
  if (numeric <= 0) delete weights[choiceIndex];
  else weights[choiceIndex] = numeric;
  state.quiz[questionId] = weights;
}

function updateQuestionControls(questionId) {
  qsa("[data-choice-card]").forEach((card) => {
    const index = card.dataset.choiceCard;
    const input = qs("input[type='range']", card);
    const value = Number(input?.value || 0);
    card.classList.toggle("is-selected", value > 0);
    const label = qs("[data-weight-label]", card);
    if (label) label.textContent = weightLabel(value);
  });
  const next = qs("#nextQuestion");
  if (next) next.disabled = !questionAnswered(questionId);
}

function renderQuiz() {
  const mount = qs("#quizMount");
  const question = quizQuestions[state.step];

  if (!question) {
    const matches = topMatches(9);
    const best = matches[0];
    const importedCount = libraryTitleCount();
    const hiddenCount = importedCount && state.hideOwned
      ? games.filter((game) => isInLibrary(game)).length
      : 0;
    const libraryLine = importedCount
      ? `${hiddenCount} library games hidden. Change that in Steam library.`
      : "Connect Steam to hide games you own and show fresh matches first.";

    mount.innerHTML = `
      <div class="result-view">
        <div class="results-heading">
          <h2>Your matches</h2>
          <p>${escapeHtml(libraryLine)}</p>
        </div>
        <div class="result-scroll">
          <article class="best-card">
            ${posterMarkup(best)}
            <div class="best-copy">
              <p class="best-label">Best match · ${best.match}%</p>
              <h3>${escapeHtml(best.title)}</h3>
              <p class="result-reason">${escapeHtml(describeLike(best))} ${escapeHtml(describeBounce(best))}</p>
            </div>
          </article>
          <div class="result-grid">
            ${matches.slice(1).map((game) => `
              <article class="result-card">
                ${posterMarkup(game)}
                <div>
                  <h4>${escapeHtml(game.title)}</h4>
                  <strong class="match-score">${game.match}% match</strong>
                  ${game.owned ? `<span class="owned-pill">In library</span>` : ""}
                  <p class="game-meta">${escapeHtml(describeLike(game))}</p>
                  <div class="score-mini">${renderBars(game)}</div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="result-actions">
          <button class="secondary-button" type="button" id="retakeQuiz">Retake quiz</button>
          <button class="secondary-button" type="button" data-panel="libraryPanel">Connect Steam</button>
          <button class="secondary-button" type="button" data-panel="databasePanel">Browse games</button>
        </div>
      </div>
    `;
    qs("#retakeQuiz")?.addEventListener("click", resetQuiz);
    qsa("[data-panel]", mount).forEach((button) => {
      button.addEventListener("click", () => openPanel(button.dataset.panel));
    });
    renderProgress();
    return;
  }

  const weights = questionWeights(question.id);
  mount.innerHTML = `
    <div class="question-view">
      <p class="question-kicker">Question ${state.step + 1}</p>
      <h3 class="question-title">${escapeHtml(question.title)}</h3>
      ${question.helper ? `<p class="question-helper">${escapeHtml(question.helper)}</p>` : ""}
      <div class="choice-list weighted">
        ${question.choices.map((choice, index) => {
          const value = Number(weights[index] || 0);
          return `
            <article class="choice-card ${value > 0 ? "is-selected" : ""}" data-choice-card="${index}">
              <button class="choice-toggle" type="button" data-toggle-choice="${index}">${escapeHtml(choice.label)}</button>
              <div class="weight-control">
                <input type="range" min="0" max="3" step="1" value="${value}" data-choice-weight="${index}" aria-label="Weight for ${escapeHtml(choice.label)}" />
                <span data-weight-label>${weightLabel(value)}</span>
              </div>
            </article>
          `;
        }).join("")}
      </div>
      <div class="quiz-nav">
        <button class="secondary-button" type="button" id="backQuestion" ${state.step === 0 ? "disabled" : ""}>Back</button>
        <button class="secondary-button" type="button" id="skipQuestion">Skip</button>
        <button class="secondary-button primary-action" type="button" id="nextQuestion" ${questionAnswered(question.id) ? "" : "disabled"}>${state.step === quizQuestions.length - 1 ? "See matches" : "Continue"}</button>
      </div>
    </div>
  `;

  qsa("[data-toggle-choice]", mount).forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.toggleChoice;
      const card = button.closest("[data-choice-card]");
      const input = qs("input[type='range']", card);
      const next = Number(input.value || 0) > 0 ? 0 : 2;
      input.value = String(next);
      setChoiceWeight(question.id, index, next);
      updateQuestionControls(question.id);
      renderProgress();
    });
  });

  qsa("[data-choice-weight]", mount).forEach((input) => {
    input.addEventListener("input", () => {
      setChoiceWeight(question.id, input.dataset.choiceWeight, input.value);
      updateQuestionControls(question.id);
      renderProgress();
    });
  });

  qs("#backQuestion")?.addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1);
    renderQuiz();
  });

  qs("#skipQuestion")?.addEventListener("click", () => {
    state.step = Math.min(state.step + 1, quizQuestions.length);
    renderQuiz();
  });

  qs("#nextQuestion")?.addEventListener("click", () => {
    if (!questionAnswered(question.id)) return;
    state.step = Math.min(state.step + 1, quizQuestions.length);
    renderQuiz();
  });

  renderProgress();
}

function resetQuiz() {
  state.step = 0;
  state.quiz = {};
  renderQuiz();
}

function addLibraryEntry(store, title, options = {}) {
  const key = normalizeTitle(title);
  if (!key) return;
  const record = {
    title: String(title).trim(),
    playtime: Number(options.playtime || 0),
    steamId: options.steamId ? String(options.steamId) : "",
  };
  store[key] = record;
  if (record.steamId) store[`app:${record.steamId}`] = record;
}

function parseLibraryJson(data, store) {
  const visit = (node) => {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }
    if (typeof node !== "object") return;
    const title = node.name || node.title || node.app_name || node.appName;
    const steamId = node.appid || node.app_id || node.steam_appid || node.steamId;
    const playtime = node.playtime_forever ?? node.playtime ?? node.minutes ?? node.hours;
    if (title) addLibraryEntry(store, title, { steamId, playtime });
    Object.values(node).forEach((value) => {
      if (Array.isArray(value) || (value && typeof value === "object")) visit(value);
    });
  };
  visit(data);
}

function parseLibraryText(text) {
  const store = {};
  const trimmed = String(text || "").trim();
  if (!trimmed) return store;

  try {
    const json = JSON.parse(trimmed);
    parseLibraryJson(json, store);
    if (Object.keys(store).length) return store;
  } catch {
    // fall back to pasted lines
  }

  trimmed.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || /^[-,\s]+$/.test(line)) return;
    const parts = line.split(/\t|,/).map((part) => part.trim().replace(/^"|"$/g, "")).filter(Boolean);
    let title = parts[0];
    let steamId = "";
    let playtime = 0;
    if (parts.length > 1 && /^\d+$/.test(parts[0]) && /[a-zA-Z]/.test(parts[1])) {
      steamId = parts[0];
      title = parts[1];
      playtime = Number(parts.find((part, index) => index > 1 && /^\d+(\.\d+)?$/.test(part)) || 0);
    } else if (parts.length > 1) {
      playtime = Number(parts.find((part, index) => index > 0 && /^\d+(\.\d+)?$/.test(part)) || 0);
    }
    title = title.replace(/^\d+\.\s*/, "").replace(/\s+\|\s+Steam.*$/i, "").trim();
    addLibraryEntry(store, title, { steamId, playtime });
  });

  return store;
}

function saveLibrary(store) {
  state.library = store;
  localStorage.setItem(storageKeys.library, JSON.stringify(state.library));
  localStorage.setItem(storageKeys.hideOwned, String(state.hideOwned));
}

function setSteamMessage(message, tone = "") {
  const node = qs("#steamMessage");
  if (!node) return;
  node.textContent = message || "";
  node.dataset.tone = tone || "";
}

function uniqueLibraryEntries() {
  const seen = new Set();
  return Object.values(state.library || {}).filter((item) => {
    if (!item?.title) return false;
    const key = normalizeTitle(item.title);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderLibraryPanel() {
  const count = libraryTitleCount();
  const statusCard = qs("#steamStatusCard");
  const title = qs("#steamStatusTitle");
  const copy = qs("#steamStatusCopy");
  const topButton = qs("#steamTopButton");
  const connectButton = qs("#connectSteamButton");
  const skipButton = qs("#skipSteamButton");
  const connectedActions = qs("#steamConnectedActions");

  statusCard?.classList.toggle("is-connected", state.steamConnected || count > 0);
  connectedActions?.classList.toggle("is-visible", state.steamConnected || count > 0);

  if (connectButton) connectButton.disabled = state.steamLoading;
  if (skipButton) skipButton.disabled = state.steamLoading;

  if (state.steamConnected && count > 0) {
    if (title) title.textContent = `Steam connected · ${count} games loaded`;
    if (copy) copy.textContent = "Owned games are hidden from recommendations. Games with high playtime are pushed lower if they appear as fallbacks.";
    if (topButton) topButton.textContent = "Steam connected";
    return;
  }

  if (state.steamConnected) {
    if (title) title.textContent = "Steam connected";
    if (copy) copy.textContent = "Steam login worked, but no library games loaded yet. Your Steam game details may be private, or the API key may be missing.";
    if (topButton) topButton.textContent = "Steam connected";
    return;
  }

  if (state.steamSkipped) {
    if (title) title.textContent = "Steam skipped";
    if (copy) copy.textContent = "Recommendations are using the normal catalog. You can connect Steam later to hide games you already own.";
    if (topButton) topButton.textContent = "Connect Steam";
    return;
  }

  if (title) title.textContent = "Steam not connected";
  if (copy) copy.textContent = "Connect Steam to hide games you already own, push heavily played games lower, and show new games first.";
  if (topButton) topButton.textContent = "Connect Steam";
}

function steamLibraryToStore(payload) {
  const store = {};
  parseLibraryJson(payload?.games || [], store);
  return store;
}

async function loadSteamLibrary() {
  state.steamLoading = true;
  renderLibraryPanel();
  setSteamMessage("Loading your Steam library...", "info");

  try {
    const response = await fetch("/api/steam/library", { credentials: "include" });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || "Steam library request failed.");
    }

    const store = steamLibraryToStore(payload);
    saveLibrary(store);
    state.hideOwned = true;
    state.steamSkipped = false;
    localStorage.setItem(storageKeys.hideOwned, "true");
    localStorage.setItem(storageKeys.steamSkipped, "false");

    const count = libraryTitleCount();
    setSteamMessage(count ? `${count} Steam games loaded.` : "Steam connected, but no visible library games were returned.", count ? "success" : "info");
    renderLibraryPanel();
    renderQuiz();
  } catch (error) {
    setSteamMessage(error.message || "Could not load Steam library.", "error");
  } finally {
    state.steamLoading = false;
    renderLibraryPanel();
  }
}

async function refreshSteamSession(options = {}) {
  try {
    const response = await fetch("/api/me/steam", { credentials: "include" });
    if (!response.ok) return;
    const payload = await response.json();
    state.steamConnected = Boolean(payload.connected);
    state.steamId = payload.steamid || "";

    if (state.steamConnected && options.loadLibrary) {
      await loadSteamLibrary();
      return;
    }

    renderLibraryPanel();
  } catch {
    renderLibraryPanel();
  }
}

function connectSteam() {
  setSteamMessage("Opening Steam login...", "info");
  window.location.assign("/auth/steam");
}

function skipSteam() {
  state.steamSkipped = true;
  localStorage.setItem(storageKeys.steamSkipped, "true");
  setSteamMessage("Steam skipped. Normal recommendations are enabled.", "info");
  qs("#libraryPanel")?.close();
  renderLibraryPanel();
  renderQuiz();
}

async function disconnectSteam() {
  try {
    await fetch("/auth/steam/logout", { method: "POST", credentials: "include" });
  } catch {
    // Local cleanup still matters if logout fails.
  }

  state.steamConnected = false;
  state.steamId = "";
  state.steamSkipped = false;
  saveLibrary({});
  localStorage.setItem(storageKeys.steamSkipped, "false");
  setSteamMessage("Steam disconnected.", "info");
  renderLibraryPanel();
  renderQuiz();
}

function handleSteamReturn() {
  const params = new URLSearchParams(window.location.search);
  const steamStatus = params.get("steam");

  if (!steamStatus) {
    refreshSteamSession();
    return;
  }

  window.history.replaceState({}, document.title, window.location.pathname);
  openPanel("libraryPanel");

  if (steamStatus === "connected") {
    state.steamConnected = true;
    state.steamSkipped = false;
    localStorage.setItem(storageKeys.steamSkipped, "false");
    setSteamMessage("Steam connected. Loading library...", "info");
    refreshSteamSession({ loadLibrary: true });
    return;
  }

  setSteamMessage("Steam login failed. Check the backend terminal for the exact error.", "error");
  refreshSteamSession();
}

function filteredGames() {
  const query = state.search.trim().toLowerCase();
  return games.filter((game) => {
    const haystack = [game.title, game.mode, game.pacing, ...(game.tags ?? [])].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    let matchesQuick = true;
    if (state.quick === "low-friction") matchesQuick = game.friction <= 35;
    if (state.quick === "solo") matchesQuick = game.mode === "solo";
    if (state.quick === "competitive") matchesQuick = ["pvp", "mixed"].includes(game.mode) || game.teamReliance >= 65;
    if (state.quick === "immersive") matchesQuick = game.immersion >= 78;
    if (state.quick === "cozy") matchesQuick = game.cozy >= 70 || game.stress <= 25;
    if (state.quick === "story") matchesQuick = game.story >= 70;
    if (state.quick === "not-owned") matchesQuick = !isInLibrary(game);
    return matchesSearch && matchesQuick;
  });
}

function renderGameList() {
  const list = filteredGames();
  qs("#resultCount").textContent = list.length;
  qs("#gameGrid").innerHTML = list.map((game) => `
    <article class="game-card">
      ${posterMarkup(game)}
      <div>
        <h4>${escapeHtml(game.title)}</h4>
        ${isInLibrary(game) ? `<span class="owned-pill">In library</span>` : ""}
        <p class="game-meta">Micro ${game.micro} · Meso ${game.meso} · Macro ${game.macro}</p>
        <p class="game-meta">${escapeHtml(describeBounce(game))}</p>
      </div>
    </article>
  `).join("");
}

function setZoom(next, focalEvent = null) {
  const stage = qs(".zoom-stage");
  const image = qs("#zoomImage");
  const reset = qs("#zoomReset");
  const previousZoom = state.zoom;
  const nextZoom = clamp(next, 80, 260);

  if (!image) {
    state.zoom = nextZoom;
    if (reset) reset.textContent = `${state.zoom}%`;
    return;
  }

  let focalX = null;
  let focalY = null;
  let stageX = null;
  let stageY = null;

  if (stage && focalEvent) {
    const rect = stage.getBoundingClientRect();
    stageX = focalEvent.clientX - rect.left;
    stageY = focalEvent.clientY - rect.top;
    focalX = stage.scrollLeft + stageX;
    focalY = stage.scrollTop + stageY;
  }

  state.zoom = nextZoom;
  image.style.width = `${state.zoom}%`;
  if (reset) reset.textContent = `${state.zoom}%`;

  if (stage && focalX !== null && focalY !== null && previousZoom > 0) {
    const ratio = state.zoom / previousZoom;
    stage.scrollLeft = Math.max(0, focalX * ratio - stageX);
    stage.scrollTop = Math.max(0, focalY * ratio - stageY);
  }
}

function startZoomPan(event) {
  if (event.button !== 0) return;
  const stage = event.currentTarget;
  state.pan = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    left: stage.scrollLeft,
    top: stage.scrollTop,
  };
  stage.classList.add("dragging");
  stage.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function moveZoomPan(event) {
  if (!state.pan) return;
  const stage = event.currentTarget;
  stage.scrollLeft = state.pan.left - (event.clientX - state.pan.x);
  stage.scrollTop = state.pan.top - (event.clientY - state.pan.y);
}

function endZoomPan(event) {
  const stage = event.currentTarget;
  if (state.pan?.pointerId === event.pointerId) {
    stage.releasePointerCapture?.(event.pointerId);
    state.pan = null;
  }
  stage.classList.remove("dragging");
}

function handleZoomWheel(event) {
  event.preventDefault();
  const step = event.deltaY > 0 ? -15 : 15;
  setZoom(state.zoom + step, event);
}

function openPanel(id) {
  const panel = qs(`#${id}`);
  if (!panel) return;
  if (id === "databasePanel") renderGameList();
  if (id === "libraryPanel") renderLibraryPanel();
  if (id === "referencePanel") setZoom(140);
  panel.showModal();
}

function wireEvents() {
  document.addEventListener("error", handlePosterError, true);

  qsa("[data-panel]").forEach((button) => {
    button.addEventListener("click", () => openPanel(button.dataset.panel));
  });

  qsa("[data-close]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });

  qsa("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });


  qs("#connectSteamButton")?.addEventListener("click", connectSteam);
  qs("#skipSteamButton")?.addEventListener("click", skipSteam);
  qs("#disconnectSteamButton")?.addEventListener("click", disconnectSteam);
  qs("#resetSteamChoiceButton")?.addEventListener("click", () => {
    state.steamSkipped = false;
    localStorage.setItem(storageKeys.steamSkipped, "false");
    setSteamMessage("", "");
    renderLibraryPanel();
  });

  qs("#openReference")?.addEventListener("click", () => openPanel("referencePanel"));
  qs("#zoomIn")?.addEventListener("click", () => setZoom(state.zoom + 25));
  qs("#zoomOut")?.addEventListener("click", () => setZoom(state.zoom - 25));
  qs("#zoomReset")?.addEventListener("click", () => setZoom(100));

  const zoomStage = qs(".zoom-stage");
  zoomStage?.addEventListener("wheel", handleZoomWheel, { passive: false });
  zoomStage?.addEventListener("pointerdown", startZoomPan);
  zoomStage?.addEventListener("pointermove", moveZoomPan);
  zoomStage?.addEventListener("pointerup", endZoomPan);
  zoomStage?.addEventListener("pointercancel", endZoomPan);

  qs("#searchInput")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderGameList();
  });

  qsa("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quick = button.dataset.filter;
      qsa("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderGameList();
    });
  });
}

wireEvents();
renderQuiz();
handleSteamReturn();
