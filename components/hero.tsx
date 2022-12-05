import { Carousel } from 'flowbite-react'

export default function Home() {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

              <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                  <img
                    src="img/limo/04.webp"
                    alt=""
                  />
                  <img
                    src="img/limo/03.webp"
                    alt=""
                  />
                  <img
                    src="img/limo/01.webp"
                    alt=""
                  />
                  <img
                    src="img/limo/02.webp"
                    alt=""
                  />
                  <img
                    src="img/limo/05.webp"
                    alt=""
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Premier Limos</h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Now catering premium transportation services to you and your party in the Ogden area! Send us a message to get a quote for your next event!</p>
          <a
            href="#contact"
            className="text-center flex hover:shadow-xl z-50 hover:bg-blue-500 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 focus:shadow-outline focus:outline-none"
          >
            Get A Quote
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

