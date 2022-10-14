import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Profolio from './pages/Profolio'
import Nav from './components/Nav'
import StarredPage from './pages/StarredPage'
import TrashPage from './pages/TrashPage'
import Preview from './components/Preview'
import Edit from './pages/Edit'
import "../src/styles/Main.css"
import NewNote from './pages/NewNote'
import TodoPage from './pages/TodoPage'
import ApiPage from './pages/ApiPage'
import CodePage from './pages/CodePage'
import ApiKeyPrevirew from './pages/ApiKeyPrevirew'

export default function App() {
  return (
    <div className='main'>
      <Router>
      <Routes>
          <Route >
          <Route exact path='/HomePage' element={<Nav /> }/>
          <Route exact path='/Edit/' element={<Nav />} />
          <Route exact path='/NewNote' element={<Nav />}/>
          <Route exact path='/Todo' element={<Nav/>}/>
          <Route exact path='/ApiKeys' element={<Nav/>}/>
          <Route exact path='/Mycodes' element={<Nav/>}/>
          <Route exact path='/Login' />
          </Route>
        </Routes>
  
        <Routes>
          <Route >
          <Route exact path='/' element={<Profolio />}/>
          <Route exact path='/Register' element={<RegisterPage />}/>
          <Route exact path='/Login' element={<LoginPage />}/>
          <Route exact path='/Todo' element={<TodoPage/>}/>
          <Route exact path='/HomePage' element={<HomePage />}/>
          <Route exact path='/TrashPage' element={<TrashPage />}/>
          <Route exact path='/StarredPage' element={<StarredPage />}/>
          <Route exact path='/Mycodes' element={<CodePage/>}/>
          <Route exact path='/ApiKeys' element={<ApiPage />} />
          </Route>
        </Routes>

        <Routes>
          <Route >
          <Route exact path='/HomePage' element={<Preview /> }/>
          <Route exact path='/Edit' element={[<HomePage />,<Edit />]}/>
          <Route exact path='/NewNote' element={[<HomePage />,<NewNote />]}/>
          <Route exact path='/Todo' element={<Preview/>}/>
          <Route exact path='/Login' />
          <Route exact path='/ApiKeys' element={<ApiKeyPrevirew />} />
          <Route exact path='/Mycodes' element={<Preview />} />
          </Route>
        </Routes>


       
      </Router>
    </div>
  )
}
