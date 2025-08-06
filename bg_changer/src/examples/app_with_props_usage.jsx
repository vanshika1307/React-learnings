import React from 'react';
import BgChanger from './components/bg_changer_with_props';

function App() {
    // Custom color palette
    const customColors = [
        { name: 'Ocean', value: '#006994', bgClass: 'bg-cyan-600 hover:bg-cyan-700', textColor: 'text-white' },
        { name: 'Sunset', value: '#FF6B35', bgClass: 'bg-orange-500 hover:bg-orange-600', textColor: 'text-white' },
        { name: 'Forest', value: '#2D5016', bgClass: 'bg-green-800 hover:bg-green-900', textColor: 'text-white' },
        { name: 'Lavender', value: '#8B7BA7', bgClass: 'bg-purple-400 hover:bg-purple-500', textColor: 'text-white' }
    ];

    // Callback function to handle color changes
    const handleColorChange = (newColor) => {
        console.log('Background color changed to:', newColor);
        // You could save to localStorage, send to API, etc.
    };

    return (
        <div>
            {/* Example 1: Basic usage with custom initial color */}
            <BgChanger 
                initialColor="lightblue" 
                title="My Custom Color Changer"
            />

            {/* Example 2: With custom colors and callback */}
            <BgChanger 
                initialColor="white"
                availableColors={customColors}
                title="Nature Color Palette"
                onColorChange={handleColorChange}
                showResetButton={true}
            />

            {/* Example 3: Disabled state */}
            <BgChanger 
                initialColor="gray"
                title="Disabled Color Changer"
                disabled={true}
            />
        </div>
    );
}

export default App;
