import { BrowserRouter,Route, Routes } from 'react-router-dom'
import {TimerPage} from './pages/TimerPage'
import { Error404 } from './pages/error/Error404'
import './App.css'

export const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<TimerPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
