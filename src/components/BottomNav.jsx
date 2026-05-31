import { Icon } from './Icon'

const items = [
  { key: 'intro', label: 'Home', icon: 'home' },
  { key: 'selection', label: 'Gift', icon: 'redeem' },
  { key: 'final', label: 'Love', icon: 'favorite' },
]

export function BottomNav({ state, onChange }) {
  if (state === 'intro') {
    return null
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-[#fefccfcc] backdrop-blur-md border-t border-[#78555e1a] rounded-t-[2rem] shadow-[0_-4px_20px_rgba(255,209,220,0.3)]">
      {items.map((item) => {
        const active = item.key === state

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={
              active
                ? 'flex flex-col items-center justify-center bg-[#ffd1dc] text-[#7a5761] rounded-full p-3 active:scale-90 transition-transform duration-200'
                : 'flex flex-col items-center justify-center text-[#4f4446] p-3 hover:bg-[#fed9b880] rounded-full transition-all'
            }
          >
            <Icon name={item.icon} />
            <span className="font-['Nunito_Sans'] text-xs leading-4 font-semibold">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
