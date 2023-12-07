import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import { trending,comedy} from './urls'


function App() {
  
  
  return (
    <>
    <Navbar />
    <Banner/>
    {console.log('trending ', trending)}
    {console.log('comedy', comedy)}
    <Rowpost title='Top Trending'/>
    <Rowpost url={comedy} title='comedy' isSmall/>
    
    </>
  )
}

export default App