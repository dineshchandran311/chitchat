import React from "react"

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
       <Router>
         <AuthProvider> 
            <Switch> 
                <Route path="/chats" component={Chats} />
                <Route path="/home" component={Login}/>
           </Switch>
        </AuthProvider>
       </Router>
    </div>
  )
}

export default App
