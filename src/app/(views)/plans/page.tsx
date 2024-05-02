import React from 'react';
import PlanSelector from '@/components/PlanSelector.client'; 

const plans = [
  { id: 'basic', name: 'Basic Plan', price: 10 },
  { id: 'pro', name: 'Pro Plan', price: 20 },
  { id: 'enterprise', name: 'Enterprise Plan', price: 50 }
];

const PlansPage = () => {
  return (
    <div>
      <h1>Choose a Plan</h1>
      <PlanSelector plans={plans} />
    </div>
  );
};

export default PlansPage;