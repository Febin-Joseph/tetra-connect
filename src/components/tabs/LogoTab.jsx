import { logoOptions } from "../../data/logoOptions"
import LogoOption from "../LogoOption"
import { Upload } from "lucide-react"

const LogoTab = ({ selectedLogo, setSelectedLogo, onOptionClick }) => {
  return (
    <div className="space-y-6 border border-gray-200 rounded-[10px] p-3">
      <div>
        <h3 className="font-medium mb-4">Select a logo</h3>
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {logoOptions.map((logo) => (
            <div className="flex-shrink-0" key={logo.id}>
            <LogoOption
              logo={logo}
              isSelected={selectedLogo === logo.id}
              onSelect={() => {
                setSelectedLogo(logo.id)
                  if (onOptionClick) onOptionClick()
              }}
            />
            </div>
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