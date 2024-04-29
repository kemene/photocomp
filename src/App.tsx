import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

function App() {
  return (
    <MantineProvider>
      <Router>
        <Layout />
      </Router>
    </MantineProvider>
  )
}

export default App
