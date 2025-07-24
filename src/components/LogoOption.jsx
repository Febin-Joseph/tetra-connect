const LogoOption = ({ logo, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-4 border-2 rounded-lg hover:border-blue-500 transition-colors ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      {logo.id === "none" ? (
        <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center bg-gray-200">
          <span className="text-lg">🚫</span>
        </div>
      ) : (
        <div
          className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
          style={{ backgroundColor: logo.color }}
        >
          <logo.icon className="w-4 h-4 text-white" />
        </div>
      )}
    </button>
  )
}

export default LogoOption;