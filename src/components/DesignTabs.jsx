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
  websiteUrl,
  triggerWebsiteValidation,
}) => {
  const tabs = [
    { id: "frame", label: "Frame" },
    { id: "shape", label: "Shape" },
    { id: "logo", label: "Logo" },
    { id: "level", label: "Level" },
  ]

  const handleOptionClick = () => {
    if (!websiteUrl || !/^https?:\/\//.test(websiteUrl) || /^https?:\/\/$/.test(websiteUrl)) {
      if (triggerWebsiteValidation) triggerWebsiteValidation()
    }
  }

  return (
    <div className="rounded-2xl p-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gray-700 text-white rounded-md flex items-center justify-center font-bold">2</div>
        <h2 className="text-xl font-semibold text-gray-800">Design your QR</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
              activeTab === tab.id ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:text-gray-900"
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
          onOptionClick={handleOptionClick}
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
          onOptionClick={handleOptionClick}
        />
      )}

      {activeTab === "logo" && <LogoTab selectedLogo={selectedLogo} setSelectedLogo={setSelectedLogo} onOptionClick={handleOptionClick} />}

      {activeTab === "level" && <LevelTab />}
    </div>
  )
}

export default DesignTabs;