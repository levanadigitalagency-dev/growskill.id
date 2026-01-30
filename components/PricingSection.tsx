'use client'

import React, { useState } from 'react'

interface Package {
  id: number
  name: string
  description: string
  price: string
  period: string
  isBestValue?: boolean
  benefits: string[]
}

const packages: Package[] = [
  {
    id: 1,
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur. Amet odio sem nunc fusce proin donec',
    price: 'Rp 200.000',
    period: '/bulan',
    benefits: [
      'Semua kursus Selamanya',
      'Akses lifetime ke materi',
      'Support komunitas',
      'Update materi gratis',
      'Sertifikat digital',
      'Forum diskusi',
    ],
  },
  {
    id: 2,
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur. Amet odio sem nunc fusce proin donec',
    price: 'Rp 200.000',
    period: '/bulan',
    benefits: [
      'Semua kursus Selamanya',
      'Mentoring 1v1 bulanan',
      'Priority support',
      'Update materi gratis',
      'Sertifikat digital premium',
      'Forum diskusi VIP',
    ],
  },
  {
    id: 3,
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur. Amet odio sem nunc fusce proin donec',
    price: 'Rp 200.000',
    period: '/bulan',
    isBestValue: true,
    benefits: [
      'Semua kursus Selamanya',
      'Mentoring unlimited',
      'Priority support 24/7',
      'Akses ke materi eksklusif',
      'Sertifikat platinum',
      'Akses workshop live bulanan',
    ],
  },
  {
    id: 4,
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur. Amet odio sem nunc fusce proin donec',
    price: 'Rp 200.000',
    period: '/bulan',
    benefits: [
      'Semua kursus Selamanya',
      'Custom learning path',
      'Dedicated account manager',
      'Priority support 24/7',
      'Sertifikat gold',
      'Akses consulting 1v1',
    ],
  },
]

const PricingSection = () => {
  const [selectedId, setSelectedId] = useState(3) // Default: Best Value (id 3)
  const selectedPackage = packages.find((p) => p.id === selectedId)

  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join & Daftar Sekarang!</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Hendrerit urna turpis montes ante imperdiet dui cursus. Sed id tristique porttitor ipsum ut duis. Mattis leo proin vulputate nulla.
          </p>
        </div>

        {/* Main Grid: Packages Left + Benefits Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Package Cards */}
          <div className="lg:col-span-2 space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedId(pkg.id)}
                className={`relative p-6 md:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedId === pkg.id
                    ? 'bg-[#3B82F6] border-[#3B82F6]'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                {/* Best Value Badge */}
                {pkg.isBestValue && selectedId === pkg.id && (
                  <div className="absolute -top-3 right-6 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Value
                  </div>
                )}

                {/* Card Content */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`text-sm ${selectedId === pkg.id ? 'text-white' : 'text-gray-400'}`}>
                      {pkg.description}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className={`font-bold text-lg ${selectedId === pkg.id ? 'text-white' : 'text-white'}`}>
                      {pkg.price}
                      <span className="text-sm">{pkg.period}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Benefits List */}
          <div className="lg:col-span-1">
            <div className="border-2 border-gray-600 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Benefit</h3>
              <div className="space-y-4">
                {selectedPackage?.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#3B82F6] hover:opacity-90 transition-opacity text-white font-bold py-3 px-16 rounded-full text-lg">
            Pilih Paket
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
