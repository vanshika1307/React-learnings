import React, { useState, useEffect } from 'react';

// Advanced version with callback props
function BgChanger({ 
    initialColor = 'white', 
    availableColors, 
    title = 'Background Color Changer',
    onColorChange,
    showResetButton = true,
    customStyles = {},
    disabled = false
}) {
    const [bgColor, setBgColor] = useState(initialColor);
    
    // Call parent callback when color changes
    useEffect(() => {
        if (onColorChange) {
            onColorChange(bgColor);
        }
    }, [bgColor, onColorChange]);
    
    const colors = availableColors || [
        { name: 'Blue', value: 'blue', bgClass: 'bg-blue-500 hover:bg-blue-600', textColor: 'text-white' },
        { name: 'Red', value: 'red', bgClass: 'bg-red-500 hover:bg-red-600', textColor: 'text-white' },
        { name: 'Green', value: 'green', bgClass: 'bg-green-500 hover:bg-green-600', textColor: 'text-white' },
        { name: 'Yellow', value: 'yellow', bgClass: 'bg-yellow-500 hover:bg-yellow-600', textColor: 'text-black' }
    ];

    const handleColorChange = (color) => {
        if (!disabled) {
            setBgColor(color);
        }
    };

    return (
        <div 
            className={`min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-500 ease-in-out relative overflow-hidden ${disabled ? 'opacity-50' : ''}`}
            style={{ backgroundColor: bgColor, ...customStyles }}
        >
            <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
                <h1 className="text-6xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
                    {title}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => handleColorChange(color.value)}
                            disabled={disabled}
                            className={`
                                ${color.bgClass} ${color.textColor}
                                px-6 py-4 rounded-xl font-semibold text-lg
                                transform transition-all duration-200 ease-in-out
                                hover:scale-105 hover:shadow-2xl
                                active:scale-95
                                focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-white
                                shadow-lg border-2 border-white border-opacity-20
                                backdrop-blur-sm
                                ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                            `}
                        >
                            {color.name}
                        </button>
                    ))}
                </div>

                {showResetButton && (
                    <button
                        onClick={() => handleColorChange(initialColor)}
                        disabled={disabled}
                        className="
                            bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800
                            px-8 py-3 rounded-full font-medium text-lg
                            transform transition-all duration-200 ease-in-out
                            hover:scale-105 hover:shadow-xl hover:from-gray-200 hover:to-gray-300
                            active:scale-95
                            focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50
                            shadow-lg border border-gray-300
                        "
                    >
                        Reset to {initialColor}
                    </button>
                )}
            </div>
        </div>
    );
}

export default BgChanger;
