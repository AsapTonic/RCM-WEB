"use client";

import { useState } from "react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Billboard Location Targeting",
      description:
        "Place your ads where they matter most — near highways, local hotspots, and community centers. Choose locations based on your audience and budget.",
      icon: "🗺️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Creative Design Support",
      description:
        "Get professionally designed billboard graphics that grab attention and align with your brand. We help you turn concepts into impactful visuals.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Ad Rotation & Scheduling",
      description:
        "Plan your campaigns with flexible scheduling options. Rotate your message by time of day, event, or promotion to maximize reach.",
      icon: "🔁",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Performance Reporting",
      description:
        "Track impressions, engagement, and estimated traffic with our reporting tools. Get insights on how your billboard ads are performing.",
      icon: "📊",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Local Campaigns",
      description:
        "Whether you're targeting a single neighborhood or launching a regional campaign, we help you scale your reach effectively.",
      icon: "📍",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Custom Development",
      description:
        "Build tailored solutions that fit your unique business needs with our expert development team.",
      icon: "💻",
      color: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="h-16 w-auto">
              <span className="sr-only">Your Company</span>
              <img className="h-25 w-auto" src="RockLogo-01.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Locations
            </a>
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#services"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div
        className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/your-background.jpg')", // 👈 replace with your actual image filename
        }}
      >
        {" "}
        {/* Background gradient top */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#088134] to-[#9ddc5e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our newest billboard locations in high-traffic areas.
              <a href="#" className="font-semibold text-green-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Billboards that grow your local business
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We help you reach thousands daily with eye-catching outdoor
              advertising in your neighborhood. Drive brand awareness and
              real-world results with ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#services"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Background gradient bottom */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              Our Services
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to grow your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From strategic placement to performance reporting, we provide
              turnkey billboard advertising solutions to help your business
              stand out in high-traffic areas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="group relative">
                  <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} mb-6`}
                    >
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    {/* Content */}
                    <dt className="text-xl font-semibold leading-7 text-gray-900 mb-4">
                      {service.title}
                    </dt>
                    <dd className="text-base leading-7 text-gray-600 mb-6">
                      {service.description}
                    </dd>

                    {/* CTA Link */}
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn more
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pt-4 lg:pr-8">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base/7 font-semibold text-green-600">
                      Advertise smarter
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                      A simpler way to advertise outdoors
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                      Skip the hassle of traditional ad buying. Our platform
                      makes planning, launching, and managing your billboard
                      campaigns fast and easy — whether you’re a small business
                      or a growing brand.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute top-1 left-1 size-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Quick Campaign Launch.
                        </dt>
                        <dd className="inline">
                          Launch your billboard ad in just a few clicks. Choose
                          your location, upload your design, and schedule your
                          campaign — all from one dashboard.
                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute top-1 left-1 size-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Guaranteed Visibility.
                        </dt>
                        <dd className="inline">
                          We ensure your billboard ad gets prime exposure with
                          real-time scheduling and high-traffic location
                          monitoring.
                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute top-1 left-1 size-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                            <path
                              fill-rule="evenodd"
                              d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Performance Tracking.
                        </dt>
                        <dd className="inline">
                          Track impressions and estimated reach throughout your
                          campaign. Get automated reports to measure brand
                          impact.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <img
                  src="billboard-on-tropical-city-background-2025-03-15-23-52-22-utc.jpg"
                  alt="Product screenshot"
                  className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                  width="2432"
                  height="1442"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
            <div className="rounded-2xl bg-green-600 px-8 py-12 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to get started?
              </h3>
              <p className="text-indigo-100 mb-8 text-lg leading-7">
                Join thousands of businesses already using our platform to drive
                growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  Start free trial
                </a>
                <a
                  href="#"
                  className="rounded-md border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Schedule demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Your Company
              </span>
            </div>
            <p className="mt-4 text-sm leading-5 text-gray-500 sm:mt-0">
              &copy; 2025 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
