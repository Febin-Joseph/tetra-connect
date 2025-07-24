import QRCodeStyling from "qr-code-styling-next"
import { logoOptions } from "../data/logoOptions";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const shapeTypeMap = {
  square: "square",
  rounded: "rounded",
  circle: "dots",
  dots: "dots",
  "extra-rounded": "extra-rounded",
  classy: "classy",
  lines: "classy-rounded",
  vertical: "vertical",
  horizontal: "horizontal",
}

const borderTypeMap = {
  square: "square",
  skewed: "square", // UI only, fallback
  rough: "square", // UI only, fallback
  "rounded-sm": "extra-rounded",
  rounded: "extra-rounded",
  "rounded-md": "extra-rounded",
  "rounded-lg": "extra-rounded",
  "rounded-xl": "extra-rounded",
  "rounded-2xl": "extra-rounded",
  "rounded-3xl": "extra-rounded",
  "rounded-full": "dot",
  star: "square", // UI only, fallback
  diamond: "square", // UI only, fallback
  cross: "square", // UI only, fallback
  "rounded-tl-lg": "extra-rounded",
  "rounded-tr-lg": "extra-rounded",
  "rounded-bl-lg": "extra-rounded",
  "rounded-br-lg": "extra-rounded",
};

const centerTypeMap = {
  square: "square",
  skewed: "square", // UI only, fallback
  rough: "square", // UI only, fallback
  rounded: "extra-rounded",
  circle: "dot",
  "rounded-lg": "extra-rounded",
  diamond: "square", // UI only, fallback
  star: "square", // UI only, fallback
  hexagon: "square", // UI only, fallback
  triangle: "square", // UI only, fallback
  heart: "square", // UI only, fallback
  cross: "square", // UI only, fallback
  oval: "dot",
  octagon: "square", // UI only, fallback
  plus: "square", // UI only, fallback
};

export const generateQRCode = async (settings) => {
  const {
    websiteUrl,
    selectedShape = "square",
    selectedBorderStyle = "square",
    selectedCenterStyle = "square",
    borderColor = "#000000",
    backgroundColor = "#FFFFFF",
    centerBorderColor = "#000000",
    centerBackgroundColor = "#000000",
    selectedLogo,
    isInverted,
    isDefault = false,
  } = settings

  if (!websiteUrl) return ""

  let qrOptions = {
    width: 200,
    height: 200,
    data: websiteUrl,
    image: undefined, // logo support can be added later
    backgroundOptions: {
      color: isInverted ? borderColor : backgroundColor,
    },
  }

  if (!isDefault) {
    qrOptions.dotsOptions = {
      color: isInverted ? backgroundColor : borderColor,
      type: shapeTypeMap[selectedShape] || "square",
    }
    // Border (outer finder pattern)
    qrOptions.cornersSquareOptions = {
      color: isInverted ? borderColor : centerBorderColor, // Only border color
      type: borderTypeMap[selectedBorderStyle] || "square",
    }
    // Center (inner finder pattern)
    qrOptions.cornersDotOptions = {
      color: isInverted ? backgroundColor : centerBackgroundColor, // Only center color
      type: centerTypeMap[selectedCenterStyle] || "square",
    }
  }
  // else: classic QR, no dotsOptions/corners options (library defaults to classic)

  // Create QRCodeStyling instance
  const qrCode = new QRCodeStyling(qrOptions)

  // Create an offscreen div for rendering
  const offscreen = document.createElement("div")
  offscreen.style.position = "absolute"
  offscreen.style.left = "-9999px"
  document.body.appendChild(offscreen)

  // Render the QR code
  await qrCode.append(offscreen)

  // Wait for rendering and extract the image as a data URL
  const canvas = offscreen.querySelector("canvas")
  let dataUrl = ""
  if (canvas) {
    // Draw logo if selected
    if (selectedLogo && selectedLogo !== "none") {
      const ctx = canvas.getContext("2d")
      // Find logo option
      const logo = (logoOptions || []).find(l => l.id === selectedLogo)
      if (logo && logo.icon && logo.icon !== "none") {
        // Draw a colored circle background
        ctx.save()
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 24, 0, 2 * Math.PI)
        ctx.fillStyle = logo.color || "#000"
        ctx.fill()
        ctx.restore()
        // Render SVG icon to string, then to data URL
        const svgString = renderToStaticMarkup(
          React.createElement(logo.icon, {
            color: "white",
            size: 20,
            style: { display: "block", margin: "auto" },
            strokeWidth: 2,
            stroke: "white",
            fill: "none"
          })
        )
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>${svgString}</svg>`
        const svg64 = btoa(unescape(encodeURIComponent(svg)))
        const image64 = `data:image/svg+xml;base64,${svg64}`
        const img = new window.Image()
        await new Promise(resolve => {
          img.onload = resolve
          img.src = image64
        })
        ctx.save()
        ctx.drawImage(img, canvas.width / 2 - 10, canvas.height / 2 - 10, 20, 20)
        ctx.restore()
      }
    }
    dataUrl = canvas.toDataURL()
  }

  // Clean up
  document.body.removeChild(offscreen)

  return dataUrl
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