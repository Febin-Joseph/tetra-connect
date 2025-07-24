const FrameOption = ({ frame, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-4 border-2 rounded-lg hover:border-blue-500 transition-colors ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      {frame.id === "none" ? (
        <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
          <span className="text-2xl">🚫</span>
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center relative">
          <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
          {frame.id === "envelope" && (
            <div className="absolute -top-1 left-0 w-0 h-0 border-l-6 border-r-6 border-t-4 border-l-transparent border-r-transparent border-t-gray-500"></div>
          )}
          {frame.id === "phone" && <div className="absolute inset-0 border-2 border-gray-500 rounded-lg"></div>}
        </div>
      )}
      <div className="text-xs text-gray-600 text-center">{frame.name}</div>
    </button>
  )
}

export default FrameOption;