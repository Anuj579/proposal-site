"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"
import Swal from "sweetalert2"

export default function QuestionScreen({ question, onYes, isFirst }) {

    const handleNo = async () => {
        if (isFirst) {
            // First question - "Hey My Love, Are U Ready For Small Surprise ?"
            await Swal.fire({
                title: "But this one is special!",
                text: "You need to open it... please?",
                imageUrl: "/gif/please.gif",
                imageAlt: "Please gif",
                imageWidth: 150,
                background: "linear-gradient(135deg, #1d071b, #3a1638)",
                color: "#FFEDFF",
                timer: 3000,
                showConfirmButton: false,
            })
        } else {
            // Second question - "Do you love me Meili?"
            await Swal.fire({
                title: "Please say yes! U Mean World To Me",
                text: "I really hope you do...",
                imageUrl: "/gif/tears.gif",
                imageAlt: "Please gif",
                imageWidth: 130,
                background: "linear-gradient(135deg, #1d071b, #3a1638)",
                color: "#FFEDFF",
                timer: 3000,
                showConfirmButton: false,
            })
        }
    }

    const handleYes = () => {
        setTimeout(() => {
            onYes()
        }, 500)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
        >

            <div className="text-center max-w-3xl mx-auto">
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3,
                    }}
                >
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border-2 border-purple-400/40 glow-effect">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <Heart className="w-12 h-12 text-purple-500 fill-current" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Question text */}
                <motion.h1
                    className="text-4xl md:text-6xl font-semibold mb-8 leading-tight text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {question}
                </motion.h1>

                <motion.p
                    className="text-purple-200/80 text-xl md:text-2xl mb-12 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    {isFirst ? "I promise it's worth it..." : "Be honest with me..."}
                </motion.p>

                {/* Answer buttons */}
                <motion.div
                    className="flex flex-wrap gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <button
                        onClick={handleYes}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 md:text-lg"
                    >
                        Yes 💕
                    </button>

                    <button
                        onClick={handleNo}
                        className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 md:text-lg"
                    >
                        No 😔
                    </button>
                </motion.div>

            </div>
        </motion.div>
    )
}
