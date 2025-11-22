"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"
import confetti from "canvas-confetti"

export default function FinalScreen() {
  const [cardOpen, setCardOpen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [typingComplete, setTypingComplete] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const messageRef = useRef(null)

  const proposalMessage = const proposalMessage = `
So my dear Princess aur mera pyaara bachaa, thank you for coming into my world.
Tumne mujhe sambhala aur mera saath diya, zarurat hone par mere saath rahi, even naa hone par bhi raat bhar jaga jaga kar saath rahi…

So now it's my turn, aur mai chahta hoon ki ab tumhara dhyaan mai rakhu…
Aur tumhe bohot saara pyaar karu — kisses, hugs, cuddlings, hand holdings, aur bohot saari baatein karu.
Mai chahta hoon ki tumhari khushiyon ka dhyaan rakhu aur tumhare face se kabhi wo smile na jaane du.
Bas tumhe apne paas rakhu, apne bahut close rakhu… tumhe kabhi khud se door na jaane du…

So my dear princess, love, care, support, aur aapki saari zimmedaariya abse meri.
I know I'm not perfect, but I will try my best to give you all my love and efforts and keep a smile on your face always.

I don’t know what the future holds, but I know one thing for sure —
I want that future with you… and I love you so much, mera bachaaa.
`;

  useEffect(() => {
    if (cardOpen && !typingComplete) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < proposalMessage.length) {
          setDisplayedText(proposalMessage.slice(0, currentIndex + 1))
          currentIndex++

          // Auto scroll as text appears
          if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
          }
        } else {
          setTypingComplete(true)
          clearInterval(typingInterval)
        }
      }, 30)

      return () => clearInterval(typingInterval)
    }
  }, [cardOpen, proposalMessage])

  const handleYesForever = () => {
    setShowOverlay(true);

    const colors = ["#ff4d6d", "#ff80b5", "#c084fc", "#a855f7", "#f472b6", "#fb7185"];

    const count = 200;
    const defaults = { origin: { y: 0.8 }, colors };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Main content */}
      <div className="max-w-xl w-full mx-auto text-center">
        <AnimatePresence mode="wait">
          {!cardOpen ? (
            // Closed card state
            <motion.div
              key="closed"
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mb-8 flex justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <img src="/gif/msg.gif" className="w-28" alt="envelope" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl text-pink-200 mb-8 leading-tight font-semibold">
                This is just for <span className="text-pink-400 font-bold">you...</span>
              </h1>

              <div
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 bg-pink-950/20 backdrop-blur-md border border-pink-500/30 rounded-3xl p-8 w-full mx-auto max-w-84"
                onClick={() => setCardOpen(true)}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-current" />
                </motion.div>
                <p className="text-lg text-pink-300">Tap to see what’s inside</p>
              </div>
            </motion.div>
          ) : (
            // Open card state
            <motion.div
              layout
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.div className="bg-pink-950/20 backdrop-blur-md border border-pink-500/30 shadow-2xl rounded-3xl p-8">
                <div
                  ref={messageRef}
                  className="h-80 overflow-y-auto text-left pr-2.5"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(236, 72, 153, 0.3) transparent",
                  }}
                >
                  <div className="text-pink-200 leading-relaxed whitespace-pre-line">
                    {displayedText}
                    {!typingComplete && (
                      <motion.span
                        className="text-pink-400"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      >
                        |
                      </motion.span>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question and button */}
        <AnimatePresence>
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center"
            >
              <motion.h2
                className="text-2xl md:text-3xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-10 mb-8 font-semibold"
              >
                So, Will you be mine forever?
              </motion.h2>

              <motion.button
                onClick={handleYesForever}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center mx-auto"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Yes, forever!
                <Heart className="w-5 h-5 ml-2 fill-current" />
              </motion.button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*Overlay */}
      {showOverlay && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-3xl flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center max-w-md mx-auto px-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Heart Animation */}
            <div className="mb-8 relative">
              <motion.div
                className="relative w-32 h-32 mx-auto"
              >
                {/* Left half */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: -45, rotate: -35 }}
                  animate={{ x: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                >
                  <Heart
                    className="w-32 h-32 text-pink-500 fill-current"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                </motion.div>

                {/* Right half */}
                <motion.div
                  className="absolute inset-0 mr-1"
                  initial={{ x: 45, rotate: 35 }}
                  animate={{ x: 0, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                >
                  <Heart
                    className="w-32 h-32 text-pink-500 fill-current"
                    style={{ clipPath: "inset(0 0 0 50%)" }}
                  />
                </motion.div>

                {/* Same heart beats after merge */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                  transition={{
                    delay: 1.8,
                    scale: {
                      delay: 2.3,
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                >
                  <Heart className="w-32 h-32 text-pink-500 fill-current" />
                </motion.div>
              </motion.div>
            </div>

            {/* End Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 leading-tight">
                Let's make it worth it...
              </h1>
              <motion.p
                className="text-3xl md:text-4xl text-pink-300 font-semibold"
              >
                Forever✨
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

    </motion.div>
  )
}
