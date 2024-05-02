'use client'
import PayPalButton from '@/components/PayPalButton';

const PricingPage: React.FC = () => {
  return (
    <div>
      <h1>Choose Your Plan</h1>
      <div>
        <h2>Basic Plan - $10</h2>
        <PayPalButton amount="10" />
      </div>
      <div>
        <h2>Premium Plan - $20</h2>
        <PayPalButton amount="20" />
      </div>
    </div>
  );
};

export default PricingPage;
