"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function MenuButton() {
  const { setTheme } = useTheme()

  return (
      <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Menu</span>
      </Button>
      
  )
}