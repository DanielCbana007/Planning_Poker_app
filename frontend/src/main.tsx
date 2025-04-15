import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import GameCreation from './LobbyCreate/LobbyCreate'
import './styles.css'
import CreateAdmin from './CreateAdmin/CreateAdmin'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreateAdmin></CreateAdmin>
  </StrictMode>,
)
