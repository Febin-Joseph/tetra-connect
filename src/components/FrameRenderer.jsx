const FrameRenderer = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText }) => {
  if (!websiteUrl) {
    return (
      <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2"></div>
          <div className="text-xs">QR Code Preview</div>
        </div>
      </div>
    )
  }

  if (selectedFrame === "envelope" && qrCodeDataUrl) {
    return (
      <div className="relative">
        <div className="w-64 h-48 bg-white border-4 border-black rounded-lg relative overflow-hidden">
          {/* Envelope flap */}
          <div className="absolute top-0 left-0 w-full h-16 bg-white border-b-4 border-black">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-t-[64px] border-l-transparent border-r-transparent border-t-black"></div>
          </div>
          {/* QR Code */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-24 h-24" />
          </div>
          {/* Text */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black font-semibold text-sm">
            {frameText}
          </div>
        </div>
      </div>
    )
  }

  if (selectedFrame === "card" && qrCodeDataUrl) {
    return (
      <div className="w-64 h-40 bg-white border-2 border-gray-300 rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex-1">
          <div className="text-sm font-semibold mb-1">Business Card</div>
          <div className="text-xs text-gray-600">{frameText}</div>
        </div>
        <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-20 h-20" />
      </div>
    )
  }

  if (selectedFrame === "hand" && qrCodeDataUrl) {
    return (
      <div className="relative">
        <div className="w-48 h-48 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-32 h-32" />
        </div>
        <div className="absolute -bottom-2 -right-2 text-4xl">✋</div>
      </div>
    )
  }

  if (selectedFrame === "note" && qrCodeDataUrl) {
    return (
      <div className="w-48 h-56 bg-yellow-100 border border-yellow-300 rounded-lg p-4 shadow-md">
        <div className="text-center mb-2">
          <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-32 h-32 mx-auto" />
        </div>
        <div className="text-center text-sm font-medium">{frameText}</div>
      </div>
    )
  }

  if (selectedFrame === "phone" && qrCodeDataUrl) {
    return (
      <div className="w-32 h-56 bg-black rounded-3xl p-2 shadow-lg">
        <div className="w-full h-full bg-white rounded-2xl p-4 flex items-center justify-center">
          <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-20 h-20" />
        </div>
      </div>
    )
  }

  if (selectedFrame === "delivery" && qrCodeDataUrl) {
    return (
      <div className="relative">
        <div className="w-48 h-32 bg-gray-200 rounded-lg p-4 flex items-center justify-center">
          <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-24 h-24" />
        </div>
        <div className="absolute -bottom-2 -right-2 text-3xl">🛵</div>
      </div>
    )
  }

  if (selectedFrame === "coffee" && qrCodeDataUrl) {
    return (
      <div className="w-40 h-48 bg-amber-100 rounded-lg border-2 border-amber-300 p-4">
        <div className="text-center mb-2 text-2xl">☕</div>
        <div className="flex items-center justify-center">
          <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="w-24 h-24" />
        </div>
        <div className="text-center text-sm font-medium mt-2">{frameText}</div>
      </div>
    )
  }

  return qrCodeDataUrl ? (
    <img src={qrCodeDataUrl || "/placeholder.svg"} alt="Generated QR Code" className="w-48 h-48" />
  ) : null
}

export default FrameRenderer;