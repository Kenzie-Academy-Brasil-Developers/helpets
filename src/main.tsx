import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserContext'
import { OngsProvider } from './providers/OngsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <OngsProvider>
          <App />
        </OngsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
