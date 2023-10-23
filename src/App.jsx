import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import Hero from './components/Hero.jsx'
import Starfield from './components/Starfield.jsx'
import SpaceGraph from './components/SpaceGraph.jsx'
import Timeline from './components/Timeline.jsx'
import Project from './components/Project.jsx'

function App() {
  return (
    <>
      <div className='w-full h-[100vh] fixed -z-10'>
        <Starfield />
      </div>
      <div className='bg-[linear-gradient(135deg,rgba(28,26,65,0.7)0%,rgba(17,24,39,0.7)100%)] min-h-screen text-white font-sans'>
      <div className='min-w-80 w-3/4 mx-auto  min-h-[90vh] mb-40 '>
          <Nav />
          <div className='p-4 flex '>
            <Hero />
            <div className='grow p-9'>
              <SpaceGraph />
            </div>

          </div>
        </div>
      <Timeline />
      <Project />
    </div>
    </>
  )
}
export default App
