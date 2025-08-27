import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Panel from '../components/Panel'
import '../App.css'

interface StoryPanel {
  id: string
  character: string
  background: string
  narration: string
  dialogue: string
  illustration: string
  choices: {
    text: string
    nextPanel: string
  }[]
  isEnd?: boolean
  lesson?: string
}

const Story = () => {
  const navigate = useNavigate()
  const [currentPanel, setCurrentPanel] = useState('start')

  const storyPanels: Record<string, StoryPanel> = {
    start: {
      id: 'start',
      character: '👧',
      background: 'linear-gradient(135deg, #87CEEB 0%, #98FB98 100%)',
      narration: 'Maya was having a normal Tuesday evening, scrolling through her tablet after finishing homework. Suddenly, a shocking post appeared on her timeline: "BREAKING: Famous Celebrity Caught in HUGE SCANDAL! You Won\'t Believe What They Did!" The post had 50K shares in just 2 hours, with angry and shocked emoji reactions everywhere.',
      dialogue: 'Whoa! This is about my favorite celebrity! Everyone is sharing this and the comments are going crazy. This looks really serious... but something feels weird about it. What should I do?',
      illustration: '📱⚡🤔',
      choices: [
        { text: '📤 Share it immediately - everyone else is!', nextPanel: 'share_first_scene1' },
        { text: '🔍 Stop and investigate this first', nextPanel: 'check_first_scene1' },
        { text: '🤔 Ask my older sister Emma what she thinks', nextPanel: 'ask_sister_scene1' }
      ]
    },

    // ========== PATH 1: SHARE FIRST (Extended Multi-Scene) ==========
    share_first_scene1: {
      id: 'share_first_scene1',
      character: '😬',
      background: 'linear-gradient(135deg, #FFE4E1 0%, #FFA07A 100%)',
      narration: 'Maya clicked "Share" without thinking. Within 5 minutes, her phone started buzzing non-stop. Her class group chat exploded with 15 new messages. Friends were commenting: "OMG is this real?!" "Where did you find this?" "My mom says this looks fake..." Maya\'s stomach started to feel weird.',
      dialogue: 'Oh no... my phone won\'t stop buzzing! Everyone is asking me questions and I... I don\'t actually know if this is true. What am I going to do now?',
      illustration: '📱💥😰',
      choices: [
        { text: '💪 Defend the post - "It looks real to me!"', nextPanel: 'defend_post' },
        { text: '🔍 Quick research to figure out the truth', nextPanel: 'investigate_after_posting' },
        { text: '😅 Apologize immediately and admit mistake', nextPanel: 'immediate_apology' }
      ]
    },

    defend_post: {
      id: 'defend_post',
      character: '😤',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FFB6C1 100%)',
      narration: 'Maya typed: "It looks real to me! Why would someone make this up?" But then her friend Jake sent a link to a fact-checking website showing the post was completely fake. Other friends started sending evidence too. Maya felt her face getting red.',
      dialogue: 'Everyone is proving me wrong with actual evidence... but I already defended it so strongly! Do I keep arguing or admit I was wrong? This is so embarrassing!',
      illustration: '🔥📱😳',
      choices: [
        { text: '😠 Keep defending - "Those fact-checkers are wrong!"', nextPanel: 'stubborn_path' },
        { text: '😔 Finally admit the mistake - "You\'re right, I was wrong"', nextPanel: 'late_admission' }
      ]
    },

    stubborn_path: {
      id: 'stubborn_path',
      character: '😡',
      background: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 100%)',
      narration: 'Maya kept arguing even when shown clear proof. Her friends got frustrated. Jake said: "Maya, why won\'t you just admit you made a mistake? We all do it." Sarah added: "This is why fake news spreads - people won\'t listen to facts." Maya realized she was losing her friends\' trust.',
      dialogue: 'I was so focused on being right that I forgot to actually BE right. My pride made everything worse. I need to fix this somehow...',
      illustration: '💔😔🤝',
      choices: [
        { text: '🙏 Make a sincere public apology', nextPanel: 'redemption_apology' },
        { text: '📚 Learn about why people resist facts', nextPanel: 'psychology_learning' }
      ]
    },

    investigate_after_posting: {
      id: 'investigate_after_posting',
      character: '🕵️‍♀️',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #98FB98 100%)',
      narration: 'Maya opened three browser tabs: BBC News, CNN, and the celebrity\'s official social media. After 10 minutes of searching, she found nothing about any scandal. The celebrity had even posted a happy photo 2 hours ago! The "news" site that posted the story was "CelebGossipTruth.biz" - definitely not real news.',
      dialogue: 'Wow, I just shared completely fake news! I found the real truth though. Now I need to decide how to handle this with my friends.',
      illustration: '🔍✅❌',
      choices: [
        { text: '🤫 Quietly delete the post and hope nobody notices', nextPanel: 'quiet_deletion' },
        { text: '📢 Make a public correction and teach others', nextPanel: 'public_correction' },
        { text: '🎓 Turn this into a learning workshop for friends', nextPanel: 'friend_workshop' }
      ]
    },

    // ========== PATH 2: CHECK FIRST (Extended Multi-Scene) ==========
    check_first_scene1: {
      id: 'check_first_scene1',
      character: '🤔',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E68C 100%)',
      narration: 'Maya took a deep breath and remembered her digital citizenship class. "Mrs. Chen always says to STOP before sharing: Stop, Think, Observe, Prove." Maya decided to be a detective. The post looked suspicious - the headline was ALL CAPS and used words like "SHOCKING" and "UNBELIEVABLE."',
      dialogue: 'Something feels off about this post. Let me investigate like a real detective! I have several ways to check if this is true.',
      illustration: '🕵️‍♀️🔍📊',
      choices: [
        { text: '🌐 Check trusted news websites first', nextPanel: 'trusted_sites_deep' },
        { text: '🖼️ Do a reverse image search on the photo', nextPanel: 'reverse_image_search' },
        { text: '📅 Check the date and source of this post', nextPanel: 'date_source_check' },
        { text: '💬 Analyze the comments and reactions', nextPanel: 'comment_analysis' }
      ]
    },

    trusted_sites_deep: {
      id: 'trusted_sites_deep',
      character: '📰',
      background: 'linear-gradient(135deg, #98FB98 0%, #90EE90 100%)',
      narration: 'Maya systematically checked BBC News, CNN, Reuters, Associated Press, and the celebrity\'s official accounts. Not only was there no scandal, but she found the celebrity had just won an award for charity work! She also noticed the fake article had no author name and was full of spelling errors.',
      dialogue: 'This is fascinating detective work! The real news shows the complete opposite - my celebrity is actually doing amazing things. Now I understand how to spot fake news patterns.',
      illustration: '✅📰🏆',
      choices: [
        { text: '🦸‍♀️ Become a fact-checking hero for my friends', nextPanel: 'fact_check_hero' },
        { text: '📚 Create a personal fake news detection guide', nextPanel: 'detection_guide' },
        { text: '👩‍🏫 Ask Mrs. Chen to teach the class about this', nextPanel: 'teacher_collaboration' }
      ]
    },

    reverse_image_search: {
      id: 'reverse_image_search',
      character: '🖼️',
      background: 'linear-gradient(135deg, #DDA0DD 0%, #87CEEB 100%)',
      narration: 'Maya right-clicked the suspicious photo and selected "Search Google for image." Amazing! The same photo appeared in a 2019 article about a completely different event. The fake news creators had stolen an old photo and made up a new story around it.',
      dialogue: 'Wow! This photo is from 2019 and was about something totally different. They just recycled an old picture to make their fake story look real. This is like being a digital detective!',
      illustration: '🖼️🔍⏰',
      choices: [
        { text: '😂 Make a funny meme about recycled fake photos', nextPanel: 'meme_education' },
        { text: '📝 Write a "How to Reverse Image Search" tutorial', nextPanel: 'tutorial_creation' },
        { text: '🔬 Investigate more fake posts using this technique', nextPanel: 'advanced_investigation' }
      ]
    },

    // ========== PATH 3: ASK SISTER (Extended Multi-Scene) ==========
    ask_sister_scene1: {
      id: 'ask_sister_scene1',
      character: '👭',
      background: 'linear-gradient(135deg, #F0E68C 0%, #DDA0DD 100%)',
      narration: 'Maya knocked on Emma\'s door. "Emma, can you help me with something?" Emma looked up from her homework. Maya showed her the post. Emma immediately noticed several red flags: no author name, emotional language, spelling mistakes, and a weird website URL.',
      dialogue: 'Emma is so smart about this stuff! She\'s pointing out all these clues I didn\'t even notice. Should we investigate this together or should I try to figure it out myself first?',
      illustration: '👭🔍💡',
      choices: [
        { text: '🤝 Work together as a detective team', nextPanel: 'sister_detective_team' },
        { text: '🏃‍♀️ Try investigating solo with Emma\'s guidance', nextPanel: 'guided_solo_investigation' },
        { text: '📚 Ask Emma to teach me all her detection tricks', nextPanel: 'sister_masterclass' }
      ]
    },

    sister_detective_team: {
      id: 'sister_detective_team',
      character: '👩‍💻',
      background: 'linear-gradient(135deg, #90EE90 0%, #87CEEB 100%)',
      narration: 'Emma and Maya spent 30 minutes doing detective work together. They found the fake website\'s "About Us" page was just Lorem Ipsum text! They discovered the photo was stolen from 2019, and the real celebrity was actually receiving an award that same day. Emma taught Maya about URL patterns and domain age checking.',
      dialogue: 'This is like CSI for fake news! Emma showed me how professional news sites look different from fake ones. I feel like I have superpowers now!',
      illustration: '👭💻🔬',
      choices: [
        { text: '🎓 Start a family fact-checking club', nextPanel: 'family_fact_club' },
        { text: '🏫 Present our findings to my class', nextPanel: 'class_presentation' },
        { text: '📱 Create a fact-checking app idea together', nextPanel: 'app_development' }
      ]
    },

    // ========== RECOVERY & WORKSHOP PATHS ==========
    friend_workshop: {
      id: 'friend_workshop',
      character: '👩‍🏫',
      background: 'linear-gradient(135deg, #FFE4B5 0%, #98FB98 100%)',
      narration: 'Maya organized a video call with 8 friends. She shared her screen and showed them step-by-step how she discovered the fake news. Everyone tried the techniques on other suspicious posts. They found 3 more fake stories in just 20 minutes!',
      dialogue: 'My friends are calling me "Professor Maya" now! We\'re all getting better at spotting fake news together. Jake even found a fake article about aliens in our school cafeteria!',
      illustration: '👥📹🎓',
      choices: [
        { text: '🏆 Make this a weekly "Fact-Check Friday" meeting', nextPanel: 'weekly_fact_check' },
        { text: '📝 Create a group chat for sharing suspicious posts', nextPanel: 'verification_group' }
      ]
    },

    public_correction: {
      id: 'public_correction',
      character: '📢',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      narration: 'Maya posted: "UPDATE: I shared fake news by mistake! Here\'s how I found the truth..." She included screenshots of her research process. Instead of being embarrassed, 12 friends thanked her for teaching them something new. Her honesty made people trust her MORE, not less.',
      dialogue: 'I thought admitting my mistake would be embarrassing, but people actually respect me more for being honest and educational about it!',
      illustration: '📢✨🤝',
      choices: [
        { text: '🌟 Become the group\'s official fact-checker', nextPanel: 'official_fact_checker' },
        { text: '📚 Write a blog about learning from mistakes', nextPanel: 'mistake_blog' }
      ]
    },

    // ========== ADVANCED LEARNING PATHS ==========
    detection_guide: {
      id: 'detection_guide',
      character: '📝',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #98FB98 100%)',
      narration: 'Maya created "Maya\'s Ultimate Fake News Detection Guide" with 10 easy steps: 1) Check multiple sources 2) Look for author info 3) Check the date 4) Reverse image search 5) Notice emotional language 6) Verify URLs 7) Read beyond headlines 8) Check if it\'s satire 9) Ask experts 10) When in doubt, don\'t share.',
      dialogue: 'I\'ve become a fake news expert! My guide is helping not just my friends, but my friends are sharing it with their families too. Information literacy is spreading!',
      illustration: '📝🛡️📊',
      choices: [],
      isEnd: true,
      lesson: 'You\'ve created a comprehensive detection system! Remember: Multiple sources, author verification, emotional language awareness, and reverse image searching are your best tools against misinformation.'
    },

    // ========== ENDING TYPES ==========
    fact_check_hero: {
      id: 'fact_check_hero',
      character: '🦸‍♀️',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      narration: 'Maya became known as the "Fact-Check Hero" in her school. She helped 20+ classmates verify suspicious posts over the next month. Teachers started asking her to help with digital literacy lessons. She even got invited to speak at the parent-teacher meeting about teen media literacy!',
      dialogue: 'Who knew that slowing down and checking facts could make me a local hero? I\'m helping create a community that values truth over speed!',
      illustration: '🏆🦸‍♀️✨',
      choices: [],
      isEnd: true,
      lesson: 'You\'ve become a Media Literacy Hero! Teaching others creates a ripple effect of truth and critical thinking. Real heroes don\'t share faster - they share smarter!'
    },

    weekly_fact_check: {
      id: 'weekly_fact_check',
      character: '📅',
      background: 'linear-gradient(135deg, #98FB98 0%, #87CEEB 100%)',
      narration: '"Fact-Check Fridays" became the most popular video call in Maya\'s friend group. Every week, someone brought a suspicious post and the group investigated together. They created a shared document with their findings and detection techniques.',
      dialogue: 'Our Fact-Check Fridays are more fun than movie nights! We\'ve become like a teenage detective agency for digital truth.',
      illustration: '📅🔍👥',
      choices: [],
      isEnd: true,
      lesson: 'You\'ve built a community of critical thinkers! Regular practice and peer collaboration make media literacy skills stronger. Truth-seeking is more fun when it\'s a team sport!'
    },

    app_development: {
      id: 'app_development',
      character: '📱',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #87CEEB 100%)',
      narration: 'Maya and Emma sketched out ideas for a "Fact-Check Helper" app that would automatically suggest verification steps when users tried to share news. They presented it to their computer science teacher, who loved the idea and helped them code a prototype!',
      dialogue: 'Emma and I might actually build something that helps thousands of people! Technology can be part of the solution to fake news.',
      illustration: '📱💡🚀',
      choices: [],
      isEnd: true,
      lesson: 'You\'ve turned learning into innovation! The best way to solve problems is to create solutions. Your experience with fake news led to helping others avoid the same mistakes!'
    },

    // ========== ADDITIONAL CONNECTOR PANELS ==========
    immediate_apology: {
      id: 'immediate_apology',
      character: '😅',
      background: 'linear-gradient(135deg, #FFE4B5 0%, #98FB98 100%)',
      narration: 'Maya quickly commented: "Sorry everyone! I shared this without checking if it was real first. Let me research it properly now." Most friends appreciated her honesty, and some even offered to help investigate.',
      dialogue: 'Being honest about my mistake actually made people want to help me learn! Sometimes admitting you don\'t know something is the smartest thing you can do.',
      illustration: '🙏💭✨',
      choices: [
        { text: '🔍 Research together with helpful friends', nextPanel: 'group_investigation' },
        { text: '📚 Learn proper verification steps solo', nextPanel: 'solo_learning_path' }
      ]
    },

    late_admission: {
      id: 'late_admission',
      character: '😔',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #98FB98 100%)',
      narration: 'Maya finally wrote: "You\'re all right. I was wrong and I\'m sorry I kept arguing when you showed me proof. I learned that being stubborn about mistakes only makes things worse."',
      dialogue: 'It took me too long to admit I was wrong, but at least I learned something important about pride and truth. Better late than never!',
      illustration: '😔🤝💡',
      choices: [
        { text: '📚 Study why people resist admitting mistakes', nextPanel: 'psychology_learning' },
        { text: '🔄 Practice better response patterns', nextPanel: 'response_training' }
      ]
    },

    quiet_deletion: {
      id: 'quiet_deletion',
      character: '🤫',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E68C 100%)',
      narration: 'Maya quietly deleted the post, hoping no one would notice. But Jake messaged her: "Hey, what happened to that celebrity post? I was about to share it!" Maya realized that staying silent meant others might still spread the fake news.',
      dialogue: 'Just deleting it quietly doesn\'t help others learn. Maybe I should have been more open about finding the truth.',
      illustration: '🤫🗑️💭',
      choices: [
        { text: '📢 Decide to make a proper correction post', nextPanel: 'public_correction' },
        { text: '💬 Privately message friends who saw it', nextPanel: 'private_corrections' }
      ]
    },

    group_investigation: {
      id: 'group_investigation',
      character: '👥',
      background: 'linear-gradient(135deg, #98FB98 0%, #87CEEB 100%)',
      narration: 'Five friends joined Maya in a group video call to investigate together. They split up tasks: checking news sites, reverse image searching, looking at the source website, and checking the celebrity\'s social media. Working as a team made it fun and educational!',
      dialogue: 'This is so much better than investigating alone! Everyone found different clues and we learned from each other. Teamwork makes fact-checking way more effective.',
      illustration: '👥🔍📹',
      choices: [],
      isEnd: true,
      lesson: 'Collaborative fact-checking is powerful! When people work together to find truth, everyone learns better techniques and it becomes a positive social activity instead of a chore.'
    },

    psychology_learning: {
      id: 'psychology_learning',
      character: '🧠',
      background: 'linear-gradient(135deg, #DDA0DD 0%, #87CEEB 100%)',
      narration: 'Maya researched "confirmation bias" and "cognitive dissonance" - learning why humans naturally resist information that contradicts what they already believe. She understood why she had defended the fake post even when shown evidence.',
      dialogue: 'Understanding the psychology behind why people believe and share fake news helps me be more patient with others and more aware of my own biases.',
      illustration: '🧠🔬📚',
      choices: [],
      isEnd: true,
      lesson: 'Understanding the psychology of misinformation makes you a wiser consumer and sharer of information. Knowing about confirmation bias helps you question your own reactions to news!'
    },

    meme_education: {
      id: 'meme_education',
      character: '😂',
      background: 'linear-gradient(135deg, #FFE4B5 0%, #98FB98 100%)',
      narration: 'Maya created a funny meme showing the recycled photo with text: "When fake news sites think we won\'t notice they reused a 2019 photo 📷♻️." Her friends loved it and started making their own educational memes about fake news detection.',
      dialogue: 'Who knew learning about fake news could be this fun? Memes are actually a great way to teach serious topics!',
      illustration: '😂📷♻️',
      choices: [],
      isEnd: true,
      lesson: 'Humor and creativity can be powerful educational tools! Making learning fun and shareable helps spread media literacy skills to more people.'
    },

    official_fact_checker: {
      id: 'official_fact_checker',
      character: '🏛️',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      narration: 'Maya\'s friends started sending her suspicious posts before sharing them. She became their unofficial fact-checker, always responding with either "Verified ✅" or "Needs checking ⚠️" along with her research process. Her reputation for accuracy grew.',
      dialogue: 'Being the group fact-checker is a big responsibility, but it feels great knowing I\'m helping prevent the spread of misinformation!',
      illustration: '🏛️✅⚠️',
      choices: [],
      isEnd: true,
      lesson: 'Expertise comes with responsibility! When people trust your judgment, it\'s important to maintain high standards and always show your work. Transparency builds credibility.'
    },

    // ========== MISSING PANELS THAT WERE REFERENCED ==========

    redemption_apology: {
      id: 'redemption_apology',
      character: '🙏',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #98FB98 100%)',
      narration: 'Maya decided to make a public apology post. She wrote honestly about her mistake, thanked everyone who corrected her, and shared what she learned about fact-checking. Her mature response impressed many people.',
      dialogue: 'I made a mistake by sharing false information earlier. Thank you to everyone who took the time to correct me - that\'s what real friends do! Here\'s what I learned about checking facts...',
      illustration: '🙏💭📚',
      choices: [
        { text: '📚 Study why people resist admitting mistakes', nextPanel: 'psychology_learning' },
        { text: '🔄 Practice better response patterns', nextPanel: 'response_training' }
      ]
    },

    teacher_collaboration: {
      id: 'teacher_collaboration',
      character: '👩‍🏫',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #B0E0E6 100%)',
      narration: 'Mrs. Chen was excited to turn Maya\'s experience into a learning opportunity for the whole class. Together, they designed a media literacy unit that would help other students avoid similar mistakes.',
      dialogue: 'Maya, your experience is exactly what other students need to hear about! Let\'s create a lesson that teaches everyone how to be smart digital citizens.',
      illustration: '👩‍🏫📚🎓',
      choices: [
        { text: '🏫 Present our findings to my class', nextPanel: 'class_presentation' },
        { text: '📚 Write a blog about learning from mistakes', nextPanel: 'mistake_blog' }
      ]
    },

    date_source_check: {
      id: 'date_source_check',
      character: '📅',
      background: 'linear-gradient(135deg, #FFF8DC 0%, #F0E68C 100%)',
      narration: 'Maya carefully examined the post\'s timestamp and traced it back to its original source. She discovered the "breaking news" was actually from 2019, and the original source was a satirical website that clearly labeled itself as fake news.',
      dialogue: 'Wait a minute... this post says "breaking news" but it\'s from 2019! And look - the original source is a comedy website that makes fake stories for entertainment. No wonder it seemed fishy!',
      illustration: '📅🔍💡',
      choices: [
        { text: '🦸‍♀️ Become a fact-checking hero for my friends', nextPanel: 'fact_check_hero' },
        { text: '📚 Create a personal fake news detection guide', nextPanel: 'detection_guide' }
      ]
    },

    comment_analysis: {
      id: 'comment_analysis',
      character: '💬',
      background: 'linear-gradient(135deg, #E0FFFF 0%, #B0E0E6 100%)',
      narration: 'Maya scrolled through the comments and noticed a pattern: most positive reactions came from accounts with generic names, no profile pictures, and very few followers. Meanwhile, real-looking accounts were sharing fact-check links and expressing skepticism.',
      dialogue: 'These comments are weird... half of them are from accounts called things like "User123456" with no photos. But the real people are all sharing links that debunk this story!',
      illustration: '💬🤖🔍',
      choices: [
        { text: '🔬 Investigate more fake posts using this technique', nextPanel: 'advanced_investigation' },
        { text: '📝 Write a "How to Spot Bot Comments" guide', nextPanel: 'tutorial_creation' }
      ]
    },

    guided_solo_investigation: {
      id: 'guided_solo_investigation',
      character: '🏃‍♀️',
      background: 'linear-gradient(135deg, #FFE4E1 0%, #FFA07A 100%)',
      narration: 'Emma decided to let Maya take the lead while providing gentle guidance. Maya felt empowered as she worked through each verification step independently, knowing her sister was there if she needed help.',
      dialogue: 'Okay Emma, I\'m going to check this step by step and you tell me if I\'m doing it right. First, I\'ll look at the source... then check the date... then see if other news sites are reporting it...',
      illustration: '🏃‍♀️🔍👥',
      choices: [
        { text: '📚 Learn proper verification steps solo', nextPanel: 'solo_learning_path' },
        { text: '🎓 Start a family fact-checking club', nextPanel: 'family_fact_club' }
      ]
    },

    sister_masterclass: {
      id: 'sister_masterclass',
      character: '📚',
      background: 'linear-gradient(135deg, #F0F8FF 0%, #E6E6FA 100%)',
      narration: 'Emma sat down with Maya for an intensive fact-checking masterclass. She taught advanced techniques like cross-referencing sources, understanding media bias, recognizing emotional manipulation tactics, and using professional fact-checking websites.',
      dialogue: 'Here\'s what I learned in my journalism class, Maya. Always ask: Who says this? How do they know? What evidence do they provide? And most importantly - who benefits if people believe this?',
      illustration: '📚🔬🎯',
      choices: [
        { text: '🔬 Investigate more fake posts using this technique', nextPanel: 'advanced_investigation' },
        { text: '🏫 Present our findings to my class', nextPanel: 'class_presentation' }
      ]
    },

    family_fact_club: {
      id: 'family_fact_club',
      character: '🎓',
      background: 'linear-gradient(135deg, #F5F5DC 0%, #D3D3D3 100%)',
      narration: 'The family fact-checking club became a weekly tradition. Every Friday evening, family members shared suspicious posts they\'d encountered during the week. Even Maya\'s little brother participated by bringing questions about YouTube videos.',
      dialogue: 'Welcome to our first official Family Fact-Check Friday! Everyone brought something suspicious they saw this week. Let\'s work together to figure out what\'s real and what\'s not!',
      illustration: '🎓👨‍👩‍👧‍👦🔍',
      choices: [
        { text: '🏆 Make this a weekly "Fact-Check Friday" meeting', nextPanel: 'weekly_fact_check' },
        { text: '📱 Create a fact-checking app idea together', nextPanel: 'app_development' }
      ]
    },

    class_presentation: {
      id: 'class_presentation',
      character: '🏫',
      background: 'linear-gradient(135deg, #98FB98 0%, #90EE90 100%)',
      narration: 'Maya and Emma\'s presentation to the class was a huge success. They demonstrated live fact-checking techniques, showed how to spot fake news, and even caught a fake post that was trending that very day. The class was amazed and engaged.',
      dialogue: 'And that\'s how we caught this fake news story! The best part is, now you all know these techniques too. We\'re like a classroom full of detective-journalists!',
      illustration: '🏫🎤✨',
      choices: [],
      isEnd: true,
      lesson: 'Teaching others is one of the best ways to solidify your own learning! When you share knowledge, you help create a more informed community and become a leader in media literacy.'
    },

    verification_group: {
      id: 'verification_group',
      character: '📝',
      background: 'linear-gradient(135deg, #E0FFFF 0%, #AFEEEE 100%)',
      narration: 'Maya created a group chat called "Truth Squad" where friends could share questionable posts before resharing them. The group developed a system: post suspicious content, wait for verification, then share only confirmed information.',
      dialogue: 'Hey everyone! Before we share anything that seems too crazy to believe, let\'s post it here first. We\'ll work together to verify it. No judgment - we\'re all learning!',
      illustration: '📝🛡️💬',
      choices: [
        { text: '🌟 Become the group\'s official fact-checker', nextPanel: 'official_fact_checker' },
        { text: '📚 Write a blog about learning from mistakes', nextPanel: 'mistake_blog' }
      ]
    },

    mistake_blog: {
      id: 'mistake_blog',
      character: '📚',
      background: 'linear-gradient(135deg, #FFFACD 0%, #F0E68C 100%)',
      narration: 'Maya started a blog called "Oops, I Did It Again: Learning from Media Mistakes." She invited other kids to share their stories about falling for fake news. The blog became popular because it was honest and relatable.',
      dialogue: 'I thought about hiding my mistake, but I realized that sharing it could help other people avoid the same trap. Now our blog has helped hundreds of kids become better at spotting fake news!',
      illustration: '📚💻🌟',
      choices: [],
      isEnd: true,
      lesson: 'Sharing your mistakes takes courage, but it\'s one of the most powerful ways to help others learn. Vulnerability builds trust and creates real connections with people.'
    },

    tutorial_creation: {
      id: 'tutorial_creation',
      character: '📝',
      background: 'linear-gradient(135deg, #FFE4B5 0%, #DDA0DD 100%)',
      narration: 'Maya decided to create step-by-step video tutorials showing how to fact-check different types of content. Her "Fact-Check Tutorial" series became viral among students, and teachers started using her videos in their media literacy lessons.',
      dialogue: 'Hi everyone! In today\'s tutorial, I\'ll show you exactly how to do a reverse image search. It\'s easier than you think, and it can catch fake photos in seconds!',
      illustration: '📝🎥🔍',
      choices: [
        { text: '🔬 Investigate more fake posts using this technique', nextPanel: 'advanced_investigation' },
        { text: '🏫 Present our findings to my class', nextPanel: 'class_presentation' }
      ]
    },

    advanced_investigation: {
      id: 'advanced_investigation',
      character: '🔬',
      background: 'linear-gradient(135deg, #191970 0%, #4169E1 100%)',
      narration: 'Maya became a sophisticated fake news detective, learning about metadata analysis, source verification networks, and pattern recognition. Her investigative skills became so advanced that local news outlets started consulting her for fact-checking assistance.',
      dialogue: 'I never thought I\'d become such a good detective! Now I can spot fake news from across the room. It\'s like having superpowers for truth!',
      illustration: '🔬🕵️‍♀️⚡',
      choices: [],
      isEnd: true,
      lesson: 'Advanced skills take time to develop, but with practice and dedication, you can become an expert at anything. Critical thinking skills will serve you well throughout your entire life!'
    },

    solo_learning_path: {
      id: 'solo_learning_path',
      character: '📚',
      background: 'linear-gradient(135deg, #2E8B57 0%, #98FB98 100%)',
      narration: 'Maya decided to become an independent fact-checking expert. She studied online courses, practiced with different types of content, and built her own comprehensive fact-checking toolkit. Her systematic approach made her highly skilled.',
      dialogue: 'I\'ve created my own fact-checking checklist: verify the source, check the date, look for bias, cross-reference with other sources, and examine the evidence. It works every time!',
      illustration: '📚✅🎯',
      choices: [
        { text: '🌟 Become the group\'s official fact-checker', nextPanel: 'official_fact_checker' },
        { text: '📝 Write a "How to Verify Anything" guide', nextPanel: 'tutorial_creation' }
      ]
    },

    response_training: {
      id: 'response_training',
      character: '🔄',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #F0E68C 100%)',
      narration: 'Maya practiced different ways to respond when she was corrected or when she made mistakes. She learned phrases that helped her accept feedback gracefully and maintain relationships even when admitting errors.',
      dialogue: 'I used to get defensive when people corrected me, but now I say things like "Thank you for helping me learn" and "I appreciate the correction." It\'s made such a difference in my friendships!',
      illustration: '🔄💬🤝',
      choices: [
        { text: '📢 Decide to make a proper correction post', nextPanel: 'public_correction' },
        { text: '💬 Privately message friends who saw it', nextPanel: 'private_corrections' }
      ]
    },

    private_corrections: {
      id: 'private_corrections',
      character: '💬',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #D8BFD8 100%)',
      narration: 'Maya decided to privately message friends who might have seen her original post. While this approach was less embarrassing, she realized it didn\'t help the broader community learn from her experience.',
      dialogue: 'I sent private messages to fix my mistake, but I\'m wondering if I should have made a public correction instead. Private fixes don\'t help other people avoid the same trap I fell into.',
      illustration: '💬🤔📱',
      choices: [
        { text: '📢 Decide to make a proper correction post', nextPanel: 'public_correction' },
        { text: '📚 Study why people resist admitting mistakes', nextPanel: 'psychology_learning' }
      ]
    }
  }

  const currentStory = storyPanels[currentPanel]

  const handleChoice = (nextPanel: string) => {
    setCurrentPanel(nextPanel)
  }

  const resetStory = () => {
    setCurrentPanel('start')
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📖 Maya's News Adventure</h1>
      </header>

      {/* Story Panel */}
      {currentStory.isEnd ? (
        <div className="card celebration">
          <h2 style={{ color: '#2E86AB', marginBottom: '20px', fontSize: '2rem' }}>
            🎉 Story Complete! 🎉
          </h2>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
            {currentStory.illustration}
          </div>
          <div style={{
            background: 'linear-gradient(45deg, #90EE90, #32CD32)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '10px' }}>📚 Lesson Learned:</h3>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {currentStory.lesson}
            </p>
          </div>
          <div className="nav-buttons">
            <button className="btn btn-primary" onClick={resetStory}>
              🔄 Play Again
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/quiz')}>
              🎮 Try Quiz
            </button>
            <button className="btn" onClick={() => navigate('/result')}>
              🎉 Celebration Page
            </button>
            <button className="btn" onClick={() => navigate('/')}>
              🏠 Go Home
            </button>
          </div>
        </div>
      ) : (
        <Panel
          character={currentStory.character}
          background={currentStory.background}
          narration={currentStory.narration}
          dialogue={currentStory.dialogue}
          illustration={currentStory.illustration}
          choices={currentStory.choices.map(choice => ({
            text: choice.text,
            action: () => handleChoice(choice.nextPanel)
          }))}
        />
      )}

      {/* Navigation */}
      <div style={{ marginTop: '20px' }}>
        <button 
          className="btn"
          onClick={() => navigate('/')}
          style={{ fontSize: '1rem', padding: '10px 20px' }}
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  )
}

export default Story
