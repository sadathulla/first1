document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const celebration = document.getElementById('celebration');
    const proposalBox = document.querySelector('.proposal-box');
    
    // No button escape behavior
    noBtn.addEventListener('mouseenter', function() {
        moveButtonAway();
    });
    
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        moveButtonAway();
    });
    
    function moveButtonAway() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Calculate random position that keeps button within viewport
        const maxX = viewportWidth - buttonRect.width - 20;
        const maxY = viewportHeight - buttonRect.height - 20;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        // Apply new position
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.zIndex = '999';
        
        // Add a fun message after a few escapes
        if (Math.random() > 0.7) {
            const messages = [
                "Come on, give it a chance! 😊",
                "Don't be shy! 💕",
                "I know you want to! 🥰",
                "Pretty please? 🌹",
                "Just click yes! 💝"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            
            // Create temporary message element
            const messageEl = document.createElement('div');
            messageEl.textContent = randomMessage;
            messageEl.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 1.1em;
                color: #e91e63;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: fadeIn 0.5s ease-out;
            `;
            
            document.body.appendChild(messageEl);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                messageEl.style.animation = 'fadeOut 0.5s ease-out';
                setTimeout(() => {
                    document.body.removeChild(messageEl);
                }, 500);
            }, 3000);
        }
    }
    
    // Yes button celebration
    yesBtn.addEventListener('click', function() {
        // Hide proposal box
        proposalBox.style.display = 'none';
        
        // Show celebration
        celebration.classList.remove('hidden');
        
        // Create balloons
        createBalloons();
        
        // Create crackers
        createCrackers();
        
        // Play celebration sound (optional)
        playCelebrationSound();
    });
    
    function createBalloons() {
        const balloonsContainer = document.querySelector('.balloons');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8', '#a29bfe'];
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.left = Math.random() * window.innerWidth + 'px';
                balloon.style.bottom = '-150px';
                balloon.style.animationDelay = Math.random() * 2 + 's';
                balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
                
                balloonsContainer.appendChild(balloon);
                
                // Animate balloon floating up
                setTimeout(() => {
                    balloon.style.transition = 'bottom 8s ease-out';
                    balloon.style.bottom = window.innerHeight + 200 + 'px';
                }, 100);
                
                // Remove balloon after animation
                setTimeout(() => {
                    if (balloon.parentNode) {
                        balloon.parentNode.removeChild(balloon);
                    }
                }, 8000);
            }, i * 200);
        }
    }
    
    function createCrackers() {
        const crackersContainer = document.querySelector('.crackers');
        const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4ecdc4', '#45b7d1', '#fd79a8', '#a29bfe'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                
                // Create explosion of particles
                for (let j = 0; j < 20; j++) {
                    const cracker = document.createElement('div');
                    cracker.className = 'cracker';
                    cracker.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    cracker.style.left = x + 'px';
                    cracker.style.top = y + 'px';
                    
                    crackersContainer.appendChild(cracker);
                    
                    // Random direction for explosion
                    const angle = (Math.PI * 2 * j) / 20;
                    const velocity = 100 + Math.random() * 100;
                    const dx = Math.cos(angle) * velocity;
                    const dy = Math.sin(angle) * velocity;
                    
                    cracker.style.transition = 'all 1s ease-out';
                    
                    setTimeout(() => {
                        cracker.style.transform = `translate(${dx}px, ${dy}px)`;
                        cracker.style.opacity = '0';
                    }, 100);
                    
                    // Remove particle after animation
                    setTimeout(() => {
                        if (cracker.parentNode) {
                            cracker.parentNode.removeChild(cracker);
                        }
                    }, 1000);
                }
            }, i * 300);
        }
    }
    
    function playCelebrationSound() {
        // Create a simple celebration sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Play a series of happy notes
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C (higher)
            
            notes.forEach((frequency, index) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = frequency;
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.5);
                }, index * 100);
            });
        } catch (error) {
            console.log('Audio not supported');
        }
    }
    
    // Add fade out animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
