import React from "react"

const MiniFrameRenderer = ({ frameId, qrCodeUrl }) => {
  if (frameId === "none") {
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
  if (frameId === "envelope") {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-white rounded-md border border-gray-300 overflow-hidden">
        {/* Envelope shape */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white border-b-2 border-gray-400" style={{ zIndex: 1 }} />
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[18px] border-r-[18px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-400 mx-auto" style={{ left: '50%', transform: 'translateX(-50%)' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white border-t-2 border-gray-400" style={{ zIndex: 1 }} />
        {/* QR code */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
          ) : (
            <div className="w-8 h-8 bg-gray-200 rounded" />
          )}
        </div>
      </div>
    )
  }
  if (frameId === "card") {
    return (
      <div className="w-full h-full bg-white border border-gray-300 rounded shadow flex items-center justify-center">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded" />
        )}
      </div>
    )
  }
  if (frameId === "hand") {
    return (
      <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center relative">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded" />
        )}
        <span className="absolute bottom-0 right-0 text-xs" style={{ fontSize: '12px' }}>✋</span>
      </div>
    )
  }
  if (frameId === "note") {
    return (
      <div className="w-full h-full bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded" />
        )}
      </div>
    )
  }
  if (frameId === "phone") {
    return (
      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
        <div className="w-8 h-12 bg-white rounded-lg flex items-center justify-center">
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code" className="w-6 h-6 object-contain" />
          ) : (
            <div className="w-6 h-6 bg-gray-200 rounded" />
          )}
        </div>
      </div>
    )
  }
  if (frameId === "delivery") {
    return (
      <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center relative">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded" />
        )}
        <span className="absolute bottom-0 right-0 text-xs" style={{ fontSize: '12px' }}>🛵</span>
      </div>
    )
  }
  if (frameId === "coffee") {
    return (
      <div className="w-full h-full bg-amber-100 border border-amber-300 rounded flex items-center justify-center relative">
        <span className="absolute top-0 left-0 w-full text-center text-xs" style={{ fontSize: '12px' }}>☕</span>
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded" />
        )}
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