import {
  Phone,
  Link,
  MapPin,
  Wifi,
  Mail,
  CreditCard,
  QrCode,
  ImageIcon
} from "lucide-react"

export const logoOptions = [
  { id: "none", name: "No Logo", icon: "none", color: "#9CA3AF" },
  { id: "phone", name: "Phone", icon: Phone, color: "#10B981" },
  { id: "link", name: "Link", icon: Link, color: "#8B5CF6" },
  { id: "location", name: "Location", icon: MapPin, color: "#EF4444" },
  { id: "wifi", name: "WiFi", icon: Wifi, color: "#06B6D4" },
  { id: "email", name: "Email", icon: Mail, color: "#F59E0B" },
  { id: "card", name: "Card", icon: CreditCard, color: "#3B82F6" },
  { id: "qr", name: "QR", icon: QrCode, color: "#EC4899" },
  { id: "image", name: "Image", icon: ImageIcon, color: "#10B981" },
];