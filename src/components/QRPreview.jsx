import { ChevronDown } from "lucide-react"
import FrameRenderer from "./FrameRenderer"

const QRPreview = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText }) => {
  const downloadQR = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a")
      link.download = "qr-code.png"
      link.href = qrCodeDataUrl
      link.click()
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-bold">3</div>
        <h2 className="text-xl font-semibold">Download your QR</h2>
      </div>

      <div className="text-center">
        <div className="bg-gray-50 p-6 rounded-lg mb-4 flex items-center justify-center min-h-[200px]">
          <FrameRenderer
            websiteUrl={websiteUrl}
            qrCodeDataUrl={qrCodeDataUrl}
            selectedFrame={selectedFrame}
            frameText={frameText}
          />
        </div>

        <button
          onClick={downloadQR}
          disabled={!qrCodeDataUrl}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white h-12 text-base font-medium rounded-md transition-colors flex items-center justify-center gap-2"
        >
          Download QR
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default QRPreview;