import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");

  const sendMessage = (e) => {
    e.preventDefault();
    const EMAIL_SERVICE_ID = "service_jks88qo";
    const EMAIL_TEMPLATE_ID = "template_sfzq81h";
    const EMAIL_PUBLIC_KEY = "sJW7Kc38BKR5kiZYd";
    const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
         async (result) => {
          console.log(result.text);
          form.current.reset();
          setButtonText("Message Sent");
          await wait(5000);
          setButtonText("Send");

        },
        (error) => {
          console.log(error.text);
          setButtonText("Unable to send")
        }
      );
  };

  return (
    <main class="mx-auto mt-40 mb-24 max-w-3xl px-6 w-full grow">
      <section class="relative isolate">
        <svg
          class="absolute inset-0 -z-10 h-full w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width="200"
              height="200"
              x="50%"
              y="-64"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg
            x="50%"
            y="-64"
            class="overflow-visible fill-zinc-50 dark:fill-zinc-900/75"
          >
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          ></rect>
        </svg>
        <div class="relative">
          <h2 class="text-4xl font-bold tracking-tight">Let’s talk</h2>
          <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form
              ref={form}
              class="lg:flex-auto"
              novalidate=""
              onSubmit={sendMessage}
            >
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-semibold leading-6"
                  >
                    Name
                  </label>
                  <div class="mt-2.5">
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      autocomplete="given-name"
                      name="user_name"
                      class="block w-full rounded-md bg-transparent border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-react-link sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      placeholder="Email"
                      name="user_email"
                      class="block w-full rounded-md bg-transparent border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-react-link sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6"
                  >
                    Message
                  </label>
                  <div class="mt-2.5">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      rows="4"
                      class="block w-full rounded-md bg-transparent border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-1 focus:ring-inset focus:ring-react-link sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="submit"
                  value="Send"
                  class={`block w-full rounded-md dark:bg-white px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-react--hover ${buttonText === "Message Sent" ? 'text-green-700' : ''} ${buttonText === "Send" ? 'text-white dark:text-black' : ''} ${buttonText === "Unable to send" ? 'text-red-500' : ''}`}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
          <canvas class="pointer-events-none mx-auto absolute inset-0 w-full"></canvas>
        </div>
      </section>
    </main>
  );
}


// text-white dark:text-black