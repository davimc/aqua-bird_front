
import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "./components/structures/Header"
import Main from "./components/structures/Main"
import Footer from "./components/structures/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>
      <Main/>
      {/* Footer */}
      <Footer />
    </div >
  )
}

