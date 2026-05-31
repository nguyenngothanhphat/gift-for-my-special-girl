import { Icon } from './Icon'

export function TopAppBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-6 py-4 bg-transparent">
      <div className="flex items-center gap-2 hover:opacity-80 transition-opacity active:scale-95 duration-300">
        <Icon name="card_giftcard" className="text-[#78555e]" />
        <h1 className="font-['Quicksand'] text-2xl leading-8 font-semibold text-[#78555e]">
          A Gift for You
        </h1>
      </div>
    </nav>
  )
}
