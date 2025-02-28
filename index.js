require('dotenv').config();
const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} = require('discord.js');

// Discord Bot Setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Random Woah Vicky Quotes
const woahVickyQuotes = [
  "I'm blessed and highly favored!",
  "Y'all ain't on my level!",
  'I do what I want, period.',
  'Stay mad, boo!',
  "I'm unbothered, always.",
  "I'm too busy winning to care.",
  'Haters are just confused admirers.',
  'I was born to stand out, not fit in.',
  'Money talks, haters walk.',
  "I'm living rent-free in their heads.",
  "They don't like me, but they can't ignore me.",
  "I'm too real for the fake ones.",
  "I'm a vibe they can't replace.",
  "If they hate, then let 'em hate. I'm still great.",
  "My energy is my currency, and I'm rich.",
  'What shall I render',
  'Why do guys be out here fat as hell thinking that is cute like really thinking they is like looking good and that they gonna get a genuine woman like that. Nobody want to be with your fat ass. Go get in the gym bro it’s unhealthy like get your life together, bro.',
  'Any guy wanna marry me I need 1,000 cows',
  'I want Kodak Black version of a Pastor',
  'There’s only one race & that’s the human race',
  'I didn’t even have a valentine my only valentine was Jesus Christ',
  'I like skinny/ in shape  tall guys',
  'Sex is not love',
  'Do you think I would be a good wife',
  'I’m leaving Africa with like 20 boyfriends 😂😂😂😂',
  'Why do I like wrong bad guys',
  'I like the wrong guys',
  'I’m real pretty',
  'I’m single I date nobody at all any video u seen is fake',
  'Ain’t gone say much just now she came to where I was . I was at the studio chilling she bust in the door and she swung on me first',
  'Run from sin',
  'I don’t like the good ones I like the crazy ones I know ain’t no good',
  'I wish i had . Famiky',
  'I am the job 😂',
  'My birthday is March 7th',
  'Can someone send me OnijahRobinson Instagram? I got a Bussiness opportunity for her !',
  "What's a good church in New York I can go to tonight to p raise the lord",
  'PERIOD AHHHH PERIOD UHHH',
  'I think I found what I’m really good in life at doing I think I finally found out what it is. I’m really good at spending money.',
  'Blessed and highly favored !🙏🏼🤍',
  'What shall I render',
  'If it’s not from God, I’ll wait',
  'Me and my yn 😎🤍🤍🤍',
  'My birthday is March 7th',
  'Do you think I would be a good wife',
  'Why is it so hard to find a man you actually like? All the fines ones are broke and all the ugly ones are rich. And if they got both they are the biggest hoes got 4+ baby mamas 10 kids and Don’t have a relationship w God 😕…',
  'I havent had sex in 2 years! Praise GOD',
  'I’m bored asf I wanna have a baby or sum',
  'I 🤍 Africa',
  'If I wanted him I could have em',
  'I’m lonely a lil bit',
  'CTE is real huh',
  'I’ll watch yo story with my real page I never cared',
  'You see how I got 0 kids and you got 3 kids yea don’t text me!!!',
  'You see how I got 0 kids and you got 3 kids yea don’t text me!!!',
  'Traveling is the most funnest thing ever why is traveling so fun I love traveling',
  'That’s how you know Jesus is God and is real because demons get so upset at that name Jesus is the opposite of the devil and evil doesn’t want the truth and Jesus is the truth',
  'Jesus is lord',
  'Have you ever noticed that everyone has a problem with Jesus ? Soon as you bring up that name people get to trippin',
  'The word of God is 100000000000% True',
  'Lame ahh crypto scammers stay out dm unless you got some money for me',
  'Lame ahh crypto scammers stay out dm unless you got some money for me',
  'People x from x uk x text x like x this do',
  'Tapeins pulled my hair out 😕 what can I do yall to make my hair grow back fast?',
  'Just a young girl that lives in miami tryna beat temptation',
  'The word of God can never change',
  'Do you know how many people hate me because I shared the word of God and I stand on that',
  'The devil comes to you looking realllll good',
  'Why is everyone broke',
  'Why is everyone broke',
  'Them over seas 🥷 be fine asl',
  'Happy mlk day 🤍🙏🏼 Respect LLMLK',
  'I wish drugs were not real',
  'Catholicism is cap',
  'I am no longer talk',
  'Haffa',
  'Haffa',
  'The internet is not a real place',
  'Hey, this famous producer was trying to talk to me and Bro ended up asking me was I a pastor',
  'The reason why I’m single is because I want a guy like Kodak Black that’s a pastor',
  'Hey, what’s up girl? Can you tell MrBeast I want to build some wheels in Africa with him?',
  'i dont have a problem with homosexual people. The problem is yall trying to make me say i agree with homosexuality i cant go against God.the God of abrahman isaac and jacob.',
  'Don’t worry. I’ll buy TikTok so it won’t get banned guys !!',
  'Sometimes it’s bad when I get my hair done I start feeling myself too much',
  '50$ braids in Nigeria',
  'Church in Nigeria 🇳🇬🤍',
  'Don’t come in to me in person unless you’re asking for prayer.  I don’t do pictures',
  'If you see me in person, do not ask for a picture. I am not nice.',
  'how fa na',
  'Somebody ai me a video of me with a nice big butt slim thick',
  'I’m sad 😔 n lonely here',
  'Wetin de sup',
  'Should I change my username on our platforms to Victoria Rose to move on from woah Vicky',
  'Dudes like me until they realize I’m not letting them smash 😂😂',
  'The longest I have went without sex is 4 years.!',
  'No kap',
  'Haven’t had sex in over a year I’m waiting till marriage 🤍',
  'I’m kinda tired of being single 😕',
  'No wahala',
  'No wahala',
  'I love Nigeria so much',
  'I’m going to 2025 with Jesus',
  'Are you mad',
  'I guess I play too much',
  'No I’m not married that’s a skit stop texting me congratulations please don’t play dumb bro',
  'I never understood why people wear sun glasses at night time look lame to me',
  'Na you be my boss ooo so I gots show respect you get',
  'Praying for bhad bhabie 🙏🏼🤍',
  'Whyyy do people always think I’m busy???? I literally don’t be doing nothing',
  'Rolling loud is so demonic',
  'Rolling loud is so demonic',
  'Be with person who got anyway got their live toghter',
  'I have made a decision not to sin',
  'I have made a decision not to sin',
  'This is the lady the lord has made we will rejoice and be glad in it',
  'Sin is fun for a little while but it the end it leads to death',
  'What does it mean when a guy DMs you on vanish mode?',
  'The only side affects of reading the Bible is that when you die you live forever',
  'Keep faith. Christ wins. ✝️',
  'There is some people you can’t help',
  'How do you be OK with being single?',
  'That means he really likes u if he blocked u on everything right',
  'Any dude that paint they nails is gay! I would never talk to a guy that paint they nails',
  'Painting your nails black as a man is weird and not ute I think your gay',
  'If I wrote a book about my life who would buy it',
  'Abstinent.',
  'Celibate',
  'You can’t cancel me when God called me 🤍',
  'I wanna go do missions in Africa',
  'Nle choppa sould his soul to the devil. B that’s why he’s saying he’s gay now. He’s a puppet. But hey. Your soul belongs to God it’s not yours to sell it’s never too Jesus loves you 💕',
  'The Bible says abortion is is murder',
  'Sometimes the best thing you can do is leave someone alone…🤍',
  'Sin will never work.!',
  'Stop trying to normalize sin!!!',
  'Pray for people',
  'THE BIBLE IS 100% 💯 REAL',
  'I LOVE U 🤍',
  'Going to church is the best thing you can do',
  'Give your life to Jesus before it’s too late. ⏰',
  'I ain’t selling out for a PJ',
  'My own family forsaken me',
  'My own family forsaken me',
  'I feel empty I feel alone',
  'My dad told me I could never move back in',
  'My family is nowhere to be found. I’m just  a 24 year old girl not married or nothing',
  'My dad is rich and left me.',
  'My own family left me for dead',
  'I just be wanted to go home',
  'But where is home? I don’t have',
  'I’m just a girl',
  'All I ever wanted was a family',
  'I feel like I got nobody gang',
  'Don’t choose to Mutalete yourself',
  'AMERICA NEEDS JESUS',
  'I ain’t gone lie I’m beautiful asf',
  'Lame  green',
  'I got 10k on @jakepaul',
  'It’s more to life than just smashing',
  'Trump and I is related actually',
  'Trump and I is related actually',
  'Alcohol is poison',
  'TRUMP used to come to visit my dad house  all the time',
  'I am related to trump',
  'You play wit fya you gone get burnt',
  'Ladies, once u get locked in with God no dude can finesse u out them draws',
  'Yo soul is yo mind will and emotions',
  'I b tripping sometimes',
  'God is not your sugar daddy',
  'God is the CEO',
  'Abortion is murder',
  'Yo heart is broke cuz u won’t Do what God is telling u to do',
  'if you have pride youll never be able to come to God, the whole purpose of coming to God is realizing your way aint been working and u need help from GOD. people with Pride will never admit that',
  'if Elon musk is the anti christ then y him n trump bffs',
  'do u think Elon musk is going to make the mark of the beast',
  'his stroke aint that nice',
  'aint nobody pipe game worth going to hell over',
  'Victoria trump',
  'Vicky trump',
  'trump is my uncle',
  'I love trump',
  'if Elon musk is the anti christ why him n trump so lucked in',
  'is elon musk the anti christ ?',
  'Attention I’m can be addicting',
  'Clout is like a drug',
  'If you get drunk. Your letting demons take over you',
  'If you get high. Your letting demons have access to you',
  'If you get high. Your letting demons have access to you',
  'If you can’t control your lust you have a demon in you',
  'People that are trans have a demon in them.',
  'If you are attracted to the same Sex you have a demon in you',
  'If you are attracted to the same Sex you have a demon in you',
  'I am blessed and highly favored',
  '"Why is my heart so sad? I will put my hope in God! I will praise him again- my Savior and my God!',
  'I miss my dad',
  'No I don’t twerk I’m a classy women of God',
  'You can’t talk me out of what I KNOW!',
  'Before I knew God I had no conscious of Sin',
  'People that run from God get deeper and deport in sin',
  'I was blind and then one day boom my eyes came open and now I can see !',
  'Everybody know ABOUT God but they don’t KNOW God',
  'Proverbs 6:17: "Lying is an abomination to the Lord"',
  'The Lord hates liars, but is pleased with those who keep their word',
  'Single & celibate until God sends me my husband 🤍🙏🏼',
  'If you get drunk. Your letting demons take over you',
  'a lot men struggle with pride',
  'My dad told my mom to get abortion when she was pregnant with me and she went',
  'My dad told my mom to get abortion when she was pregnant with me and she went',
  'Why do you expect to have victory os success when u won’t do what God is telling u to do',
  'Serving God is hard. Living how u want is easy',
  'Marry someone who’s equally yoked',
  'What happens in the dark comes to the light !',
  'What do u do when u get bored',
  'God is my man always',
  '9 Do you not know that sinful men will have no place in the holy nation of God? Do not be fooled. A person who does sex sins, or who worships false gods, or who is not faithful in marriage, or men who act like women, or people who do sex sins with their own sex, will have no place in the holy nation of God. 10 Also those who steal, or those who always want to get more of everything, or who get drunk, or who say bad things about others, or take things that are not theirs, will have no place in the holy nation of God. 11 Some of you were like that. But now your sins are washed away. You were set apart for God-like living to do His work. You were made right with God through our Lord Jesus Christ by the Spirit of our God',
  'why do i like people thats crazy',
  'God is better than, Weed and Drunk',
  'the presence of God is better than getting high or getting drunk.',
  'God is better than yo weed or liqua',
  'God is better than, Weed and Drunk',
  'the presence of God is better than getting high or getting drunk.',
  'God is better than yo weed or liqua',
  '“Flee also youthful lusts: but follow righteousness, faith, charity, peace, with them that call on the Lord out of a pure heart.”2 Timothy 2:22 KJV',
  '“Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour.”1 Peter 5:8 NIV',
  'Lame  green',
  'I think men that treat women bad are gay',
  'Stephen Darby is one of my favorite padtors',
  'Be woke in Christ',
  'Don’t choose to Mutalete yourself',
  '“It is worth nothing for a man to have the whole world if he loses his soul. He could never pay enough to buy back his soul.”Matthew 16:26 ICB',
  'EVERYTHING IN THE BIBLE IS 100% 💯 FACTS',
  'Wait until marriage to have sex ',
  'If you commit Adultery you  will loose .',
  'GODS WAY…. IS THE ONLY WAY THAT WORKS !',
  'Living with someone outside of marriage will never work',
  'I knew I was black',
  'I can’t wait to get married and have kids',
  'Pray for these men the devil is attacking them strong ngl',
  'If I have a baby with mixed person, my baby is going to come out white , right',
  'I have traveled a lot of many places, I haven’t found a place better than miami yet!',
  'I’m already white I don’t need no white dude',
];

// Function to get Random Quote
function getRandomQuote() {
  const randomQuote =
    woahVickyQuotes[Math.floor(Math.random() * woahVickyQuotes.length)];
  return randomQuote;
}

// Create the slash command
const commands = [
  new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Get a random Woah Vicky quote')
    .toJSON(),
];

// Register slash commands when the bot starts
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(client.user.id), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
});

// Handle existing message command
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!vickyquote') {
    const quote = getRandomQuote();
    message.channel.send(quote);
  }
});

// Handle slash commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'quote') {
    const quote = getRandomQuote();
    await interaction.reply(quote);
  }
});

// Log in the bot
client.login(process.env.DISCORD_TOKEN);
