import { themes } from "@/utils/utilities"
import { useState } from "react"
import { TbChevronDown } from "react-icons/tb"
import OutsideClickHandler from "react-outside-click-handler";


interface ThemeSelectorProps {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector">
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div onClick={toggleDropdown} className="dropdown-title capitalize w-[120px]">
          {theme}
          <TbChevronDown />
        </div> 

        {showDropdown && (
          <div className="pt-[0.5rem] pb-[0.4rem] pl-[0.5rem] select-none absolute bg-[#191919] border border-[#3c3c3c] rounded-[3px]">
          {themes.map((theme) => (
            <div key={theme}>
              <button
                className='dropdown-item w-[120px] top-[84px] py-1 text-left hover:bg-[#222222] capitalize' 
                onClick={() => {
                  handleThemeChange(theme)
                  setShowDropdown(false)
                }}
              >
                {theme}
              </button>
            </div>
          ))}
        </div>
        )}
      </div>
    </OutsideClickHandler>
  )
}

export default ThemeSelector