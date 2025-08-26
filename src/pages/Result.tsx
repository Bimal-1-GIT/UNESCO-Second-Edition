import { useNavigate } from 'react-router-dom'
import '../App.css'

const Result = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="card celebration">
        <div style={{ textAlign: 'center' }}>
          {/* Celebration Animation */}
          <div style={{ fontSize: '6rem', marginBottom: '20px', animation: 'bounce 2s infinite' }}>
            🎉
          </div>
          
          {/* Stars Animation */}
          <div style={{ marginBottom: '20px' }}>
            <span className="star">⭐</span>
            <span className="star">🌟</span>
            <span className="star">⭐</span>
            <span className="star">🌟</span>
            <span className="star">⭐</span>
          </div>

          <h1 style={{ 
            color: '#2E86AB', 
            marginBottom: '20px', 
            fontSize: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Congratulations!
          </h1>

          {/* Characters Celebrating */}
          <div style={{ 
            fontSize: '4rem', 
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <span style={{ animation: 'wave 2s ease-in-out infinite' }}>👧</span>
            <span style={{ animation: 'bounce 2s infinite' }}>🦸‍♀️</span>
            <span style={{ animation: 'wave 2s ease-in-out infinite 0.5s' }}>👦</span>
            <span style={{ animation: 'bounce 2s infinite 0.5s' }}>🤓</span>
          </div>

          <h2 style={{ 
            color: '#FF6B6B', 
            marginBottom: '30px', 
            fontSize: '2rem'
          }}>
            🎯 Great job! You learned how to spot fake news! 🎯
          </h2>

          {/* Achievement Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              padding: '15px',
              borderRadius: '15px',
              minWidth: '120px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem' }}>🏆</div>
              <p style={{ color: 'white', fontWeight: 'bold' }}>Media Detective</p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #4ECDC4, #44A08D)',
              padding: '15px',
              borderRadius: '15px',
              minWidth: '120px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem' }}>🔍</div>
              <p style={{ color: 'white', fontWeight: 'bold' }}>Fact Checker</p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E)',
              padding: '15px',
              borderRadius: '15px',
              minWidth: '120px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem' }}>🛡️</div>
              <p style={{ color: 'white', fontWeight: 'bold' }}>Info Guardian</p>
            </div>
          </div>

          {/* Key Lessons Learned */}
          <div style={{
            background: 'linear-gradient(45deg, #E6E6FA, #F0E68C)',
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px',
            border: '3px solid #9370DB'
          }}>
            <h3 style={{ color: '#2E86AB', marginBottom: '15px', fontSize: '1.5rem' }}>
              🧠 What You Learned Today:
            </h3>
            <div style={{ textAlign: 'left', color: '#333' }}>
              <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                ✅ Always check trusted news sources before sharing
              </p>
              <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                ✅ Be careful of headlines that sound too crazy to be true
              </p>
              <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}>
                ✅ Ask adults for help when you're not sure about information
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                ✅ Help others by sharing what you learned about spotting fake news
              </p>
            </div>
          </div>

          {/* Confetti Effect */}
          <div style={{ 
            position: 'absolute', 
            top: '0', 
            left: '0', 
            right: '0', 
            bottom: '0', 
            pointerEvents: 'none',
            fontSize: '2rem',
            animation: 'confetti 3s ease-out infinite'
          }}>
            🎊🎉🎊🎉🎊
          </div>

          {/* Action Buttons */}
          <div className="nav-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/story')}
              style={{ fontSize: '1.2rem' }}
            >
              📖 Replay Story
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/quiz')}
              style={{ fontSize: '1.2rem' }}
            >
              🎮 Play Quiz Again
            </button>
            <button 
              className="btn"
              onClick={() => navigate('/')}
              style={{ fontSize: '1.2rem' }}
            >
              🏠 Return to Home
            </button>
          </div>

          {/* Encouraging Message */}
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px',
            border: '2px solid #FFD700'
          }}>
            <p style={{ 
              color: '#2E86AB', 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              🌟 Keep Being Amazing! 🌟
            </p>
            <p style={{ color: '#666', fontSize: '1rem' }}>
              Share your new media literacy skills with friends and family. 
              Together, we can make the internet a safer and smarter place for everyone!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Result
