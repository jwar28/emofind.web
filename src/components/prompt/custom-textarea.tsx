"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useStatusStore } from "@/hooks/useStatusStore"
import { Card } from "../ui/card"

export default function CustomTextarea() {
  const [text, setText] = useState("")
  const { status } = useStatusStore()

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = () => {
    if (status === "offline") {
      alert("Error: La API no está en línea. Intente más tarde.")
      return
    }

    console.log("Submitted text:", text)
  }

  return (
    <div className="md:min-h-screen w-full p-4">

      <div className="w-full flex flex-col items-center md:justify-center md:min-h-screen md:-mt-16">
        <Card className="p-10 flex flex-col items-center gap-3">
          <img src="/grey-logo.png" className="h-24" />
          <div className="w-full md:min-w-[400px] max-w-md space-y-4">
            <textarea
              className="w-full min-h-[150px] p-3 border rounded-md resize-y"
              placeholder="Ingrese su texto aquí para analizar su sentimiento..."
              value={text}
              onChange={handleTextChange}
            />
            <div>
              <Button className="w-full" onClick={handleSubmit} disabled={status === "offline"}>
                Enviar
              </Button>
            </div>
            {status === "offline" && (
              <p className="text-red-500 text-sm text-center">⚠ La API no está disponible en este momento.</p>
            )}
          </div>
        </Card>
      </div>

    </div>
  )
}
