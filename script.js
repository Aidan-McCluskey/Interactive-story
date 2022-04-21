window.onload = function () {

    var story = {
        // var name of option: {
        //     text: "Shown text (copy from doc if you need to)",
        //     options: [["var name of option", "actual option shown"], ["var name of option", "actual option shown"], ["var name of option", "actual option shown"]]
        // }, template for choices

        storyStart: {
            text: "It is the year 3052 and Joe Rogan has become functionally immortal after establishing a monopoly on all podcasts everywhere. \nYou are given the opportunity to go on an adventure to take him down. \n\nGo on an adventure to end Joe Rogan's monopoly on all podcasts?",
            options: [["accept", "Head towards the woods"], ["deny", "No, go home"]]
        },

        deny: {
            text: "Uh oh! You made an oopsies! \nNow, your computer will explode in approximately 10 seconds!!",
        },

        accept: {
            text: "Night falls. \nDo you continue to travel?",
            options: [["maze", "Head towards what seems to be an abandoned shack."], ["dumb", "Yes."], ["shelter", "Find a tree to sleep under until dawn."], ["fortnite", "Survey the area for options."]]
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
            options: [["jesus3", "You leave. "]]
        },
        
        text: [["mentor1", "You win the pack-a-punch upgrade for your raygun. You grab it, and you part ways with Shaggy. The next day has begun while you were in the maze, and a man appears. He claims to have secrets that can defeat Joe Rogan."]]
    }
    var playerChoices = ["storyStart"];

    var startBtn = document.getElementById("startBtn");
    var btnArea = document.getElementById("btnArea");
    var txtArea = document.getElementById("txtArea");

    function writeText(text) {
        txtArea.innerHTML = '';
        btnArea.innerHTML = '';
        let currentPage = playerChoices[playerChoices.length - 1];
        for (let plot of playerChoices) {
            addStory(story[plot].text)
        }
        for (let plot of story[currentPage].options) {
            createButton(plot[1], plot[0]);
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
}