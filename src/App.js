import Home from './pages/Home'
import TopBar from './Nav'
import { useState } from 'react'
import Parks from './pages/Parks'
import Events from './pages/Events'
import Breeders from './pages/Breeders'

function App() {
  const [page, setPage] = useState('Home')

  return (
    <div>
      <TopBar setPage={setPage} />
      <pages />
      <h1>{page}</h1>
      {page === 'Home' ? (
        <Home />
      ) : page === 'parks' ? (
        <Parks />
      ) : page === 'Events' ? (
        <Events />
      ) : page === 'Breeders' ? (
        <Breeders />
      ) : (
        <Home />
      )}
    </div>
  )
}

export default App
