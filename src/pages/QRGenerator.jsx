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
  const [websiteInputTrigger, setWebsiteInputTrigger] = useState(0)

  const triggerWebsiteValidation = () => setWebsiteInputTrigger(t => t + 1)

  // Track if user has interacted with any customization
  const isDefault =
    selectedShape === "square" &&
    selectedBorderStyle === "square" &&
    selectedCenterStyle === "square" &&
    borderColor === "#000000" &&
    backgroundColor === "#FFFFFF" &&
    centerBorderColor === "#000000" &&
    centerBackgroundColor === "#000000"

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
    isDefault, // pass to generator
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Panel */}
      <div className="lg:col-span-2 space-y-8">
        <ContentInput websiteUrl={websiteUrl} setWebsiteUrl={setWebsiteUrl} triggerValidation={websiteInputTrigger} />

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
          websiteUrl={websiteUrl}
          triggerWebsiteValidation={triggerWebsiteValidation}
        />
      </div>

      {/* Right Panel */}
      <div className="space-y-6">
        <QRPreview
          websiteUrl={websiteUrl}
          qrCodeDataUrl={qrCodeDataUrl}
          selectedFrame={selectedFrame}
          frameText={frameText}
          selectedShape={selectedShape}
        />
      </div>
    </div>
  )
}

export default QRGenerator;