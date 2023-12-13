import { backgrounds } from '@/utils/utilities';
import React, { useState } from 'react'
import { TbChevronDown } from 'react-icons/tb';
import OutsideClickHandler from "react-outside-click-handler";


interface BackgroundSelectorProps {
  background: string
  setBackground: (background: string) => void
}

const BackgroundSelector = ({ 
  background,
  setBackground,
}: BackgroundSelectorProps) => {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground)
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title w-[62px]">
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{
              background: background,
            }}
          ></div>
          <TbChevronDown />
        </div>
        {showDropdown && (
          <div className=" select-none absolute bg-[#191919] border border-[#3c3c3c] top-[74px] w-[62px] rounded-[3px] flex flex-col gap-2">
            {backgrounds.map((bg, i) => {
              return (
                <button
                  key={bg}
                  onClick={() => handleBackgroundChange(bg)}
                  className="pt-[0.1rem] pb-[0.4rem] px-[0.5rem] hover:bg-[#2a2a2a] flex w-full h-full flex-row items-center justify-center"
                  >
                  <div 
                    className='w-[20px] h-[20px] rounded-full'
                    style={{ background: bg }}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  )
}

export default BackgroundSelector