import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(false);

  return (
    <>
      <div className='topInfo secondary-text'>This website isn't connected to anything yet so it will just load forever</div>
      <div className={loading ? 'wrapper loading' : 'wrapper'}>
        <div className='columnContainer'>
          <div className='status'>Server status: <span className={`dot ${online ? 'online' : 'offline'}`} /></div>
          <div className='button' onClick={() => setLoading(!loading)}>
            {loading ? (
              <span className='spinner' />
            ) : (
              <>
                <span>Start Server</span>
                <span className='play-icon'>▶</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
