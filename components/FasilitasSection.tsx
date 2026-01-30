import React from 'react'

const facilities = [
  {
    id: 1,
    title: 'Live Mentoring QNA Session & Bedah Dashboard',
    price: 'Rp 6.200.000',
    period: '/tahun',
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et. Donec diam sed vitae et enim arcu malesuada. Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    id: 2,
    title: 'VIP Discord Community & Nongkrong Diskusi Live Tiap Hari',
    price: 'Rp 6.200.000',
    period: '/tahun',
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et. Donec diam sed vitae et enim arcu malesuada. Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    id: 3,
    title: 'Hot Product Research',
    price: 'Rp 6.200.000',
    period: '/tahun',
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et. Donec diam sed vitae et enim arcu malesuada. Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    id: 4,
    title: 'Whitelist Account Meta Ads',
    price: 'Rp 6.200.000',
    period: '/tahun',
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et. Donec diam sed vitae et enim arcu malesuada. Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec sit ut frames. Fringilla magna eget nec massa et vulputate non enim et.',
  },
]

const totalPrice = 'Rp 29.999.000'
const totalPeriod = '/tahun'

const FasilitasSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Bonus Dan Fasilitas Yang Didapatkan Setelah Bergabung<br />Menjadi Member
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility) => (
            <div key={facility.id} className="border border-gray-600 rounded-2xl p-6 md:p-8">
              {/* Image placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-full h-48 md:h-[356px] bg-gray-300 rounded-xl shadow-sm" />
              </div>
              
              {/* Number and title */}
              <div className="mb-4">
                <p className="text-[#3B82F6] font-bold text-2xl mb-2">{facility.id}. {facility.title}</p>
              </div>

              {/* Senilai label and price */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Senilai :</p>
                <p className="text-green-500 font-bold text-lg">
                  {facility.price} <span className="text-gray-400">{facility.period}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total price section */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-base mb-2">Total Value yang kamu dapatkan :</p>
          <p className="text-green-500 font-bold text-2xl md:text-3xl">
            {totalPrice}<span className="text-gray-400">{totalPeriod}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FasilitasSection