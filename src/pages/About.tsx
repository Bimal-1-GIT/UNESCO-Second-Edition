import { useNavigate } from 'react-router-dom'
import '../App.css'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <header className="header">
        <div className="mascot">🎓</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>About Media & Information Literacy</h1>
        <p className="welcome-text">Learn why being smart about information matters! 🌟</p>
      </header>

      <div className="card">
        {/* What is MIL? */}
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: '#2E86AB', 
            marginBottom: '20px', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>🔍</span> What is Media & Information Literacy?
          </h2>
          <div style={{
            background: 'linear-gradient(45deg, #E6F3FF, #F0F8FF)',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid #4ECDC4',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#2E86AB', lineHeight: '1.6' }}>
              Media & Information Literacy (MIL) means being super smart about the information you see online, 
              on TV, or in books. It's like being a detective who can tell the difference between 
              true information and fake information! 🕵️‍♀️
            </p>
          </div>
        </section>

        {/* Why is it Important? */}
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: '#FF6B6B', 
            marginBottom: '20px', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>⭐</span> Why is MIL Important?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #FFE066, #FFD93D)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '3px solid #FFA500'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🛡️</div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Stay Safe</h3>
              <p style={{ color: '#333' }}>
                Protects you from believing false information that could be harmful or scary.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #A8E6CF, #7FCDCD)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '3px solid #4ECDC4'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🧠</div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Think Smart</h3>
              <p style={{ color: '#333' }}>
                Helps you make better decisions by understanding what information to trust.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #FFB6C1, #FFA0B4)',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '3px solid #FF6B6B'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👥</div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Help Others</h3>
              <p style={{ color: '#333' }}>
                You can help friends and family by sharing what you know about spotting fake news.
              </p>
            </div>
          </div>
        </section>

        {/* Key Skills */}
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: '#9370DB', 
            marginBottom: '20px', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>🌟</span> MIL Super Skills
          </h2>
          <div style={{
            background: 'linear-gradient(45deg, #E6E6FA, #F0E68C)',
            padding: '25px',
            borderRadius: '20px',
            border: '3px solid #9370DB'
          }}>
            <div style={{ fontSize: '1.1rem', color: '#333' }}>
              <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>🔍</span>
                <span><strong>Check Sources:</strong> Always look at where information comes from. Is it a trusted website?</span>
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>📚</span>
                <span><strong>Compare Information:</strong> Look at multiple sources to see if they say the same thing.</span>
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>🤔</span>
                <span><strong>Think Critically:</strong> Does this sound too crazy to be true? Trust your brain!</span>
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>👨‍👩‍👧‍👦</span>
                <span><strong>Ask for Help:</strong> When in doubt, ask a trusted adult like parents or teachers.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '2rem' }}>🚫</span>
                <span><strong>Don't Share Fake News:</strong> Stop false information from spreading by not sharing it.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Sources */}
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            color: '#32CD32', 
            marginBottom: '20px', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>✅</span> Trusted News Sources for Kids
          </h2>
          <div style={{
            background: 'linear-gradient(45deg, #F0FFF0, #E6FFE6)',
            padding: '20px',
            borderRadius: '15px',
            border: '3px solid #32CD32'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '15px',
              textAlign: 'center',
              fontSize: '1.1rem',
              color: '#333'
            }}>
              <div>📺 BBC Newsround</div>
              <div>📰 Time for Kids</div>
              <div>🌍 National Geographic Kids</div>
              <div>📚 Scholastic News</div>
              <div>🔬 NASA Kids</div>
              <div>🏛️ Smithsonian for Kids</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          padding: '25px',
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.5rem' }}>
            🚀 Ready to be a Media Detective?
          </h3>
          <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '20px' }}>
            Now that you know about MIL, you can help make the internet a better place for everyone!
          </p>
          <div className="nav-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/story')}
            >
              📖 Start Learning Story
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/quiz')}
            >
              🎮 Test Your Skills
            </button>
          </div>
        </section>

        {/* Navigation */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn"
            onClick={() => navigate('/')}
            style={{ fontSize: '1.1rem' }}
          >
            🏠 Back to Home
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '20px',
        fontSize: '2rem',
        opacity: '0.7'
      }}>
        📱💻📺
      </div>
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        right: '20px',
        fontSize: '2rem',
        opacity: '0.7'
      }}>
        🔍📚✨
      </div>
    </div>
  )
}

export default About
