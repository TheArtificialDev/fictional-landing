export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 overflow-hidden font-comic-neue" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="text-center">
            <p className="font-comic-neue text-lg text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
              Questions? Contact us at <a href="mailto:fictional@thekp.in" className="text-[#e63946] font-bold underline">fictional@thekp.in</a>
            </p>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Comic Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#f1c40f] comic-border comic-shadow rounded-full comic-float opacity-80"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#9c27b0] comic-border comic-shadow transform rotate-45 opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-[#27ae60] comic-border comic-shadow rounded-full opacity-60"></div>
          <div className="absolute top-60 left-1/2 w-16 h-16 bg-[#e91e63] comic-border comic-shadow rounded-full comic-float opacity-75"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-32 right-1/3 w-20 h-20 bg-[#f39c12] comic-border comic-shadow transform rotate-12 opacity-65"></div>
          <div className="absolute bottom-60 right-10 w-28 h-28 bg-[#457b9d] comic-border comic-shadow rounded-full comic-float opacity-70"></div>
          <div className="absolute top-80 left-1/3 w-18 h-18 bg-[#e63946] comic-border comic-shadow transform rotate-45 opacity-60"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 bg-[#9c27b0] comic-border comic-shadow rounded-full opacity-55"></div>
          <div className="absolute top-96 right-1/4 w-22 h-22 bg-[#27ae60] comic-border comic-shadow transform rotate-30 comic-float opacity-65"></div>
          <div className="absolute bottom-80 left-2/3 w-20 h-20 bg-[#f1c40f] comic-border comic-shadow rounded-full opacity-70"></div>
        </div>

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            {/* Main Title */}
            <h1 className="font-bangers text-7xl md:text-9xl text-[#2c1810] comic-text-shadow mb-8 comic-bounce-in" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
              <span className="text-[#e63946]">FICTION</span> WRITER
            </h1>
            
            {/* Subtitle Speech Bubble */}
            <div className="speech-bubble max-w-4xl mx-auto mb-12">
              <p className="font-comic-neue text-xl md:text-2xl text-[#2c1810] font-semibold" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                Create Epic Worlds, Craft Stunning Stories, Connect Everything!
                <br />
                <span className="text-[#457b9d]">Opening Soon for Beta Testing</span>
              </p>
            </div>

            {/* Email Collection CTA */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="speech-bubble bg-[#f1c40f] p-8">
                <h3 className="font-bangers text-2xl text-[#2c1810] mb-4 text-center" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                  🚀 JOIN THE BETA TEST!
                </h3>
                <p className="font-comic-neue text-lg text-[#2c1810] mb-6 text-center" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                  Be among the first to experience revolutionary fiction writing. Get early access!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email for beta access..."
                    className="flex-1 px-6 py-4 comic-border bg-white text-[#2c1810] font-comic-neue text-lg"
                    style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}
                  />
                  <button className="comic-btn bg-[#e63946] text-white px-8 py-4 comic-border comic-shadow font-bangers font-bold text-lg transform hover:scale-105" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                    GET BETA ACCESS
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
            {/* More floating elements around features */}
            <div className="absolute -top-10 -left-5 w-16 h-16 bg-[#e91e63] comic-border comic-shadow rounded-full comic-float opacity-60 pointer-events-none"></div>
            <div className="absolute -bottom-8 right-10 w-20 h-20 bg-[#f39c12] comic-border comic-shadow transform rotate-45 opacity-55 pointer-events-none"></div>
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-[#457b9d] comic-border comic-shadow rounded-full opacity-65 pointer-events-none"></div>
            
            {/* Feature 1 */}
            <div className="comic-border comic-shadow bg-white p-8 transform hover:scale-105 transition-transform comic-bounce-in">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="font-bungee text-2xl text-[#2c1810] mb-4" style={{fontFamily: 'var(--font-bungee), "Comic Sans MS", cursive'}}>Build Worlds</h3>
              <p className="font-comic-neue text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                Create detailed universes with rich histories, complex societies, and intricate magic systems.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="comic-border comic-shadow bg-white p-8 transform hover:scale-105 transition-transform comic-bounce-in" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="font-bungee text-2xl text-[#2c1810] mb-4" style={{fontFamily: 'var(--font-bungee), "Comic Sans MS", cursive'}}>Epic Timelines</h3>
              <p className="font-comic-neue text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                Design complex chronologies that span centuries, with events that shape your stories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="comic-border comic-shadow bg-white p-8 transform hover:scale-105 transition-transform comic-bounce-in" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-4">🔗</div>
              <h3 className="font-bungee text-2xl text-[#2c1810] mb-4" style={{fontFamily: 'var(--font-bungee), "Comic Sans MS", cursive'}}>Connect Stories</h3>
              <p className="font-comic-neue text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                Weave interconnected narratives that reference each other beautifully across your universe.
              </p>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="text-center mb-20 relative">
            {/* Floating elements around social proof */}
            <div className="absolute -top-5 left-10 w-18 h-18 bg-[#27ae60] comic-border comic-shadow transform rotate-12 comic-float opacity-60 pointer-events-none"></div>
            <div className="absolute -bottom-5 right-16 w-22 h-22 bg-[#9c27b0] comic-border comic-shadow rounded-full opacity-55 pointer-events-none"></div>
            
            <div className="speech-bubble bg-[#f1c40f] max-w-3xl mx-auto">
              <p className="font-comic-neue text-xl text-[#2c1810] font-bold" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                &ldquo;This changed my entire writing process! I&apos;ve never felt so organized and creative at the same time!&rdquo;
              </p>
              <p className="font-bungee text-[#2c1810] mt-4" style={{fontFamily: 'var(--font-bungee), "Comic Sans MS", cursive'}}>- Sarah M., Fantasy Author</p>
            </div>
          </div>

          {/* Big Features Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 relative">
            {/* More floating elements around big features */}
            <div className="absolute -top-12 left-1/3 w-24 h-24 bg-[#f1c40f] comic-border comic-shadow rounded-full comic-float opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-10 -left-8 w-20 h-20 bg-[#e63946] comic-border comic-shadow transform rotate-45 opacity-65 pointer-events-none"></div>
            <div className="absolute top-1/3 -right-10 w-18 h-18 bg-[#457b9d] comic-border comic-shadow rounded-full comic-float opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-6 right-1/4 w-16 h-16 bg-[#f39c12] comic-border comic-shadow transform rotate-30 opacity-55 pointer-events-none"></div>
            
            <div className="comic-border comic-shadow bg-white p-8 rounded-3xl">
              <h2 className="font-bangers text-4xl text-[#2c1810] mb-6" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                Revolutionary Writing Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#27ae60] comic-border rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="font-comic-neue text-lg text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>Character relationship mapping</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#27ae60] comic-border rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="font-comic-neue text-lg text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>Plot consistency tracking</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#27ae60] comic-border rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="font-comic-neue text-lg text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>Cross-story reference system</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#27ae60] comic-border rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="font-comic-neue text-lg text-[#2c1810]" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>World-building templates</span>
                </div>
              </div>
            </div>
            <div className="comic-border bg-gradient-to-br from-[#9c27b0] to-[#e91e63] p-8 text-center comic-float">
              <div className="text-8xl mb-4">📚</div>
              <h3 className="font-bangers text-3xl text-white" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                Your Stories,
                <br />
                Beautifully Connected
              </h3>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="speech-bubble bg-[#e63946] max-w-2xl mx-auto mb-8">
              <h2 className="font-bangers text-3xl text-[#2c1810] mb-4" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                Ready to Be a Beta Tester?
              </h2>
              <p className="font-comic-neue text-[#2c1810] text-lg" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
                Help us shape the future of fiction writing! Join our exclusive beta program.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="your-email@example.com"
                  className="flex-1 px-6 py-4 comic-border bg-white text-[#2c1810] font-comic-neue text-lg"
                  style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}
                />
                <button className="comic-btn bg-[#f1c40f] text-[#2c1810] px-8 py-4 comic-border font-bangers text-xl transform hover:scale-110" style={{fontFamily: 'var(--font-bangers), "Comic Sans MS", cursive'}}>
                  JOIN BETA! 🚀
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-comic-neue text-lg mb-2" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
            Questions or feedback? Reach out to us!
          </p>
          <p className="font-comic-neue" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
            📧 <a href="mailto:fictional@thekp.in" className="text-[#f1c40f] underline">fictional@thekp.in</a>
          </p>
          <p className="font-comic-neue text-sm mt-4 opacity-75" style={{fontFamily: 'var(--font-comic-neue), "Comic Sans MS", cursive'}}>
            © 2025 - Craft epic stories that captivate the world.
          </p>
        </div>
      </footer>
    </div>
  );
}
