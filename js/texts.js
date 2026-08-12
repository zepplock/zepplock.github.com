// Texts shown on the right page. One is picked at random on each load.
const texts = [
  "I still love you in secret. I don't talk about you anymore, but you're there—between thoughts, between heartbeats, in the quiet spaces I can't control. People think I've moved on, that I've let you go, but they don't see the moments when your memory still finds me. I still think about the way you smiled, the warmth of your voice, the peace I felt when you were near. It's strange how love doesn't die; it just hides, waiting for silence to bring it back. I've accepted that we'll never be what we were, but a part of me still belongs to you, quietly, endlessly.",
  "Too much of a connection for us to be friends, too many problems for us to be a couple, and too many memories together to let you go.",
  "I never expected to find someone who would mean so much to me, but you did, naturally and without effort. You became the person I think of first, the one I trust, the one I feel calm with. Even on days when we don't talk much, I feel your absence, because you matter deeply to me.",
  "You listen to me, understand me, and care in a way that makes me feel safe being myself. That kind of care is rare, and I don't take it lightly. I've realized that love isn't just big words or promises-it's presence, patience, and choosing someone again and again. You give me that.",
  "Whether life is confusing, difficult, or full of happiness, you are someone I want beside me. Thank you for being part of my life, for your kindness, and for your heart. You are special to me, and you always will be.",
  "They were never officially together, but they felt everything couples feel late-night talks, inside jokes, the kind of comfort you don't fake.\nThen one day, they slowly stopped talking.\nNot because they wanted to, but because life got loud and ego got louder.\nNow they watch each other's stories, react with nothing, and pretend they're strangers...\neven though they still remember each other's favorite songs, bad days,\nand the versions of themselves they haven't shown anyone since.",
  "When we first met,\nI already had a crush on you before you even knew me.\nYour first reply made my day.\nWhen you went offline, I'd scroll your profile, smiling like it meant something.\nBack then, just seeing you felt enough.\nNow I have more pictures of you saved on my phone.\nAnd I'm scared to look at them.\nBecause one picture is enough\nto ruin a good day and remind me\nyou were never mine.",
  "Happy Birthday\n\nAnother year has passed, yet the light in your eyes still outshines the candles on your cake.",
  "And the\nHardest lesson\nTo learn,\nIs how\nTo be alone\nAll over\nAgain.",
];

(function () {
  const el = document.querySelector(".text");
  if (!el) return;
  el.textContent = texts[Math.floor(Math.random() * texts.length)];
})();
