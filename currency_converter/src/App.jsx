import { Component, useState } from 'react'
import {Input}  from './components/index.js'

import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
const [amount, setAmount] = useState();
const [from , setFrom] = useState('inr');
const [to , setTo] = useState('usd');
const[convertedAmount , setConvertedAmount] = useState();

const currencyInfo = useCurrencyInfo(from);

const options = Object.keys(currencyInfo);
const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
}
const convert = () => {
setConvertedAmount((amount * currencyInfo[to]));
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
      </div>
      
      <div className="relative w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
        
          <h1 className="text-4xl font-bold text-white mb-2">Currency Converter</h1>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            {/* From Input */}
            <div className="mb-6">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative flex justify-center mb-6">
              <button
                type="button"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                onClick={swap}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* To Input */}
            <div className="mb-8">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </span>
            </button>
          </form>

          {/* Exchange Rate Info */}
          {convertedAmount && (
            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-1">Exchange Rate</p>
                <p className="text-white font-semibold">
                  1 {from.toUpperCase()} = {currencyInfo[to]?.toFixed(4)} {to.toUpperCase()}
                </p>
              </div>
            </div>
          )}
        </div>

       
      </div>
    </div>
);
}

export default App;
