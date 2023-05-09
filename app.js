const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const quotes = {
    '001': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "A lady likes to be complimented on her looks, her eyes, her figure. But the personality comments are much appreciated."
    },

    '002': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "About being called a “legend:” “I just laugh. Have I got them fooled.”"
    },

    '003': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Accentuate the positive, not the negative. It sounds so trite, but a lot of people will pick out something to complain about, rather than say, 'Hey, that was great!' It's not hard to find great stuff if you look."
    },

    '004': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "All creatures must learn to coexist. That's why the brown bear and the field mouse can share their lives in harmony. Of course, they can't mate or the mice would explode."
    },

    '005': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "Anger tears me up inside … My own … or anyone else's."
    },

    '006': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "Animal lover that I am, a cougar I am not."
    },

    '007': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "Animals are near and dear to my heart, and I've devoted my life to trying to improve their lives."
    },

    '008': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "Animals don't lie. Animals don't criticize. If animals have moody days, they handle them better than humans do."
    },

    '009': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "Best thing about being in your 90s is you're spoiled rotten. Everybody spoils you like mad, and they treat you with such respect because you're old. Little do they know, you haven't changed. You haven't changed in [the brain]. You're just 90 everyplace else."
    },

    '010': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "But sweetie, I don't think of all this as work. It's fun. I'm so grateful for my good fortune."
    },

    '011': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Butterflies are like women - we may look pretty and delicate, but baby, we can fly through a hurricane."
    },

    '012': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "Does desire melt away with age? I'm waiting for that day to come."
    },

    '013': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Doing drama is, in a sense, easier. In doing comedy, if you don't get that laugh, there's something wrong."
    },

    '014': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Don't take yourself too seriously, pretty soon you can find the humor in our everyday lives."
    },

    '015': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "Don't try to be young. Just open your mind. Stay interested in stuff. There are so many things I won't live long enough to find out about, but I'm still curious about them."
    },

    '016': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "Everybody needs a passion. That's what keeps life interesting. If you live without passion, you can go through life without leaving any footprints."
    },

    '017': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "For me, humor is about rhythm. It's like an ear for music. It's hard to explain."
    },

    '018': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Friendship takes time and energy if it's going to work. You can luck into something great, but it doesn't last if you don't give it proper appreciation. Friendship can be so comfortable, but nurture it-don't take it for granted."
    },

    '019': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Get at least eight hours of beauty sleep, nine if you're ugly."
    },

    '020': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Gravity has taken over. So there's not much I can do about it … My problem with [plastic surgery] is you'll go to a women's press conference or something like that, and old friends will come up and I kind of don't recognize them. I recognize the voice, but I don't — all of a sudden, there's this whole new face that I don't know who that is."
    },

    '021': {
        "author": "Betty White",
        "tag": "Other",
        "quote": "Guys all come on strong, that's fine. But don't forget to be a little bit romantic now and again. There's a sweetness that appeals to girls and gets 'em every time."
    },

    '022': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "However, if one is lucky enough to be blessed with good health, growing older shouldn't be something to complain about. It's not a surprise, we knew it was coming—make the most of it. So you may not be as fast on your feet, and the image in your mirror may be a little disappointing, but if you are still functioning and not in pain, gratitude should be the name of the game."
    },

    '023': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Humor is like music. It's a rhythm, and you just kind of get the rhythm of it, and you have to know not to let the beat go too long, but to leave a beat in there for it to gel, you know."
    },

    '024': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I always wanted to be a zookeeper when I was growing up, and I've wound up a zookeeper! I've been working with the Los Angeles Zoo for 45 years! I'm the luckiest old broad on two feet because my life is divided absolutely in half — half animals and half show business. You can't ask for better than two things you love the most."
    },

    '025': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I am interested in a lot of things — not just show business and my passion for animals. I try to keep current in what's going on in the world. I do mental exercises. I don't have any trouble memorizing lines because of the crossword puzzles I do every day to keep my mind a little limber. I don't sit and vegetate."
    },

    '026': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I am still to this day starstruck. I look out at this audience and I see so many famous faces, but what really boggles my mind is that I actually know many of you. And I've worked with quite a few… maybe had a couple. And you know who you are."
    },

    '027': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I didn't know what Facebook was and now that I do know what it is, it sounds like a huge waste of time...at my age if I want to connect with old friends, I need a Ouija board...In my day, seeing pictures of people's vacations was considered a punishment."
    },

    '028': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I do a lot of crossword puzzles. I'm an addict. It keeps your mind limber."
    },

    '029': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "I don't care who anybody sleeps with. If a couple has been together all that time -- and there are gay relationships that are more solid than some heterosexual ones -- I think it's fine if they want to get married. I don't know how people can get so anti-something. Mind your own business, take care of your affairs, and don't worry about other people so much."
    },

    '030': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I don't get political."
    },

    '031': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I don't get tired. I have a good energy level, but I'm blessed with good health and love what I do for a living. That's a good combination. I'm a very lucky old broad."
    },

    '032': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I don't have a sweet tooth, but I do have a cocktail before dinner."
    },

    '033': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I don't have time to miss much. Because I'm still working. I just love to work, so I'll keep working until they stop asking."
    },

    '034': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I don't seem to require a lot of sleep … If I get four, five good hours, I'm fine. But sleeping is sort of dull. There's a lot of other good stuff that you can do without just lying down and closing your eyes."
    },

    '035': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I feel good that I've turned down roles for the right reasons."
    },

    '036': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "I get bored with people who complain about this or that. It's such a waste of time."
    },

    '037': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I go out to the kitchen to feed the dog, but that's about as much cooking as I do."
    },

    '038': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I got an award for everything: inhaling, exhaling. I've been so spoiled rotten. I'm the luckiest old broad on two feet. Truly! I've always been working at something."
    },

    '039': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I have a two-story house and a bad memory, so all those trips up and down the stairs take care of my exercise."
    },

    '040': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I have never lied about my age, but these days I seem to work it into the conversation at the drop of a hat."
    },

    '041': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I have no idea what color [my hair] really is, and I never intend to find out."
    },

    '042': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I have no regrets at all. None. I consider myself to be the luckiest old broad on two feet."
    },

    '043': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "I just care what kind of a decent human being you are."
    },

    '044': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I just laugh. Have I got them fooled."
    },

    '045': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "I just make it my business to get along with people so I can have fun. It's that simple."
    },

    '046': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I know it sounds corny, but I try to see the funny side and the upside, not the downside. I get bored with people who complain about this or that. It's such a waste of time."
    },

    '047': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "I know unless I'm true to myself I couldn't be happy. Too much emphasis is placed today on externals and too little on character."
    },

    '048': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I like double entendre because then the people who get it enjoy it, and the people who don't get it don't know about it."
    },

    '049': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I like those touches of chivalry that are fast disappearing. If I sound old-fashioned, it's because I'm as old as I am! But it's just polite."
    },

    '050': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I love bawdy humor, but not dirty humor."
    },

    '051': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I love children, the only problem with children: they grow up to be people, and I just like animals better than people. It's that simple."
    },

    '052': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I married my first husband because we wanted to sleep together. It lasted six months and we were in bed for six months."
    },

    '053': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I may be a senior, but so what? I'm still hot."
    },

    '054': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I not only knew Houdini, but we had a very lovely relationship … I really thought we had something going, and then the son of a gun disappeared."
    },

    '055': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "I stayed in show business to pay for my animal business."
    },

    '056': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I think everybody needs a passion. Whether it's one passion or a hundred, that's what keeps life interesting. If you live without passion, you can go through life without leaving any footprints."
    },

    '057': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I think I've been spoiled enough, don't you think? Might as well quit while I'm ahead! But I'm not going to quit, that's for sure."
    },

    '058': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I think it's your mental attitude. So many of us start dreading age in high school and that's a waste of a lovely life. 'Oh ... I'm 30, oh, I'm 40, oh, 50.' Make the most of it."
    },

    '059': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I think older women still have a full life."
    },

    '060': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I'm a big cockeyed optimist. I try to accentuate the positive as opposed to the negative."
    },

    '061': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I'm a health nut. My favorite food is hot dogs with French fries. And my exercise: I have a two-story house and a very bad memory, so I'm up and down those stairs."
    },

    '062': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I'm a teenager trapped in an old body."
    },

    '063': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "I'm not looking forward to death; it's important to live while we are here. But those who have died, [as] my mother said, now they know the secret. And someday we all will."
    },

    '064': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I'm not what you might call sexy, but I'm romantic. Let's put it that way."
    },

    '065': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "I've always enjoyed the opposite sex a lot. Always have. Always will."
    },

    '066': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "I've always liked older men. They're just more attractive to me. Of course, at my age, there aren't that many left!"
    },

    '067': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "If a guy's a cutie, you've got to tap that booty."
    },

    '068': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "If a joke or humor is bawdy, it's got to be funny enough to warrant it. You can't just have it bawdy or dirty just for the sake of being that — it's got to be funny."
    },

    '069': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "If one has no sense of humor, one is in trouble."
    },

    '070': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "In my head, I'm the ultimate cougar. Animal lover that I am."
    },

    '071': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "It is important that you not believe your own publicity. Be grateful for whatever praise you receive, but take it with a grain of salt."
    },

    '072': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver."
    },

    '073': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "It's [old age] not a surprise, we knew it was coming - make the most of it. So you may not be as fast on your feet, and the image in your mirror may be a little disappointing, but if you are still functioning and not in pain, gratitude should be the name of the game."
    },

    '074': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "It's fun once in a while to do a serious part but I really enjoy doing comedy because I love to laugh."
    },

    '075': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "It's fun to show appreciation to the ones you love."
    },

    '076': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "It's good to mix things up as an actor. Or else you can grow too accustomed to a character."
    },

    '077': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Just looking at the positive side and not dwelling on the downside. Takes up too much energy being negative."
    },

    '078': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Keep busy and don't focus everything on you — that wears off pretty fast. It's not hard to find things you're interested in, but enjoy them and indulge them."
    },

    '079': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Keep the other person's well being in mind when you feel an attack of soul-purging truth coming on."
    },

    '080': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Kindness and consideration of somebody besides yourself keeps you feeling young."
    },

    '081': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Laughter keeps everyone feeling wonderful."
    },

    '082': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Mind your own business, take care of your affairs, and don't worry about other people so much."
    },

    '083': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "My answer to anything under the sun, like, 'What have you not done in the business that you've always wanted to do?' is, 'Robert Redford.'"
    },

    '084': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "My mother always used to say: The older you get, the better you get, unless you're a banana."
    },

    '085': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "My mother and dad were big animal lovers, too. I just don't know how I would have lived without animals around me. I'm fascinated by them — both domestic pets and the wild community. They just are the most interesting things in the world to me, and it's made such a difference in my lifetime."
    },

    '086': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "My philosophy for staying young is [to] act bubbly every day, drink bubbly every birthday!"
    },

    '087': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "No matter what major concerns may be going on in your life on the outside, you have to leave them at the door when you come to work, because you will be forced to concentrate on something other than yourself to get the job done. And somehow there is often an inordinate amount of laughter in the process for anyone who thrives on that sort of thing, which serves to replenish the strength you need to pick up your problems again as you leave. That is it has frivolous as it sounds. It works."
    },

    '088': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Oh, I don't need sleep. I just went to my hotel and had a cold hot dog and vodka on the rocks."
    },

    '089': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "People greet me on the street as a friend, not a celebrity. 'Hi, Betty!'"
    },

    '090': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "People have told me 'Betty, Facebook is a great way to keep in touch with old friends.' At my age, if I wanted to keep in touch with old friends. I'd need an Ouija board."
    },

    '091': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "People say, 'But Betty, Facebook is a great way to connect with old friends.' Well, at my age, if I want to connect with old friends I need a Ouija board."
    },

    '092': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "Ret Turner, one of TV's Emmy-winning costume designers, made a hefty bet with a friend that he could go a whole year without chocolate. As of now, he is in the seventh month of the bet ... alternately stalwart, then drooling ... however, he admits he never could have done it on his own. Ret realizes, better than anyone, that he is really competing with himself. But to call it old-fashioned willpower would take all the fun out of it ... he would slip off the chocolate wagon in no time."
    },

    '093': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "Retirement is not in my vocabulary. They aren't going to get rid of me that way."
    },

    '094': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Sex without pain is like food without taste."
    },

    '095': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Since I am turning 99, I can stay up as late as I want without asking permission."
    },

    '096': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "So, you may not be as fast on your feet, and the image in your mirror may be a little disappointing, but if you are still functioning and not in pain, gratitude should be the name of the game."
    },

    '097': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "Somewhere along the line, I had learned that elephants like having their tongues slapped, and it really worked with Gita."
    },

    '098': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Still here, bitches."
    },

    '099': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "That's when you have to remember that image in the mirror and not let success get to you. It is important that you not believe your own publicity. Be grateful for whatever praise you receive, but take it with a grain of salt."
    },

    '100': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "The audience today has heard every joke. They know every plot … It's much more competitive now, because the audience is so much more ... I want to say 'sophisticated."
    },

    '101': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "The bottom line is, I'm blessed with good health. On top of that, I don't go around thinking, 'Oh, I'm 90, I better do this or I better do that.' I'm just Betty. I'm the same Betty that I've always been. Take it or leave it."
    },

    '102': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "The Greeks had a word for it ... Pythagoras said a long long time ago, “If you have a wounded heart, touch it as little as you would a wounded eye ... There are only two remedies for the suffering of the soul: hope and patience."
    },

    '103': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "There is even a funny side to aging, if one has a warped sense of humor."
    },

    '104': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "There's no formula [for handling grief or loss]. Keep busy with your work and your life. You can't become a professional mourner. It doesn't help you or others. Keep the person in your heart all the time. Replay the good times. Be grateful for the years you had."
    },

    '105': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Trolls suck."
    },

    '106': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Well I love Snickers and I thought, sure that'd be fun, why not? So I got over there early one morning and didn't know I was going to be in the … ice cold muddy water, but all I had to do was just lie down in it. This poor stunt woman took the dive, she went in. And it was a great stunt that she did, and I got the laugh. Now, really, that's unfair when that happens. She's probably sticking pins in a little Betty White doll."
    },

    '107': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Well, I mean, if a joke or humor is bawdy, it's got to be funny enough to warrant it. You can't just have it bawdy or dirty just for the sake of being that - it's got to be funny."
    },

    '108': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "When I pontificate, it sounds so, you know, 'Oh, well, she's preaching.' I'm not preaching, but I think maybe I learned it from my animal friends. Kindness and consideration of somebody besides yourself — I think that keeps you feeling young. I really do."
    },

    '109': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "When I'm around animals, I don't pay attention to people."
    },

    '110': {
        "author": "Betty White",
        "tag": "Humor",
        "quote": "Why do people say 'grow some balls'? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding."
    },

    '111': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "Why retire from something if you're loving it so much and enjoying it so much, and you're blessed with another group of people to work with like the gang on 'Hot in Cleveland'? Why would I think of retiring? What would I do with myself?"
    },

    '112': {
        "author": "Betty White",
        "tag": "Animals",
        "quote": "You can always tell about somebody by the way they put their hands on an animal."
    },

    '113': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "You can lie to anyone in the world and even get away with it, perhaps, but when you are alone and look into your own eyes in the mirror, you can't sidestep the truth. Always be sure you can meet those eyes directly."
    },

    '114': {
        "author": "Betty White",
        "tag": "Life",
        "quote": "You don't fall off the planet once you pass a given age. You don't lose any of your sense of humor. You don't lose any of your zest for life, or your lust for life."
    },

    '115': {
        "author": "Betty White",
        "tag": "Wisest Words",
        "quote": "You don't luck into integrity. You work at it."
    },

    '116': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "You know people who are already saying, 'I'm going to be 30 - oh, what am I going to do?' Well, use that decade! Use them all!"
    },

    '117': {
        "author": "Betty White",
        "tag": "Aging",
        "quote": "You're never too old for anything."
    },

    'out of range': {
        "author": "Betty White Quote API",
        "tag": "Error 404",
        "quote": "Quote not found. IDs range from 1-117. Please try again."
    }
}

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:quoteID', (req,res)=>{
    const quoteFetched = req.params.quoteID.toString().padStart(3,'0')

    if (quotes[quoteFetched] > 0 && quotes[quoteFetched] < 118) {
        res.json(quotes[quoteFetched])
    } else {
        res.json(quotes['out of range'])
    }
})

app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/docs.html')
})

app.listen(process.env.PORT, () => {
    console.log('Betty White Quotes API is running!')
})