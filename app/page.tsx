'use client'

import BackgroundSelector from '@/components/BackgroundSelector'
import CodeEditor from '@/components/CodeEditor'
import Footer from '@/components/Footer'
import LanguageSelector from '@/components/LanguageSelector'
import PaddingSelector from '@/components/PaddingSelector'
import ThemeSelector from '@/components/ThemeSelector'
import { backgrounds, languages, themes } from '@/utils/utilities'
import { useState } from 'react'

export default function Home() {

  const [language, setLanguage] = useState(languages[0].name)
  const [theme, setTheme] = useState(themes[0])
  const [background, setBackground] = useState(backgrounds[0])
  const [activeIcon, setActiveIcon] = useState(languages[0].icon)
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"])
  const [currentPadding, setCurrentPadding] = useState(paddings[2])

  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className='mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md flex gap-6'>
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon} />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector background={background} setBackground={setBackground} />
        <PaddingSelector paddings={paddings} currentPadding={currentPadding} setCurrentPadding={setCurrentPadding} />
      </header>
      <div className='code-editor-ref mt-[14rem]'>
        <CodeEditor language={language} theme={theme} background={background} currentPadding={currentPadding} Icon={activeIcon} />
      </div>
      <Footer />
    </main>
  )
}
