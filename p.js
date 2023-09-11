
                function updateClock() {
                    const now = new Date();
                    let hours = now.getUTCHours();
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12 || 12; // Convert to 12-hour format
        
                    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
                    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
                    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');
        
                    const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds} ${ampm}`;
                    document.getElementById('clock').textContent = formattedTime;
        
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = now.toLocaleDateString('en-US', options);
                    document.getElementById('date').textContent = formattedDate;
                }
        
                setInterval(updateClock, 10); // Update every 10 milliseconds
