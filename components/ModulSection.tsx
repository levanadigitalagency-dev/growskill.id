import React from 'react'

const items = [
  {
    title: 'Fast Track',
    subtitle: 'For Brand',
    bullets: ['40+ Video Pembelajaran'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec ut in fermentum. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    title: 'Fast Track',
    subtitle: 'For Brand',
    bullets: ['40+ Video Pembelajaran'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec ut in fermentum. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    title: 'Fast Track',
    subtitle: 'For Brand',
    bullets: ['40+ Video Pembelajaran'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec ut in fermentum. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  {
    title: 'Fast Track',
    subtitle: 'For Brand',
    bullets: ['40+ Video Pembelajaran'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Purus dignissim odio porttitor aliquet nec ut in fermentum. Fringilla magna eget nec massa et vulputate non enim et.',
  },
  
]

const ModulSection = () => {
  // For strict 2-column visual layout: render each item as a row with 3 columns
  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-[#3B82F6]">80++</span> Modul Pembelajaran
          </h2>
        </div>

        {/* Mobile: Vertical Card Stack */}
        <div className="lg:hidden space-y-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700"
            >
              {/* Image placeholder with number badge */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-300" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-bold text-lg">
                  {idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#3B82F6] font-semibold mb-2">{item.subtitle}</p>
                <p className="text-gray-300 text-sm mb-3">{item.bullets[0]}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Timeline Layout */}
        <div className="hidden lg:block relative">
          {/* vertical center line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 items-start gap-6">
                {/* left: image placeholder */}
                <div className="flex justify-end">
                  <div className="w-44 md:w-80 h-44 md:h-56 bg-gray-300 rounded-2xl shadow-sm" />
                </div>

                {/* center: circle aligned on the center line */}
                <div className="flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* right: text */}
                <div className="pl-0">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-[#3B82F6] font-semibold mt-1">{item.subtitle}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.bullets[0]}</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModulSection