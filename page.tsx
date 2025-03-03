import Header from "./components/structures/Header"
import Main from "./components/structures/Main"
import Footer from "./components/structures/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <Main/>
      <section className="flex justify-center items-start h-64 bg-cyan-500">
        <form action="#" className="flex items-center justify-start flex-col gap-5" netlify>
          <p>Acompanhe novas ofertas e promoções</p>
          <input type="email" name="email" id="email" placeholder="exemple@exemple.com"/>
        </form>
      </section>

      <Footer />
    </div >
  )
}

