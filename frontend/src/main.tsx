import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameCreation from './LobbyCreate/LobbyCreate'
import './styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameCreation></GameCreation>
  </StrictMode>,
)
