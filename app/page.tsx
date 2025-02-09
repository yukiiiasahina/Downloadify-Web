"use client"

import { useState, useEffect } from "react"
import { Download, Github, Loader2, Music2, Video } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteDrawer } from "@/components/site-drawer"
import { AboutDialog } from "@/components/about-dialog"
import { cn } from "@/lib/utils"

export default function Home() {
  const [url, setUrl] = useState("")
  const [format, setFormat] = useState("video")
  const [quality, setQuality] = useState("sd")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const apiUrl = `https://{sua api aqui}/download?url=${encodeURIComponent(url)}&format=${format}&quality=${quality}`

      const link = document.createElement("a")
      link.href = apiUrl
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setUrl("")
    } catch (err) {
      setError("Falha ao iniciar o download. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <motion.div
          className="container flex h-14 items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-2">
            <SiteDrawer />
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play_store_512-rahmhZErkOhDHajfmJ0hJCPpkFWIdK.png"
              alt="Logo do Downloadify"
              className="w-8 h-8 rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            />
            <motion.span
              className="font-semibold text-gradient"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              Downloadify
            </motion.span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:block">
              <AboutDialog />
            </div>
            <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
              <a href="https://github.com/yukiiiasahina/Downloadify-Web/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </header>

      <main className="container relative flex min-h-screen flex-col items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center space-y-2">
            <motion.h1
              className="text-4xl font-bold text-gradient"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              Downloadify
            </motion.h1>
            <motion.p
              className="text-zinc-400"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              Baixe vídeos e áudios com facilidade
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 translate-y-1/2 blur-2xl" />
            <motion.form
              onSubmit={handleSubmit}
              className="relative space-y-6 p-8 rounded-2xl glass-effect"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="space-y-2">
                <Label htmlFor="url">URL do Vídeo</Label>
                <div className="relative group">
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="bg-white/[0.03] border-white/[0.08] focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300 pr-10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-opacity group-focus-within:opacity-100 opacity-60">
                    <motion.div
                      initial={false}
                      animate={{ scale: url ? 1.1 : 1, opacity: url ? 1 : 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {url ? "✨" : "🔗"}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Formato</Label>
                <RadioGroup value={format} onValueChange={setFormat} className="grid grid-cols-2 gap-4">
                  <Label
                    htmlFor="video"
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer transition-all duration-300",
                      format === "video"
                        ? "glass-effect-strong ring-2 ring-purple-500/50"
                        : "glass-effect hover:glass-effect-strong",
                    )}
                  >
                    <RadioGroupItem value="video" id="video" className="sr-only" />
                    <Video
                      className={cn(
                        "h-6 w-6 mb-2 transition-colors duration-300",
                        format === "video" ? "text-purple-400" : "text-white/60",
                      )}
                    />
                    <span
                      className={cn(
                        "font-medium transition-colors duration-300",
                        format === "video" ? "text-purple-400" : "text-white/60",
                      )}
                    >
                      Vídeo
                    </span>
                  </Label>
                  <Label
                    htmlFor="audio"
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer transition-all duration-300",
                      format === "audio"
                        ? "glass-effect-strong ring-2 ring-purple-500/50"
                        : "glass-effect hover:glass-effect-strong",
                    )}
                  >
                    <RadioGroupItem value="audio" id="audio" className="sr-only" />
                    <Music2
                      className={cn(
                        "h-6 w-6 mb-2 transition-colors duration-300",
                        format === "audio" ? "text-purple-400" : "text-white/60",
                      )}
                    />
                    <span
                      className={cn(
                        "font-medium transition-colors duration-300",
                        format === "audio" ? "text-purple-400" : "text-white/60",
                      )}
                    >
                      Áudio
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quality">Qualidade</Label>
                <Select value={quality} onValueChange={setQuality}>
                  <SelectTrigger
                    id="quality"
                    className="glass-effect hover:glass-effect-strong transition-all duration-300"
                  >
                    <SelectValue placeholder="Selecione a qualidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sd">Definição Padrão</SelectItem>
                    <SelectItem value="hd">Alta Definição</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600/90 hover:bg-purple-600 backdrop-blur-sm transition-all duration-300 active:scale-[0.98]"
                disabled={isLoading}
              >
                <motion.div
                  className="flex items-center justify-center w-full"
                  initial={false}
                  animate={isLoading ? { scale: 0.98 } : { scale: 1 }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Iniciando Download...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Baixar
                    </>
                  )}
                </motion.div>
              </Button>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </motion.div>
      </main>
      <footer className="absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground">
        Feito com carinho ❤️
        <br />
        ©2025 Yuki
      </footer>
    </div>
  )
}

