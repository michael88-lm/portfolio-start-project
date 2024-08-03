import './App.css'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Hobby } from './layout/sections/hobby/Hobby'
import { Slogan } from './layout/sections/slogan/Slogan'
import { Works } from './layout/sections/works/Works'

function App() {
  return (
    <div className='App'>
      <Header />
      <Works />
      <Hobby />
      <Slogan />
      <Footer />
    </div>
  )
}

export default App
