import { useState } from 'react'
import './App.css'
import { Atmosphere } from './components/Atmosphere'
import { BottomNav } from './components/BottomNav'
import { GiftModal } from './components/GiftModal'
import { TopAppBar } from './components/TopAppBar'
import { FinalSection } from './components/sections/FinalSection'
import { IntroSection } from './components/sections/IntroSection'
import { SelectionSection } from './components/sections/SelectionSection'
import { gifts } from './data/gifts'

function App() {
  const [currentState, setCurrentState] = useState('intro')
  const [selectedGiftKey, setSelectedGiftKey] = useState('')

  const selectedGift = selectedGiftKey ? gifts[selectedGiftKey] : null

  return (
    <div className="min-h-screen bg-[#fefccf] text-[#1d1d03] selection:bg-[#ffd1dc] selection:text-[#7a5761]">
      <Atmosphere />
      <TopAppBar />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        <IntroSection isActive={currentState === 'intro'} onOpen={() => setCurrentState('selection')} />

        <SelectionSection
          isActive={currentState === 'selection'}
          onOpenGift={(type) => setSelectedGiftKey(type)}
        />

        <FinalSection isActive={currentState === 'final'} onBack={() => setCurrentState('selection')} />
      </main>

      <GiftModal selectedGift={selectedGift} onClose={() => setSelectedGiftKey('')} />
      <BottomNav state={currentState} onChange={setCurrentState} />
    </div>
  )
}

export default App
