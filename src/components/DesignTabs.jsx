import FrameTab from "./tabs/FrameTab"
import ShapeTab from "./tabs/ShapeTab"
import LogoTab from "./tabs/LogoTab"
import LevelTab from "./tabs/LevelTab"

const DesignTabs = ({
  activeTab,
  setActiveTab,
  selectedFrame,
  setSelectedFrame,
  selectedLogo,
  setSelectedLogo,
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
  frameText,
  setFrameText,
  isInverted,
  setIsInverted,
  isCenterInverted,
  setIsCenterInverted,
}) => {
  const tabs = [
    { id: "frame", label: "Frame" },
    { id: "shape", label: "Shape" },
    { id: "logo", label: "Logo" },
    { id: "level", label: "Level" },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-bold">2</div>
        <h2 className="text-xl font-semibold">Design your QR</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
              activeTab === tab.id ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "frame" && (
        <FrameTab
          selectedFrame={selectedFrame}
          setSelectedFrame={setSelectedFrame}
          frameText={frameText}
          setFrameText={setFrameText}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      )}

      {activeTab === "shape" && (
        <ShapeTab
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          selectedBorderStyle={selectedBorderStyle}
          setSelectedBorderStyle={setSelectedBorderStyle}
          selectedCenterStyle={selectedCenterStyle}
          setSelectedCenterStyle={setSelectedCenterStyle}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          centerBorderColor={centerBorderColor}
          setCenterBorderColor={setCenterBorderColor}
          centerBackgroundColor={centerBackgroundColor}
          setCenterBackgroundColor={setCenterBackgroundColor}
          isInverted={isInverted}
          setIsInverted={setIsInverted}
          isCenterInverted={isCenterInverted}
          setIsCenterInverted={setIsCenterInverted}
        />
      )}

      {activeTab === "logo" && <LogoTab selectedLogo={selectedLogo} setSelectedLogo={setSelectedLogo} />}

      {activeTab === "level" && <LevelTab />}
    </div>
  )
}

export default DesignTabs;