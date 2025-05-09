const cardImages = {
    whale: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,50 Q40,20 60,50 Q80,80 100,50" fill="#4a90e2" stroke="#2c5282" stroke-width="2"/>
        <circle cx="75" cy="45" r="3" fill="#2c5282"/>
        <path d="M15,50 Q25,40 15,30" fill="#4a90e2" stroke="#2c5282" stroke-width="2"/>
    </svg>`,
    
    dolphin: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,50 Q40,30 60,50 Q80,70 100,50" fill="#63b3ed" stroke="#2b6cb0" stroke-width="2"/>
        <circle cx="75" cy="45" r="3" fill="#2b6cb0"/>
        <path d="M15,50 Q25,40 15,30" fill="#63b3ed" stroke="#2b6cb0" stroke-width="2"/>
    </svg>`,
    
    shark: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,50 Q40,30 80,50 Q90,70 100,50" fill="#718096" stroke="#2d3748" stroke-width="2"/>
        <path d="M85,45 L95,50 L85,55" fill="#2d3748"/>
        <circle cx="75" cy="45" r="3" fill="#2d3748"/>
    </svg>`,
    
    octopus: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="40" r="20" fill="#805ad5" stroke="#553c9a" stroke-width="2"/>
        <path d="M30,60 Q40,80 50,60 Q60,80 70,60" fill="#805ad5" stroke="#553c9a" stroke-width="2"/>
        <circle cx="45" cy="35" r="3" fill="#553c9a"/>
        <circle cx="55" cy="35" r="3" fill="#553c9a"/>
    </svg>`,
    
    seahorse: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 Q60,40 50,60 Q40,80 50,100" fill="#48bb78" stroke="#2f855a" stroke-width="2"/>
        <path d="M50,20 Q40,30 50,40" fill="#48bb78" stroke="#2f855a" stroke-width="2"/>
        <circle cx="45" cy="30" r="2" fill="#2f855a"/>
    </svg>`,
    
    starfish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 L60,40 L80,40 L65,55 L70,75 L50,65 L30,75 L35,55 L20,40 L40,40 Z" 
              fill="#f6ad55" stroke="#c05621" stroke-width="2"/>
    </svg>`,
    
    crab: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="15" fill="#e53e3e" stroke="#c53030" stroke-width="2"/>
        <path d="M35,50 L20,50 M65,50 L80,50" stroke="#c53030" stroke-width="2"/>
        <path d="M50,35 L50,20 M50,65 L50,80" stroke="#c53030" stroke-width="2"/>
    </svg>`,
    
    jellyfish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M40,30 Q50,10 60,30" fill="#b794f4" stroke="#6b46c1" stroke-width="2"/>
        <path d="M40,30 Q30,50 40,70 M60,30 Q70,50 60,70" fill="#b794f4" stroke="#6b46c1" stroke-width="2"/>
    </svg>`,
    
    turtle: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="20" fill="#48bb78" stroke="#2f855a" stroke-width="2"/>
        <path d="M30,50 L20,50 M70,50 L80,50 M50,30 L50,20 M50,70 L50,80" 
              stroke="#2f855a" stroke-width="2"/>
    </svg>`,
    
    seal: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="30" ry="20" fill="#a0aec0" stroke="#4a5568" stroke-width="2"/>
        <circle cx="65" cy="45" r="3" fill="#4a5568"/>
        <path d="M35,50 Q40,45 45,50" stroke="#4a5568" stroke-width="2" fill="none"/>
    </svg>`,
    
    clam: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="#f6e05e" stroke="#b7791f" stroke-width="2"/>
        <path d="M30,50 Q50,70 70,50" fill="#f6e05e" stroke="#b7791f" stroke-width="2"/>
    </svg>`,
    
    coral: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 L60,40 L80,30 L70,50 L90,60 L70,70 L60,90 L50,70 L30,80 L40,60 L20,50 L40,40 Z" 
              fill="#fc8181" stroke="#c53030" stroke-width="2"/>
    </svg>`,
    
    angelfish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="#4299e1" stroke="#2b6cb0" stroke-width="2"/>
        <path d="M70,50 L80,45 L80,55 Z" fill="#2b6cb0"/>
        <circle cx="55" cy="45" r="3" fill="#2b6cb0"/>
    </svg>`,
    
    clownfish: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="#f6ad55" stroke="#c05621" stroke-width="2"/>
        <path d="M70,50 L80,45 L80,55 Z" fill="#c05621"/>
        <circle cx="55" cy="45" r="3" fill="#c05621"/>
        <path d="M40,50 L50,50" stroke="#c05621" stroke-width="2"/>
    </svg>`,
    
    ray: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,50 Q50,30 70,50 Q50,70 30,50" fill="#9f7aea" stroke="#6b46c1" stroke-width="2"/>
        <path d="M30,50 L20,40 L20,60 Z" fill="#6b46c1"/>
        <circle cx="55" cy="45" r="3" fill="#6b46c1"/>
    </svg>`
}; 