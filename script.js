* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Trebuchet MS', sans-serif;
  background: linear-gradient(135deg, #f5d0ff, #d4a5f9);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4a2b5d;
  text-align: center;
  overflow-x: hidden;
}

.container {
  width: 95%;
  max-width: 900px;
  padding: 20px;
}

/* Pages */
.page {
  width: 100%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.6s ease;
}

.page.active {
  opacity: 1;
  pointer-events: all;
  position: relative;
}

.hidden {
  opacity: 0 !important;
  pointer-events: none;
}

/* Starter */
#starter h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.2);
  z-index: 2;
}

#startButton {
  background: #fff;
  border: none;
  padding: 15px 50px;
  font-size: 1.4rem;
  border-radius: 40px;
  cursor: pointer;
  color: #6a0dad;
  font-weight: bold;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 2;
}

#startButton:hover {
  background: #f2e1ff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
}

/* Media Container */
#media-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

#story-image {
  max-width: 100%;
  max-height: 70vh;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
  cursor: pointer;
  margin: 20px 0;
  object-fit: contain;
  transition: all 0.5s ease;
}

#story-image.vanish {
  transform: scale(0.95);
  opacity: 0;
}

#story-text {
  background: rgba(255, 255, 255, 0.92);
  padding: 30px;
  border-radius: 20px;
  font-size: 1.4rem;
  line-height: 1.6;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  cursor: pointer;
  margin: 20px 0;
  max-width: 90%;
  transition: all 0.5s ease;
}

#story-text.vanish {
  transform: scale(0.98);
  opacity: 0;
}

/* Ending */
.end-text {
  font-size: 2.8rem;
  font-weight: bold;
  color: #555; /* Neutral color */
  text-shadow: none;
  padding: 40px;
  background: rgba(255,255,255,0.85);
  border-radius: 25px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  max-width: 90%;
  line-height: 1.4;
  animation: fadeIn 1s ease forwards;
}

.end-text p {
  font-size: 1.5rem;
  margin-top: 20px;
  color: #777;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 768px) {
  #starter h1 {
    font-size: 2.2rem;
  }

  #story-text {
    font-size: 1.2rem;
    padding: 20px;
  }

  .end-text {
    font-size: 2rem;
    padding: 30px;
  }

  .end-text p {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  #starter h1 {
    font-size: 1.8rem;
  }

  #startButton {
    padding: 12px 40px;
    font-size: 1.2rem;
  }

  #story-text {
    font-size: 1.1rem;
    padding: 18px;
  }

  .end-text {
    font-size: 1.8rem;
    padding: 25px;
  }

  .end-text p {
    font-size: 1.2rem;
  }
}
