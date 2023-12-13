'use client'

import { languages } from "@/utils/utilities"
import { useState } from "react"
import { IconType } from "react-icons"
import { TbChevronDown } from "react-icons/tb"
import OutsideClickHandler from "react-outside-click-handler";

interface LanguageSelectorProps {
  language: string
  setLanguage: (language: string) => void
  setActiveIcon: (icon: any) => void
}

const LanguageSelector = ({
  language,
  setLanguage,
  setActiveIcon
}: LanguageSelectorProps) => {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon)
    }
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div>
        <p className="py-[5px] text-sm font-medium">Language</p>
        <div onClick={toggleDropdown} className="dropdown-title  capitalize w-[120px]">
          {language}
          <TbChevronDown />
        </div> 

        {showDropdown && (
          <div className="pt-[0.5rem] pb-[0.4rem] pl-[0.5rem] select-none absolute bg-[#191919] border border-[#3c3c3c] rounded-[3px] ">
            {languages.map((lang) => (
              <div key={lang.name}>
                <button
                  className='dropdown-item w-[120px] top-[84px] py-1 text-left hover:bg-[#222222]' 
                  onClick={() => {
                    handleLanguageChange(lang.name)
                    setShowDropdown(false)
                  }}
                >
                  {lang.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  )
}

export default LanguageSelector