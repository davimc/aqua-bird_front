import Link from "next/link"
import Image from "next/image"


export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/placeholder.svg" alt="AquaBird Logo" width={40} height={40} className="rounded-full" />
                    <span className="text-xl font-bold">AquaBird</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="#products" className="text-sm font-medium hover:text-teal-600">
                        Produtos
                    </Link>
                    <Link href="#services" className="text-sm font-medium hover:text-teal-600">
                        Serviços
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-teal-600">
                        Sobre
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-teal-600">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )

}