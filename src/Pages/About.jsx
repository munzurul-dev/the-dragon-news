const About = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
        <p className="text-sm sm:text-base font-semibold text-secondary mb-2">
          ABOUT DRAGON NEWS
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Stay Informed. Stay Ahead.
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Dragon News is a modern news platform designed to keep you updated
          with the latest stories, trending topics, and important events from
          around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
            alt="News and journalism"
            className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Your Trusted News Companion
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-7 mb-4">
            At Dragon News, we believe that access to reliable information helps
            people understand the world around them. Our platform brings
            together news from different categories in a simple and
            easy-to-navigate experience.
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-7">
            From breaking news and technology to sports, entertainment, and
            international stories, Dragon News makes it easier to discover what
            matters to you.
          </p>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 md:mt-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
          Why Dragon News?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">📰</div>

            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Latest Stories
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Discover fresh stories and important updates from different
              categories in one place.
            </p>
          </div>

          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">🌎</div>

            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Global Coverage
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              Explore stories covering local, national, and international
              events.
            </p>
          </div>

          <div className="border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-3">⚡</div>

            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Easy Experience
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-6">
              A clean and responsive interface makes finding and reading news
              simple on any device.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 md:mt-16 bg-base-200 rounded-xl p-6 sm:p-8 md:p-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Stay Connected With Dragon News
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore the latest stories and stay updated with the news that matters
          to you.
        </p>
      </div>
    </section>
  );
};

export default About;
