import { ChevronDown } from "lucide-react"
import FrameRenderer from "./FrameRenderer"

const QRPreview = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText, selectedShape }) => {
  const downloadQR = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a")
      link.download = "qr-code.png"
      link.href = qrCodeDataUrl
      link.click()
    }
  }

  return (
    <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center w-full h-full min-h-[420px] justify-between">
      <div className="flex items-center gap-3 mb-6 w-full">
        <div className="w-8 h-8 bg-gray-700 text-white rounded-md flex items-center justify-center font-bold">3</div>
        <h2 className="text-xl font-semibold text-gray-800">Download your QR</h2>
      </div>
      <div className="flex flex-col items-center flex-1 justify-center">
        <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8" style={{ width: '200px', height: '200px' }}>
          <FrameRenderer
            websiteUrl={websiteUrl}
            qrCodeDataUrl={qrCodeDataUrl}
            selectedFrame={selectedFrame}
            frameText={frameText}
            selectedShape={selectedShape}
          />
        </div>
      </div>
      <button
        onClick={downloadQR}
        disabled={!qrCodeDataUrl}
        className="w-full bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 h-12 text-base font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-none border-none mt-6"
      >
        Download QR
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  )
}

export default QRPreview;