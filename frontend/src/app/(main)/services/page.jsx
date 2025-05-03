import React from 'react'

const services = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Our Services | Event Management Company</title>
    {/* Hero Section */}
    <section className="bg-indigo-600 text-white text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-lg">Making Your Events Memorable and Extraordinary</p>
    </section>
    {/* Services Grid */}
    <section className="container mx-auto px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Wedding Planning
          </h3>
          <p>
            Elegant and stress-free wedding planning tailored to your dreams and
            budget.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Corporate Events
          </h3>
          <p>
            Professional and impactful corporate event solutions for meetings,
            retreats, and parties.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Birthday Parties
          </h3>
          <p>
            Fun, vibrant, and custom-themed birthday celebrations for all ages.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Concerts &amp; Festivals
          </h3>
          <p>
            Large-scale concert and festival management ensuring unforgettable
            experiences.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Product Launches
          </h3>
          <p>
            Creative and impactful product launch events to capture attention and
            generate buzz.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Private Parties
          </h3>
          <p>
            Exclusive private party planning with luxurious touches and personal
            themes.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Conference Management
          </h3>
          <p>
            Full conference management services including logistics, guest
            handling, and technical setups.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Exhibitions &amp; Trade Shows
          </h3>
          <p>
            Professional planning and execution for exhibitions and trade show
            participation.
          </p>
        </div>
      </div>
    </section>
  </>
  </div>
  )
}

export default services