import { Icon } from '../Icon'

export function IntroSection({ isActive, onOpen }) {
  return (
    <section
      className={`w-full max-w-md flex flex-col items-center text-center ${isActive ? 'stagger-in' : 'hidden'}`}
    >
      <div className="relative w-full aspect-square max-w-[280px] mb-8 floating">
        <img
          alt="Gift Box"
          className="w-full h-full object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASjr1kMuoG6hA2ovVjMGSgEeyCvt5Y84JdSLNXaympmESB55SODNNsixHpGaH_YOgAVZWWb1ldDr-lmRFGen3JeRaAvOYxJLX9IoIeQMd5LKGa86KVWqvY674KklAr3tax47xolC6-W3M9md3aM1C0E0gzKNEEyTTy1QDRoGN4IJEdZViZes1FHeUT2yt4HMiEWxj_ttUPVGqeAY-Ki3Dug0txjXbCorNb8O_sSauf71AeFq6o-lH7_dxTrCBhVwvYd130w2CWCFt3"
        />
      </div>

      <h2 className="font-['Quicksand'] text-[28px] leading-9 font-semibold text-[#78555e] mb-2">
        Một món quà nhỏ cho ngày 1/6
      </h2>
      <p className="font-['Nunito_Sans'] text-lg leading-7 text-[#4f4446] mb-8">
        Dành riêng cho một cô gái đặc biệt.
      </p>

      <button
        type="button"
        className="btn-pillowy pulse-effect px-8 py-4 rounded-full font-['Nunito_Sans'] text-sm tracking-[0.05em] font-bold text-[#7a5761] flex items-center gap-2 group"
        onClick={onOpen}
      >
        Mở món quà
        <Icon name="celebration" className="group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  )
}
