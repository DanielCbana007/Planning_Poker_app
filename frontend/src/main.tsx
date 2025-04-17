import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import GameCreation from './LobbyCreate/LobbyCreate'
// import CreateAdmin from './CreateAdmin/CreateAdmin'
import './styles.css'
import DisplayTable from './DisplayTable/DisplayTable'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GameCreation></GameCreation> */}
    <DisplayTable></DisplayTable>
  </StrictMode>,
)
