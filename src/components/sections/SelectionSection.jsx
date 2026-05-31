import { useState } from 'react'
import { giftCards, gifts } from '../../data/gifts'

export function SelectionSection({ isActive, onOpenGift }) {
  const [shakingGift, setShakingGift] = useState('')

  const handleClick = (type) => {
    setShakingGift(type)
    window.setTimeout(() => {
      setShakingGift('')
      onOpenGift(type)
    }, 550)
  }

  return (
    <section className={`w-full max-w-md ${isActive ? 'block stagger-in' : 'hidden'}`}>
      <h2 className="font-['Quicksand'] text-2xl leading-8 font-semibold text-[#78555e] text-center mb-8">
        Em muốn mở món quà nào trước?
      </h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {giftCards.map((gift, index) => (
          <button
            key={gift.type}
            type="button"
            onClick={() => handleClick(gift.type)}
            className={`glass-card p-4 rounded-[2rem] flex flex-col items-center text-center cursor-pointer hover:scale-[1.05] active:scale-95 transition-all duration-300 stagger-in ${
              shakingGift === gift.type ? 'shake' : ''
            }`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img
                alt={gift.label}
                className="max-w-full max-h-full object-contain"
                src={gifts[gift.type].image}
              />
            </div>
            <span className="font-['Nunito_Sans'] text-sm leading-5 tracking-[0.05em] font-bold text-[#78555e]">
              {gift.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
