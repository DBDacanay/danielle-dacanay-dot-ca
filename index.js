function changeBox(boxName){
    const boxText = document.getElementsByClassName("boxTextItem")
    for(var i=0; i < boxText.length; i++) { 
        boxText[i].style.display = "none"
      }
      const desiredBoxText = document.getElementById(boxName)
      desiredBoxText.style.display = "block"
}

function changePage(pageName){
    const boxText = document.getElementsByClassName("box")
    for(var i=0; i < boxText.length; i++) { 
        boxText[i].style.display = "none"
      }
      const desiredBoxText = document.getElementById(pageName)
      desiredBoxText.style.display = "flex"

      const pageText = document.getElementsByClassName("boxTextItem")
      for(var i=0; i < pageText.length; i++) { 
            if(pageText[i].id.includes("headerIntro")){
                pageText[i].style.display = "block"
            }
    }
}

function buttonPressed(buttonID){
    const allButtons = document.getElementsByClassName("headerButtons")
    for(var i=0; i < allButtons.length; i++) { 
        allButtons[i].style.borderWidth = "1px"
        }
    const buttonPress = document.getElementById(buttonID)
    buttonPress.style.borderWidth = "3px"

}

var quotes = [
    {
        quote: "It is not our part to master all the tides of the world, but to do what is in us for the succour of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.",
        source: "Return of the King"
    },
    {
        quote: "Mercy is rarely a complete mistake.",
        source: "Disco Elysium"
    },
    {
        quote: "There is no love in the past. Only the present. The past is made of static images, distorted memories, demented nostalgia. This, the present, is far superior. It is a living organism.",
        source: "Disco Elysium"
    },
    {
        quote: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
        source: "Matthew (6:34)"
    },
    {
        quote: "Subdue the regret. Dust yourself off, proceed. You'll get it in the next life, where you don't make mistakes. Do what you can with this one, while you're alive.",
        source: "Disco Elysium"
    },
    {
        quote: "Perilous to us all are the devices of an art deeper than we possess ourselves.",
        source: "The Two Towers"
    },
    {
        quote: "Be not too eager to deal out death in the name of justice, fearing for your own safety. Even the wise cannot see all ends.",
        source: "The Two Towers"
    },
    {
        quote: "The praise of the praiseworthy is above all rewards.",
        source: "The Two Towers"
    },
    {
        quote: "The hasty stroke goes oft astray.",
        source: "The Return of the King"
    },
    {
        quote: "You also know things are real when they can be lost.",
        source: "I'm Thinking of Ending Things"
    },
    {
        quote: "Part of everything will always be forgettable. No matter how good or remarkable it is. It literally has to be. To be.",
        source: "I'm Thinking of Ending Things"
    },
    {
        quote: "Every genuine work of art has as much reason for being as the earth and the sun.",
        source: "Ralph Waldo Emerson"
    },
    {
        quote: "Things always seem fairer when we look back at them, and it is out of of that inaccessible tower of the past that Longing leans and beckons.",
        source: "James Russell Lowell"
    }, 
    {
        quote: "To retrieve the poem’s <i>enargeia</i>, take away its narrative, as you might lift the roof off a church in order to remember what you’re worshipping.",
        source: "Alice Oswald"
    }, 
    {
        quote: "We only live to discover beauty. All else is a form of waiting.",
        source: "Kahlil Gibran"
    },  
    {
        quote: "You're better off living in the hole looking at the palace, than living at the palace looking at the hole.",
        source: "Karl Pilkington"
    },  
    {
        quote: "I always have a problem liking things I'm told I should like.",
        source: "Karl Pilkington"
    },    
    {
        quote: "That's right. You can. Whatever you're doing here, you can just stop it and go on with your life.",
        source: "Disco Elysium"
    },
    {
        quote: "How <i>not</i> to lose? It is impossible not to. You can either play or you can crawl under a boat and waste away -- turn into salt or a flock of seagulls. The only way to load the dice is to keep on fighting.",
        source: "Disco Elysium"
    },
    {
        quote: "You can choose which parts to keep. Keep almost none of it. Only the flowers on the windowsill. Only the distant sound of a radio. ",
        source: "Disco Elysium"
    },
    {
        quote: "It’ll be depressing. And it’ll be boring. Don’t expect any further rewards or handclaps. This is how normal people are all the time. ",
        source: "Disco Elysium"
    },
    {
        quote: "In dark times, should the stars also go out?",
        source: "Disco Elysium"
    },
    {
        quote: "This thing ruined my life in the way that only the inexplicable decisions of strangers can.",
        source: "Dan Olson"
    },
    {
        quote: "There is nothing in the dark that is not there in the light.",
        source: "Rod Serling"
    },
    {
        quote: "Either there is nothing there, or there is something there.",
        source: "Jacob Geller"
    },
    {
        quote: "What I miss most in the woods is somewhere in between quiet and solitude. What I miss most is stillness.",
        source: "Christopher Knight"
    },
    {
        quote: "I kinda look at the big long life ahead of me that stretches out forever and disappears. And I get scared. And I think, 'This can't be Heaven if I'm getting scared, right?'. And then I think, 'Maybe I am in Heaven, and Heaven is scary.'",
        source: "Football 17776"
    },
    {
        quote: "They decided to leave their existence just a little short of perfect, because they wanted to want.",
        source: "Football 17776"
    },
    {
        quote: "Caring about something is an end unto itself. Passion is found in the process, not the result.",
        source: "Jacob Geller"
    },
    {
        quote: "Let them have a laugh at their passions. Because what they call passion actually is not some emotional energy, but just the friction between their souls and the outside world.",
        source: "Stalker"
    },
];

function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementById('quoteBox').innerHTML =  `"${randomQuote.quote}"<br> - <i>${randomQuote.source}</i>`
}
window.onload = function() {
  };

  var facts = [
    {
        fact: "I used to play trombone for a brass band. I was okay :p"
    },
    {
        fact: "I've never broken a bone, although I have bled internally."
    },
    {
        fact: "I am ambidextrous! Most tools and furniture are designed for righthanded people, though, so I typically use my right."
    },
    {
        fact: "I don't really have a favourite colour, but if I did, it would definitely be a greenish blue. Like a kelp forest, or submerged jade."
    },
    {
        fact: "I have written a significant portion of the total English language Wikipedia articles for mid-20th century Chinese mass songs."
    },
    {
        fact: "I am 186cm tall (6'1, for Americans). In heels, that's about 193cm (6'4). The weather's fine up here, by the way."
    },
    {
        fact: "When I got my wisdom teeth removed, I apparently sang the South African national anthem nonstop during the (quite long) car journey home. I have no memory of it."
    },
    {
        fact: "I have terrible, terrible eyesight. The glasses are not decoration."
    },
    {
        fact: "I have 221 hours in the Valve Hammer Editor, a software for creating maps in the Source Engine, virtually all of which were spent creating single map based on a rural Italian monastery. It got 12 downloads"
    },
    {
        fact: "I really like high quality, artisinally-made pencils. I carry at least two with me at all times."
    },
    {
        fact: "My earliest (datable) memory is the death of Steve Irwin (may he rest in peace) in September 2006."
    },
    {
        fact: "My blood type is A+, although as far as I'm aware, I've never had a transfusion."
    },
    {
        fact: "I have no idea what my last name means. I'm fairly confident it's from the Ilokano language in the northern Philippines, but I have never been able to find a translation for it."
    },
    {
        fact: "When I was a kid, I wanted to be a museum curator."
    },
    {
        fact: "I have had a roommate with the same name as me on three separate occasions."
    },
    {
        fact: "I am fascinated by emoji on a conceptual level, as a linguistic phenomenon; however, I almost never actually use them in text. I am much more of an emoticon gal >:3"
    },
    {
        fact: "I like running, cycling, and other endurance exercise, as long as I get to do it alone."
    },
    {
        fact: "I spend a lot of my spare time painting, mostly in a combination of ink, wax pastel, and watercolour. I like depicting mundane scenes from my daily life."
    },
    {
        fact: "I drink between three and four litres of water every day, and virtually nothing else."
    },
    {
        fact: "I love acidic foods, like pickled vegetables, and will gladly eat a full jar of kimchi or morkovcha in a single sitting."
    },
    {
        fact: "One of my first jobs consisted almost entirely of washing and peeling potatoes. I miss that job..."
    },
    {
        fact: "I don't really *collect* anything, although if I see an interesting-looking dictionary, I will usually buy it."
    },
    {
        fact: "My favourite type of cheese is smoked sulguni or chechil, although a good smoked gouda is a close second."
    },
    {
        fact: "I usually churn my own butter, rather than buying it; it's delicious, and provides an excellent opportunity for exercise and pondering."
    },
    {
        fact: "The coldest temperature I have ever experienced in nature was -45C; the warmest was about 40C."
    },
    {
        fact: "I once got frostbite on my left hand while waiting to be let into a building in Alberta. I didn't realise it was frostbite until I later searched 'frostbite symptoms' on Google."
    },
    {
        fact: "I am not a picky eater at <i>all</i>; however, I absolutely cannot stand ranch dressing or cold processed meats."
    },
    {
        fact: "The longest time I have gone without eating was about 52 hours. The longest I have gone without water is about 30 hours."
    },
    {
        fact: "I remember most of my dreams, probably about 60-70% of them. However, if I don't write them down, I will forget them again within a few days."
    },
    {
        fact: "When I was a teenager, I made three of most upvoted posts of all time in r/vexillology. All three are still in the top one hundred, and I still occasionally get comments on them to this day."
    },
    {
        fact: "I used to have a vlog channel on Youtube. It was terrible. I'm not sending you the link."
    },
    {
        fact: "I can play the concertina! Poorly!"
    },
    {
        fact: "I have three separate journals on different aspects of my life that I update on a daily basis; it is not uncommon for me to spend two to three hours daily journalling."
    },
    {
        fact: "I don't like the feeling of velvet."
    },
    {
        fact: "I fidget with things constantly while I work, usually jewelry, hair-ties, or writing utensils. It helps me focus."
    },
    {
        fact: "I am very easily startled by sudden noises."
    },
    {
        fact: "Some people love me."
    },
  ];

  function getRandomFact() {
    var randomFact = facts[Math.floor(Math.random() * facts.length)]
    document.getElementById('factBox').innerHTML =  `${randomFact.fact}`
}
window.onload = function() {
    getRandomQuote()
    getRandomFact()
  };

function showFAQ(faqnumber, faqArrow){
    console.log("clicl")
    var faq = document.getElementById(faqnumber);
    var faqChev = document.getElementById(faqArrow);
    if(faq.style.display == "none"){
        faq.style.display = "block"
        faqChev.innerHTML = "keyboard_arrow_up"
    } else{
        faq.style.display = "none"
        faqChev.innerHTML = "keyboard_arrow_down"
    }
    
}


  var photos = [
    "avatar.webp",
    "20251026_025830.jpg",
    "20251102_143835.jpg",
  ]

  i = 0
  function changePhoto(direction) {
    if(direction == "right"){
        i++
        if(i>photos.length - 1){
            i = 0
        }
        console.log(i)
        document.getElementById('irlPhotos').src=photos[i];
    } else if(direction == "left"){
        i--
        if(i < 0){
            i = photos.length - 1
        }
        console.log(i)
        document.getElementById('irlPhotos').src=photos[i];
    }

  }

function playNote(audioName) {
    document.getElementById(audioName).currentTime = 0;
    document.getElementById(audioName).volume = 0.3;
    document.getElementById(audioName).play()
}