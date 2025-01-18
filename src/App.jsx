import { useState } from 'react'
import { CircleCheck } from 'lucide-react'
import EnterprisePlanCard from './EnterprisePlan'
import CountUp from 'react-countup';

const PlanCard = ({ plan }) => (
  <div className={`flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b ${plan.gradient}`}>
    <div className="p-8 sm:p-10">
      <div className='flex items-end gap-2'>
        {plan.name === 'Free' ? (
          <h3 className="text-5xl font-bold tracking-tight">
            Free
          </h3>
        ) : (
          <h3 className="text-5xl font-bold tracking-tight">
            <CountUp
              end={plan.price}
              duration={1}
              useEasing={false}
            />
          </h3>
        )}

        {plan.name !== 'Free' && (
          <span className="text-base text-gray-600">/ year</span>
        )}
      </div>
      <p className="mt-6 text-base text-gray-600">
        {plan.description}
      </p>
      <button
        className="mt-8 block rounded-2xl bg-white px-8 py-4 text-center text-sm font-semibold text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white border border-gray-700"
      >
        Get Started
      </button>
    </div>
    <div className="flex flex-1 flex-col justify-between p-8 pt-0">
      <ul className="space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <CircleCheck className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3 text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div >
)

const App = () => {

  const freePlan = {
    name: 'Free',
    price: 0,
    description: 'Best for solo creators.',
    features: [
      '100MB Cloud storage',
      '100+ prompt templates',
      '5 projects',
      '24/7 support'
    ],
    gradient: 'from-[#fff5eb] to-[#ffd4b8]'
  }

  const proPlan = {
    name: 'Pro',
    price: 89,
    description: 'Ideal for small businesses.',
    features: [
      'All Starter features',
      '1TB additional storage',
      'Unlimited projects',
      'Analytics'
    ],
    gradient: 'from-[#f3e8ff] to-[#e0cffc]'
  }

  const enterprisePlan = {
    name: 'Enterprise',
    price: 149,
    description: 'Works best for enterprise companies.',
    features: [
      'All Overdrive features',
      '10TB additional storage',
      '50% off per member',
      'Real-time collaboration'
    ],
    gradient: 'from-[#e0f2fe] to-[#bae6fd]'
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        {/* <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Pricing plans
        </h2> */}
        <p className="mt-4 text-lg text-gray-600">
          Flexible pricing for teams of all sizes
        </p>
      </div>
      <div className="grid max-w-md grid-cols-1 gap-8 mt-16 mx-auto lg:max-w-none lg:grid-cols-3">
        <PlanCard plan={freePlan} />
        <PlanCard plan={proPlan} />
        <EnterprisePlanCard plan={enterprisePlan} />
      </div>
    </div>
  )
}

export default App