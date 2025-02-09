"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react"

export function AboutDialog({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="ghost" className="text-sm font-medium">
            Sobre
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/60 backdrop-blur-xl border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Sobre a Desenvolvedora</DialogTitle>
          <DialogDescription asChild>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-purple-500/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yuki.png-WxEYcLMhsXIHiyWm1sewXXlon3nYM4.jpeg"
                    alt="Yuki"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">Yuki (Ana)</h3>
                  <p className="text-sm text-muted-foreground">Desenvolvedora do Downloadify</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <a href="https://t.me/yukiiiasahina" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Telegram
                  </a>
                </Button>
              </div>
            </motion.div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

