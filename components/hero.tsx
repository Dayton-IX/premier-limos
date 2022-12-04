export default function Contact() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h1 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-blue-600">Premier</span>
          </span>{' '}
          Limos

        </h1>
        <p className="text-base text-gray-700 md:text-lg">
          Now catering premium transportation services to you and your party in the Ogden area!
          Send us a message to get a quote for your next event!
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="img/limo/03.webp"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="img/limo/01.webp"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="img/limo/02.webp"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="img/limo/04.webp"
          alt=""
        />
      </div>
      <div className="flex items-center sm:justify-center">
        <a
          href="#contact"
          className="inline-flex text-center flex hover:shadow-xl hover:bg-blue-500 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Contact Us
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="ml-1"
          >
            <path d="M21.426 11.095l-17-8A1 1 0 003.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 001.396 1.147l17-8a1 1 0 000-1.81z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// export default function Hero() {
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="flex gap-10 flex-col-reverse md:grid items-center justify-center lg:grid-cols-2">
//         <div className="flex-col-reverse justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
//           <div className="max-w-xl mb-6">
//             <h1 className="max-w-lg text-5xl font-bold tracking-tight mb-10 sm:text-6xl" ><span className="text-blue-600">Premier {" "}</span> Limos</h1>
//             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//               Let us handle
//               <br className="hidden md:block" />
//               your next{' '}
//               <span className="inline-block text-blue-600">
//                 destination
//               </span>
//             </h2>
//             <p className="text-base text-gray-700 md:text-lg">
//               Delivering premium transportation to you and your party in the Ogden area!
//               <br />
//               Send us a message to get a quote for your next event!
//             </p>
//           </div>
//           <div>
//             <a
//               href="#contact"
//               aria-label=""
//               className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//             >
//               Contact Us
//               <svg
//                 className="inline-block w-3 ml-2"
//                 fill="currentColor"
//                 viewBox="0 0 12 12"
//               >
//                 <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center justify-center -mx-4 lg:pl-8">
//           <div className="flex flex-col items-end px-3">
//             <img
//               className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
//               src="img/limo/01.webp"
//               alt=""
//             />
//             <img
//               className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
//               src="img/limo/02.webp"
//               alt=""
//             />
//           </div>
//           <div className="px-3">
//             <img
//               className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
//               src="img/limo/03.webp"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
