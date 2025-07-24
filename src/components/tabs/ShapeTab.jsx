import { shapeStyles, borderStyles, centerStyles } from "../../data/shapeOptions"
import ShapeOption from "../ShapeOption"
import ColorInput from "../ColorInput"
import { useEffect, useState } from "react"
import { generateQRCode } from "../../utils/qrGenerator"

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
  onOptionClick,
  websiteUrl,
}) => {
  const [previews, setPreviews] = useState({})

  useEffect(() => {
    if (!websiteUrl) return
    shapeStyles.forEach(async (shape) => {
      const preview = await generateQRCode({
        websiteUrl,
        selectedShape: shape.id,
        borderColor: borderColor || "#000000",
        backgroundColor: backgroundColor || "#FFFFFF",
        selectedLogo: "none",
        isInverted: false,
      })
      setPreviews((prev) => ({ ...prev, [shape.id]: preview }))
    })
  }, [websiteUrl, borderColor, backgroundColor])

  return (
    <div className="space-y-6 border border-gray-200 rounded-[10px] p-3">
      {/* Shape Style */}
      <div>
        <h3 className="font-medium mb-4">Shape style</h3>
        <div className="group">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide group-hover:scrollbar-default">
          {shapeStyles.map((shape) => (
              <div className="flex-shrink-0" key={shape.id}>
            <ShapeOption
              shape={shape}
              isSelected={selectedShape === shape.id}
              onSelect={() => {
                setSelectedShape(shape.id)
                    if (onOptionClick) onOptionClick()
              }}
              previewUrl={previews[shape.id]}
            />
              </div>
          ))}
          </div>
        </div>
      </div>

      {/* Color Controls */}
      <div className="grid grid-cols-2 gap-6 bg-gray-100 p-2 rounded-[5px]">
        <ColorInput label="Border colour" value={borderColor} onChange={setBorderColor} />
        <ColorInput label="Background colour" value={backgroundColor} onChange={setBackgroundColor} />
      </div>
      {/* Border Style */}
      <div>
        <h3 className="font-medium mb-4">Border style</h3>
        <div className="group">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide group-hover:scrollbar-default">
          {borderStyles.map((style) => (
              <div className="flex-shrink-0" key={style.id}>
            <button
              onClick={() => {
                setSelectedBorderStyle(style.id)
                    if (onOptionClick) onOptionClick()
              }}
                  className={`p-3 rounded-xl transition-colors duration-150 focus:outline-none ${
                    selectedBorderStyle === style.id ? "bg-blue-100" : "bg-white border border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className={`w-6 h-6 border-2 border-black mx-auto ${style.className}`}></div>
            </button>
              </div>
          ))}
          </div>
        </div>
      </div>

      {/* Center Style */}
      <div>
        <h3 className="font-medium mb-4">Center style</h3>
        <div className="group">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide group-hover:scrollbar-default">
          {centerStyles.map((style) => (
              <div className="flex-shrink-0" key={style.id}>
            <button
              onClick={() => {
                setSelectedCenterStyle(style.id)
                    if (onOptionClick) onOptionClick()
              }}
                  className={`p-3 rounded-xl transition-colors duration-150 focus:outline-none ${
                    selectedCenterStyle === style.id ? "bg-blue-100" : "bg-white border border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className={`w-6 h-6 bg-black mx-auto ${style.className}`}></div>
            </button>
              </div>
          ))}
          </div>
        </div>
      </div>

      {/* Center Color Controls */}
      <div className="grid grid-cols-2 gap-6 bg-gray-100 p-2 rounded-[5px]">
        <ColorInput label="Border colour" value={centerBorderColor} onChange={setCenterBorderColor} />
        <ColorInput label="Background colour" value={centerBackgroundColor} onChange={setCenterBackgroundColor} />
      </div>
    </div>
  )
}

export default ShapeTab;