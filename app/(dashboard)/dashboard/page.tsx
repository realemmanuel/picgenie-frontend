import { IMAGE_TIPS } from "@/constants";
import React from "react";
import PromptForm from "@/components/dashboard/PromptForm";
import NewImage from "@/components/dashboard/NewImage";

const Dashboard = () => {
  return (
    <main>
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-[150px] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/670] w-[16.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[36.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1%, 44.1%)",
            }}
          />
        </div>

        <div className="py-5 sm:py-4 lg:pb-40">
          <div className="mx-auto max-w-6xl px-3 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-6xl">
                Let&apos;s <span className="text-[#b925e6]">generate</span> your{" "}
                <span className="text-[#9341fd]">image</span> instantly🚀
              </h1>
              <p className="mt-6 text-[15px] sm:text-lg sm:leading-8 text-gray-600 dark:text-gray-300">
                Results may vary. We are continually refining our techniques to
                tailor outcomes to specific styles. Here are some helpful tips
                for enhancing your image designs.
              </p>

              <ul className="flex flex-col gap-3 list-disc mt-10 mx-3 md:ml-5">
                {IMAGE_TIPS.map((tip) => (
                  <li className="text-[14px] sm:text-[17px]" key={tip.id}>
                    {tip.tip}
                  </li>
                ))}
              </ul>

              <PromptForm />
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-gray-600/50 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-600/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <NewImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
