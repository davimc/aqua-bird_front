import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Main() {
    return (
        <main className="flex-1">
            {/* Hero Banner */}
            <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-teal-700">
                <div className="container flex h-full flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Bem-vindo ao AquaBird Petshop
                    </h1>
                    <p className="mt-4 max-w-[700px] text-lg text-teal-50">
                        Tudo que seu pet precisa em um só lugar. Produtos de qualidade e atendimento especializado.
                    </p>
                </div>
            </section>
            {/* Product Categories */}
            <section id="products" className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Nossos Produtos</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            { title: "Cachorros", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Gatos", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Pássaros", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Peixes", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Outros Pets", image: "/placeholder.svg?height=200&width=200" },
                        ].map((category) => (
                            <Card key={category.title} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <Image
                                        src={category.image || "/placeholder.svg"}
                                        alt={category.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="container  mt-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Nossos Serviços</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            { title: "Banho e Tosa", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Veterinário", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Vacinação", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Compra e Adoção", image: "/placeholder.svg?height=200&width=200" },
                            { title: "Ação solidária", image: "/placeholder.svg?height=200&width=200" },
                        ].map((category) => (
                            <Card key={category.title} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <Image
                                        src={category.image || "/placeholder.svg"}
                                        alt={category.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}