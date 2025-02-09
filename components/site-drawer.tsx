"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AboutDialog } from "./about-dialog"
import { useState } from "react"

export function SiteDrawer() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20"
      >
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
          <X className="h-6 w-6" />
          <span className="sr-only">Fechar menu</span>
        </Button>
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play_store_512-rahmhZErkOhDHajfmJ0hJCPpkFWIdK.png"
              alt="Logo do Downloadify"
              width={32}
              height={32}
              className="rounded-lg"
            />
            Downloadify
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-muted-foreground">
            Baixe seus vídeos e áudios favoritos com facilidade. Simples, rápido e confiável.
          </p>
          <div className="space-y-4">
            <Link href="https://github.com/yukiiiasahina/Downloadify-Web/" target="_blank">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Repositório GitHub
              </Button>
            </Link>
            <AboutDialog>
              <Button variant="secondary" className="w-full">
                Sobre
              </Button>
            </AboutDialog>
          </div>
        </div>
        <div className="absolute bottom-8 left-4 right-4 text-center text-sm text-muted-foreground">
          Feito com carinho ❤️
          <br />
          ©2025 Yuki
        </div>
      </SheetContent>
    </Sheet>
  )
}

