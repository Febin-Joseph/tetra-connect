import MiniFrameRenderer from "./MiniFrameRenderer"

const FrameOption = ({ frame, isSelected, onSelect, previewUrl, selectedShape }) => {
  return (
    <button
      onClick={onSelect}
      className={`p-4 rounded-xl transition-colors duration-150 focus:outline-none flex items-center justify-center overflow-hidden border-2 ${
        isSelected ? "border-blue-500 shadow-lg bg-blue-50" : "border-gray-200 bg-white hover:border-gray-400"
      }`}
      style={{ width: 72, height: 72 }}
    >
      <MiniFrameRenderer
        frameId={frame.id}
        qrCodeUrl={previewUrl}
        selectedShape={selectedShape}
      />
    </button>
  )
}

export default FrameOption;