import { useState, useEffect } from "react"
import ContentInput from "../components/ContentInput"
import DesignTabs from "../components/DesignTabs"
import QRPreview from "../components/QRPreview"
import { generateQRCode } from "../utils/qrGenerator"

const QRGenerator = () => {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [activeTab, setActiveTab] = useState("frame")
  const [selectedFrame, setSelectedFrame] = useState("none")
  const [selectedLogo, setSelectedLogo] = useState("none")
  const [selectedShape, setSelectedShape] = useState("square")
  const [selectedBorderStyle, setSelectedBorderStyle] = useState("square")
  const [selectedCenterStyle, setSelectedCenterStyle] = useState("square")
  const [borderColor, setBorderColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [centerBorderColor, setCenterBorderColor] = useState("#000000")
  const [centerBackgroundColor, setCenterBackgroundColor] = useState("#000000")
  const [frameText, setFrameText] = useState("Scan me!")
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("")
  const [isInverted, setIsInverted] = useState(false)
  const [isCenterInverted, setIsCenterInverted] = useState(false)

  const qrSettings = {
    websiteUrl,
    selectedShape,
    selectedBorderStyle,
    selectedCenterStyle,
    borderColor,
    backgroundColor,
    centerBorderColor,
    centerBackgroundColor,
    selectedLogo,
    isInverted,
    isCenterInverted,
  }

  useEffect(() => {
    if (websiteUrl) {
      generateQRCode(qrSettings).then(setQrCodeDataUrl)
    }
  }, [
    websiteUrl,
    selectedShape,
    selectedBorderStyle,
    selectedCenterStyle,
    borderColor,
    backgroundColor,
    centerBorderColor,
    centerBackgroundColor,
    selectedLogo,
    isInverted,
    isCenterInverted,
  ])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-8">
            <ContentInput websiteUrl={websiteUrl} setWebsiteUrl={setWebsiteUrl} />

            <DesignTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedFrame={selectedFrame}
              setSelectedFrame={setSelectedFrame}
              selectedLogo={selectedLogo}
              setSelectedLogo={setSelectedLogo}
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
              frameText={frameText}
              setFrameText={setFrameText}
              isInverted={isInverted}
              setIsInverted={setIsInverted}
              isCenterInverted={isCenterInverted}
              setIsCenterInverted={setIsCenterInverted}
            />
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            <QRPreview
              websiteUrl={websiteUrl}
              qrCodeDataUrl={qrCodeDataUrl}
              selectedFrame={selectedFrame}
              frameText={frameText}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRGenerator;