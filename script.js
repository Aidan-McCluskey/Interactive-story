window.onload = function () {

    var story = {
        x: {
            text: "Shown text (copy from doc if you need to)",
            options: [["var name of option", "actual option shown"], ["var name of option", "actual option shown"], ["var name of option", "actual option shown"]]
        }, //template for choices

        storyStart: {
            text: "It is the year 3052 and Joe Rogan has become functionally immortal after establishing a monopoly on all podcasts everywhere. \nYou are Given the Opportunity to go on an adventure to take him down. \n\nGo on an adventure to end joe rogan's monopoly on all podcasts?",
            options: [["accept", "Head towards the woods"], ["deny", "No, go home"]]
        },

        deny: {
            text: "Uh oh! You made an oopsies! \nNow, your computer will explode in approximately 10 seconds!!",
        },

        accept: {
            text: "Night falls. \nDo you continue to travel?",
            options: [["maze", "Head towards what seems to be an abandoned shack."], ["dumb", "Yes."], ["shelter", "Find a tree to sleep under until dawn."], ["fortnite", "Survey the area for options."]]
        },

        shack1: {
            text: "In the abandoned shack, fall through the loose and rotten floorboards. \nYou fall into a maze, where you stumble upon Shaggy. \n\nDo you progress with Shaggy as a companion?",
            options: [["shackNo1", "No."], ["shackYes1", "Yes."]]
        },

        dead1: {
            text: "Upon splitting with Shaggy, you are left alone in the darkness of the woods. \nYou are jumped by Freddy Fazbear, and you die.",
        }, 

        shack2: {
            text: "You continue onward with your companion, and you come to a place where you must once more decide if you wish to have his companionship. Do you split up with him?",
            options: [["shackNo2", "No, you stay with your companion."], ["shackYes2", "Yes, you split with your companion."], ["ponder","You ponder your other options."] ]
        },

        dead2: {
            text: "Upon splitting with Shaggy, you are left alone in the darkness of the woods. \n You are jumped by Freddy Fazbear, and you die.",
        }, 
        
        shack3: {
            text: "Shown text (copy from doc if you need to)",
            options: [["var name of option", "actual option shown"], ["var name of option", "actual option shown"], ["var name of option", "actual option shown"]]
        },
        
        intruder1: {
            text: "",
            options: [["var name of option", "actual option shown"], ["var name of option", "actual option shown"], ["var name of option", "actual option shown"]]
        },
    }
    var playerChoices = ["storyStart"];

    var startBtn = document.getElementById("startBtn");
    var btnArea = document.getElementById("btnArea");
    var txtArea = document.getElementById("txtArea");

    function writeText (text) {
        txtArea.innerHTML = '';
        btnArea.innerHTML = '';
        let pageNow = playerChoices[playerChoices.length - 1];
        
    }

    function addStory(text){
        txtArea.innerHTML = text;
      }
    
}