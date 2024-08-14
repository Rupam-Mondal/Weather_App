import './App.css'
import { API_KEY } from './helpers/Constants'
import { Weatherfetch } from './Services/Weatherfetch'

function App() {

  return (
    <>
      <div className='bg-red-400'>
        hello bro
      </div>
      <button onClick={() => {
        const ans = Weatherfetch(API_KEY , 'kolkata')
        console.log(ans)
      }}>click me</button>
    </>
  )
}

export default App
