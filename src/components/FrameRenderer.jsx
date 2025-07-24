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

  // QRBox: white bg and border only for 'none', just padding for others
  const QRBox = selectedFrame === "none"
    ? (
      <div className="bg-white rounded-lg flex items-center justify-center w-56 h-56 p-4 mx-auto mt-2 border border-gray-200">
        <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="max-w-full max-h-full object-contain" />
      </div>
    )
    : (
      <div className="flex items-center justify-center w-56 h-56 p-4 mx-auto mt-2">
        <img src={qrCodeDataUrl || "/placeholder.svg"} alt="QR Code" className="max-w-full max-h-full object-contain" />
      </div>
    );

  if (selectedFrame === "none" && qrCodeDataUrl) {
    return (
      <div className="flex items-center justify-center w-64 h-64">
        {QRBox}
      </div>
    )
  }

  if (selectedFrame === "classic" && qrCodeDataUrl) {
    return (
      <div className="flex flex-col items-center w-64">
        <div className="border-4 border-black rounded-lg">
          {QRBox}
        </div>
        <div className="w-56 h-10 bg-black rounded-b-lg flex items-center justify-center mt-2">
          <span className="text-base text-white font-bold">{frameText}</span>
        </div>
      </div>
    )
  }

  if (selectedFrame === "pointer" && qrCodeDataUrl) {
    return (
      <div className="flex flex-col items-center w-64">
        <div className="border-4 border-black rounded-lg">
          {QRBox}
        </div>
        <div className="relative w-56">
          <div className="w-56 h-10 bg-black rounded-b-lg flex items-center justify-center mt-2">
            <span className="text-base text-white font-bold">{frameText}</span>
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
      <div className="flex flex-col items-center w-64">
        <div className="border-4 border-black rounded-lg">
          {QRBox}
        </div>
        <div className="w-56 h-10 bg-white border-x-4 border-b-4 border-black rounded-b-lg flex items-center justify-center mt-2">
          <span className="text-base text-black font-bold">{frameText}</span>
        </div>
      </div>
    )
  }

  return qrCodeDataUrl ? (
    <img src={qrCodeDataUrl || "/placeholder.svg"} alt="Generated QR Code" className="w-48 h-48" />
  ) : null
}

export default FrameRenderer;