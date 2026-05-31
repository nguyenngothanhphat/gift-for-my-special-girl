import { Icon } from '../Icon'

export function FinalSection({ isActive, onBack }) {
  return (
    <section
      className={`w-full max-w-md flex flex-col items-center text-center ${isActive ? 'stagger-in' : 'hidden'}`}
    >
      <div className="w-32 h-32 mb-8 floating">
        <Icon name="favorite" fill className="text-[120px] text-[#78555e]" />
      </div>

      <h2 className="font-['Quicksand'] text-3xl leading-10 font-semibold text-[#78555e] mb-4">
        Cảm ơn em đã ở đây!
      </h2>
      <p className="font-['Nunito_Sans'] text-lg leading-7 text-[#4f4446] mb-8">
        Mỗi ngày trôi qua đều là một món quà vì có em.
      </p>

      <button
        type="button"
        onClick={onBack}
        className="btn-pillowy px-8 py-4 rounded-full font-['Nunito_Sans'] text-sm tracking-[0.05em] font-bold text-[#7a5761]"
      >
        Xem lại các món quà
      </button>
    </section>
  )
}
