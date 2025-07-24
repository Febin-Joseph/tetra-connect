const ShapeOption = ({ shape, isSelected, onSelect, previewUrl }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-3 rounded-xl transition-colors duration-150 focus:outline-none overflow-hidden border-2 ${
        isSelected ? "border-blue-500 shadow-lg bg-blue-50" : "border-gray-200 bg-white hover:border-gray-400"
      }`}
      style={{ width: 48, height: 48 }}
    >
      {previewUrl ? (
        <img src={previewUrl} alt={shape.name} className="w-full h-full object-contain" />
      ) : (
      <div className="w-8 h-8 bg-black mx-auto mb-2 grid grid-cols-3 gap-px rounded-lg">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-white"
            style={{
              borderRadius: shape.id === "circle" ? "50%" : shape.id === "rounded" ? "2px" : "0",
            }}
          ></div>
        ))}
      </div>
      )}
    </button>
  )
}

export default ShapeOption;