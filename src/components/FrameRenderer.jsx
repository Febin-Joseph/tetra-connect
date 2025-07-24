const FrameRenderer = ({ websiteUrl, qrCodeDataUrl, selectedFrame, frameText }) => {
  if (!websiteUrl) {
    return (
      <div className="w-48 h-48 rounded-lg flex items-center justify-center">
        <img 
        src="/qr-code-right.svg" 
        alt="qr-code"/>
      </div>
    )
  }

  // QRBox: more padding, smaller QR code for all frames
  const QRBox = (
    <div className="flex items-center justify-center w-56 h-56 p-6">
      <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="max-w-[168px] max-h-[168px] object-contain" />
    </div>
  );

  if (selectedFrame === "none" && qrCodeDataUrl) {
    return (
      <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center w-64 h-64 border border-gray-200">
        {QRBox}
      </div>
    )
  }

  if (selectedFrame === "classic" && qrCodeDataUrl) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-4 border-black flex flex-col items-center w-72 overflow-hidden">
        {QRBox}
        <div className="w-full flex items-center justify-center pb-6">
          <span className="text-lg text-black font-bold">{frameText}</span>
        </div>
      </div>
    )
  }

  if (selectedFrame === "pointer" && qrCodeDataUrl) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-4 border-black flex flex-col items-center w-72 overflow-hidden">
        {QRBox}
        <div className="relative w-full">
          <div className="w-full h-14 bg-black flex items-center justify-center">
            <span className="text-lg text-white font-bold">{frameText}</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-8 h-6">
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16L0 0H32L16 16Z" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  if (selectedFrame === "text-inside" && qrCodeDataUrl) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-4 border-black flex flex-col items-center w-72 overflow-hidden">
        {QRBox}
        <div className="w-full border-t-4 border-black flex flex-col items-center justify-center">
          <span className="text-lg text-black font-bold py-4">{frameText}</span>
        </div>
      </div>
    )
  }

  return qrCodeDataUrl ? (
    <img src={qrCodeDataUrl || "/placeholder.svg"} alt="Generated QR Code" className="w-48 h-48" />
  ) : null
}

export default FrameRenderer;