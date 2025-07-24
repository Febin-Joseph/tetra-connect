const ShapeOption = ({ shape, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-3 rounded-xl transition-colors duration-150 focus:outline-none ${
        isSelected ? "bg-blue-100" : "bg-white border border-gray-200 hover:border-gray-400"
      }`}
    >
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
    </button>
  )
}

export default ShapeOption;