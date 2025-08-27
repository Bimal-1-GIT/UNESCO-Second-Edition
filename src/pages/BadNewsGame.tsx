import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  explanation: string
}

interface GameState {
  followers: number
  credibility: number
  currentStage: number
  badges: Badge[]
  gameStarted: boolean
  gameEnded: boolean
  choicesMade: string[]
  lastChoice?: {
    feedback: string
    followersChange: number
    credibilityChange: number
    badgeUnlocked?: string
  }
  showFeedback: boolean
}

interface GameScenario {
  id: number
  title: string
  description: string
  choices: {
    text: string
    followersChange: number
    credibilityChange: number
    badgeUnlocked?: string
    feedback: string
  }[]
}

const BadNewsGame = () => {
  const navigate = useNavigate()

  const initialBadges: Badge[] = [
    {
      id: 'polarization',
      name: 'Polarization',
      description: 'Made content divisive',
      icon: '⚡',
      unlocked: false,
      explanation: 'Polarization: Making issues seem "us vs them" to divide people. In real life, be wary of content that tries to create extreme divisions.'
    },
    {
      id: 'conspiracy',
      name: 'Conspiracy',
      description: 'Created conspiracy theories',
      icon: '🕵️',
      unlocked: false,
      explanation: 'Conspiracy: Suggesting secret plots without evidence. Always ask for proof when someone claims hidden agendas.'
    },
    {
      id: 'discrediting',
      name: 'Discrediting',
      description: 'Attacked credible sources',
      icon: '🎯',
      unlocked: false,
      explanation: 'Discrediting: Attacking experts to weaken their credibility. Be suspicious when someone attacks fact-checkers or scientists instead of addressing the facts.'
    },
    {
      id: 'trolling',
      name: 'Trolling',
      description: 'Used offensive content',
      icon: '🔥',
      unlocked: false,
      explanation: 'Trolling: Provoking reactions by being offensive. Don\'t engage with content designed to make you angry - that\'s exactly what trolls want.'
    },
    {
      id: 'impersonation',
      name: 'Impersonation',
      description: 'Pretended to be someone else',
      icon: '🎭',
      unlocked: false,
      explanation: 'Impersonation: Pretending to be someone else to spread lies. Always verify who is really behind the information you see online.'
    },
    {
      id: 'emotion',
      name: 'Emotion Manipulation',
      description: 'Used fear and anger',
      icon: '😱',
      unlocked: false,
      explanation: 'Emotion Manipulation: Using anger or fear so posts spread faster. Take a deep breath before sharing emotional content - manipulators want you to react quickly.'
    }
  ]

  const [gameState, setGameState] = useState<GameState>({
    followers: 100,
    credibility: 100,
    currentStage: 0,
    badges: initialBadges,
    gameStarted: false,
    gameEnded: false,
    choicesMade: [],
    showFeedback: false
  })

  const [showIntro, setShowIntro] = useState(false)

  const scenarios: GameScenario[] = [
    {
      id: 1,
      title: "Level 1: First Viral Post",
      description: "🌟 A celebrity makes a minor mistake during a live interview. As a new influencer with 100 followers, this is your chance to go viral. How do you report this?",
      choices: [
        {
          text: "Exaggerate the headline: 'Celebrity HUMILIATED in shocking interview DISASTER!'",
          followersChange: 50,
          credibilityChange: 0,
          badgeUnlocked: 'emotion',
          feedback: "You gained 50 followers by manipulating emotions! Drama sells, but at what cost?"
        },
        {
          text: "Report it factually: 'Celebrity stumbles during interview'",
          followersChange: 10,
          credibilityChange: 10,
          feedback: "You gained 10 followers and 10 credibility points. Honest reporting builds trust!"
        },
        {
          text: "Invent a scandal: 'LEAKED: Celebrity's secret addiction exposed!'",
          followersChange: 100,
          credibilityChange: -15,
          badgeUnlocked: 'conspiracy',
          feedback: "You gained 100 followers but lost 15 credibility. Fake scandals spread fast but damage trust."
        }
      ]
    },
    {
      id: 2,
      title: "Level 2: Playing with Emotions",
      description: "🔥 There's a heated political debate happening. Your followers are watching. How do you cover this divisive topic?",
      choices: [
        {
          text: "Create a fake quote: 'Politician says voters are stupid' (they never said this)",
          followersChange: 300,
          credibilityChange: -20,
          badgeUnlocked: 'impersonation',
          feedback: "300 new followers! But you just spread disinformation by faking quotes."
        },
        {
          text: "Make one side look evil: 'These politicians HATE your freedom!'",
          followersChange: 200,
          credibilityChange: -15,
          badgeUnlocked: 'polarization',
          feedback: "You gained 200 followers by creating division! 'Us vs them' content spreads like wildfire."
        },
        {
          text: "Share a neutral summary of both sides",
          followersChange: 30,
          credibilityChange: 15,
          feedback: "Small but steady growth! Balanced reporting builds long-term trust."
        }
      ]
    },
    {
      id: 3,
      title: "Level 3: Attack the Critics",
      description: "😤 Oh no! A fact-checker called out your previous post as misleading. Your followers are asking questions. How do you respond?",
      choices: [
        {
          text: "Mock the fact-checker: 'These so-called experts don't know anything!'",
          followersChange: 150,
          credibilityChange: -10,
          badgeUnlocked: 'trolling',
          feedback: "150 new followers love the drama! Mocking critics gets engagement but spreads distrust."
        },
        {
          text: "Claim fact-checker is corrupt: 'They're paid to silence the truth!'",
          followersChange: 250,
          credibilityChange: -20,
          badgeUnlocked: 'discrediting',
          feedback: "250 followers gained! You attacked legitimate sources to protect your false narrative."
        },
        {
          text: "Apologize and correct the information",
          followersChange: -50,
          credibilityChange: 15,
          feedback: "You lost followers but gained credibility. Taking responsibility builds long-term trust."
        }
      ]
    },
    {
      id: 4,
      title: "Level 4: Expanding Influence",
      description: "💰 Your page is growing! Time to expand your fake news empire. What's your next move to gain more influence?",
      choices: [
        {
          text: "Partner with another misinformation creator",
          followersChange: 700,
          credibilityChange: -20,
          badgeUnlocked: 'conspiracy',
          feedback: "700 new followers! You've joined a network spreading coordinated disinformation."
        },
        {
          text: "Start a clickbait website with sensational headlines",
          followersChange: 300,
          credibilityChange: -10,
          feedback: "300 new followers! Clickbait works, but slowly erodes your credibility."
        },
        {
          text: "Create multiple fake accounts to amplify your content",
          followersChange: 500,
          credibilityChange: -15,
          badgeUnlocked: 'impersonation',
          feedback: "500 followers gained through deception! Fake accounts create false popularity."
        }
      ]
    },
    {
      id: 5,
      title: "Level 5: The Big Crisis",
      description: "🚨 BREAKING: A major crisis hits your community (earthquake/pandemic/election). Millions are seeking information. This is your biggest opportunity yet!",
      choices: [
        {
          text: "Push conspiracy theory: 'This crisis was PLANNED by powerful elites!'",
          followersChange: 1000,
          credibilityChange: -35,
          badgeUnlocked: 'conspiracy',
          feedback: "1000 new followers! Your conspiracy theory went viral, but you've completely destroyed trust."
        },
        {
          text: "Share real safety information from official sources",
          followersChange: 50,
          credibilityChange: 20,
          feedback: "Only 50 new followers, but you gained 20 credibility! You helped save lives with accurate info."
        },
        {
          text: "Spread fear with false claims: 'Government hiding the REAL death toll!'",
          followersChange: 800,
          credibilityChange: -25,
          badgeUnlocked: 'emotion',
          feedback: "800 followers! But you spread dangerous misinformation during a crisis."
        }
      ]
    }
  ]

  const startGame = () => {
    setShowIntro(true)
  }

  const beginGameplay = () => {
    setGameState(prev => ({ ...prev, gameStarted: true }))
    setShowIntro(false)
  }

  const makeChoice = (choiceIndex: number) => {
    const currentScenario = scenarios[gameState.currentStage]
    const choice = currentScenario.choices[choiceIndex]

    // Update game state
    setGameState(prev => {
      const newFollowers = Math.max(0, prev.followers + choice.followersChange)
      const newCredibility = Math.max(0, Math.min(100, prev.credibility + choice.credibilityChange))
      
      let newBadges = [...prev.badges]
      if (choice.badgeUnlocked) {
        newBadges = newBadges.map(badge => 
          badge.id === choice.badgeUnlocked 
            ? { ...badge, unlocked: true }
            : badge
        )
      }

      const newChoicesMade = [...prev.choicesMade, choice.text]
      const isGameEnded = prev.currentStage >= scenarios.length - 1

      return {
        ...prev,
        followers: newFollowers,
        credibility: newCredibility,
        badges: newBadges,
        currentStage: prev.currentStage,
        gameEnded: isGameEnded,
        choicesMade: newChoicesMade,
        lastChoice: {
          feedback: choice.feedback,
          followersChange: choice.followersChange,
          credibilityChange: choice.credibilityChange,
          badgeUnlocked: choice.badgeUnlocked
        },
        showFeedback: true
      }
    })
  }

  const continueToNextStage = () => {
    setGameState(prev => {
      if (prev.gameEnded) {
        return {
          ...prev,
          showFeedback: false
        }
      }
      return {
        ...prev,
        showFeedback: false,
        currentStage: prev.currentStage + 1
      }
    })
  }

  const resetGame = () => {
    setGameState({
      followers: 100,
      credibility: 100,
      currentStage: 0,
      badges: initialBadges,
      gameStarted: false,
      gameEnded: false,
      choicesMade: [],
      showFeedback: false
    })
    setShowIntro(false)
  }

  const getEndingMessage = () => {
    const unlockedBadges = getUnlockedBadges()
    
    // Perfect score - no manipulation badges + very high credibility
    if (unlockedBadges.length === 0 && gameState.credibility >= 90) {
      return {
        title: "🏆 Truth Champion",
        message: "Incredible! You resisted all manipulation tactics and maintained excellent credibility. You're exactly the kind of media creator the world needs more of!",
        color: '#FFD700'
      }
    }
    // High credibility (80-100) - Trustworthy regardless of followers
    else if (gameState.credibility >= 80) {
      return {
        title: "🌟 Trustworthy Source",
        message: `You maintained high credibility (${gameState.credibility}%) throughout your journey. People know they can rely on you for accurate information. Your audience values truth over sensationalism.`,
        color: '#32CD32'
      }
    }
    // Good credibility (60-79) - Mostly reliable
    else if (gameState.credibility >= 60) {
      return {
        title: "✅ Reliable Creator",
        message: `With ${gameState.credibility}% credibility, you're considered mostly trustworthy. You made some questionable choices but generally maintained your integrity.`,
        color: '#90EE90'
      }
    }
    // Medium credibility (40-59) - Mixed reputation
    else if (gameState.credibility >= 40) {
      return {
        title: "⚖️ Mixed Influencer",
        message: `Your credibility is at ${gameState.credibility}%. You played with manipulation but sometimes stuck to facts. Your page is semi-credible - some people trust you, others don't.`,
        color: '#FFA500'
      }
    }
    // Low credibility (20-39) - Unreliable
    else if (gameState.credibility >= 20) {
      return {
        title: "� Popular but Unreliable",
        message: `With only ${gameState.credibility}% credibility remaining, people follow you for entertainment but don't trust your information. You prioritized engagement over truth.`,
        color: '#FF6B6B'
      }
    }
    // Very low credibility (0-19) - No trust
    else {
      return {
        title: "� Viral Misinformation Creator",
        message: `Your credibility has been destroyed (${gameState.credibility}%). You became a viral misinformation creator, but people don't trust you anymore. You've contributed to spreading dangerous falsehoods.`,
        color: '#FF4757'
      }
    }
  }

  const getUnlockedBadges = () => gameState.badges.filter(badge => badge.unlocked)

  // Introduction Scene
  if (showIntro) {
    return (
      <div className="page-container">
        <div className="card" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h1 style={{ 
            color: '#4ECDC4', 
            fontSize: '2.5rem', 
            marginBottom: '20px'
          }}>
            🏁 Welcome, New Influencer!
          </h1>
          
          <div style={{ fontSize: '3rem', marginBottom: '30px' }}>
            📱👤✨
          </div>

          <div style={{
            background: 'linear-gradient(45deg, #E6F3FF, #F0F8FF)',
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px',
            border: '3px solid #4ECDC4'
          }}>
            <p style={{ color: '#2E86AB', fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '20px' }}>
              🎉 Congratulations! You just created your news page on social media and already have your first <strong>100 followers</strong>!
            </p>
            <p style={{ color: '#2E86AB', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Now you face a choice that every content creator must make:
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(45deg, #FFE066, #FFD93D)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '3px solid #FFA500'
          }}>
            <h2 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '15px' }}>
              🤔 The Big Question:
            </h2>
            <p style={{ color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }}>
              "How will you grow your audience?"
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '30px', 
              marginTop: '20px',
              fontSize: '1.1rem'
            }}>
              <div style={{ color: '#32CD32' }}>✅ Through facts</div>
              <div style={{ color: '#666' }}>or</div>
              <div style={{ color: '#FF4757' }}>❌ Through manipulation</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 71, 87, 0.1)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '2px solid #FF4757'
          }}>
            <p style={{ color: '#FF4757', fontSize: '1rem', fontStyle: 'italic' }}>
              Remember: You're about to learn how misinformation spreads by experiencing it firsthand. 
              The choices you make will teach you to recognize these tactics in real life!
            </p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={beginGameplay}
            style={{ 
              fontSize: '1.4rem', 
              padding: '15px 35px',
              background: 'linear-gradient(45deg, #4ECDC4, #44A08D)'
            }}
          >
            🚀 Begin Your Journey
          </button>
        </div>
      </div>
    )
  }

  // Landing Page
  if (!gameState.gameStarted) {
    return (
      <div className="page-container">
        <div className="card" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ 
            color: '#FF4757', 
            fontSize: '3rem', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Bad News – MIL Edition
          </h1>
          
          <div style={{ fontSize: '4rem', marginBottom: '30px' }}>
            📰🎭💥
          </div>

          <div style={{
            background: 'linear-gradient(45deg, #FFE066, #FFD93D)',
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px',
            border: '3px solid #FF4757'
          }}>
            <h2 style={{ color: '#333', marginBottom: '15px' }}>🎯 Your Mission</h2>
            <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Welcome, new influencer! You just created a news page with 100 followers. 
              Your goal is to grow your audience. But how? Through facts... or manipulation? 
              Make choices as you build your <strong>fake news empire</strong> and learn how 
              misinformation spreads in real life!
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 71, 87, 0.1)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '30px',
            border: '2px solid #FF4757'
          }}>
            <p style={{ color: '#FF4757', fontSize: '1rem', fontWeight: 'bold' }}>
              ⚠️ Remember: This is educational! In real life, always verify information and share responsibly.
            </p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={startGame}
            style={{ 
              fontSize: '1.5rem', 
              padding: '20px 40px',
              background: 'linear-gradient(45deg, #FF4757, #FF3742)'
            }}
          >
            🎮 Start Game
          </button>

          <div style={{ marginTop: '30px' }}>
            <button 
              className="btn"
              onClick={() => navigate('/')}
              style={{ fontSize: '1rem', padding: '10px 20px' }}
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  // End Screen
  if (gameState.gameEnded) {
    const unlockedBadges = getUnlockedBadges()
    const ending = getEndingMessage()
    
    return (
      <div className="page-container">
        <div className="card celebration" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: '#FF4757', marginBottom: '20px' }}>🎯 Game Complete!</h1>
          
          {/* Dynamic Ending Message */}
          <div style={{
            background: `linear-gradient(45deg, ${ending.color}, ${ending.color}CC)`,
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: 'white', marginBottom: '15px', fontSize: '1.8rem' }}>
              {ending.title}
            </h2>
            <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.6' }}>
              {ending.message}
            </p>
          </div>
          
          {/* Final Stats */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '20px', 
            marginBottom: '30px' 
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>👥 Followers</h3>
              <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
                {gameState.followers}
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>🎯 Credibility</h3>
              <p style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
                {gameState.credibility}%
              </p>
              {/* Credibility meter */}
              <div style={{
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '10px',
                height: '10px',
                marginTop: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: gameState.credibility >= 70 ? '#32CD32' : 
                           gameState.credibility >= 40 ? '#FFA500' : '#FF4757',
                  height: '100%',
                  width: `${gameState.credibility}%`,
                  borderRadius: '10px',
                  transition: 'all 0.3s ease'
                }}></div>
              </div>
              <p style={{ color: 'white', fontSize: '0.9rem', marginTop: '5px' }}>
                {gameState.credibility >= 80 ? 'Highly Trusted' :
                 gameState.credibility >= 60 ? 'Mostly Trusted' :
                 gameState.credibility >= 40 ? 'Somewhat Trusted' :
                 gameState.credibility >= 20 ? 'Low Trust' : 'No Trust'}
              </p>
            </div>
          </div>

          {/* Badges Unlocked */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#2E86AB', marginBottom: '20px' }}>🏆 Tactics You Used:</h2>
            {unlockedBadges.length > 0 ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '15px' 
              }}>
                {unlockedBadges.map(badge => (
                  <div key={badge.id} style={{
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    padding: '15px',
                    borderRadius: '15px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '5px' }}>
                      {badge.icon}
                    </div>
                    <h4 style={{ color: 'white', marginBottom: '5px' }}>
                      {badge.name}
                    </h4>
                    <p style={{ color: 'white', fontSize: '0.9rem' }}>
                      {badge.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                background: 'linear-gradient(45deg, #90EE90, #32CD32)',
                padding: '20px',
                borderRadius: '15px',
                textAlign: 'center'
              }}>
                <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  🌟 Congratulations! You resisted all manipulation tactics!
                </p>
              </div>
            )}
          </div>

          {/* Learning Section */}
          <div style={{
            background: 'linear-gradient(45deg, #E6E6FA, #F0E68C)',
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#2E86AB', marginBottom: '15px' }}>🧠 What You Learned:</h3>
            {unlockedBadges.length > 0 ? (
              unlockedBadges.map(badge => (
                <div key={badge.id} style={{ marginBottom: '15px' }}>
                  <p style={{ color: '#333', fontSize: '1rem', lineHeight: '1.5' }}>
                    <strong>{badge.icon} {badge.name}:</strong> {badge.explanation}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ color: '#333', fontSize: '1.1rem' }}>
                You chose to prioritize truth over viral content! In real life, always verify information before sharing and be skeptical of emotionally charged headlines.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="nav-buttons">
            <button className="btn btn-primary" onClick={resetGame}>
              🔄 Play Again
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/quiz')}>
              🎮 Try Quiz
            </button>
            <button className="btn" onClick={() => navigate('/')}>
              🏠 Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Game Play Screen
  const currentScenario = scenarios[gameState.currentStage]
  const progress = ((gameState.currentStage + 1) / scenarios.length) * 100

  // Show feedback screen between choices
  if (gameState.showFeedback && gameState.lastChoice) {
    return (
      <div className="page-container">
        {/* Stats Bar */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '15px',
          marginBottom: '20px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '600px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem' }}>👥</div>
            <div style={{ fontWeight: 'bold', color: '#4ECDC4' }}>
              {gameState.followers} Followers
              {gameState.lastChoice.followersChange !== 0 && (
                <span style={{ 
                  color: gameState.lastChoice.followersChange > 0 ? '#32CD32' : '#FF4757',
                  fontSize: '0.9rem'
                }}>
                  {gameState.lastChoice.followersChange > 0 ? ' +' : ' '}{gameState.lastChoice.followersChange}
                </span>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem' }}>🎯</div>
            <div style={{ fontWeight: 'bold', color: '#FF6B6B' }}>
              {gameState.credibility}% Credibility
              {gameState.lastChoice.credibilityChange !== 0 && (
                <span style={{ 
                  color: gameState.lastChoice.credibilityChange > 0 ? '#32CD32' : '#FF4757',
                  fontSize: '0.9rem'
                }}>
                  {gameState.lastChoice.credibilityChange > 0 ? ' +' : ' '}{gameState.lastChoice.credibilityChange}%
                </span>
              )}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem' }}>🏆</div>
            <div style={{ fontWeight: 'bold', color: '#FFD700' }}>
              {getUnlockedBadges().length} Badges
              {gameState.lastChoice.badgeUnlocked && (
                <span style={{ color: '#FFD700', fontSize: '0.9rem' }}> +1</span>
              )}
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <div className="card" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: '#4ECDC4', marginBottom: '20px', fontSize: '1.8rem' }}>
            📊 Choice Results
          </h2>
          
          <div style={{
            background: 'linear-gradient(45deg, #F0F8FF, #E6F3FF)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '20px',
            border: '3px solid #4ECDC4'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#2E86AB', lineHeight: '1.6', marginBottom: '15px' }}>
              {gameState.lastChoice.feedback}
            </p>
            
            {/* Stats Changes */}
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                  {gameState.lastChoice.followersChange > 0 ? '📈' : gameState.lastChoice.followersChange < 0 ? '📉' : '➡️'}
                </div>
                <div style={{ 
                  color: gameState.lastChoice.followersChange > 0 ? '#32CD32' : gameState.lastChoice.followersChange < 0 ? '#FF4757' : '#666',
                  fontWeight: 'bold'
                }}>
                  {gameState.lastChoice.followersChange > 0 ? '+' : ''}{gameState.lastChoice.followersChange} Followers
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
                  {gameState.lastChoice.credibilityChange > 0 ? '📈' : gameState.lastChoice.credibilityChange < 0 ? '📉' : '➡️'}
                </div>
                <div style={{ 
                  color: gameState.lastChoice.credibilityChange > 0 ? '#32CD32' : gameState.lastChoice.credibilityChange < 0 ? '#FF4757' : '#666',
                  fontWeight: 'bold'
                }}>
                  {gameState.lastChoice.credibilityChange > 0 ? '+' : ''}{gameState.lastChoice.credibilityChange}% Credibility
                </div>
              </div>
            </div>
          </div>

          {/* Badge Unlocked */}
          {gameState.lastChoice.badgeUnlocked && (
            <div style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>🏆 Badge Unlocked!</h3>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                {gameState.badges.find(b => b.id === gameState.lastChoice!.badgeUnlocked)?.icon}
              </div>
              <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>
                {gameState.badges.find(b => b.id === gameState.lastChoice!.badgeUnlocked)?.name}
              </p>
            </div>
          )}

          <button 
            className="btn btn-primary"
            onClick={gameState.gameEnded ? continueToNextStage : continueToNextStage}
            style={{ fontSize: '1.2rem', padding: '15px 30px' }}
          >
            {gameState.gameEnded ? '🎯 See Final Results' : '➡️ Continue'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      {/* Stats Bar */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '15px',
        marginBottom: '20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '600px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>👥</div>
          <div style={{ fontWeight: 'bold', color: '#4ECDC4' }}>
            {gameState.followers} Followers
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>🎯</div>
          <div style={{ fontWeight: 'bold', color: '#FF6B6B' }}>
            {gameState.credibility}% Credibility
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>🏆</div>
          <div style={{ fontWeight: 'bold', color: '#FFD700' }}>
            {getUnlockedBadges().length} Badges
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#2E86AB', fontWeight: 'bold' }}>
          Stage {gameState.currentStage + 1} of {scenarios.length}
        </p>
      </div>

      {/* Scenario Card */}
      <div className="card" style={{ maxWidth: '700px' }}>
        <h2 style={{ color: '#FF4757', marginBottom: '20px', fontSize: '1.8rem' }}>
          {currentScenario.title}
        </h2>
        
        <div style={{
          background: 'linear-gradient(45deg, #F0F8FF, #E6F3FF)',
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '3px solid #4ECDC4'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#2E86AB', lineHeight: '1.6' }}>
            {currentScenario.description}
          </p>
        </div>

        <h3 style={{ color: '#333', marginBottom: '20px' }}>What do you do?</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {currentScenario.choices.map((choice, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => makeChoice(index)}
              style={{
                background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
                fontSize: '1.1rem',
                padding: '15px 25px',
                textAlign: 'left',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

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

export default BadNewsGame
