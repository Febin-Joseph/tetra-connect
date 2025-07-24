import React from "react"

const MiniFrameRenderer = ({ frameId, qrCodeUrl }) => {
  if (frameId === "none") {
    return (
      <div className="flex items-center justify-center w-full h-full bg-white rounded-lg border border-gray-200">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-10 h-10 object-contain" />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded" />
        )}
      </div>
    )
  }
  if (frameId === "classic") {
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-white border-2 border-black rounded-lg flex items-center justify-center w-10 h-10 mx-auto mt-1">
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code" className="w-7 h-7 object-contain" />
          ) : (
            <div className="w-7 h-7 bg-gray-200 rounded" />
          )}
        </div>
        <div className="w-10 h-3 bg-black rounded-b-lg flex items-center justify-center mt-1">
          <span className="text-[8px] text-white font-bold">Text</span>
        </div>
      </div>
    )
  }
  if (frameId === "pointer") {
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-white border-2 border-black rounded-lg flex items-center justify-center w-10 h-10 mx-auto mt-1">
        {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code" className="w-7 h-7 object-contain" />
        ) : (
            <div className="w-7 h-7 bg-gray-200 rounded" />
        )}
      </div>
        <div className="relative w-10">
          <div className="w-10 h-3 bg-black rounded-b-lg flex items-center justify-center mt-1">
            <span className="text-[8px] text-white font-bold">Text</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L0 0H12L6 8Z" fill="black" />
            </svg>
          </div>
      </div>
      </div>
    )
  }
  if (frameId === "text-inside") {
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-white border-2 border-black rounded-lg flex items-center justify-center w-10 h-10 mx-auto mt-1">
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code" className="w-7 h-7 object-contain" />
          ) : (
            <div className="w-7 h-7 bg-gray-200 rounded" />
          )}
        </div>
        <div className="w-10 h-3 bg-white border-x-2 border-b-2 border-black rounded-b-lg flex items-center justify-center mt-1">
          <span className="text-[8px] text-black font-bold">Text</span>
      </div>
      </div>
    )
  }
  // fallback
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
      {qrCodeUrl ? (
        <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
      ) : (
        <div className="w-8 h-8 bg-gray-200 rounded" />
      )}
    </div>
  )
}

export default MiniFrameRenderer; 