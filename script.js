var durability = 8;
var story = {
    // var name of option: {
    //     text: "Shown text (copy from doc if you need to)",
    //     options: [["var name of option", "actual option shown"], ["var name of option", "actual option shown"], ["var name of option", "actual option shown"]]
    // }, template for choices

    storyStart: {
        text: "It is the year 3052 and Joe Rogan has become functionally immortal after establishing a monopoly on all podcasts everywhere. \nYou are given the opportunity to go on an adventure to take him down. \n\nGo on an adventure to end Joe Rogan's monopoly on all podcasts?",
        options: [["accept", "Head towards the woods"], ["deny", "No, go home."]],
    },

    deny: {
        text: "Uh oh! You made an oopsies! \nNow, your computer will explode in approximately 10 seconds!!",
    },

    accept: {
        text: "Night falls. \nDo you continue to travel?",
        options: [["maze", "Head towards what seems to be an abandoned shack."], ["dumb", "Yes."], ["lost", "Find a tree to sleep under until dawn."], ["fortnite", "Survey the area for options."]],
    },

    dumb: {
        text: "You decide for some reason that the best course of action is to continue traveling, even though night has long since fallen. Freddy Fazbear makes a surprise appearance and kills you on the spot."
    },

    maze: {
        text: "In the abandoned shack, you fall through the loose and rotten floorboards. \nYou fall into a maze, where you stumble upon Shaggy. \n\nDo you progress with Shaggy as a companion?",
        options: [["dead1", "No."], ["maze2", "Yes."]]
    },

    dead1: {
        text: "Upon splitting with Shaggy, you are left alone in the darkness of the woods. \nYou are jumped by Freddy Fazbear, and you die.",
    },

    maze2: {
        text: "You continue onward with your companion, and you come to a fork in the maze. Both paths look equally as 'inviting.' \n\nDo you split up with him?",
        options: [["maze3", "No, you stay with your companion."], ["dead2", "Yes, you split with your companion."], ["intruder1", "You ponder your other options."]]
    },

    dead2: {
        text: "Upon splitting with Shaggy, you are left alone in the darkness of the woods. \n You are jumped by Freddy Fazbear, and you die.",
    },

    maze3: {
        text: "With your travel companion, you successfully make it out of the maze with zero injuries. \nYou come up to a chest, where inside there is a raygun. \nYou pick it up, and carry on with your adventure.",
        options: [["jesus1", "Next."]]
    },

    intruder1: {
        text: "You ponder your options with your companion. \nYour idleness has caused a creature from within the woods to appear. \nThe creature is horrifying, and is something you can only describe as an alternate. \nThe creature specializes in psychological tricks. \n\nWhat do you do?",
        options: [["intruder2", "Run for your life."]]
    },

    intruder2: {
        text: "The creature begins to emit voices, that it uses to trick it's victims. \nYou can't die here, not like this! The voices, however, promise you glory and a victorius fight. \nIt sounds really appealing...",
        options: [["dead3", "You listen to the voices emitted by the creature."], ["maze4", "You decide to play it smart and safe."]]
    },

    dead3: {
        text: "You listened to the voices emitted by the creature. The voices put you in a false sense of glory. The creature catches you as you listen to these empty promises. You died."
    },

    maze4: {
        text: "You choose to not listen to the voices and you escape the creature with Shaggy in tow. Upon your escape, you find a chest with a raygun inside, and you pick it up. Carry on.",
        options: [["jesus1", "Continue."]]
    },

    jesus1: {
        text: "You escape the maze with your raygun and travel companion. You then encounter your first major challenger, Jesus playing basketball. Shaggy dubs him JesusBallin. Jesus challenges you to a 1v1 in basketball, with your life on the line. What is your strategy?",
        options: [["jesus2", "You attempt the HOLY FAKEOUT."], ["dead4", "You attempt the one-two-unbuckle-his-shoes-over-under maneuver."]]
    },

    dead4: {
        text: "You attempt the one-two-unbuckle-his-shoes-over-under maneuver, but you realize that Jesus has no shoes to unbuckle! He shatters your ankles in retaliation, and leaves you for dead. Amen."
    },

    jesus2: {
        text: "Jesus didn't expect the HOLY FAKEOUT so you shatter his ankles. \nShaggy stands over Jesus, who lays there on the ground in pain. \n\nShaggy- 1, Jesus- 0.",
        options: [["jesusWin", "You leave. "]]
    },

    jesusWin: {
        text: "You win the pack-a-punch upgrade for your raygun. You grab it, and you part ways with Shaggy. The next day has begun while you were in the maze, and a man appears. He claims to have secrets that can defeat Joe Rogan.",
        options: [["mentor1", "Continue"]]
    },

    lost: {
        text: "You found a tree to sleep under until day breaks. You sleep until the next morning, where the dawning realization that you are lost kicks in. You realize you are unable to tell where you came from. Where do you go?",
        options: [["path1", "You take the left path."], ["path2", "You go right."]]
    },

    path1: {
        text: "You took the first left path. It all looks the same out here, that you can't tell where you are. You feel as if you're even more lost than before. You come across two more paths, and you have another choice on where to go.",
        options: [["path3", "You go left."], ["path4", "You go right."]]
    },

    path4: {
        text: "You went left a second time. You stop, and think to yourself, 'Well, at least the leaves look a different shape here.' You are effectively lost.",
        options: [["path2", "You go left."], ["path3", "You turn back."], ["escape", "You decide right may lead you out."], ["loop", "You think that going forward will let you escape."]]
    },

    path3: {
        text: "You head back and end up in the first area you entered. You truly are lost, where will you go now?",
        options: [["path1", "You go left."], ["path4", "You go right."], ["escape", "You think that continuing forward will lead you out."]]
    },

    path2: {
        text: "You were right by thinking that going left a third time would get you out of the woods. Night falls as you escape.",
        options: [["path1", "You go left."], ["path4", "You go right."], ["loop", "You think that continuing forward will lead you out."]]
    },

    escape: {
        text: "You finally find yourself out of the deepest part of the forest. It is night. As you lay down to sleep, you catch a glimpse of an underground maze. 'Glad I didn't go that way,' you mutter to yourself before passing out.",
        options: [["mentor2", "You sleep through the night."]]
    },

    loop: {
        text: "You go right after you get your bearings. You wander aimlessly, and you swear you've come across that bush once before already.",
        options: [["forward", "You continue to walk straight ahead."], ["back2", "You head back."], ["right2"]]
    },

    fortnite: {
        text: "After surveying the area for options, you end up slipping and no clipping through the floor. You end up above the Fortnite Battle Royale map. You continue to observe, and notice something.",
        options: [["towers", "You head towards the flashiest place on the map."]]
    },

    towers: {
        text: "You go to Tilted towers, and notice everyone else had the same idea as you. You notice popular streamers XQC and Ninja Fortnite landing at separate houses. Who do you pursue?",
        options: [["xqc1", "You pursue XQC."], ["ninja1", "You pursue Ninja Fortnite."]]
    },

    xqc1: {
        text: "You land near XQC and begin looting. Unfortunately, your efforts haven't gained you much and you only end up with a gray SMG. You see XQC off in the distance.",
        options: [["loot", "You try to find better loot."], ["xqc2", "You immediately rush XQC."]]
    },

    xqc2: {
        text: "You catch XQC off guard with your rush attack, and succeed in eliminating him from the Battle Royale. He drops a crossbow, which you believe to be better than your SMG, so you swap them.",
        options: [["xqc3", "You scout for Ninja Fortnite."]]
    },

    xqc3: {
        text: "You spot Ninja healing up in his builds after an epic build battle. In order to win, you must take him out.",
        options: [["rush", "You rush Ninja with your weapon."]]
    },

    rush: {
        text: "You rush Tyler Ninja Fortnite Blevins in the hopes of taking him down before he has a chance to heal. An Epic build battle ensues, and you use your crossbow to shoot down his builds.",
        options: [["battleWin", "You win the Battle Royale."]]
    },

    battleWin: {
        text: "As you climb upon the hilltop to proclaim your swag victory royale, you noclip through the floor again and fall right next to the exit of something underground. 'Glad I didn't go that way' you mutter to yourself. You wonder if all that actually happened, but you assure yourself that it did.",
        options: [["mentor3", "You pass out."]]
    },

    ninja1: {
        text: "You land on top of Ninja Fortnite and start aggressively attacking with your pickaxe. Do you finish him off now, or do you run away to gear up?",
        options: [["loot", "You leave to gear up."], ["smite", "Continue attacking."]]
    },

    smite: {
        text: "You succeded in the elimination, but Ninja is currently streaming and accuses you of stream sniping. You get banned and seemingly get smote by Epic Games."
    },


    loot: {
        text: "You set out on a quest for better loot and as you do so, Ninja's epic gamer skill is demolishing the rest of the lobby. Among the victims is XQC. Fortunately for you, you were able to find some shields and an SMG with exactly one magazine.",
        options: [["ninja2", "Search for survivors."]]
    },

    ninja2: {
        text: "As you run around and attempt to find survivors, you spot Ninja healing in his builds. You have to make a decision.",
        options: [["fortniteDeath", "You take a second to think."], ["ninjaRush", "You rush Ninja."]]
    },

    fortniteDeath: {
        text: "You took too long to think and Ninja shoots you down. He proclaims victory royale, and you have failed your quest."
    },

    ninjaRush: {
        text: "You rush Ninja and use the last of your ammo to perservere throughout the fight. You hold onto hope to get you through this.",
        options: [["battleWin", "See this through to the end."]]
    },

    mentor1: {
        text: "Day breaks. HE appears.",
        options: [["mentor1Post", "You train under HIM."]]
    },

    mentor1Post: {
        text: "After 5 grueling weeks of training, HE deems you worthy of an attempt on Joe Rogan's life. He gives you a wooden sword with 8 durability to assist you.",
        options: [["keepRaygun", "Keep Raygun"], ["giveRaygun", "Offer Raygun"]]
    },

    mentor2: {
        text: "Day breaks. HE appears",
        options: [["mentor2Post", "You train under HIM."]]
    },

    mentor2Post: {
        text: "After 5 grueling weeks of training, HE deems you worthy of an attempt on Joe Rogan's life. He gives you a wooden sword with 8 durability to assist you.",
        options: [["noWeapon", "Accept the Sword"]]
    },

    mentor3: {
        text: "Day breaks. HE appears.",
        options: [["mentor3Post", "You train under HIM."]]
    },

    mentor3Post: {
        text: "After 5 grueling weeks of training, HE deems you worthy of an attempt on Joe Rogan's life. He gives you a wooden sword with 8 durability to assist you.",
        options: [["keepCrossbow", "Keep Crossbow"], ["giveCrossbow", "Offer Crossbow"]]
    },


    // ----------- RAYGUN LINE ------------ //


    keepRaygun: {
        text: "You decide that holding onto your Raygun in combination with the wooden sword is your best course of action. You make your final approach to Joe Rogan's empire. When you reach the entrance, you realize that it is blocked off by a massive meter thick door.",
        options: [["breakdown1", "Try to break down the door with your sword (-4 durability)"], ["sneak1", "Try to find another way into the empire"]]
    },

    breakdown1: {
        text: "You break down the door with your wooden sword and it loses 4 durability. You enter his empire and start sneaking your way towards his studio.",
        options: [["reachStudio1", "Continue"]],
        durability: -4
    },

    sneak1: {
        text: "You are able to sneak around due to the stealth capability of your weapons and sneak up through the sewers.",
        options: [["creep1", "Find a good vantage point to attack from afar."]]
    },

    creep1: {
        text: "You creep onto the balcony above where Joe resides.",
        options: [["reachStudio1", "Jump down to Joe to attack with your sword"], ["snipe1", "Shoot from afar with your Raygun."]]
    },

    snipe1: {
        text: "Joe didn't notice you and you kill him.",
        options: [["kill1", "Jump down to confirm"]]
    },

    reachStudio1: {
        text: "You reach the recording studio but Joe has overheard the commotion and has prepared for your arrival. It's an ambush!",
        options: [["counterattack1", "Counterattack with the sword (-2 durability)"], ["fendOff1", "Fend Joe off with your fists to buy yourself time and space between you"]],
        durability: -2
    },

    counterattack1: {
        text: "You manage to weaken him enough so that he runs away, out of your sword's range.",
        options: [["chase1", "Give chase with your sword (-2 durability)."], ["raygunShoot1", "Take the shot with your raygun from a distance"]],
        durability: -2
    },

    raygunShoot1: {
        text: "As Joe runs, you take aim with your Raygun, and you finish it.",
        options: [["kill1", "Continue"]]
    },

    fendOff1: {
        text: "You just manage to deflect enough hits to be able to run to a safe distance. You take aim with your Raygun... and its over.",
        options: [["kill1", "Continue"]]
    },

    chase1: {
        text: "As a result of your training, you catch up to Joe Rogan and land the finishing blow with your sword.",
        options: [["kill1", "Continue"]]
    },

    kill1: {
        text: "You have slain JOE ROGAN and are standing on top of the world. What do you do now?",
        options: [["takeOver", "Take over the podcast in his place."], ["headHome1", "Head Home"]]
    },

    takeOver: {
        text: "You become the second coming of Joe Rogan by taking his place at the head of podcasts. Nothing has changed and you have probably doomed the world to a horrible unfunny fate."
    },

    headHome1: {
        text: "You start heading home, but something feels off. That seemed too easy...",
        options: [["check1", "Check to make sure Joe is finished"], ["ignore1", "Ignore your instincts"]]
    },

    ignore1: {
        text: "'No. I killed him. Its over.' you mutter to yourself as you shake off the feeling and head home",
        options: [["fail1", "Continue"]]
    },

    check1: {
        text: "You find HIM sneaking around Joe's studio, trying to find a way to take over the podcast for himself, and to conceal his presence, only has a dagger.",
        options: () => { if (durability <= 0) { return [["fail2", "Continue"]] } else { return [["succeed", "Continue"]] } }
    },


    // ----------- CROSSBOW LINE ------------ //


    keepCrossbow: {
        text: "You decide that holding onto your crossbow in combination with the wooden sword is your best course of action. You make your final approach to Joe Rogan's empire. When you reach the entrance, you realize that it is blocked off by a massive meter thick door.",
        options: [["breakdown2", "Try to break down the door with your sword (-4 durability)"], ["sneak2", "Try to find another way into the empire"]]
    },

    breakdown2: {
        text: "You break down the door with your wooden sword and it loses 4 durability. You enter his empire and start sneaking your way towards his studio.",
        options: [["reachStudio2", "Continue"]],
        durability: -4
    },

    sneak2: {
        text: "You are able to sneak around due to the stealth capability of your weapons and sneak up through the sewers.",
        options: [["creep2", "Find a good vantage point to attack from afar."]]
    },

    creep2: {
        text: "You creep onto the balcony above where Joe resides.",
        options: [["reachStudio2", "Jump down to Joe to attack with your sword"], ["snipe2", "Shoot from afar with your crossbow."]]
    },

    snipe2: {
        text: "Joe didn't notice you and you kill him.",
        options: [["kill2", "Jump down to confirm"]]
    },

    reachStudio2: {
        text: "You reach the recording studio but Joe has overheard the commotion and has prepared for your arrival. It's an ambush!",
        options: [["counterattack2", "Counterattack with the sword (-2 durability)"], ["fendOff2", "Fend Joe off with your fists to buy yourself time and space between you"]],
        durability: -2
    },

    counterattack2: {
        text: "You manage to weaken him enough so that he runs away, out of your sword's range.",
        options: [["chase2", "Give chase with your sword (-2 durability)."], ["crossbowShoot2", "Take the shot with your crossbow from a distance"]],
        durability: -2
    },

    crossbowShoot2: {
        text: "As Joe runs, you take aim with your crossbow, and you finish it.",
        options: [["kill2", "Continue"]]
    },

    fendOff2: {
        text: "You just manage to deflect enough hits to be able to run to a safe distance. You take aim with your crossbow... and its over.",
        options: [["kill2", "Continue"]]
    },

    chase2: {
        text: "As a result of your training, you catch up to Joe Rogan and land the finishing blow with your sword.",
        options: [["kill2", "Continue"]]
    },

    kill2: {
        text: "You have slain JOE ROGAN and are standing on top of the world. What do you do now?",
        options: [["takeOver", "Take over the podcast in his place."], ["headHome2", "Head Home"]]
    },

    takeOver: {
        text: "You become the second coming of Joe Rogan by taking his place at the head of podcasts. Nothing has changed and you have probably doomed the world to a horrible unfunny fate."
    },

    headHome2: {
        text: "You start heading home, but something feels off. That seemed too easy...",
        options: [["check2", "Check to make sure Joe is finished"], ["ignore2", "Ignore your instincts"]]
    },

    ignore2: {
        text: "'No. I killed him. Its over.' you mutter to yourself as you shake off the feeling and head home",
        options: [["fail1", "Continue"]]
    },

    check2: {
        text: "You find HIM sneaking around Joe's studio, trying to find a way to take over the podcast for himself, and to conceal his presence, only has a dagger.",
        options: () => { if (durability <= 0) { return [["fail2", "Continue"]] } else { return [["succeed", "Continue"]] } }
    },


    // ----------- GJALLARHORN LINE ------------ //



    giveRaygun: {
        text: "You decide that giving your Raygun is your best course of action. You are then given Gjallarhorn in exchange, after HE realizes the value of the weapon just handed to HIM. You make your final approach to Joe Rogan's empire. When you reach the entrance, you realize that it is blocked off by a massive meter thick door.",
        options: [["breakdown3", "BLOW UP THE DOOR WITH GJALLARHORN"], ["sneak3", "Try to find another way into the empire"]]
    },

    breakdown3: {
        text: "You blow up the door in it's entirety with the raw power of Gjallarhorn. You enter his empire and start making your way towards his studio.",
        options: [["reachStudio3", "Continue"]]
    },

    sneak3: {
        text: "Due to Gjallarhorn's size and flashiness, you are immediately spotted by the guards and killed on the spot."
    },

    reachStudio3: {
        text: "You reach the recording studio but Joe has overheard the commotion and has prepared for your arrival. It's an ambush!",
        options: [["counterattack3", "Fire Gjallarhorn immediately out of panic"], ["fendOff3", "Fend Joe off with your fists to buy yourself time and space between you"]],
    },

    counterattack3: {
        text: "You manage to blow Joe Rogan up, however, you were too close and were caught in the explosion's radius."
    },

    fendOff3: {
        text: "You just manage to deflect enough hits to be able to run to a safe distance. You take aim with Gjallarhorn... and it's over.",
        options: [["kill3", "Continue"]]
    },

    kill3: {
        text: "You have slain JOE ROGAN and are standing on top of the world. What do you do now?",
        options: [["takeOver", "Take over the podcast in his place."], ["headHome3", "Head Home"]]
    },

    takeOver: {
        text: "You become the second coming of Joe Rogan by taking his place at the head of podcasts. Nothing has changed and you have probably doomed the world to a horrible unfunny fate."
    },

    headHome3: {
        text: "You start heading home, but something feels off. That seemed too easy...",
        options: [["check3", "Check to make sure Joe is finished"], ["ignore3", "Ignore your instincts"]]
    },

    ignore3: {
        text: "'No. I killed him. Its over.' you mutter to yourself as you shake off the feeling and head home",
        options: [["fail1", "Continue"]]
    },

    check3: {
        text: "You find HIM sneaking around Joe's studio, trying to find a way to take over the podcast for himself, and to conceal his presence, only has a dagger.",
        options: [["succeed", "Finish off your former mentor with the very weapon bestowed by him."]]
    },


    //------------ AZKAR LINE ------------//        



    giveCrossbow: {
        text: "You decide that giving your crossbow is your best course of action. You are then given Azkar in exchange, after HE realizes the value of the weapon just handed to HIM. You make your final approach to Joe Rogan's empire. When you reach the entrance, you realize that it is blocked off by a massive meter thick door.",
        options: [["breakdown4", "Try to break down the door with your sword (-4 durability)"], ["sneak4", "Try to find another way into the empire"]]
    },

    breakdown4: {
        text: "You break down the door with your wooden sword and it loses 4 durability. You enter his empire and start sneaking your way towards his studio.",
        options: [["reachStudio4", "Continue"]],
        durability: -4
    },

    sneak4: {
        text: "You are able to sneak around due to the stealth capability of your weapons and sneak up through the sewers.",
        options: [["creep4", "Find a good vantage point to attack from afar."]]
    },

    creep4: {
        text: "You creep onto the balcony above where Joe resides.",
        options: [["reachStudio4", "Jump down to Joe to attack with your sword"], ["snipe4", "Shoot from afar with Azkar."]]
    },

    snipe4: {
        text: "Joe didn't notice you and you kill him.",
        options: [["kill4", "Jump down to confirm"]]
    },

    reachStudio4: {
        text: "You reach the recording studio but Joe has overheard the commotion and has prepared for your arrival. It's an ambush!",
        options: [["counterattack4", "Counterattack with the sword (-2 durability)"], ["fendOff4", "Fend Joe off with your fists to buy yourself time and space between you"]]
    },

    counterattack4: {
        text: "You manage to weaken him enough so that he runs away, out of your sword's range.",
        options: [["chase4", "Give chase with your sword (-2 durability)."], ["azkarShoot4", "Take the shot with Azkar from a distance"]],
        durability: -2
    },

    azkarShoot4: {
        text: "As Joe runs, you take aim with your bow, and you finish it.",
        options: [["kill4", "Continue"]]
    },

    fendOff4: {
        text: "You just manage to deflect enough hits to be able to run to a safe distance. You take aim with Azkar... and its over.",
        options: [["kill4", "Continue"]]
    },

    chase4: {
        text: "As a result of your training, you catch up to Joe Rogan and land the finishing blow with your sword.",
        options: [["kill4", "Continue"]],
        durability: -2
    },

    kill4: {
        text: "You have slain JOE ROGAN and are standing on top of the world. What do you do now?",
        options: [["takeOver", "Take over the podcast in his place."], ["headHome4", "Head Home"]]
    },

    takeOver: {
        text: "You become the second coming of Joe Rogan by taking his place at the head of podcasts. Nothing has changed and you have probably doomed the world to a horrible unfunny fate."
    },

    headHome4: {
        text: "You start heading home, but something feels off. That seemed too easy...",
        options: [["check4", "Check to make sure Joe is finished"], ["ignore4", "Ignore your instincts"]]
    },

    ignore4: {
        text: "'No. I killed him. Its over.' you mutter to yourself as you shake off the feeling and head home",
        options: [["fail1", "Continue"]]
    },

    check4: {
        text: "You find HIM sneaking around Joe's studio, trying to find a way to take over the podcast for himself, and to conceal his presence, only has a dagger.",
        options: () => { if (durability <= 0) { return [["fail2", "Continue"]] } else { return [["succeed", "Continue"]] } }
    },


    //------------- NO WEAPON LOL --------------//


    noWeapon: {
        text: "You accept the wooden sword, but feel a creeping sense of dread as you realize this is all you will have in your attempt on Joe Rogan's life. Swallowing your fear, you make your final approach to Joe Rogan's empire. When you reach the entrance, you realize that it is blocked off by a massive meter thick door.",
        options: [["breakdown5", "Try to break down the door with your sword (-4 durability)"], ["sneak5", "Try to find another way into the empire"]]
    },

    breakdown5: {
        text: "You break down the door with your wooden sword and it loses 4 durability. You enter his empire and start sneaking your way towards his studio.",
        options: [["reachStudio5", "Continue"]],
        durability: -4
    },

    sneak5: {
        text: "You are able to sneak around due to the stealth capability of your weapons and sneak up through the sewers.",
        options: [["creep5", "Find a good vantage point to attack from another angle."]]
    },

    creep5: {
        text: "You creep onto the balcony above where Joe resides.",
        options: [["reachStudio5", "Jump down to Joe to attack with your sword"]]
    },

    reachStudio5: {
        text: "You reach the recording studio but Joe has overheard the commotion and has prepared for your arrival. It's an ambush!",
        options: [["counterattack5", "Counterattack with the sword (-2 durability)"], ["fendOff5", "Fend Joe off with your fists to buy yourself time and space between you"]]
    },

    counterattack5: {
        text: "You manage to weaken him enough so that he runs away, out of your sword's range.",
        options: [["chase5", "Give chase with your sword (-2 durability)."]],
        durability: -2
    },

    fendOff5: {
        text: "You just manage to deflect enough hits to be able to run to a safe distance.",
        options: [["kill5", "Continue"]]
    },

    chase5: {
        text: "As a result of your training, you catch up to Joe Rogan and land the finishing blow with your sword.",
        options: [["kill5", "Continue"]],
        durability: -2
    },

    kill5: {
        text: "You have slain JOE ROGAN and are standing on top of the world. What do you do now?",
        options: [["takeOver", "Take over the podcast in his place."], ["headHome5", "Head Home"]]
    },

    takeOver: {
        text: "You become the second coming of Joe Rogan by taking his place at the head of podcasts. Nothing has changed and you have probably doomed the world to a horrible unfunny fate."
    },

    headHome5: {
        text: "You start heading home, but something feels off. That seemed too easy...",
        options: [["check5", "Check to make sure Joe is finished"], ["ignore5", "Ignore your instincts"]]
    },

    ignore5: {
        text: "'No. I killed him. Its over.' you mutter to yourself as you shake off the feeling and head home",
        options: [["fail1", "Continue"]]
    },

    check5: {
        text: "You find HIM sneaking around Joe's studio, trying to find a way to take over the podcast for himself, and to conceal his presence, only has a dagger.",
        options: [["fail2", "Continue"], ["succeed", "Continue"]]
    },



    //------------ ENDINGS ------------//

    fail1: {
        text: "Three weeks after reaching home, you read the news, where you read that HE planned that you would take Joe Rogan out well in advance, and snuck into the empire after you to take over the podcast for himself. You realize that you have zero chance of taking him down as you are now. All you have accomplished this journey is making an enemy even harder to take down than Joe Rogan a reality. End."
    },

    fail2: {
        text: " Your sword breaks before you can do any meaningful damage to HIM, so HE kills you, and then takes over the podcast for himself."
    },

    succeed: {
        text: "You barely have enough sword durability to deal the finishing blow to your former mentor. You stab him through the heart, since you have more range than his simple dagger. He falls, lifeless, with the sword blade lodged in his chest as it breaks with the final blow. You succeed in ending the reign of Joe Rogan and those with the ability to take his place. You leave with your weapon in hand, with the knowledge and reassurance that no one will take over again, at least in your lifetime."
    },
}
var playerChoices = ["storyStart"];

var startBtn = document.getElementById("startBtn");
var btnArea = document.getElementById("btnArea");
var txtArea = document.getElementById("txtArea");

function writeText() {
    txtArea.innerHTML = '';
    btnArea.innerHTML = '';
    let currentPage = playerChoices[playerChoices.length - 1];
    story[currentPage].durability ? durability += story[currentPage].durability : false;
    console.log(durability);
    for (let plot of playerChoices) {
        addStory(story[plot].text)
    }
    if (currentPage === "check5" || currentPage === "check4" || currentPage === "check3" || currentPage === "check2" || currentPage === "check1") {
        if (durability <= 2) {
            createButton(story[currentPage].options[0][1], story[currentPage].options[0][0]);
        } else {
            createButton(story[currentPage].options[1][1], story[currentPage].options[1][0]);
        }
    } else {
        for (let plot of story[currentPage].options) {
            createButton(plot[1], plot[0]);
        }
    }


}

function addStory(text) {
    txtArea.innerHTML = text;
}

function createButton(btnText, choice) {
    var button = document.createElement("button");
    button.innerHTML = btnText;
    btnArea.appendChild(button);

    button.addEventListener("click", function () {
        playerChoices.push(choice);
        writeText();
    });
}

startBtn.addEventListener("click", function () {
    writeText(story.storyStart.text);
})