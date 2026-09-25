const Career = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
        <p className="text-sm sm:text-base font-semibold text-secondary mb-2">
          CAREERS AT DRAGON NEWS
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Build the Future of News With Us
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          We are looking for passionate people who love technology, journalism,
          creativity, and building meaningful digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
            alt="Team working together"
            className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Why Join Dragon News?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-7 mb-5">
            At Dragon News, you will have the opportunity to work on a modern
            digital news platform and contribute to products used by people who
            want to stay informed.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-xl">🚀</span>

              <div>
                <h3 className="font-bold text-base sm:text-lg">Grow With Us</h3>

                <p className="text-sm text-gray-600 mt-1">
                  Learn new skills and take on meaningful challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">💡</span>

              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  Creative Environment
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Bring your ideas and help us improve the way people experience
                  news.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-xl">🤝</span>

              <div>
                <h3 className="font-bold text-base sm:text-lg">Great Team</h3>

                <p className="text-sm text-gray-600 mt-1">
                  Work with people who care about quality, creativity, and
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 md:mt-16">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-secondary mb-2">
            OPEN POSITIONS
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Find Your Next Opportunity
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Explore some of the roles we are looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold">
                Frontend Developer
              </h3>

              <span className="badge badge-secondary">Full Time</span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-6">
              Build responsive and engaging interfaces using modern frontend
              technologies.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-outline">React</span>
              <span className="badge badge-outline">JavaScript</span>
              <span className="badge badge-outline">Tailwind</span>
            </div>

            <button className="btn btn-neutral btn-sm mt-5 w-full sm:w-auto">
              View Position
            </button>
          </div>

          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold">Content Writer</h3>

              <span className="badge badge-secondary">Full Time</span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-6">
              Create engaging and informative content for our readers across
              different news categories.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-outline">Writing</span>
              <span className="badge badge-outline">Research</span>
              <span className="badge badge-outline">SEO</span>
            </div>

            <button className="btn btn-neutral btn-sm mt-5 w-full sm:w-auto">
              View Position
            </button>
          </div>

          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold">UI/UX Designer</h3>

              <span className="badge badge-secondary">Part Time</span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-6">
              Design intuitive and accessible experiences for our digital news
              platform.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-outline">Figma</span>
              <span className="badge badge-outline">UI Design</span>
              <span className="badge badge-outline">UX</span>
            </div>

            <button className="btn btn-neutral btn-sm mt-5 w-full sm:w-auto">
              View Position
            </button>
          </div>

          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold">
                Backend Developer
              </h3>

              <span className="badge badge-secondary">Full Time</span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-6">
              Develop reliable APIs and backend systems that power our news
              platform.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-outline">Node.js</span>
              <span className="badge badge-outline">Express</span>
              <span className="badge badge-outline">MongoDB</span>
            </div>

            <button className="btn btn-neutral btn-sm mt-5 w-full sm:w-auto">
              View Position
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 md:mt-16 bg-base-200 rounded-xl p-6 sm:p-8 md:p-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Don't See Your Role?
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto leading-6">
          We are always interested in meeting talented people. Send us your
          information and tell us how you can contribute to Dragon News.
        </p>

        <button
          onClick={() => {
            window.open(
              "https://wa.me/8801606625509?text=Hello%20I%20want%20to%20contact%20you",
              "_blank",
            );
          }}
          className="btn btn-neutral mt-5"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Career;
