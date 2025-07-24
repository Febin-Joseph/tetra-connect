import { ChevronDown } from "lucide-react"
import FrameRenderer from "./FrameRenderer"
import { useRef } from "react"

const QRPreview = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText, selectedShape }) => {
  const canvasRef = useRef(null)

  const downloadQR = async () => {
    if (!qrCodeDataUrl) return
    const width = 400
    const qrSize = 200
    const cardPaddingTop = 48
    const cardPaddingBottom = 56
    const cardPaddingSides = 32
    const textHeight = 48
    const borderRadius = 40
    let height = cardPaddingTop + qrSize + textHeight + cardPaddingBottom
    // Create canvas
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext("2d")
    // Fill background
    ctx.fillStyle = "#fff"
    ctx.fillRect(0, 0, width, height)
    // Draw card border (rounded)
    if (selectedFrame !== "none") {
      ctx.save()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.moveTo(cardPaddingSides, cardPaddingTop + borderRadius)
      ctx.arcTo(cardPaddingSides, cardPaddingTop, width - cardPaddingSides, cardPaddingTop, borderRadius)
      ctx.arcTo(width - cardPaddingSides, cardPaddingTop, width - cardPaddingSides, height - cardPaddingBottom, borderRadius)
      ctx.arcTo(width - cardPaddingSides, height - cardPaddingBottom, cardPaddingSides, height - cardPaddingBottom, borderRadius)
      ctx.arcTo(cardPaddingSides, height - cardPaddingBottom, cardPaddingSides, cardPaddingTop, borderRadius)
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }
    // Draw QR code
    const qrImg = new window.Image()
    await new Promise(resolve => {
      qrImg.onload = resolve
      qrImg.src = qrCodeDataUrl
    })
    ctx.drawImage(qrImg, (width - qrSize) / 2, cardPaddingTop, qrSize, qrSize)
    // Draw frame text
    if (selectedFrame === "classic") {
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, cardPaddingTop + qrSize + textHeight / 2)
    } else if (selectedFrame === "text-inside") {
      // Draw horizontal line
      ctx.save()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 6
      ctx.beginPath()
      ctx.moveTo(cardPaddingSides + 8, cardPaddingTop + qrSize)
      ctx.lineTo(width - cardPaddingSides - 8, cardPaddingTop + qrSize)
      ctx.stroke()
      ctx.restore()
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, cardPaddingTop + qrSize + textHeight / 2 + 12)
    } else if (selectedFrame === "pointer") {
      // Black bar
      ctx.fillStyle = "#000"
      ctx.fillRect(cardPaddingSides, cardPaddingTop + qrSize, width - cardPaddingSides * 2, textHeight)
      // Pointer
      ctx.beginPath()
      ctx.moveTo(width / 2 - 40, cardPaddingTop + qrSize + textHeight)
      ctx.lineTo(width / 2 + 40, cardPaddingTop + qrSize + textHeight)
      ctx.lineTo(width / 2, cardPaddingTop + qrSize + textHeight + 32)
      ctx.closePath()
      ctx.fillStyle = "#000"
      ctx.fill()
      // Text
      ctx.font = "bold 28px Arial"
      ctx.fillStyle = "#fff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(frameText, width / 2, cardPaddingTop + qrSize + textHeight / 2)
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
      <div className="flex flex-col items-center flex-1 justify-center mt-10">
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