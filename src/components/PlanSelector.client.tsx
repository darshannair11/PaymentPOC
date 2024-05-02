'use client'

import React from 'react';

interface Plan {
  id: string;
  name: string;
  price: number;
}

interface Props {
  plans: Plan[];
}

const PlanSelector: React.FC<Props> = ({ plans }) => {
    const handleSelectPlan = async (planId: string) => {
      try {
        const response = await fetch(`/api/checkout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ planId: planId })
        });
  
        if (!response.ok) throw new Error('Network response was not ok');
  
        const data = await response.json();
        
        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error('No URL returned from API', data.error);
        }
      } catch (error) {
        console.error('Failed to checkout:', error);
      }
    };
  
    return (
      <div>
        {plans.map(plan => (
          <div key={plan.id}>
            <h2>{plan.name} - ${plan.price}</h2>
            <button onClick={() => handleSelectPlan(plan.id)}>Subscribe</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PlanSelector;