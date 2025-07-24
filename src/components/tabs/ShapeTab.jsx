import { shapeStyles, borderStyles, centerStyles } from "../../data/shapeOptions"
import ShapeOption from "../ShapeOption"
import ColorInput from "../ColorInput"

const ShapeTab = ({
  selectedShape,
  setSelectedShape,
  selectedBorderStyle,
  setSelectedBorderStyle,
  selectedCenterStyle,
  setSelectedCenterStyle,
  borderColor,
  setBorderColor,
  backgroundColor,
  setBackgroundColor,
  centerBorderColor,
  setCenterBorderColor,
  centerBackgroundColor,
  setCenterBackgroundColor,
  isInverted,
  setIsInverted,
  isCenterInverted,
  setIsCenterInverted,
}) => {
  return (
    <div className="space-y-6">
      {/* Shape Style */}
      <div>
        <h3 className="font-medium mb-4">Shape style</h3>
        <div className="grid grid-cols-5 gap-3">
          {shapeStyles.map((shape) => (
            <ShapeOption
              key={shape.id}
              shape={shape}
              isSelected={selectedShape === shape.id}
              onSelect={() => setSelectedShape(shape.id)}
            />
          ))}
        </div>
      </div>

      {/* Color Controls */}
      <div className="grid grid-cols-2 gap-6">
        <ColorInput label="Border colour" value={borderColor} onChange={setBorderColor} />
        <ColorInput label="Background colour" value={backgroundColor} onChange={setBackgroundColor} />
      </div>

      <button
        onClick={() => setIsInverted(!isInverted)}
        className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
      >
        🔄 Invert
      </button>

      {/* Border Style */}
      <div>
        <h3 className="font-medium mb-4">Border style</h3>
        <div className="grid grid-cols-7 gap-3">
          {borderStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedBorderStyle(style.id)}
              className={`p-3 border-2 rounded-lg hover:border-blue-500 transition-colors ${
                selectedBorderStyle === style.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className={`w-6 h-6 border-2 border-black mx-auto ${style.className}`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Center Style */}
      <div>
        <h3 className="font-medium mb-4">Center style</h3>
        <div className="grid grid-cols-7 gap-3">
          {centerStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedCenterStyle(style.id)}
              className={`p-3 border-2 rounded-lg hover:border-blue-500 transition-colors ${
                selectedCenterStyle === style.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className={`w-6 h-6 bg-black mx-auto ${style.className}`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Center Color Controls */}
      <div className="grid grid-cols-2 gap-6">
        <ColorInput label="Border colour" value={centerBorderColor} onChange={setCenterBorderColor} />
        <ColorInput label="Background colour" value={centerBackgroundColor} onChange={setCenterBackgroundColor} />
      </div>

      <button
        onClick={() => setIsCenterInverted(!isCenterInverted)}
        className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
      >
        🔄 Invert
      </button>
    </div>
  )
}

export default ShapeTab;