interface PanelProps {
  character: string
  background: string
  narration: string
  dialogue: string
  choices: {
    text: string
    action: () => void
  }[]
  illustration: string
}

const Panel = ({ character, background, narration, dialogue, choices, illustration }: PanelProps) => {
  return (
    <div className="card" style={{ maxWidth: '700px', position: 'relative' }}>
      {/* Comic Panel Background */}
      <div style={{
        background: background,
        borderRadius: '15px',
        padding: '20px',
        minHeight: '300px',
        position: 'relative',
        border: '4px solid #2E86AB',
        marginBottom: '20px'
      }}>
        {/* Character/Illustration */}
        <div style={{
          fontSize: '6rem',
          textAlign: 'center',
          marginBottom: '15px'
        }}>
          {illustration}
        </div>
        
        {/* Character */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          fontSize: '3rem'
        }}>
          {character}
        </div>

        {/* Speech Bubble */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '20px',
          maxWidth: '200px',
          fontSize: '1rem',
          border: '3px solid #FF6B6B',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          {dialogue}
        </div>
      </div>

      {/* Narration Box */}
      <div style={{
        background: 'linear-gradient(45deg, #FFE066, #FFD93D)',
        padding: '15px',
        borderRadius: '15px',
        marginBottom: '20px',
        border: '3px solid #FFA500',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#2E86AB'
      }}>
        📝 {narration}
      </div>

      {/* Choice Buttons */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        {choices.map((choice, index) => (
          <button
            key={index}
            className={`btn ${index === 0 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={choice.action}
            style={{ fontSize: '1.1rem' }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Panel
