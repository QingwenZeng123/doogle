import Home from './pages/home/Home'
import TopBar from './topbar/TopBar'

const [page, setPage] = useState('Home')

function App() {
  return (
    <div>
      <TopBar setPage={setPage} />
      <h1>{page}</h1>
      {page === 'Home' ? (
        <Home />
      ) : page === 'parks' ? (
        <Parks />
      ) : page === 'Home' ? (
        <Home />
      ) : page === 'Home' ? (
        <Home />
      ) : (
        <Signup />
      )}
    </div>
  )
}

export default App
