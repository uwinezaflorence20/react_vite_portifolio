import React from "react";

const Home = () => {
  return (
    <section className="bg-black pt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/mine.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
            <p className="mt-4 text-gray-600 ">
              I am a website designer from Rwanda, with a strong focus on
              front-end development. I love to gain new experiences and analyze
              and learn from my surroundings. As a highly skilled and
              experienced computer programmer, I am passionate about writing
              code and developing high-quality software that meets the needs of
              my clients. My strong background in computer science, coupled with
              my commitment to using the best programming practices and tools
              available, makes me a valuable asset to any software development
              team.
            </p>

            <button className="mt-8 inline-block rounded  bg-[#fb153b] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#85414d] focus:outline-none focus:ring focus:ring-yellow-400"><a href="cv.pdf" download>Download</a></button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;





































