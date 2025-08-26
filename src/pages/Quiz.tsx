import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

interface QuizQuestion {
  id: number
  headline: string
  isReal: boolean
  explanation: string
  source: string
  illustration: string
}

const Quiz = () => {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [quizComplete, setQuizComplete] = useState(false)

  const questions: QuizQuestion[] = [
    {
      id: 1,
      headline: "Scientists Discover Unicorns Living in the Amazon Rainforest!",
      isReal: false,
      explanation: "This is fake! Real scientists would publish discoveries in scientific journals, not make wild claims about mythical creatures.",
      source: "❌ Unknown blog site",
      illustration: "🦄🌳"
    },
    {
      id: 2,
      headline: "New Study Shows Reading Books Helps Children Learn Better",
      isReal: true,
      explanation: "This is real! Many scientific studies have proven that reading improves learning and brain development.",
      source: "✅ Educational Research Journal",
      illustration: "📚🧠"
    },
    {
      id: 3,
      headline: "Eating Vegetables Makes Kids Grow Super Powers Instantly",
      isReal: false,
      explanation: "This is fake! While vegetables are healthy and help you grow strong, they don't give instant superpowers. Be careful of exaggerated claims!",
      source: "❌ Social media post",
      illustration: "🥕⚡"
    },
    {
      id: 4,
      headline: "Local School Wins Award for Environmental Project",
      isReal: true,
      explanation: "This could be real! Local news often reports on school achievements. You can verify by checking the school's official website.",
      source: "✅ Local News Website",
      illustration: "🏫🏆"
    },
    {
      id: 5,
      headline: "Cats Can Now Talk and Are Planning to Take Over the World",
      isReal: false,
      explanation: "This is definitely fake! If cats could talk, it would be major scientific news covered by all reliable news sources, not just one website.",
      source: "❌ Suspicious website",
      illustration: "🐱🗣️"
    }
  ]

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)
    
    if (answer === questions[currentQuestion].isReal) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
      setSelectedAnswer(null)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowFeedback(false)
    setSelectedAnswer(null)
    setQuizComplete(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "🌟 Amazing! You're a Media Detective Expert!"
    if (percentage >= 60) return "👍 Great job! You're getting good at spotting fake news!"
    if (percentage >= 40) return "📚 Good try! Keep practicing to become better!"
    return "🤗 Don't worry! Everyone learns at their own pace. Try again!"
  }

  const getScoreEmoji = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "🏆🎉✨"
    if (percentage >= 60) return "👏🌟😊"
    if (percentage >= 40) return "📖💪🤔"
    return "🤗💝📚"
  }

  if (quizComplete) {
    return (
      <div className="page-container">
        <div className="card celebration">
          <h1 style={{ color: '#2E86AB', marginBottom: '20px' }}>🎯 Quiz Complete!</h1>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
            {getScoreEmoji()}
          </div>
          <h2 style={{ color: '#FF6B6B', marginBottom: '20px' }}>
            Your Score: {score}/{questions.length}
          </h2>
          <div style={{
            background: 'linear-gradient(45deg, #90EE90, #32CD32)',
            padding: '20px',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <p style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold' }}>
              {getScoreMessage()}
            </p>
          </div>
          <div className="nav-buttons">
            <button className="btn btn-primary" onClick={resetQuiz}>
              🔄 Try Again
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/story')}>
              📖 Read Story
            </button>
            <button className="btn" onClick={() => navigate('/result')}>
              🎉 See Results Page
            </button>
            <button className="btn" onClick={() => navigate('/')}>
              🏠 Go Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="page-container">
      <header className="header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎮 Media Detective Quiz</h1>
        <p className="welcome-text">Can you spot the fake news? 🕵️‍♀️</p>
      </header>

      {/* Progress */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#2E86AB', fontWeight: 'bold' }}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Question Card */}
      <div className="card">
        <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>
          {question.illustration}
        </div>
        
        <h2 style={{ color: '#2E86AB', marginBottom: '20px', fontSize: '1.5rem' }}>
          "{question.headline}"
        </h2>
        
        <div style={{
          background: '#F0F8FF',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '2px solid #4ECDC4'
        }}>
          <p style={{ color: '#2E86AB', fontWeight: 'bold' }}>
            Source: {question.source}
          </p>
        </div>

        {!showFeedback ? (
          <div>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#333' }}>
              Is this news REAL or FAKE? 🤔
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button 
                className="btn btn-success"
                onClick={() => handleAnswer(true)}
              >
                ✅ REAL
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => handleAnswer(false)}
              >
                ❌ FAKE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{
              background: selectedAnswer === question.isReal 
                ? 'linear-gradient(45deg, #90EE90, #32CD32)' 
                : 'linear-gradient(45deg, #FFB6C1, #FF6B6B)',
              padding: '20px',
              borderRadius: '15px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: 'white', marginBottom: '10px' }}>
                {selectedAnswer === question.isReal ? '🎉 Correct!' : '💡 Not quite!'}
              </h3>
              <p style={{ color: 'white', fontSize: '1.1rem' }}>
                {question.explanation}
              </p>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={nextQuestion}
            >
              {currentQuestion < questions.length - 1 ? '➡️ Next Question' : '🏁 Finish Quiz'}
            </button>
          </div>
        )}
      </div>

      {/* Score Display */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '15px',
        marginTop: '20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}>
        <p style={{ color: '#2E86AB', fontWeight: 'bold', fontSize: '1.1rem' }}>
          🏆 Current Score: {score}/{currentQuestion + (showFeedback ? 1 : 0)}
        </p>
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

export default Quiz
