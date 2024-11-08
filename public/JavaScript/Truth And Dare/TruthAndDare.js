let addPlayerButton = document.getElementsByClassName('addPlayerButton')[0]
let nameInput = document.getElementsByClassName('nameInput')[0]
let Xbutton = document.getElementsByClassName('Xbutton')[0]
players= []
let truths_list = [`What's the last lie you told?`,
`What was the most embarrassing thing you've ever done on a date?`,
`Have you ever accidentally hit something (or someone!) with your car?`,
`Name someone you've pretended to like but actually couldn't stand.`,
`What's your most bizarre nickname?`,
`What's been your most physically painful experience?] `,
`When was the last time you lied?`,
`When was the last time you cried?`,
`What's your biggest fear?`,
`What's your biggest fantasy?`,
`Do you have any fetishes?`,
`What's something you're glad your mum doesn't know about you?`,
`Have you ever cheated on someone?`,
`What's the worst thing you've ever done?`,
`What's a secret you've never told anyone?`,
`Do you have a hidden talent?`,
`Who was your first celebrity crush?`,
`What are your thoughts on polyamory?`,
`What's the worst intimate experience you've ever had?`,
`Have you ever cheated in an exam?`,
`What's the most drunk you've ever been?`,
`Have you ever broken the law?`,
`What's the most embarrassing thing you've ever done?`,
`What's your biggest insecurity?`,
`What's the biggest mistake you've ever made?`,
`What's the most disgusting thing you've ever done?`,
`Who would you like to kiss in this room?`,
`What's the worst thing anyone's ever done to you?`,
`Have you ever had a run in with the law?`,
`What's your worst habit?`,
`What's the worst thing you've ever said to anyone?`,
`Have you ever peed in the shower?`,
`What's the strangest dream you've had?`,
`Have you ever been caught doing something you shouldn't have?`,
`What's the worst date you've been on?`,
`What's your biggest regret?`,
`What's the biggest misconception about you?`,
`Why did your last relationship break down?`,
`Have you ever lied to get out of a bad date?`,
`What's the most trouble you've been in?`,
`What is a weird food that you love?`,
`What terrible movie or show is your guilty pleasure?`,
`What was your biggest childhood fear?`,
`What is the first letter of your crush’s name?`,
`What is the worst grade you received for a class in school/college?`,
`What is the biggest lie you’ve ever told?`,
`Have you ever accidentally hit something (or someone!) with your car?`,
`Have you ever broken an expensive item?`,
`What is one thing you’d change about your appearance if you could?`,
`If you suddenly had a million dollars, how would you spend it?`,
`Who is the best teacher you’ve ever had and why?`,
`What is the worst food you’ve ever tasted?`,
`What is the weirdest way you’ve met someone you now consider a close friend?`,
`What is the most embarrassing thing you’ve posted on social media?`,
`Who was your first celebrity crush?`,
`Have you ever revealed a friend’s secret to someone else?`,
`How many kids do you want to have one day (or how many did you want to have growing up)?`,
`If you could only eat one meal for the rest of your life, what would it be?`,
`What is a secret you had as a child that you never told your parents?`,
`What is your favorite book of all time?`,
`What is the last text message you sent your best friend?`,
`What is something you would do if you knew there were no consequences?`,
`What is the worst physical pain you’ve ever been in?`,
`Personality-wise, are you more like your mom or your dad?`,
`When is the last time you apologized (and what did you do)?`,
`Have you ever reported someone for doing something wrong (either to the police or at work/school)?`,
`If your house caught on fire and you could only save three things (besides people), what would they be?`,
`If you could pick one other player to take with you to a deserted island, who would it be?`,
`What sport or hobby do you wish you would’ve picked up as a child?`,
`Have you ever stolen anything?`,
`Have you ever been kicked out of a store, restaurant, bar, event, etc.?`,
`What is the worst date you’ve ever had?`,
`What is the weirdest thing you’ve ever done in public?`,
`What is the last excuse you used to cancel plans?`,
`What is the biggest mistake you’ve ever made at school or work?`,
`Which player would survive the longest in a horror/apocalypse movie, and who would be the first one to die?`,
`What is the dirtiest room/area of your house?`,
`Which of your family members annoys you the most?`,
`When is the last time you cried?`,
`When is the last time you made someone else cry?`,
`What is the longest you’ve ever gone without showering?`,
`What is the worst date you’ve ever been on?`,
`When is the last time you did something technically illegal?`,
`If you could pick anyone in the world to be president, who would you choose?`,
`How many times do you wear your jeans before you wash them?`,
`Do you pee in pools?`,
`If someone went through your closet, what is the weirdest thing they’d find?`,
`Have you ever lied about your age?`,
`Besides your phone, what’s the one item in your house you couldn’t live without?`,
`What is the biggest fight you’ve ever been in with a friend?`,
`If you could be invisible for a day, what’s the first thing you would do?`,
`What’s the biggest secret you’ve kept from your parents?`,
`What’s the most embarrassing music you listen to?`,
`What’s one thing you love most about yourself?`,
`Who is your secret crush?`,
`Who is the last person you creeped on social media?`,
`When was the last time you wet the bed?`,
`If a genie granted you three wishes, what would you ask for and why?`,
`What’s your biggest regret?`,
`If you had to only ever watch rom coms or only watch scary movies for the rest of your life, which would you choose and why?`,
`Where is the weirdest place you've ever gone to the bathroom?`,
`Have you ever ghosted on someone?`,
`Which player would survive a zombie apocalypse and which would be the first to go?`,
`Reveal all the details of your first kiss.`,
`What excuse have you used before to get out plans?`,
`What's the longest you've ever slept?`,
`What’s the shortest you’ve ever slept?`,
`Read the last text you sent your best friend or significant other out loud.`,
`What's your biggest pet peeve?`,
`When was the last time you lied?`,
`What five things would you bring to a deserted island?`,
`Which is your favorite Hollywood Chris? Chris Evans, Chris Pratt, Chris Hemsworth or Chris Pine?`,
`What's the most embarrassing thing you ever did on a date?`,
`What is the boldest pickup line you've ever used?`,
`What celebrity do you think you most look like?`,
`How many selfies do you take a day?`,
`What is one thing you would stand in line an hour for?`,
`When was the last time you cried?`,
`What's the longest time you've ever gone without showering?`,
`What's the most embarrassing top-played song on your phone?`,
`What was your favorite childhood show?`,
`If you had to change your name, what would your new first name be?`,
`If you could be a fictional character for a day, who would you choose?`,
`If you could date a fictional character, who would it be?`,
`What's your biggest fear?`,
`What's one silly thing you can't live without?`,
`Where was your favorite childhood vacation spot?`,
`What is the weirdest trend you've ever participated in?`,
`If you could only listen to one song for the rest of your life, what would you choose?`,
`Who do you text the most?`,
`Have you ever been fired from a job?`,
`If you had to wear only flip flops or heels for the next 10 years, which would you choose?`,
`What’s an instant deal breaker in a potential love interest?`,
`If you could only eat one thing for the rest of your life, what would you choose?`,
`What is the biggest lie you ever told your parents?`,
`What's the worst physical pain you've ever experienced?`,
`Which player knows you the best?`,
`What's your favorite part of your body?`,
`If you could only accomplish three things in life, what would they be?`,
`What's the weirdest thing you've ever eaten?`,
`Have you ever gone skinny dipping?`,
`Tell us about the biggest romantic fail you’ve ever experienced.`,
`Who was your first celebrity crush?`,
`What's the strangest dream you've ever had?`,
`What are the top three things you look for in a love interest?`,
`What is your worst habit?`,
`How many stuffed animals do you own?`,
`Do you sleep with any stuffed animals?`,
`What is your biggest insecurity?`,
`Name one thing you’d do if you knew there’d be zero consequences.`,
`When’s the last time you said you were sorry? For what?`,
`Do you pee in the shower?`,
`Do you still have feelings for any of your exes?`,
`What’s the most embarrassing thing you’ve done to get a crush’s attention?`,
`What’s the most random thing in your bag right now?`,
`Have you ever sent a sext?`,
`What’s the last movie that made you cry?`,
`What’s the last song that made you cry?`,
`What are the five most recent things in your search history?`,
`When’s the last time you got caught in a lie?`,
`What gross smell do you actually enjoy?`,
`Who was the last person you said “I love you” to?`,
`Have you ever had a paranormal experience?`,
`If you could have lunch with a famous person, dead or alive, who would you pick and why?`,
`If you were handed $1,000 right now, what would you spend it on?`,
`Who’s your celebrity “hall pass” if you were to meet that person while in a relationship?`,
`Have you ever cheated on an exam?`,
`What unexpected part of the body do you find attractive?`,
`What’s the most awkward thing you’ve ever been caught doing?`,
`Have you ever flirted with a close friend’s sibling?`,
`What was your first concert?`,
`If you had the choice to never have to sleep again, would you take it?`,
`If you had to get a tattoo today, what would it be?`,
`Even if you’d be paid $1 million for it, what’s something you would never do?`,
`If you could travel to the past and meet one person, who would it be?`,
`What popular TV show or movie do you secretly hate?`,
`Where do you see yourself in 10 years?`,
`Name your go-to karaoke song.`,
`What’s the most adventurous thing you’ve ever done?`,
`When have you been in the most trouble in school?`,
`If you had to always be overdressed or underdressed, which would you choose?`,
`Who would you cast as you and your friends in the movie version of your life?`,
`What’s the luckiest thing that’s ever happened to you?`,
`Do you have any phobias?`,
`Do you believe in an afterlife?`,
`If you had to move to a different country tomorrow, where would you go?`,
`What do you want to be remembered for most in life?`,
`Do you believe in soul mates?`,
`Have you ever re-gifted a present? What was it?`,
`What’s the weirdest thing you do when you’re alone?`,
`What movie (or franchise) are you most embarrassed to love?`,
`Have you ever had an imaginary friend? Describe them.`,
`What gross food combo do you secretly love?`,
`If you could become besties with a celebrity, who would it be?`,
`What’s the most embarrassing nickname you’ve ever been given?`,
`If you could trade lives with any person you know for a day, who would it be?`,
`What’s the worst thing you’ve ever said to anyone?`,
`What’s the scariest dream you’ve ever had?`,
`What’s the weirdest place you’ve kissed/hooked up with someone?`,
`Have you ever slid into a celebrity’s DMs?`,
`What superstitions do you believe in?`,
`Are you Team Edward or Team Jacob (or both?)`,
`What app do you check first in the morning?`,
`What’s the most embarrassing thing you’ve ever purchased?`,
`What’s the longest you’ve ever gone without brushing your teeth?`,
`What’s the weirdest thing you have in your bedroom?`,
`What’s the weirdest thing you have in your locker?`,
`How often do you wash your sheets?`,
`Do you sing in the shower? What was the last song you belted out?`,
`What’s the weirdest thing you do while driving?`,
`Have you ever started a rumor about someone? What was it?`,
`If you could talk to a fortune teller, what would you ask them?`,
`Do you believe in aliens? What do you think they look like?`,
`Have you ever given a fake number?`,
`What’s more important to you: love or money?`,


]

let dares_list = [
`Have you ever been kicked out of a store, restaurant, bar, event, etc.?`,
`What is the worst date you’ve ever had?`,
`What is the weirdest thing you’ve ever done in public?`,
`What is the last excuse you used to cancel plans?`,
`What is the biggest mistake you’ve ever made at school or work?`,
`Which player would survive the longest in a horror/apocalypse movie, and who would be the first one to die?`,
`What is the dirtiest room/area of your house?`,
`Which of your family members annoys you the most?`,
`When is the last time you cried?`,
`When is the last time you made someone else cry?`,
`What is the longest you’ve ever gone without showering?`,
`What is the worst date you’ve ever been on?`,
`When is the last time you did something technically illegal?`,
`If you could pick anyone in the world to be president, who would you choose?`,
`How many times do you wear your jeans before you wash them?`,
`Do you pee in pools?`,
`If someone went through your closet, what is the weirdest thing they’d find?`,
`Have you ever lied about your age?`,
`Besides your phone, what’s the one item in your house you couldn’t live without?`,
`What is the biggest fight you’ve ever been in with a friend?`,
`Give a shoulder rub to the player to your right (if they are comfortable).`,
`Attempt to juggle two or three items of the asker’s choosing.`,
`Perform a dramatic version of a monologue from a favorite TV show or movie.`,
`Show the most embarrassing photo on your phone.`,
`Comment a fire emoji on the first five pictures on your Instagram feed.`,
`Do an impression of another player until your next turn.`,
`Try to drink a glass of water without using your hands.`,
`Allow the other players to blindfold you and try to guess three food items from the pantry just by smell.`,
`Do your best interpretive dance/gymnastics floor routine.`,
`Go outside and do your best wolf howl at the moon.`,
`Post an unflattering selfie to your favorite social media account.`,
`Talk and act like a celebrity until the group can guess who you are (this could go multiple turns!)`,
`If you have to get up for the rest of the game, no walking allowed. You can crawl on all fours, roll, somersault, hop on one foot etc., but no walking!`,
`Remove your socks with your teeth.`,
`Go outside and pretend to mow grass with an invisible mower — sounds and all.`,
`Act out a commercial for a product chosen by the other players.`,
`Sing instead of speaking any time you talk for three turns.`,
`Make a silly face and keep it that way until someone in the group laughs.`,
`Do a freestyle rap about the other players for one minute.`,
`Show the group your internet search history.`,
`Let another player style your hair and leave it that way for the rest of the game.`,
`Video chat the person of your choice but pick your nose through the entire conversation.`,
`Put your shoes on the wrong feet and keep them there for the rest of the game.`,
`Call a random acquaintance and tell them you want to break up.`,
`Let the other players pose you and remain in that position until your next turn.`,
`Allow someone else in the group to blindfold you and feed you one item out of the fridge.`,
`Lead the group in a mini yoga class for one minute.`,
`How old are you? Whatever your age is, do that many squats.`,
`Perform a dance routine to a boy band song of the group’s choice.`,
`Let another player draw a washable marker mustache on you.`,
`Pick someone in this room and (lovingly) roast them for one minute straight.`,
`Let another person post an Instagram caption on your behalf.`,
`Hand over your phone to another player who can send a single text saying anything they want to anyone they want.`,
`Let the other players go through your phone for one minute.`,
`Smell another player's armpit.`,
`Smell another player's bare foot.`,
`Eat a bite of a banana peel.`,
`Do an impression of another player until someone can figure out who it is.`,
`Say pickles at the end of every sentence you say until it's your turn again.`,
`Imitate a TikTok star until another player guesses who you're portraying.`,
`Act like a chicken until your next turn.`,
`Talk in a British accent until your next turn.`,
`Send a heart-eye emoji to your crush’s Instagram story.`,
`Call a friend, pretend it's their birthday, and sing them Happy Birthday to You.`,
`Name a famous person that looks like each player in the room.`,
`Show us your best dance moves.`,
`Eat a packet of hot sauce straight.`,
`Let another person draw a tattoo on your back with a permanent marker.`,
`Put on a blindfold and touch the other players' faces until you can figure out who's who.`,
`Bite into a raw onion without slicing it.`,
`Go outside and try to “summon” the rain as loud as possible.`,
`Serenade the person to your right for a full minute.`,
`Do 20 squats.`,
`Let the other players redo your hairstyle.`,
`Eat a condiment of your choice straight from the bottle.`,
`Dump out your purse, backpack, or pockets and do a show and tell of what's inside.`,
`Let the player to your right redo your makeup with their eyes closed.`,
`Prank call one of your family members.`,
`Let another player create a hat out of toilet paper — and you have to wear it for the rest of the game.`,
`Do a plank for a full minute.`,
`Do your sassiest runway walk.`,
`Put five ice cubes in your mouth (you can't chew them, you just have to let them melt—brrr).`,
`Bark like a dog until it’s your next turn.`,
`Draw your favorite movie and have the other person guess it (Pictionary-style).`,
`Repeat everything the person to your right says until your next turn.`,
`Demonstrate how you style your hair in the mirror (without actually using the mirror).`,
`Play air guitar for one minute.`,
`Empty a glass of cold water onto your head outside.`,
`Go on Instagram Live and do a dramatic reading of one of your textbooks.`,
`In the next 10 minutes, find a way to scare another player and make it a surprise.`,
`Lick a bar of soap.`,
`Talk to a pillow as if it’s your crush.`,
`Post the oldest selfie on your phone to Snapchat or Instagram stories (and leave it up!).`,
`Attempt the first TikTok dance on your FYP.`,
`Imitate a celebrity of the group’s choosing every time you talk for the next 10 minutes.`,
`Go to your crush’s Instagram page and like something from several weeks ago.`,
`Do karaoke to a song of the group’s choosing.`,
`Post a photo (any photo) to social with a heartfelt dedication to a celebrity of the group’s choosing.`,
`Find your very first crush on social and DM them.`,
`Peel a banana using just your toes.`,
`Let the group mix together five of whatever liquids they find in the fridge, then drink it.`,
`Wear another player’s socks like gloves for the next five minutes.`,
`Put on makeup without looking in the mirror, then leave it like that for the rest of the game.`,
`Describe the most attractive quality of every person in the room.`,
`Sing like an opera singer instead of speaking for the next five minutes.`,
`Let everyone pose you in an embarrassing position and post a picture to Instagram.`,
`Allow the person to your right to draw on your face with a Sharpie.`,
`Jump in the pool (or shower) with all your clothes on!`,
`Stand outside your house and wave to everyone who passes in the next minute.`,
`Pretend to be underwater for the next 10 minutes.`,
`Make out with a pillow.`,
`Let everyone go through your Snapchat history.`,
`Post a flirty comment on the first Instagram picture that you see.`,
`Give the person to your right a foot massage (with their consent).`,
`Pretend to be a ballerina until your next turn.`,
`Serenade the person next to you.`,
`Try to fit your whole fist in your mouth.`,
`Read aloud the most personal text you’ve sent in recent days.`,
`Reveal your screen time report to your friends.`,
`Go outside and howl at the moon.`,
`Yell out the first word that comes to your mind. `,
`Hold your nose while you sing the chorus of your favorite song.`,
`Call your dad and say you got engaged. `,
`Dance for 30 seconds to a Snoop Dogg song.`,
`Eat a whole raw clove of garlic.`,
`Close your eyes until your next turn.`,
`Take a shot. `,
`Hold three ice cubes in your mouth until they melt. `,
`Give a foot massage to the person on your right. `,
`Melt ice on the back of the person next to you.`,
`Sing the lyrics to the Star Spangled Banner. `,
`Do 100 squats.`,
`Show the most embarrassing photo on your phone.`,
`Read the last 5 text messages on your phone. `,
`Try to lick your elbow.`,
`Pretend to be the person to your left for the next 15 minutes.`,
`Do your best impersonation of the person to your right.`,
`Impersonate your favorite animal.`,
`Crawl around the room.`,
`Belly dance to Moroccan music. `,
`Try to put your whole hand in your mouth.`,
`Empty your wallet or purse and show everybody what is inside.`,
`Make the ugliest face you possibly can.`,
`Do a cartwheel.`,
`Post your oldest phone selfie as your Instagram story.`,
`Give a 5-minute makeover to the person on your right.`,
`Howl like a wolf at the moon.`,
`Curse like a sailor for 30 seconds straight. `,
`Do a magic trick.`,
`Crack an egg between your hands.`,
`Jump in the shower with your clothes on. `,
`I dare you to order a pizza for the group.`,
`Act like whatever animal someone yells out. `,
`Call a family member on your phone and sing a song chosen by the group. No talking allowed!`,
`Do an interpretive dance of human life.`,
`Give the person to your left a “wet willy.”`,
`Pretend the person to your right is your girlfriend or boyfriend and beg them not to leave you.`,
`Kiss the pet dog on the lips.`,
`Get in the weirdest yoga pose you’ve ever done.`,
`Hoola hoop for 10 minutes straight.`,
`Make a cocktail for everyone in the group.`,
`Do 50 pushups. `,
`Tell the funniest story of how you met someone in the group.`,
`Jump as high as you can for one minute.`,
`Smell someone’s armpit.`,
`Do your favorite TikTok dance.`,
`Talk in a British accent until your next turn.`,
`Call your friend and sign them Happy Birthday. `,
`Prank call a friend or family member.`,
`Do your best runway walk. `,
`Do the worm.`,
`Try to touch your nose with your tongue. If you can’t, you have to touch another player’s nose with your tongue. `,
`Chug hot sauce for 30 seconds. `,
`Call a random number and pretend to be a different personality.`,
`Put your head out the window like a dog while driving. `,
`Do the weirdest dance possible. `,
`Do a downward dog. `,
`Go on Facebook and like every photo of the first person you see. `,
`Fake cry.`,
`Make out with your hand.`,
`Do your best imitation of Britney Spears.`,
`Do the Macarena.`,
`Talk in the voice of the opposite gender for the rest of the game. `,
`Give a bear hug to the person to your right. `,
`Poke somebody random and walk away.`,
`Attempt to breakdance. `,
`Blindfold yourself and take a drink of a beverage chosen by the group.`,
`Pretend to be a ballerina.`,
`Make up a rap.`,
`Pet somebody as if they are a dog.`,
`Show us the goofiest photo of you as a kid.`,
`Call the last person you texted and just “meow” into the phone. `,
`Walk like a crab for the rest of the game.`,
`Put mascara on the person next to you.`,
`Go to the bathroom and put your underwear over your pants for the rest of the game.`,
`Snapchat a photo of your elbow and caption it “my favorite body part.”`,
`Tape your mouth shut for 2 rounds.`,
`Lay on the floor and act like you are a piece of frying bacon.`,
`Let everyone in the group draw on your arm or with a permanent marker.`,
`Find a random amount of trash and try to sell it to the group as if it is valuable.`,
`Wrap toilet paper around your body like a mummy. `,
`Put ice cubes down your pants and try to shake them out.`,
`Bark at a dog passing by the house.`,
`Eat a piece of soap.`,
`Let the player to your left redo your makeup with their eyes closed.`,
`Draw your favorite movie and have everyone try to guess it.`,
`Demonstrate how you style your hair in the morning.`,
`Show the facial expression you make after eating something super sour.`,
`Re-enact the worst date you’ve ever been on.`,
`Serenade the person to your right with a song for a full minute.`,
`Talk like a robot.`,
`Talk as if you have no teeth.`,
`Build a pillow fort for the rest of the game.`,
`Make a tin foil hat and wear it for the rest of the night.`,
`Make a diaper out of a dishtowel.`,
`Use your feet as your hands and pick up anything you need for the next few rounds with ,only your toes.`,
`Try to pick your nose with your tongue.`,
`Make a fart noise with your armpit.`,
`Make a face mask using wet toilet paper.`,
`Cover your whole face in blush.`,
`Put your socks in the freezer for 30 minutes, then put them back on.`,
`Color your teeth with lipstick.`,
`Take a selfie in your significant other’s clothes. `,
`Do a hula hooping dance.`,
`Hold your nose while talking for the next 10 minutes.`,
`Sing like an opera singer.`,
`Take an item out of the refrigerator and passionately kiss it.`,
`Order Chinese takeout egg rolls for the group.`,
`Drink a combination of ketchup, mustard, and a beverage. `,
`Lick whipped cream off of your significant other’s face. `,
`Go to the kitchen and make the most random snack possible with just 5 ingredients.`,
`Balance a spoonful of mayo on your nose for 10 seconds.`,
`Eat a spoonful of Sriracha `,
`Take a bite of a stick of butter.`,
`Mix cereal, peanut butter, and pickles, then eat it.`,
`Pretend you’re a bird and eat off your plate using only your mouth.`,
`Eat a snack without using your hands.`,
`Eat a mouthful of crackers and try to whistle.`,
`Fill your mouth with water and try not to spit it out while the rest of the group cracks jokes.`,
`Combine two foods that should never go together.`,
`Pretend to be a waiter or waitress and take food orders from everyone in the group.`,
`Grab 2 items from the refrigerator while blindfolded and eat them together. `,
`Take a shot of pickle juice.`,
`Call Mcdonald’s and ask if they sell Whoppers.`,
`Eat a mouthful of raw pasta.`,
`Start a food fight.`,
`Eat as much pizza as possible in 30 seconds (without hurting yourself).`,
`Stain your teeth with berries or other bright-colored food.`,
`Mix orange juice with milk, then drink it.`,
`Chug a carbonated drink and burp as loud as possible. `,
`Pretend to call a restaurant and place the weirdest order you can come up with.`,
`Dance for 30 seconds to a Snoop Dogg song.`,
`Post your oldest phone selfie as your Instagram story.`,
`Jump in the shower with your clothes on.`,
`Give a foot massage to the person on your right. `,
`Do 100 squats.`,
`Crawl around the room.`,
`Take a shot. `,
`Sing the lyrics to the Star Spangled Banner. `,
`Curse like a sailor for 30 seconds straight. `,
`Give a 5-minute makeover to the person on your right.`,
`Call your dad and say you got engaged. `,
`Hold your nose while you sing the chorus of your favorite song.`,
`Put on as many layers of clothes as possible in only 60 seconds.`,
`Crack an egg between your hands.`,
`Hold three ice cubes in your mouth until they melt. `,
`Howl like a wolf on the moon.`,
`Empty your wallet/purse and show everyone whatever is inside.`,
`Show the most embarrassing photo on your phone.`,
`Close your eyes until your next turn.`,
`Read the last 5 text messages on your phone. `,
`Make the ugliest face you possibly can.`,
`Impersonate your favorite animal.`,
`Try to put your whole hand in your mouth.`,
`Do your best to impersonate the person to your right.`,
`Belly dance to Moroccan music. `,
`Try to lick your elbow.`,
`Do a cartwheel.`,
`Pretend to be the person to your left for the next 15 minutes.`,
`Empty your wallet or purse and show everybody what is inside.`,
`Eat a whole raw clove of garlic.`,
`Melt ice on the back of the person next to you.`,
`Do a magic trick.`,
`Yell out the first word that comes to your mind.`,
`Chug a carbonated drink and burp as loud as possible.`,
`Take a bite of a stick of butter.`,

]
let gameBox = document.getElementsByClassName('gameBox')[0]
const RemovePlayer = (playernames,i)=>{
    playernames[i].style.display = 'none'
    
}
const addPlayer = (allplayer)=>{
    let Xbutton = document.getElementsByClassName('Xbutton')
    let gameBox = document.getElementsByClassName('gameBox')[0]
    let nameInput = document.getElementsByClassName('nameInput')[0]
    let playernames = document.getElementsByClassName('playernames')
    let playername = document.getElementsByClassName('playername')
    let div = document.createElement('div')
    let xdiv = document.createElement('button')
    let playername_container = document.createElement('div')
    playername_container.className = "playernames"
    div.className = "playername "
    xdiv.className = 'Xbutton'
    if (nameInput.value != '' && allplayer.includes(nameInput.value)==false){
        div.innerHTML += nameInput.value
        xdiv.innerHTML += 'X'
        playername_container.appendChild(div)
        playername_container.appendChild(xdiv)
        gameBox.appendChild(playername_container)
    }
    
    for(let i=0;i<Xbutton.length;i++){
        Xbutton[i].addEventListener('click',()=>{
            players.pop(playername[i].innerHTML)

            RemovePlayer(playernames,i,nameInput.value)
            
        })
    }
        
}


addPlayerButton.addEventListener("click",()=>{
    addPlayer(players)
    if (nameInput.value != '' && players.includes(nameInput.value)==false){
        players.push(nameInput.value)
    }

})

const playerturn = (player)=>{
    let space = document.getElementsByClassName('TruthOrDare')[0]
    let line = document.getElementsByClassName('line')[0]
    let buttons = document.getElementsByClassName('buttons')[0]
    let truth_button = document.getElementsByClassName('Truth')[0]
    let dare_button = document.getElementsByClassName('Dare')[0]
    let game = document.getElementsByClassName('game')[0]
    let gameBox = document.getElementsByClassName('gameBox')[0]
    let playerturn = document.getElementsByClassName('playerturn')[0]
    let ranplayer = Math.floor(Math.random(0)*(player.length))
    playerturn.innerHTML = `${player[ranplayer]}'s turn `
    gameBox.style.display = 'none'
    game.style.display = 'flex'
    buttons.style.display = 'none'
    truth_button.style.display = 'block'
    dare_button.style.display = 'block'
    space.style.display = 'none'
    line.style.display = 'none'
}
const TruthOrDare = (list)=>{
    let backbutton = document.getElementsByClassName('backButton')[0]
    let truth_button = document.getElementsByClassName('Truth')[0]
    let dare_button = document.getElementsByClassName('Dare')[0]
    let ranIndex = Math.round(Math.random(0)*(list.length-1))
    let space = document.getElementsByClassName('TruthOrDare')[0]
    let line = document.getElementsByClassName('line')[0]
    let buttons = document.getElementsByClassName('buttons')[0]
    buttons.style.display = 'flex'
    line.style.display = 'block'
    space.style.display = 'block'
    space.innerHTML = list[ranIndex]
    truth_button.style.display = 'none'
    dare_button.style.display = 'none'
    backbutton.style.display = 'fixed'
}
let play_button = document.getElementsByClassName('playButton')[0]
let game = document.getElementsByClassName('game')[0]
let backbutton = document.getElementsByClassName('backButton')[0]

play_button.addEventListener('click',()=>{
    if (players.length>=2){
        
        playerturn(players)
    }
})
backbutton.addEventListener('click',()=>{
    gameBox.style.display = 'block'
    game.style.display = 'none'
    
})
let truth_button = document.getElementsByClassName('Truth')[0]
let dare_button = document.getElementsByClassName('Dare')[0]

truth_button.addEventListener('click',()=>{ 
    TruthOrDare(truths_list)
})

dare_button.addEventListener('click',()=>{
    TruthOrDare(dares_list)
})

let done_button = document.getElementsByClassName('done')[0]
let not_done_button = document.getElementsByClassName('notDone')[0]

done_button.addEventListener('click',()=>{
    playerturn(players)
})
not_done_button.addEventListener('click',()=>{

    playerturn(players)
})

