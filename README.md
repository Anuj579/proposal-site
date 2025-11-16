<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will You Be Mine Forever? 💕</title>
    <style>
        body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #ffb3ba, #ffdfba, #ffffba); color: #333; text-align: center; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: auto; background: rgba(255, 255, 255, 0.95); padding: 20px; border-radius: 15px; box-shadow: 0 0 20px rgba(255, 179, 186, 0.5); border: 2px solid #ffb3ba; }
        h1 { color: #e91e63; text-shadow: 1px 1px 3px rgba(0,0,0,0.3); font-weight: bold; }
        img { max-width: 100%; height: auto; border-radius: 10px; margin: 10px 0; border: 2px solid #ffb3ba; }
        .button { background: #ffb3ba; color: #fff; padding: 15px 30px; border: 2px solid #ff9a9e; border-radius: 10px; cursor: pointer; font-size: 18px; margin: 20px; position: relative; transition: 0.3s; font-family: 'Poppins', sans-serif; }
        .button:hover { background: #ff9a9e; box-shadow: 0 0 15px rgba(255, 179, 186, 0.7); }
        #noButton { position: absolute; } /* Allows the No button to move */
        #proposal { display: none; }
        iframe { border: none; width: 100%; height: 300px; border-radius: 10px; }
        canvas { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 1000; } /* For confetti */
        
        /* Pink-Themed Popup Styles */
        .popup { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #ffb3ba, #ffdfba); padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(255, 179, 186, 0.6); z-index: 2000; font-size: 28px; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); border: 3px solid #e91e63; }
        .popup.show { display: block; animation: bounceIn 0.6s ease-out; }
        @keyframes bounceIn { 0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; } 50% { transform: translate(-50%, -50%) scale(1.05); } 70% { transform: translate(-50%, -50%) scale(0.9); } 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; } }
        .popup p { margin: 0; animation: heartBeat 1.5s infinite; }
        @keyframes heartBeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 179, 186, 0.6); backdrop-filter: blur(5px); z-index: 1999; }
        .overlay.show { display: block; }
        .close-btn { background: #e91e63; color: #fff; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer; margin-top: 20px; font-size: 16px; transition: 0.3s; font-weight: bold; }
        .close-btn:hover { background: #c2185b; transform: scale(1.05); }
        
        /* Pink-Themed Button Styles */
        #yesButton { background: linear-gradient(45deg, #ffb3ba, #ffdfba); color: #333; font-weight: bold; box-shadow: 0 4px 15px rgba(255, 179, 186, 0.4); border: 2px solid #ffdfba; }
        #yesButton:hover { background: linear-gradient(45deg, #ffdfba, #ffb3ba); transform: scale(1.05); box-shadow: 0 6px 20px rgba(255, 179, 186, 0.6); }
        #yesButton::before { content: "💖 "; } /* Heart icon */
        
        #noButton { background: linear-gradient(45deg, #f8bbd9, #fce4ec); color: #333; font-weight: bold; box-shadow: 0 4px 15px rgba(248, 187, 217, 0.4); border: 2px solid #fce4ec; }
        #noButton:hover { background: linear-gradient(45deg, #fce4ec, #f8bbd9); animation: shake 0.5s ease-in-out; box-shadow: 0 6px 20px rgba(248, 187, 217, 0.6); }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
    </style>
    <!-- Confetti Library -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Dear Hetvi,</h1>
        <p>From the moment I met you, my world changed. You've brought so much joy, laughter, and love into my life. Here's our story...</p>
        
        <h2>Our Memories</h2>
        <img src="https://via.placeholder.com/600x400?text=Your+First+Date+Photo" alt="Memory 1">
        <p>Remember our first date? It was magical.</p>
        <img src="https://via.placeholder.com/600x400?text=Another+Memory+Photo" alt="Memory 2">
        <p>And that time we [insert inside joke or memory]? Unforgettable.</p>
        
        <h2>Our Playlist</h2>
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfEo1d2Rn" allowfullscreen></iframe>
        <p>These songs remind me of us.</p>
        
        <button class="button" onclick="revealProposal()">Click for a Surprise</button>
        
        <div id="proposal">
            <h2>Hetvi, Will You Marry Me?</h2>
            <img src="https://via.placeholder.com/400x300?text=Ring+Photo+or+Video+Thumbnail" alt="Proposal">
            <p>I've loved you since [when you met]. You're my everything. Say yes?</p>
            <button id="yesButton" class="button" onclick="celebrateYes()">Yes! 💍</button>
            <button id="noButton" class="button" onclick="moveNoButton()" onmouseover="moveNoButton()">No</button>
        </div>
    </div>
    
    <!-- Pink-Themed Popup -->
    <div class="overlay" id="overlay"></div>
    <div class="popup" id="popup">
        <p>💖 I love you ❤️</p>
        <button class="close-btn" onclick="closePopup()">Close</button>
    </div>
    
    <script>
        function revealProposal() {
            document.getElementById('proposal').style.display = 'block';
        }
        
        function moveNoButton() {
            const button = document.getElementById('noButton');
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            
            // Random position within the container
            const maxX = containerRect.width - button.offsetWidth;
            const maxY = containerRect.height - button.offsetHeight;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        }
        
        function celebrateYes() {
            // Trigger confetti/fireworks effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            // Show pink-themed popup after confetti
            setTimeout(() => {
                document.getElementById('overlay').classList.add('show');
                document.getElementById('popup').classList.add('show');
            }, 1000); // Delay for confetti effect
        }
        
        function closePopup() {
            document.getElementById('overlay').classList.remove('show');
            document.getElementById('popup').classList.remove('show');
        }
    </script>
</body>
</html>
