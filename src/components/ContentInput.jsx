import { useState } from "react"

const ContentInput = ({ websiteUrl, setWebsiteUrl }) => {
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState("")

  const validate = (value) => {
    if (!value) return "Required field"
    if (!/^https?:\/\//.test(value)) return "URL must start with http or https"
    return ""
  }

  const handleChange = (e) => {
    const value = e.target.value
    setWebsiteUrl(value)
    if (touched) {
      setError(validate(value))
    }
  }

  const handleBlur = () => {
    setTouched(true)
    setError(validate(websiteUrl))
  }

  const isError = touched && error

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-bold">1</div>
        <h2 className="text-xl font-semibold">Complete the content</h2>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter your Website</label>
        <input
          type="text"
          value={websiteUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="E.g. https://www.myweb.com/"
          className={`w-full h-12 px-3 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isError ? 'border-red-500' : 'border-gray-300'}`}
        />
        {isError && (
          <div className="flex items-center gap-1 mt-2 text-red-500 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentInput;