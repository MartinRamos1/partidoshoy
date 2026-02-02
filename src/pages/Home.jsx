import Leagues from "../components/Leagues"

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-3xl font-semibold">Partidos del día</h1>
                </div>
                <section className="mt-10 rounded-3xl">

                    <div className="mt-6">
                        <Leagues />
                    </div>
                </section>
            </div>
        </main>
  )
}

export default Home