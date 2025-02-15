import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12">
            <div className="container">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre o AquaBird</h3>
                        <p className="text-gray-600">
                            Somos uma pet shop dedicada a fornecer os melhores produtos e serviços para seu animal de estimação. Com
                            anos de experiência no mercado, garantimos qualidade e amor em tudo que fazemos.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contato</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-600">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>Rua das Paparaubas, nº xxx - Jardim São Francisco</span>

                            </div>
                            <div className="flex items-center text-gray-600">
                                <span> São Luís, MA</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>(98) 3235-4539</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail className="h-5 w-5 mr-2" />
                                <span>contato@aquabird.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Social and Map */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4 mb-6 items-center ">
                            <Link href="http://facebook.com/aquabirdcenterr" className="text-gray-600 hover:text-teal-600">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="http://instagram.com/aquabirdcenterr" className="text-gray-600 hover:text-teal-600">
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <div className="flex items-center justify-center w-9 h-9 border-2 rounded-full">
                                <Link href="https://api.whatsapp.com/send?phone=5598991105585&text=Ol%C3%A1%20...&fbclid=PAZXh0bgNhZW0CMTEAAaaFVKz0r-97amrKbktbf5RrLf8wGLOtmbL5Up-cbGmjZYoyb949zytQdNM_aem_3K26cVXTbqw7cY-ecUmz_w" className="text-gray-600 hover:text-teal-600">
                                    <Phone className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                        {/* Map Placeholder - Replace with actual map integration */}
                        <div className="aspect-video bg-gray-200 rounded-lg">
                            <iframe
                                //-2.5127538937791765, -44.30346518727
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.116814203781!2d-44.30346518727!3d-2.5127538937791765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTIuNTEyNzUzODkzNzc5MTc2NSwgLTQ0LjMwMzQ2NTE4NzI3!5e0!3m2!1sen!2sbr!4v1707748723123!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}