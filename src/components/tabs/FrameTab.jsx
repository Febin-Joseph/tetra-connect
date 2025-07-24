import { frameOptions } from "../../data/frameOptions"
import FrameOption from "../FrameOption"
import ColorInput from "../ColorInput"

const FrameTab = ({
  selectedFrame,
  setSelectedFrame,
  frameText,
  setFrameText,
  borderColor,
  setBorderColor,
  backgroundColor,
  setBackgroundColor,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {frameOptions.map((frame) => (
          <FrameOption
            key={frame.id}
            frame={frame}
            isSelected={selectedFrame === frame.id}
            onSelect={() => setSelectedFrame(frame.id)}
          />
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