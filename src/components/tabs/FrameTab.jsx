import { frameOptions } from "../../data/frameOptions"
import FrameOption from "../FrameOption"
import ColorInput from "../ColorInput"
import { useEffect, useState } from "react"
import { generateQRCode } from "../../utils/qrGenerator"

const FrameTab = ({
  selectedFrame,
  setSelectedFrame,
  frameText,
  setFrameText,
  borderColor,
  setBorderColor,
  backgroundColor,
  setBackgroundColor,
  onOptionClick,
  websiteUrl,
  selectedShape,
}) => {
  const [previews, setPreviews] = useState({})

  useEffect(() => {
    if (!websiteUrl) return
    frameOptions.forEach(async (frame) => {
      // Only generate for real frames, skip 'none'
      if (frame.id === "none") return
      const preview = await generateQRCode({
        websiteUrl,
        selectedFrame: frame.id,
        borderColor: "#000000",
        backgroundColor: "#FFFFFF",
        selectedShape: selectedShape,
        selectedLogo: "none",
        isInverted: false,
      })
      setPreviews((prev) => ({ ...prev, [frame.id]: preview }))
    })
  }, [websiteUrl, selectedShape])

  return (
    <div className="space-y-4">
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {frameOptions.map((frame) => (
          <div className="flex-shrink-0" key={frame.id}>
          <FrameOption
            frame={frame}
            isSelected={selectedFrame === frame.id}
            onSelect={() => {
              setSelectedFrame(frame.id)
                if (onOptionClick) onOptionClick()
            }}
            previewUrl={previews[frame.id]}
            selectedShape={selectedShape}
          />
          </div>
        ))}
      </div>

      {selectedFrame !== "none" && (
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text</label>
            <input
              type="text"
              value={frameText}
              onChange={(e) => setFrameText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ColorInput label="Text color" value={borderColor} onChange={setBorderColor} />
            <ColorInput label="Background colour" value={backgroundColor} onChange={setBackgroundColor} />
          </div>
        </div>
      )}
    </div>
  )
}

export default FrameTab;