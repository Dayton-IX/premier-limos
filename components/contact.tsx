import { useState } from "react"

enum FormStatus {
  DEFAULT = "send",
  SUCCESS = "Message Sent!",
  LOADING = "Sending...",
  FAILURE = "Send"
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState(FormStatus.DEFAULT)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setFormStatus(FormStatus.LOADING)

    const currentTarget: any = event.currentTarget

    const data = {
      name: currentTarget.name.value,
      email: currentTarget.email.value,
      message: currentTarget.message.value
    }

    const response = await fetch("/api/send-email", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    console.log(response)

    if (response.status === 200) {
      setFormStatus(FormStatus.SUCCESS)
    } else {
      setFormStatus(FormStatus.FAILURE)
    }

  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl">Contact Us</h1>

            <p className="max-w-xl mt-6">Ask us anything and we will get back to you with a quote</p>

            <div className="mt-6 space-y-8 md:mt-8">
              {/* <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 text-white truncate w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>
              */}

              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <span className="mx-2 text-white truncate w-72">+1 (386) 589-1869</span>
              </p>

              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 text-white truncate w-72">Premierlimo07@gmail.com</span>
              </p>
            </div>

          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Get A Quote</h1>

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input required name="name" id="name" type="text" placeholder="Full Name" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex-1 mt-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input required name="email" id="email" type="email" placeholder="Email Address" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="w-full mt-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea required name="message" id="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                </div>

                <button type="submit" className={`w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ${formStatus === FormStatus.SUCCESS ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}>
                  {formStatus}
                </button>

                {formStatus === FormStatus.FAILURE &&
                  <p className="font-semibold text-red-400 mt-3">Something Went Wrong, Please Try Again.</p>
                }

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
