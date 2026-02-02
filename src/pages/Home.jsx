import Leagues from "../components/Leagues"

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 shadow-2xl">
                    <div className="absolute inset-0 opacity-40">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
                    </div>
                    <div className="relative">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h1 className="mt-3 text-3xl font-semibold">Partidos del día</h1>
                        <p className="mt-3 max-w-2xl text-sm text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur dolor! Ipsa id suscipit quam aspernatur maiores beatae fugit tempora, numquam aliquam consequatur facere tenetur at odit ut libero perferendis?
                        </p>

                    </div>
                </div>

                <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

                    <div className="mt-6">
                        <Leagues />
                    </div>
                </section>
            </div>
        </main>
  )
}

export default Home