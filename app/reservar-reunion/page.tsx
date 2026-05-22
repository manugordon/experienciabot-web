import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h1 className="text-[36px] font-bold text-black">/reservar-reunion — próximamente</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}
