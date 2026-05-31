import { useMemo } from 'react'
import { Icon } from './Icon'

export function GiftModal({ selectedGift, onClose }) {
  const currentGiftText = useMemo(
    () => (selectedGift ? `Em chọn ${selectedGift.title} nè! 🎁` : ''),
    [selectedGift],
  )

  if (!selectedGift) {
    return null
  }

  const messengerHref = `https://m.me/nguyenngothanhphat?text=${encodeURIComponent(currentGiftText)}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentGiftText)
    window.alert(`Đã sao chép: ${currentGiftText}`)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-100 transition-opacity duration-400">
      <button
        type="button"
        className="absolute inset-0 bg-[#dedcb166] backdrop-blur-xl"
        onClick={onClose}
        aria-label="Đóng"
      />

      <div className="relative glass-card w-full max-w-sm rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl scale-100 opacity-100 transition-all duration-400">
        <button
          type="button"
          className="absolute top-4 right-4 text-[#4f4446] hover:text-[#78555e] transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="close" />
        </button>

        <div className="w-32 h-32 mb-4 floating">
          <img src={selectedGift.image} alt={selectedGift.title} className="w-full h-full object-contain" />
        </div>

        <p className="font-['Nunito_Sans'] text-lg leading-7 text-[#1d1d03] mb-8 italic">{selectedGift.message}</p>

        <div className="w-full bg-[#ffd1dc4d] p-4 rounded-[2rem] mb-8">
          <p className="font-['Nunito_Sans'] text-xs leading-4 font-semibold text-[#7a5761]">
            “Dù như thế nào thì trong lòng anh, em vẫn luôn là một cô bé nhỏ cần được yêu thương, được dịu dàng và được nhận những điều thật dễ thương.”
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <a
            className="w-full btn-pillowy py-4 rounded-full font-['Nunito_Sans'] text-sm tracking-[0.05em] font-bold text-[#7a5761] flex justify-center items-center gap-2"
            href={messengerHref}
            target="_blank"
            rel="noreferrer"
          >
            Gửi món quà này cho anh
            <Icon name="favorite" fill />
          </a>

          <button type="button" className="text-xs font-semibold text-[#78555e] hover:underline" onClick={handleCopy}>
            Sao chép thông điệp
          </button>
        </div>
      </div>
    </div>
  )
}
