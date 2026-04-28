export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                About us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Built by people who actually{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  love shopping.
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                We&apos;re a team of passionate individuals dedicated to
                delivering exceptional shopping experiences. Our mission is to
                simplify discovery and drive delight.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition"
              >
                Get in touch
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "250+", l: "Happy Clients" },
                  { n: "500+", l: "Projects" },
                  { n: "98%", l: "Success Rate" },
                  { n: "15+", l: "Team Members" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                  >
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">
                      {s.n}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              Our journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our story
            </h2>
          </div>
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
                From humble beginnings to industry leaders
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Founded in 2010, our company started as a small team with a big
                vision. We believed that technology could solve complex business
                problems in elegant ways.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Over the years, we&apos;ve grown into a diverse team of experts
                specializing in various domains. Our commitment to quality and
                customer satisfaction has been the driving force behind our
                success.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, we continue to innovate and expand our services while
                maintaining the personal touch that our clients appreciate.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              The crew
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Meet our team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our talented team of professionals brings diverse expertise and
              passion to every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Team Member"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Michael Chen
                </h3>
                <p className="text-primary font-medium">CEO &amp; Founder</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Visionary leader with 15+ years of industry experience.
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Team Member"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Sarah Johnson
                </h3>
                <p className="text-primary font-medium">Lead Designer</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Creative mind behind our award-winning designs.
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-behance" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Team Member"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  David Martinez
                </h3>
                <p className="text-primary font-medium">Tech Lead</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Ensures our technical solutions are robust and scalable.
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="Team Member"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Emily Wilson
                </h3>
                <p className="text-primary font-medium">Marketing Director</p>
                <p className="text-gray-600 mt-2">
                  Drives our brand presence and customer engagement.
                </p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
