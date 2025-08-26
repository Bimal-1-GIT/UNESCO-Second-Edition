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
      narration: 'Maya saw an exciting news article on social media about her favorite celebrity.',
      dialogue: 'Wow! This news looks amazing! Should I share it right away?',
      illustration: '📱✨',
      choices: [
        { text: '📤 Share it immediately!', nextPanel: 'share_immediately' },
        { text: '🔍 Check if it\'s real first', nextPanel: 'check_first' }
      ]
    },
    share_immediately: {
      id: 'share_immediately',
      character: '😰',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #FFA07A 100%)',
      narration: 'Maya shared the news without checking. Later, she found out it was fake news!',
      dialogue: 'Oh no! I shared fake news to all my friends. I feel embarrassed!',
      illustration: '😔📱💥',
      choices: [
        { text: '📚 Learn how to check news', nextPanel: 'learn_checking' },
        { text: '🏠 Go back home', nextPanel: 'end_bad' }
      ]
    },
    check_first: {
      id: 'check_first',
      character: '🤔',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E68C 100%)',
      narration: 'Maya decided to be a smart detective and check the news first.',
      dialogue: 'Let me look for this news on trusted websites like BBC or CNN.',
      illustration: '🔍📰',
      choices: [
        { text: '🌐 Check trusted websites', nextPanel: 'trusted_sites' },
        { text: '👥 Ask friends if they heard it', nextPanel: 'ask_friends' }
      ]
    },
    trusted_sites: {
      id: 'trusted_sites',
      character: '😊',
      background: 'linear-gradient(135deg, #98FB98 0%, #90EE90 100%)',
      narration: 'Maya checked trusted news websites and couldn\'t find the story anywhere.',
      dialogue: 'Good thing I checked! This news isn\'t on any real news sites. It must be fake!',
      illustration: '✅🌐📰',
      choices: [
        { text: '🚫 Don\'t share fake news', nextPanel: 'end_good' },
        { text: '⚠️ Warn others about fake news', nextPanel: 'warn_others' }
      ]
    },
    ask_friends: {
      id: 'ask_friends',
      character: '🤷‍♀️',
      background: 'linear-gradient(135deg, #DDA0DD 0%, #F0E68C 100%)',
      narration: 'Maya asked her friends, but they hadn\'t heard the news either.',
      dialogue: 'Hmm, maybe I should check official news sources instead of just asking friends.',
      illustration: '👥💭',
      choices: [
        { text: '🌐 Check official news sites', nextPanel: 'trusted_sites' },
        { text: '📱 Share it anyway', nextPanel: 'share_anyway' }
      ]
    },
    warn_others: {
      id: 'warn_others',
      character: '🦸‍♀️',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      narration: 'Maya became a Media Literacy Hero by warning others about the fake news!',
      dialogue: 'I\'ll help my friends learn to check news sources too!',
      illustration: '🏆🦸‍♀️✨',
      choices: [],
      isEnd: true,
      lesson: 'Always check trusted news sources before sharing. You can be a hero by helping others spot fake news too!'
    },
    end_good: {
      id: 'end_good',
      character: '😄',
      background: 'linear-gradient(135deg, #98FB98 0%, #87CEEB 100%)',
      narration: 'Maya made the right choice by not sharing fake news!',
      dialogue: 'I\'m glad I checked first. Being careful with information is important!',
      illustration: '🎉✅🌟',
      choices: [],
      isEnd: true,
      lesson: 'Great job! Always verify information from trusted sources before sharing. This helps stop fake news from spreading!'
    },
    end_bad: {
      id: 'end_bad',
      character: '😔',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #DDA0DD 100%)',
      narration: 'Maya learned a hard lesson about sharing without checking.',
      dialogue: 'Next time I\'ll be more careful and check the facts first.',
      illustration: '📚💡',
      choices: [],
      isEnd: true,
      lesson: 'Remember: Always check if news is real before sharing. Use trusted websites like BBC, CNN, or ask a grown-up for help!'
    },
    learn_checking: {
      id: 'learn_checking',
      character: '🤓',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #98FB98 100%)',
      narration: 'Maya learned how to be a fact-checking detective!',
      dialogue: 'Now I know to check multiple trusted sources before believing news!',
      illustration: '🔍📚💪',
      choices: [],
      isEnd: true,
      lesson: 'Remember the 3 C\'s: Check the source, Compare with other news sites, and Consider if it sounds too crazy to be true!'
    },
    share_anyway: {
      id: 'share_anyway',
      character: '😬',
      background: 'linear-gradient(135deg, #FFB6C1 0%, #FFA07A 100%)',
      narration: 'Maya decided to share without checking properly.',
      dialogue: 'I hope this turns out to be true...',
      illustration: '😰📱',
      choices: [
        { text: '🔄 Try again and check properly', nextPanel: 'trusted_sites' }
      ]
    }
  }

  const currentStory = storyPanels[currentPanel]
  const totalPanels = Object.keys(storyPanels).length
  const currentPanelNumber = Object.keys(storyPanels).indexOf(currentPanel) + 1
  const progress = (currentPanelNumber / totalPanels) * 100

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

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#2E86AB', fontWeight: 'bold' }}>
          Panel {currentPanelNumber} of {totalPanels}
        </p>
      </div>

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
