import React from 'react'
import { Navbar , HomePage, Cryptocurrencies, Exchanges, News, CryptoDetails} from './component'
import './App.css'
import Layout from 'antd/lib/layout/layout'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <div className='app'> 
    <div className='navbar'>
       <Navbar />
    </div>
    <div className='main'>
           <Layout>
             <div className='routes'>
           <Routes>
            <Route exact path='/' element={  <HomePage />}/>
              
                <Route  exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                
              
              <Route  exact path='/cryptocurrencies/:id' element={<CryptoDetails />} />
                
              
              <Route exact path='/exchanges'  element={<Exchanges />}>
                
              </Route>
              <Route  exact path='/news' element={<News />} />
                
              
              </Routes>
             </div>
           </Layout>
    </div>
    <div className='footer'>

    </div>
    
    </div>
  )
}

export default App