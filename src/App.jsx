import './App.css'
import Input from './Components/Input/Input'
import Weathercard from './Components/Weathercard/Weathercard'
import { API_KEY } from './helpers/Constants'
import { Weatherfetch } from './Services/Weatherfetch'

function App() {

  return (
    <>
      <div className='w-screen h-screen background flex flex-col items-center gap-10'>
        <Input />
        <Weathercard/>
      </div>
    </>
  )
}

export default App
