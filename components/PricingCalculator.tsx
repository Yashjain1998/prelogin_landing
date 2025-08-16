'use client'

import { useState } from 'react'

const PricingCalculator = () => {
  const [activeTab, setActiveTab] = useState('Content Writing')
  const [wordCount, setWordCount] = useState(500)
  const [serviceType, setServiceType] = useState('Service Type')

  const calculatePrice = () => {
    if (activeTab === 'Content Writing') {
      return (wordCount * 0.4).toFixed(2) // ₹0.4 per word
    } else if (activeTab === 'Translation') {
      return (wordCount * 0.12).toFixed(2) // ₹0.12 per word
    }
    return '0.00'
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex flex-col items-center gap-12">
          {/* Main Headline */}
          <div className="flex flex-col items-center gap-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-[#353535] text-center leading-[1.25]">
              Industry-Leading Quality at Affordable Rates
            </h2>
            <p className="text-xl text-black text-center max-w-3xl">
              Starting at 1.5/word for content writing solutions. No contracts, no commitments.
            </p>
          </div>

          {/* Segmented Control Tabs */}
          <div className="relative bg-white border border-[#888888] rounded-[42px] p-4">
            <div className="flex gap-4">
              {['Content Writing', 'SEO Writing', 'Translation'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-[36px] text-sm font-normal transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#42175B] text-white'
                      : 'text-black hover:text-[#42175B]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Module */}
          <div className="w-full max-w-[1100px] px-8">
            {activeTab === 'Content Writing' && (
              <div className="bg-gradient-to-br from-white via-[#F9F0FF] to-white border-2 border-[#DFDFDF] rounded-xl p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Left Side - Calculator */}
                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-black">
                      Calculate your pricing for content
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Service Type */}
                      <div className="space-y-2">
                        <label className="text-base text-black">Content type</label>
                        <div className="bg-white border border-black rounded px-6 py-4 flex justify-between items-center">
                          <span className="text-lg font-medium text-black">{serviceType}</span>
                          <svg className="w-3 h-2" viewBox="0 0 11 6" fill="none">
                            <path d="M1 1L5.5 5L10 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      {/* Word Count */}
                      <div className="space-y-2">
                        <label className="text-base text-black">Word Count</label>
                        <div className="bg-white border border-black rounded px-4 py-4 flex justify-between items-end">
                          <span className="text-lg font-medium text-black">{wordCount}</span>
                          <span className="text-base text-[#A4A4A4]">recommended</span>
                        </div>
                      </div>

                      {/* Price Display */}
                      <div className="space-y-1">
                        <span className="text-base font-medium text-black">Your price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl text-black">₹</span>
                          <span className="text-7xl font-semibold bg-gradient-to-r from-[#42175B] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent">
                            {calculatePrice()}
                          </span>
                          <span className="text-base text-black">Rupees</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-black">What's Included</h3>
                    <div className="space-y-3">
                      {[
                        'SEO-Optimization',
                        '0% Plagiarism [With Report]',
                        '100% AI-free content',
                        'Free revisions',
                        '48 hours delivery'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-[#FFE7AA] rounded-full flex items-center justify-center">
                            <svg className="w-3 h-2" viewBox="0 0 13 8" fill="none">
                              <path d="M1 4L5 8L12 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-base font-medium text-black">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Get Started Button */}
                    <button className="w-full bg-[#FBBA18] text-white font-medium text-lg py-2 px-10 rounded-lg hover:bg-[#F9A800] transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Translation' && (
              <div className="bg-gradient-to-br from-white via-[#FFF5DC] to-white border-2 border-[#DFDFDF] rounded-xl p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Left Side - Calculator */}
                  <div className="space-y-5">
                    <h3 className="text-2xl font-medium text-black">
                      Calculate your pricing for Translation
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Language to Translate */}
                      <div className="space-y-2">
                        <label className="text-base text-black">Language to translated</label>
                        <div className="bg-white border border-black rounded px-6 py-4 flex justify-between items-center">
                          <span className="text-lg font-medium text-black">Service Type</span>
                          <svg className="w-3 h-2" viewBox="0 0 11 6" fill="none">
                            <path d="M1 1L5.5 5L10 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      {/* Your Language */}
                      <div className="space-y-2">
                        <label className="text-base text-black">Your language</label>
                        <div className="bg-white border border-black rounded px-4 py-4 flex justify-between items-end">
                          <span className="text-lg font-medium text-black">English</span>
                        </div>
                      </div>

                      {/* Price Display */}
                      <div className="space-y-1">
                        <span className="text-base font-medium text-black">Your price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl text-black">₹</span>
                          <span className="text-7xl font-semibold bg-gradient-to-r from-[#42175B] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent">
                            12
                          </span>
                          <span className="text-base text-black">per word</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-black">What's Included</h3>
                    <div className="space-y-3">
                      {[
                        'SEO-optimization',
                        'Plagiarism-free content',
                        'Unlimited revisions',
                        '48 Hour delivery'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-[#FFE7AA] rounded-full flex items-center justify-center">
                            <svg className="w-3 h-2" viewBox="0 0 13 8" fill="none">
                              <path d="M1 4L5 8L12 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-base font-medium text-black">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Get Started Button */}
                    <button className="w-full bg-gradient-to-r from-[#42175B] to-[#570587] text-white font-medium text-lg py-2 px-10 rounded-lg hover:opacity-90 transition-opacity">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SEO Packages */}
            {activeTab === 'SEO Writing' && (
              <div className="flex gap-5 justify-center">
                {/* Basic Package */}
                <div className="w-[355px] h-[406px] bg-white border-2 border-[#DFDFDF] rounded-2xl p-6 shadow-lg">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-black">Basic</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl text-black">₹</span>
                      <span className="text-6xl font-semibold bg-gradient-to-r from-[#42175B] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent">
                        30k
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    {[
                      '10 Articles',
                      'Plagiarism-free content',
                      'Unlimited revisions',
                      '48 Hour delivery'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#FFE7AA] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-2" viewBox="0 0 14 8" fill="none">
                            <path d="M1 4L5 8L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-base font-medium text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard Package */}
                <div className="w-[355px] h-[406px] bg-gradient-to-br from-[#C1E9FF] to-white border-2 border-[#DFDFDF] rounded-2xl p-6 shadow-lg">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-black">Standard</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl text-black">₹</span>
                      <span className="text-6xl font-semibold bg-gradient-to-r from-[#085681] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent">
                        40k
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    {[
                      '10 Articles',
                      'Everything in basic package',
                      'Keyword Research',
                      'Content Strategy',
                      'Banner Images & Infographics',
                      'Upto 1.3x traffic Growth in 6 months'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#F6AF00] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-2" viewBox="0 0 14 8" fill="none">
                            <path d="M1 4L5 8L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className={`text-base font-medium ${
                          index === 1 ? 'bg-gradient-to-r from-[#701960] to-[#FCBC19] bg-clip-text text-transparent' :
                          index >= 2 ? 'text-[#451661] font-semibold' : 'text-black'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Package */}
                <div className="w-[355px] h-[406px] bg-gradient-to-br from-[#DCF3FF] via-[#FFF6DE] to-white border-2 border-[#DFDFDF] rounded-2xl p-6 shadow-lg">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-black">Premium</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl text-black">₹</span>
                      <span className="text-6xl font-semibold bg-gradient-to-r from-[#42175B] via-[#811861] via-[#BB2A5D] via-[#E44E49] via-[#FA8333] to-[#FBBB18] bg-clip-text text-transparent">
                        50k
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    {[
                      '10 Articles',
                      'Everything in Standard package',
                      '3 Backlinks of avg 30 DA',
                      'Content Repurposing for LinkedIn, Insta, Reddit, Medium',
                      'Upto 2x to 3x traffic growth in 6 months'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#42175B] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-2" viewBox="0 0 14 8" fill="none">
                            <path d="M1 4L5 8L13 1" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-base font-medium text-[#451661] font-semibold">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="w-full max-w-[1100px] bg-gradient-to-r from-[#42175B] to-[#7B00BE] border border-[#C1C1C1] rounded-2xl p-10">
            <div className="flex flex-col gap-8 lg:flex-row justify-between items-center max-w-4xl mx-auto">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Are you looking for personalized assistance?
                </h3>
              </div>
              <button className="bg-white text-black font-normal text-xl py-2 px-4 rounded flex items-center gap-3 hover:bg-gray-100 transition-colors">
                <span style={{textWrap:"nowrap"}}> Talk to our experts</span>
                <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L8 2M15 9L8 16" stroke="#444444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator
