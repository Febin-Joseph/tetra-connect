const FrameOption = ({ frame, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-4 rounded-xl transition-colors duration-150 focus:outline-none flex items-center justify-center ${
        isSelected ? "bg-blue-100" : "bg-white"
      }`}
    >
      {frame.id === "envelope" ? (
        <img src="/envelope.svg" alt="Envelope" className="w-100 h-100 object-contain" />
      ) : frame.id === "none" ? (
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">🚫</span>
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center relative">
          <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
        </div>
      )}
    </button>
  )
}

export default FrameOption;