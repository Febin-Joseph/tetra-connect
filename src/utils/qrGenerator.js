import QRCode from "qrcode"

export const generateQRCode = async (settings) => {
  const { websiteUrl, selectedShape, borderColor, backgroundColor, selectedLogo, isInverted } = settings

  if (!websiteUrl) return ""

  try {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Generate QR code
    await QRCode.toCanvas(canvas, websiteUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: isInverted ? backgroundColor : borderColor,
        light: isInverted ? borderColor : backgroundColor,
      },
    })

    // Add logo if selected
    if (selectedLogo !== "none") {
      await addLogoToQR(ctx, canvas, selectedLogo)
    }

    return canvas.toDataURL()
  } catch (error) {
    console.error("Error generating QR code:", error)
    return ""
  }
}

const addLogoToQR = async (ctx, canvas, selectedLogo) => {
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const logoSize = 40

  // Create a white circular background for the logo
  ctx.fillStyle = "#FFFFFF"
  ctx.beginPath()
  ctx.arc(centerX, centerY, logoSize / 2 + 3, 0, 2 * Math.PI)
  ctx.fill()

  // Add colored circle background based on logo type
  const logoColors = {
    phone: "#10B981",
    wifi: "#06B6D4",
    email: "#F59E0B",
    location: "#EF4444",
    link: "#8B5CF6",
    card: "#3B82F6",
    qr: "#EC4899",
    image: "#10B981",
  }

  if (logoColors[selectedLogo]) {
    ctx.fillStyle = logoColors[selectedLogo]
    ctx.beginPath()
    ctx.arc(centerX, centerY, logoSize / 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  // Add icon representation
  ctx.fillStyle = "#FFFFFF"
  ctx.font = "16px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"

  switch (selectedLogo) {
    case "phone":
      ctx.fillText("📞", centerX, centerY)
      break
    case "wifi":
      // Draw WiFi symbol
      ctx.strokeStyle = "#FFFFFF"
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY + 5, i * 6, -Math.PI * 0.7, -Math.PI * 0.3)
        ctx.stroke()
      }
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(centerX, centerY + 5, 1.5, 0, 2 * Math.PI)
      ctx.fill()
      break
    case "email":
      ctx.fillText("✉", centerX, centerY)
      break
    case "location":
      ctx.fillText("📍", centerX, centerY)
      break
    default:
      ctx.fillText("🔗", centerX, centerY)
  }
};