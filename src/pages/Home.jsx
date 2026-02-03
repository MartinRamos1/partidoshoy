import Leagues from "../components/Leagues"

const Home = () => {
  return (
    <main className="min-h-screen text-slate-100">
            <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-2xl sm:text-3xl font-semibold">Partidos del día</h1>
                </div>
                <section className="mt-6 sm:mt-8 md:mt-10 rounded-3xl">

                    <div className="mt-4 sm:mt-6">
                        <Leagues />
                    </div>
                </section>
            </div>
        </main>
  )
}

export default Home