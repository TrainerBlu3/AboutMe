function About() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-4 py-32">

                <h1 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-blue-500">Story</span>
                </h1>

                {/* Timeline */}
                <section className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">

                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-bold text-blue-500">2003 — The Beginning</h3>
                                <p className="text-gray-300 mt-2">Born in the Philippines to OFW parents. Before turning
                                    5, we embarked on a journey across continents.</p>
                            </div>
                            <div></div>
                        </div>

                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div></div>
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-bold text-blue-500">2003-2008 - Africa Calling</h3>
                                <p className="text-gray-300 mt-2">Immigrated to Africa, beginning in Eswathini then
                                    moving to South Africa, discovering new cultures and technology.</p>
                            </div>
                        </div>

                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-bold text-blue-500">2008–2016 — Discovery</h3>
                                <p className="text-gray-300 mt-2">South Africa is where I discovered my love for
                                    computer science and coding. Eight years of learning how computers work.</p>
                            </div>
                            <div></div>
                        </div>

                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div></div>
                            <div className="md:pl-12">
                                <h3 className="text-xl font-bold text-blue-500">2016–2020 — Namibia</h3>
                                <p className="text-gray-300 mt-2">Moved to Namibia where I completed most of high school
                                    and solidified my technical skills.</p>
                            </div>
                        </div>

                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div className="md:text-right md:pr-12">
                                <h3 className="text-xl font-bold text-blue-500">2020–Present — Canada</h3>
                                <p className="text-gray-300 mt-2">Moved to Canada in 2020. Now pursuing Computer Science
                                    at Okanagan College, fascinated by data structures and algorithms.</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About