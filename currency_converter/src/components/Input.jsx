import React, {useId} from "react";

function Input({
    label,
    className = "",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'inr',
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();
    
    return (
        <div className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 ${className}`}>
            {/* Label */}
            <div className="mb-4">
                <label htmlFor={amountInputId} className="text-white font-semibold text-lg flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></span>
                    {label}
                </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Amount Input */}
                <div className="space-y-2">
                    <p className="text-gray-300 text-sm font-medium">Amount</p>
                    <div className="relative">
                        <input
                            id={amountInputId}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-lg font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="number"
                            placeholder="0.00"
                            disabled={amountDisable}
                            value={amount || ''}
                            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        />
                        {!amountDisable && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                {/* Currency Select */}
                <div className="space-y-2">
                    <p className="text-gray-300 text-sm font-medium">Currency</p>
                    <div className="relative">
                        <select
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                            value={selectCurrency}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            disabled={currencyDisable}
                        >
                            {currencyOption.map((currency) => (
                                <option key={currency} value={currency} className="bg-slate-800 text-white">
                                    {currency.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual indicator for conversion result */}
            {amountDisable && amount && (
                <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
                    <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-emerald-400 font-semibold text-sm">Converted Amount</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Input;
