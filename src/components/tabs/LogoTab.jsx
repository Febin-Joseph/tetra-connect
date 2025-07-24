import { logoOptions } from "../../data/logoOptions"
import LogoOption from "../LogoOption"
import { Upload } from "lucide-react"

const LogoTab = ({ selectedLogo, setSelectedLogo }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Select a logo</h3>
        <div className="grid grid-cols-5 gap-3">
          {logoOptions.map((logo) => (
            <LogoOption
              key={logo.id}
              logo={logo}
              isSelected={selectedLogo === logo.id}
              onSelect={() => setSelectedLogo(logo.id)}
            />
          ))}
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-600 mb-1">Drag and drop or click to upload a logo</p>
        <p className="text-sm text-gray-500">(JPG, JPEG, or PNG / 2MB max)</p>
      </div>
    </div>
  )
}

export default LogoTab;