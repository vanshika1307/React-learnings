import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const copyPasswordToClickboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*_+";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white mb-2">Password Generator</h1>
          <p className="text-gray-300 text-sm">Create secure passwords with custom options</p>
        </div>

        {/* Password Display */}
        <div className="relative mb-6">
          <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-600/30 shadow-lg">
            <input
              type="text"
              value={password}
              className="outline-none w-full px-6 py-4 text-lg bg-transparent text-white placeholder-gray-400 font-mono"
              placeholder="Your secure password will appear here..."
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClickboard} className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Copy
            </button>
          </div>
        </div>

        {/* Controls Section */}
        <div className="space-y-6 mb-8">
          {/* Length Control */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-white font-semibold">Password Length</label>
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={15}
              value={length}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => setNumberAllowed((prev) => !prev)}
                  className="sr-only"
                />
                <div className={`relative w-6 h-6 rounded-lg border-2 transition-all duration-200 ${numberAllowed
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500'
                    : 'border-gray-400 bg-transparent'
                  }`}>

                </div>
                <div className="ml-3">
                  <span className="text-white font-medium">Include Numbers</span>
                </div>
              </label>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={characterAllowed}
                  id="characterInput"
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                  className="sr-only"
                />
                <div className={`relative w-6 h-6 rounded-lg border-2 transition-all duration-200 ${characterAllowed
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500'
                    : 'border-gray-400 bg-transparent'
                  }`}>

                </div>
                <div className="ml-3">
                  <span className="text-white font-medium">Special Characters</span>

                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-2xl hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          onClick={generatePassword}
        >
          <span className="flex items-center justify-center">

            Generate New Password
          </span>
        </button>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">
            Always use unique passwords for different accounts
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;
