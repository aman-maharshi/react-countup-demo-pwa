import { CircleCheck } from 'lucide-react'

const EnterprisePlanCard = ({ plan }) => (
  <div className={`flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b ${plan.gradient}`}>
    <div className="p-8 sm:p-10">
      <div className='flex items-end gap-2'>
        <h3 className="text-5xl font-bold tracking-tight">
          ${plan.price}
        </h3>
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
  </div>
)

export default EnterprisePlanCard