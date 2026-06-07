export default function Home() {

    
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Full Stack Developer specializing in MERN Stack,
          Next.js, React.js, Node.js, Express.js, and MongoDB.
        </p>

        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 leading-8">
          I am a Full Stack Developer focused on creating
          scalable web applications, SaaS products, enterprise
          systems, and modern digital experiences.
          My expertise includes React, Next.js, Node.js,
          Express, MongoDB, and cloud deployment.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "JavaScript",
              "TypeScript",
              "AWS"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-black p-6 rounded-lg border border-zinc-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Web Development
              </h3>
              <p className="text-gray-400">
                Modern responsive websites using Next.js and React.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                SaaS Development
              </h3>
              <p className="text-gray-400">
                Complete SaaS applications from MVP to scale.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                API Development
              </h3>
              <p className="text-gray-400">
                Secure REST APIs with Node.js and Express.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold">
                E-Commerce Platform
              </h3>
              <p className="text-gray-400 mt-3">
                Full MERN commerce platform with payments.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold">
                ERP System
              </h3>
              <p className="text-gray-400 mt-3">
                Enterprise resource planning application.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-2xl font-bold">
                Learning Platform
              </h3>
              <p className="text-gray-400 mt-3">
                Course management and student dashboard.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-8">
            Looking for a Full Stack Developer?
          </p>
 fgh
          <button className="bg-blue-600 px-8 py-4 rounded-lg">
            Contact Me
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-zinc-800">
        © 2026 Your Name. All Rights Reserved.
      </footer>

    </main>
  );
}