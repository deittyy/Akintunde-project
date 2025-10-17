      // Update the time display
        function updateTime() {
            const timeElement = document.getElementById('time-display');
            const currentTime = Date.now();
            
            // Add animation class for visual feedback
            timeElement.classList.add('time-update');
            
            // Format the number with commas for better readability
            const formattedTime = currentTime.toLocaleString();
            
            // Update the time
            timeElement.textContent = formattedTime;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                timeElement.classList.remove('time-update');
            }, 500);
        }

        // Initial time display
        updateTime();

        // Update time every second
        setInterval(updateTime, 1000);