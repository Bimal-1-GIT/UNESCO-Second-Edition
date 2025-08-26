import { useNavigate } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <header className="header">
        <div className="mascot">🦸‍♀️</div>
        <h1>MIL4Kids</h1>
        <p className="welcome-text">
          Learn to spot fake news and play while learning! 🌟
        </p>
      </header>

      <div className="card">
        <h2 style={{ color: '#2E86AB', marginBottom: '30px', fontSize: '2rem' }}>
          Welcome, Young Detective! 🕵️‍♂️
        </h2>
        <p className="lesson-text">
          Ready to become a Media Detective? Learn how to spot fake news, 
          understand what information to trust, and become super smart about 
          the internet! Let's start our adventure!
        </p>
        
        <div className="nav-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/story')}
          >
            📖 Start Story
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/quiz')}
          >
            🎮 Play Quiz
          </button>
          <button 
            className="btn"
            onClick={() => navigate('/about')}
          >
            ℹ️ About MIL
          </button>
        </div>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        fontSize: '3rem',
        animation: 'bounce 2s infinite'
      }}>
        🏫📚🌈
      </div>
    </div>
  )
}

export default Home
