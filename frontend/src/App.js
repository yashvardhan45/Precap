import './App.css'
import Header from './Components/Header/main'
import Precap from './Components/Logo/main'
import PagesSection from './Components/PagesSection/main'
import TeamSection from './Components/TeamSection/main'
import ContactSection from './Components/Contact/main'

function App () {
  return (
    <div className='App'>
      <Header />
      <Precap height='auto' width='35%' />
      <br />
      <PagesSection />
      <br />
      <TeamSection />
      <br />
      <ContactSection />
    </div>
  )
}

export default App
