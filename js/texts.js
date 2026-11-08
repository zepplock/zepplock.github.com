// Texts shown on the right page. One is picked at random on each load.
const texts = [
  "I still love you in secret. I don't talk about you anymore, but you're there—between thoughts, between heartbeats, in the quiet spaces I can't control. People think I've moved on, that I've let you go, but they don't see the moments when your memory still finds me. I still think about the way you smiled, the warmth of your voice, the peace I felt when you were near. It's strange how love doesn't die; it just hides, waiting for silence to bring it back. I've accepted that we'll never be what we were, but a part of me still belongs to you, quietly, endlessly.",

  "Too much of a connection for us to be friends, too many problems for us to be a couple, and too many memories together to let you go.",

  "I never expected to find someone who would mean so much to me, but you did, naturally and without effort. You became the person I think of first, the one I trust, the one I feel calm with. Even on days when we don't talk much, I feel your absence, because you matter deeply to me.",

  "You listen to me, understand me, and care in a way that makes me feel safe being myself. That kind of care is rare, and I don't take it lightly. I've realized that love isn't just big words or promises-it's presence, patience, and choosing someone again and again. You give me that.",

  "Whether life is confusing, difficult, or full of happiness, you are someone I want beside me. Thank you for being part of my life, for your kindness, and for your heart. You are special to me, and you always will be.",

  "They were never officially together, but they felt everything couples feel late-night talks, inside jokes, the kind of comfort you don't fake. Then one day, they slowly stopped talking. Not because they wanted to, but because life got loud and ego got louder. Now they watch each other's stories, react with nothing, and pretend they're strangers... even though they still remember each other's favorite songs, bad days, and the versions of themselves they haven't shown anyone since.",

  "When we first met, I already had a crush on you before you even knew me. Your first reply made my day. When you went offline, I'd scroll your profile, smiling like it meant something. Back then, just seeing you felt enough. Now I have more pictures of you saved on my phone. And I'm scared to look at them. Because one picture is enough to ruin a good day and remind me you were never mine.",

  "Happy Birthday. Another year has passed, yet the light in your eyes still outshines the candles on your cake.",

  "And the hardest lesson To learn, Is how To be alone All over Again.",

  "I don't want a relationship, they hold you back... I want a best friend I can sleep with, make love to, hustle with, travel with, shop with, chill, and live with. I want a partner in crime, a life partner... Someone that I can laugh and build with. Somebody that I can trust with my heart, my money, and my life... Somebody I'm not afraid to lose because I know they'll always be there. Relationships just aren't for me but a partnership, yeah, I'll take that.",

  "This letter is something I never thought I'd have to write, but it feels necessary now. Loving you without ever being with you was both beautiful and painful. There was comfort in our connection, in the way talking to you felt natural, and in the way you slowly became someone I cared about deeply. I don't regret what I felt. It showed me that love doesn't always need a relationship to exist. Still, I've learned that some feelings are meant to be released, not held onto forever. Staying would mean ignoring my own needs, and leaving is the only way I can move forward with honesty. This goodbye isn't meant to erase anything we shared. It's simply a quiet step toward healing. I truly hope life gives you everything you deserve — joy, peace, and people who choose you fully. I'll remember you kindly, even as I let go. Goodbye.",

  "I wanted to apologize for expressing my feelings if it made you uncomfortable or put you in an awkward position. That was never my intention. I felt it was important to be honest, but I understand that it may not have come across the right way. I respect your feelings and your boundaries, and I won't push this any further. Thank you for taking the time to read this. I truly wish you the best and hope there are no hard feelings.",

  "I didn't notice it at first. Spending time with you felt natural, just part of life, and yet, slowly, I began to notice the little things. Your laugh, the way you think, the small gestures you make—they all started to matter to me more than I expected. At first, I thought it was just admiration or friendship. But over time, I realized that I looked forward to our conversations, remembered our shared jokes, and cherished moments I once thought were ordinary. Every smile, every kind word, every glance drew me closer, quietly, steadily, like a flower blooming. I can't pinpoint the exact moment I fell for you, but now I know I can't imagine my days without you. Falling for you slowly has made me appreciate every detail, every nuance, every part of who you are.",

  "You don't know me at all if you think I'd walk away from a door just because it's closed. Not when everything I want is on the other side. Not until I've tried everything. And everything includes waiting patiently for you to open it.",

  "The hardest Lesson in life, Is learning to exist Without the person Who made It feel whole.",

  "You replied when you had time. I replied when I saw your notification. We are not the same. I made space for you, even on my busy days. I chose to respond, not later, not when it was convenient, but when it mattered. You fit me into your schedule. I adjusted mine for you. And I don't say this to blame, only to understand. Some people care deeply, while others care when it's easy. That's where we were different, and that difference slowly taught me to let go.",

  "If we're dating, I don't want to be your first priority. I shouldn't be. I want your first priority to be you, your ambitions, your life, and your future. Stay focused. I want the best for you. Don't let me be your distraction, let me be your motivation, your support, and your help to grow. I'm not gonna let you give up on yourself. I got you if you got me..",

  "I cared for you without having a place in your life. That was the arrangement. You shared pieces of your world. I never entered it. I stayed informed, not involved. The realization didn't hurt. It clarified. At my age, you don't confuse clarity with cruelty. I wasn't misled. I was simply not included. I didn't ask for more. I learned where I stood. Unrequited love, this late, isn't about hope. It's about learning how to care quietly without expecting to belong.",

  "Life is too short for us to be sitting here not saying what we wanna say and not doing what we wanna do",

  "I don't need an 'I can't live without you' love. I want an 'in my wholeness, I choose you' love.",

  "I respect honesty more than perfection. Just be real with me.",

  "I'm not here to rush anything. I'd rather it feel right than fast.",

  "I loved you while you lived your life somewhere else. That was the arrangement, even if it was never spoken. You shared stories with me. I carried them carefully. I thought affection might change shape with time. I was wrong. The realization arrived clean and undeniable: Your life already belonged to someone else's future. I didn't compete. At my age, you don't compete for love. You recognize where you were never meant to stand. I stayed kind. I stayed present. I stayed quiet. Unrequited love doesn't ask for resolution. It asks for acceptance — and then it stays, unnoticed, like a feeling that learned it would never be returned.",

  "I will proudly claim you are the best thing that has ever happened to me, no matter how it ended",

  "I don't want to sit around waiting like I'm an uncertainty waiting to be chosen. Give me all your attention or give me none at all. If you can't be here fully, then don't be here at all",

  "How could I Forget you? You gave me So much to Remember.",

  "Sometimes I wish I never met you, so I wouldn't know the feeling of knowing you but not being able to have you around",

  "This was me crying for help not with words, but with staying with waiting, with hoping you'd notice every time I said I was fine what I meant was... ...please don't leave me like this.",

  "I watched a man say, 'I'd rather be honest than silently disappointed.'",

  "Heartbroken for a story that never really began.",

  "Everybody says 'communication is key,' but no one talks about how scary real communication is. It's not cute texts and long calls, it's saying 'here's where you hurt me, here's what I need, here's what I'm afraid to say.' It's swallowing pride, risking rejection, and choosing honesty over comfort. That's why most people avoid it, because it's easier to stay silent than to be vulnerable, easier to pretend you're okay than to admit you're hurting, and easier to walk away than to have the hard conversation.",

  "Some people talk to you in their free time, some people free their time to talk to you. Make sure you know the difference. One is convenient. The other is intentional. One speaks to you when they're bored, when there's nothing better to do, when you happen to be available. The other creates space for you. They adjust their schedule, show up even on busy days, and choose you on purpose. Talking to you is not just something that fits into their day, it matters to them. The difference isn't in words, it's in effort. One talks when it's easy. The other shows up even when it's not. So pay attention to who actually makes time for you, not just who answers when it's convenient.",

  "I was just thinking of you today. Just sending you my love and hope you're doing well.",

  "No need for an update. I just wanted to say I love you.",

  "You're beautiful in so many ways. Never forget it.",

  "Take the time you need. You're loved and cherished.",

  "Remember to show yourself the same kindness you show everyone else. I'm always here to talk if you need me.",

  "You have so much love to give and we're so grateful to have you in our lives.",

  "The simple things you do matter so much. I just wanted you to know that.",

  "You've always been there for me. Just letting you know I'm here to do the same for you.",

  "Are we friends? Yes. Are we dating? No. Are we talking? No. Do we flirt? Yes. Do I like you? Yep! Do you like me? I don't know. Is there a chance? Who knows.",

  "Not to be rescued, but to be witnessed, supported, and chosen in our fullest form.",

  "Not to have someone complete us, but to have a safe place to come home to while we continue completing ourselves.",

  "Not to fix our wounds, but to be loved through the healing process without being shamed for our scars.",

  "Not to always be happy, but to feel safe even when we're not.",

  "Not to avoid conflict, but to learn how to navigate it with care, curiosity, and clarity.",

  "Not to feel constant butterflies, but to build steady, sustainable connection through deep trust.",

  "Not to become the version of ourselves someone else prefers, but to be deeply accepted as we are.",

  "I know trust isn't something you owe me. I have to earn it back.",

  "Ask me anything. I'd rather be transparent than comfortable.",

  "Tell me what would help you feel safer, even if it's inconvenient for me.",

  "I want consistency to be my apology, not just words.",

  "The price of loving someone very much is never loving again.",

];

(function () {
  const el = document.querySelector(".text");
  if (!el) return;
  el.textContent = texts[Math.floor(Math.random() * texts.length)];
})();
