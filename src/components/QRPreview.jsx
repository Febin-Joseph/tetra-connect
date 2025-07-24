import { ChevronDown } from "lucide-react"
import FrameRenderer from "./FrameRenderer"
import { useRef } from "react"

const QRPreview = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText, selectedShape }) => {
  const canvasRef = useRef(null)

  const downloadQR = async () => {
    if (!qrCodeDataUrl) return
    const width = 400
    const qrSize = 300
    const barHeight = 60
    const pointerHeight = 32
    const padding = 24
    let height = qrSize + padding * 2
    if (selectedFrame === "classic" || selectedFrame === "pointer" || selectedFrame === "text-inside") {
      height += barHeight
    }
    if (selectedFrame === "pointer") {
      height += pointerHeight
    }
    // Create canvas
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")
    // Fill background
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, width, height)
    // Draw QR code
    const qrImg = new window.Image()
    await new Promise(resolve => {
      qrImg.onload = resolve
      qrImg.src = qrCodeDataUrl
    })
    ctx.drawImage(qrImg, (width - qrSize) / 2, padding, qrSize, qrSize)
    // Draw frame
    if (selectedFrame === "classic") {
      // Black bar below QR
      ctx.fillStyle = "#000"
      ctx.fillRect((width - qrSize) / 2, padding + qrSize, qrSize, barHeight)
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#fff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, padding + qrSize + barHeight / 2)
    } else if (selectedFrame === "pointer") {
      // Black bar
      ctx.fillStyle = "#000"
      ctx.fillRect((width - qrSize) / 2, padding + qrSize, qrSize, barHeight)
      // Pointer
      ctx.beginPath()
      ctx.moveTo(width / 2 - 40, padding + qrSize + barHeight)
      ctx.lineTo(width / 2 + 40, padding + qrSize + barHeight)
      ctx.lineTo(width / 2, padding + qrSize + barHeight + pointerHeight)
      ctx.closePath()
      ctx.fillStyle = "#000"
      ctx.fill()
      // Text
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#fff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, padding + qrSize + barHeight / 2)
    } else if (selectedFrame === "text-inside") {
      // White bar with black border below QR
      ctx.save()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo((width - qrSize) / 2, padding + qrSize)
      ctx.lineTo((width + qrSize) / 2, padding + qrSize)
      ctx.lineTo((width + qrSize) / 2, padding + qrSize + barHeight)
      ctx.lineTo((width - qrSize) / 2, padding + qrSize + barHeight)
      ctx.closePath()
      ctx.stroke()
      ctx.fillStyle = "#fff"
      ctx.fillRect((width - qrSize) / 2, padding + qrSize, qrSize, barHeight)
      ctx.restore()
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, padding + qrSize + barHeight / 2)
    }
    // Download
    const link = document.createElement("a")
    link.download = "qr-code.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center w-full h-full min-h-[420px] justify-between">
      <div className="flex items-center gap-3 mb-6 w-full">
        <div className="w-8 h-8 bg-gray-700 text-white rounded-md flex items-center justify-center font-bold">3</div>
        <h2 className="text-xl font-semibold text-gray-800">Download your QR</h2>
      </div>
      <div className="flex flex-col items-center flex-1 justify-center">
        <div className="rounded-2xl shadow-lg flex items-center justify-center mb-8" style={{ width: '200px', height: '200px' }}>
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