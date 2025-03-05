export default function Home() {
  return (
    <div className="font-sans text-black">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl text-black font-bold">MayorTech</h1>
        <div className="space-x-6">
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#about" className="text-gray-700">About</a>
          <a href="#products" className="text-gray-700">Products</a>
          <a href="#contact" className="text-gray-700">Contact</a>
          <button className="bg-black text-white px-4 py-2 rounded">FAQ</button>
          <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
          <button className="border text-black border-black px-4 py-2 rounded">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 h-screen p-10 items-center text-center md:text-left">
        <div className=" mx-auto flex flex-col gap-5 md:flex-row items-center">
          <div className="md:w-1/2 justify-center align-middle text-center">
            <h1 className="text-3xl text-black font-bold">Discover the Best Tech Tools for Programmers</h1>
            <p className="mt-4 text-gray-700">Unlock Your Full Potential: Explore the latest and greatest tech tools designed to streamline your workflow.</p>
            <button className="bg-black text-white px-6 py-3 rounded inline-block mt-4">Get Started</button>          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/hero1.jpg" alt="Showcase" className="w-full rounded-md" />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'File Converter', desc: 'Convert JSON ↔ CSV, Markdown ↔ HTML effortlessly.' },
            { title: 'UI Component Library', desc: 'Access a collection of reusable Bootstrap components.' },
            { title: 'Tech Stack Advisor', desc: 'Get recommendations for the best tech stack for your project.' }
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md text-center">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
              <button className="mt-4 border border-black px-4 py-2 rounded">Learn More</button>
            </div>
          ))}
        </div>
      </section>

          {/* Showcase Section */}
      <div className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Unlock the Power of Tech</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {/* Card 1 */}
        <div className="p-4 bg-white shadow-sm rounded-lg w-full md:w-1/3">
          <img 
            src="/showcase1.svg" 
            alt="Showcase 1" 
            className="rounded-full w-1/2 mx-auto hover:opacity-90 transition duration-300 ease-in-out"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Elevate Your Coding</h3>
            <p className="text-gray-700">
              Leverage the latest advancements in tech to streamline your programming workflow.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 bg-white shadow-sm rounded-lg w-full md:w-1/3">
          <img 
            src="/showcase2.svg" 
            alt="Showcase 2" 
            className="rounded-full w-1/2 mx-auto"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Enhance Your Coding</h3>
            <p className="text-gray-700">
              Embrace the future of programming with our cutting-edge tech tools.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-4 bg-white shadow-sm rounded-lg w-full md:w-1/3">
          <img 
            src="/showcase3.svg" 
            alt="Showcase 3" 
            className="rounded-full w-1/2 mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Innovate with Confidence</h3>
              <p className="text-gray-700">
                Stay ahead with tools designed to enhance your development process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-bold">About Us</h5>
            <p className="text-gray-400">We build innovative solutions to empower businesses.</p>
          </div>
          <div>
            <h5 className="font-bold">Quick Links</h5>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Follow Us</h5>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 text-xl hover:text-white">📘</a>
              <a href="#" className="text-gray-400 text-xl hover:text-white">🐦</a>
              <a href="#" className="text-gray-400 text-xl hover:text-white">📸</a>
              <a href="#" className="text-gray-400 text-xl hover:text-white">💼</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">&copy; {new Date().getFullYear()} MayorTech. All rights reserved.</div>
      </footer>
    </div>
  );
}
