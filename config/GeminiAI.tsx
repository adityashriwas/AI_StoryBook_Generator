const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create an story on description for mature age group people, Horror, all images in anime style: story of a boy and magical school, give me minimum 20 to 25 chapter, with detailed images text prompt for each of chapter and image prompt for story cover book with story name, all in JSON format  "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"title\": \"Crimson Academy: Whispers of the Abyss\",\n  \"coverImagePrompt\": \"Anime style book cover. Dark, gothic architecture of a school looming against a blood-red moon.  A pale boy with haunted eyes, wearing a tattered school uniform, stands in the foreground, clutching a cracked grimoire.  Style: Junji Ito meets Studio Ghibli.  Emphasis on detail and unsettling beauty.\",\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"title\": \"The Acceptance Letter\",\n      \"textPrompt\": \"A seemingly ordinary boy, Kai, receives a mysterious acceptance letter to Crimson Academy, a school shrouded in secrecy and rumored to be haunted. The letter is written in elegant, archaic script on aged parchment, bearing a crimson wax seal depicting a serpent devouring its own tail.\",\n      \"imagePrompt\": \"Anime style illustration. A close-up of the acceptance letter, emphasizing the archaic script and unsettling serpent seal. The background subtly shows Kai's worried expression reflected in the letter's surface.\"\n    },\n    {\n      \"chapterNumber\": 2,\n      \"title\": \"Arrival at Crimson Academy\",\n      \"textPrompt\": \"Kai arrives at Crimson Academy, a gothic monstrosity of a school nestled deep within a fog-wreathed forest. He encounters other students, each harboring their own dark secrets and strange abilities. The atmosphere is heavy with an unseen dread.\",\n      \"imagePrompt\": \"Anime style illustration. A wide shot of Crimson Academy at night, shrouded in fog.  Kai, looking small and vulnerable, walks towards the imposing building.  Silhouettes of other students can be seen in the windows.\"\n    },\n    {\n      \"chapterNumber\": 3,\n      \"title\": \"The Shadow Curriculum\",\n      \"textPrompt\": \"Kai discovers that Crimson Academy's curriculum extends far beyond traditional subjects.  He learns about forbidden magic, ancient rituals, and the school's terrifying history involving a dark entity sealed within its walls.\",\n      \"imagePrompt\": \"Anime style illustration. Kai observing a clandestine lesson, where students are practicing dark magic under the watchful eye of a sinister teacher with glowing eyes.\"\n    },\n    {\n      \"chapterNumber\": 4, \"title\": \"Whispers in the Halls\", \"textPrompt\": \"Kai begins experiencing unsettling occurrences - whispering voices, fleeting shadows, and objects moving on their own. He realizes the Academy is far more alive than he could have imagined.\", \"imagePrompt\": \"Anime style illustration. Kai alone in a dark corridor, a spectral hand reaching out from a shadowed alcove.  The hallway stretches into infinity, filled with unsettling shadows.\" },\n    {\n      \"chapterNumber\": 5, \"title\": \"The Haunted Library\", \"textPrompt\": \"Exploring the Academy's vast library, Kai stumbles upon forbidden texts detailing the dark history of the school and the entity trapped within. He learns of the devastating consequences of awakening the entity.\", \"imagePrompt\": \"Anime style illustration. Kai surrounded by towering shelves in a dimly lit library.  A particularly ominous book glows faintly, with shadowy tendrils emanating from it.\" },\n    {\n      \"chapterNumber\": 6, \"title\": \"A Friend in Need\", \"textPrompt\": \"Kai forms an uneasy alliance with another student, Elara, who possesses powerful but unpredictable magic.  They share their fears and suspicions, forging a bond against the Academy's sinister secrets.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara huddled together in a hidden alcove, whispering to each other.  Elara's eyes glow with an inner power, yet a hint of fear is visible on her face.\" },\n    {\n      \"chapterNumber\": 7, \"title\": \"The Ritual\", \"textPrompt\": \"A secretive ritual is performed within the Academy's depths, and Kai witnesses disturbing glimpses of the trapped entity.  He senses the growing instability of the seal.\", \"imagePrompt\": \"Anime style illustration. A chaotic scene of a ritual, with shadowy figures chanting around a glowing pentagram.  A glimpse of the entity’s terrifying form is visible in the background, eyes blazing with malevolent energy.\" },\n    {\n      \"chapterNumber\": 8, \"title\": \"Betrayal\", \"textPrompt\": \"One of Kai's classmates is revealed to be working against him and Elara, secretly attempting to unleash the entity for their own twisted purposes.\", \"imagePrompt\": \"Anime style illustration. A tense confrontation between Kai, Elara, and the traitor.  The traitor's eyes are filled with sinister intent, and a malevolent aura emanates from them.\" },\n    {\n      \"chapterNumber\": 9, \"title\": \"The Escape Attempt\", \"textPrompt\": \"Kai and Elara attempt to escape Crimson Academy, but the Academy itself seems to resist their efforts, with magical barriers and unsettling illusions hindering their path.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara running through distorted hallways, pursued by shadowy figures that morph and twist.  The architecture of the school bends and warps around them.\" },\n    {\n      \"chapterNumber\": 10, \"title\": \"The Guardian\", \"textPrompt\": \"They encounter a mysterious guardian of the Academy, a powerful entity who offers them a choice: help them seal the entity, or face certain death within the school's walls.\", \"imagePrompt\": \"Anime style illustration.  A powerful and ancient being, perhaps a former student or teacher, confronts Kai and Elara. Their expressions convey both power and sorrow.\" },\n    {\n      \"chapterNumber\": 11, \"title\": \"The Pact\", \"textPrompt\": \"Kai and Elara make a pact with the guardian, agreeing to help seal the entity, but the price for their cooperation involves a sacrifice.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara reaching out to touch the guardian's hand, symbolic of the pact they are forming. The atmosphere is both ethereal and dangerous.\" },\n    {\n      \"chapterNumber\": 12, \"title\": \"The Abyss Opens\", \"textPrompt\": \"The seal begins to weaken, and the entity's influence grows stronger.  Kai and Elara must gather ancient artifacts to help restrengthen the seal.\", \"imagePrompt\": \"Anime style illustration. Cracks appear in the walls of the Academy, shadowy tendrils emanating from the fissures, and the entity's terrifying form is faintly visible.\" },\n    {\n      \"chapterNumber\": 13, \"title\": \"Dangerous Knowledge\", \"textPrompt\": \"Kai and Elara delve into ancient texts and forgotten rituals, unravelling the secrets of the entity and its connection to the school's founders.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara studying ancient texts in a hidden chamber. The symbols within the texts pulse with an eerie light.\" },\n    {\n      \"chapterNumber\": 14, \"title\": \"The Price of Power\", \"textPrompt\": \"Kai and Elara begin to experience the toll of their newfound magical abilities, facing physical and psychological changes.\", \"imagePrompt\": \"Anime style illustration.  Kai and Elara, showing signs of physical and emotional strain – Kai might be paler, Elara with more noticeable glowing eyes and perhaps some physical change (e.g., growing horns).\" },\n    {\n      \"chapterNumber\": 15, \"title\": \"The Traitor's Return\", \"textPrompt\": \"The traitor reappears, stronger and more desperate than before, attempting to use the entity's power for themselves.\", \"imagePrompt\": \"Anime style illustration. A confrontation between Kai, Elara, and the traitor, now empowered by the entity. The traitor looks drastically different, possibly disfigured or mutated.\" },\n    {\n      \"chapterNumber\": 16, \"title\": \"Sacrifice\", \"textPrompt\": \"A devastating sacrifice must be made to fully seal the entity, forcing Kai and Elara to make an impossible choice.\", \"imagePrompt\": \"Anime style illustration. A dramatic scene showing a character making a selfless act of sacrifice, possibly involving a farewell or a poignant moment.\" },\n    {\n      \"chapterNumber\": 17, \"title\": \"The Seal is Strengthened\", \"textPrompt\": \"After a great struggle, the entity is finally sealed once more, but at a great cost to both Kai and Elara.\", \"imagePrompt\": \"Anime style illustration. The entity is trapped once more, but the scene is tinged with sadness and loss, reflecting the sacrifices made.\" },\n    {\n      \"chapterNumber\": 18, \"title\": \"The Aftermath\", \"textPrompt\": \"The Academy is changed forever by the events, and Kai and Elara must come to terms with what they have lost and gained.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara stand amidst the ruins or a changed Crimson Academy. Their expressions are contemplative and uncertain.\" },\n    {\n      \"chapterNumber\": 19, \"title\": \"New Beginnings\", \"textPrompt\": \"Despite their losses, Kai and Elara find a semblance of peace and hope, forging a new path forward, forever changed by their experiences at Crimson Academy.\", \"imagePrompt\": \"Anime style illustration. Kai and Elara walking away from Crimson Academy, towards a hopeful sunrise or a less foreboding landscape.  They are changed but not broken.\" },\n    {\n      \"chapterNumber\": 20, \"title\": \"The Whispers Remain\", \"textPrompt\": \"Although the immediate threat is gone, Kai and Elara know that the whispers of the abyss may linger, reminding them of the darkness they faced and the sacrifices they made.\", \"imagePrompt\": \"Anime style illustration.  A close-up of Kai or Elara, showing a hint of lingering fear or a haunted look in their eyes. A shadowy whisper is subtly suggested around them.\" },\n    {\n      \"chapterNumber\": 21, \"title\": \"Echoes of the Past\", \"textPrompt\": \"Years later, a new student arrives at Crimson Academy, unknowingly setting in motion a series of events that might awaken the entity once more.\", \"imagePrompt\": \"Anime style illustration. A new student, resembling Kai, arrives at a changed but still ominous Crimson Academy. The air is heavy with a sense of foreboding.\" },\n    {\n      \"chapterNumber\": 22, \"title\": \"The Cycle Continues\", \"textPrompt\": \"The cycle of darkness and hope continues, suggesting that the battle against the abyss is never truly over.\", \"imagePrompt\": \"Anime style illustration. A symbolic image, possibly of a serpent consuming its tail once more, or a recurring motif from the story, representing the cyclical nature of the conflict.\" },\n    {\n      \"chapterNumber\": 23, \"title\": \"A Glimmer of Hope\", \"textPrompt\": \"Despite the endless cycle, there's always a glimmer of hope that future generations will find the strength to resist the abyss and protect the innocent.\", \"imagePrompt\": \"Anime style illustration. A single flower blooming in the ruins of Crimson Academy, symbolizing hope and resilience amidst the darkness.\"}\n  ]\n}\n```\n"},
          ],
        },
      ],
    });