const ShapeOption = ({ shape, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-3 border-2 rounded-lg hover:border-blue-500 transition-colors ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      <div className="w-8 h-8 bg-black mx-auto mb-2 grid grid-cols-3 gap-px">
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
    </button>
  )
}

export default ShapeOption;