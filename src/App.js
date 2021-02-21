import React from 'react'
import Home from 'modules/home/Home'
import TopNav from 'modules/common/nav/TopNav'
import Container from 'modules/common/layout/components/Container'

function App() {
  return (
    <div>
      <TopNav />
      <Container>
        <Home />
      </Container>
    </div>
  )
}

export default App
