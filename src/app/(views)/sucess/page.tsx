import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;
  const [message, setMessage] = useState('Processing...');

  useEffect(() => {
    if (session_id) {
      setMessage('Payment successful! Your order is confirmed.');
    }
  }, [session_id]);

  return (
    <div>
      <h1>Payment Success</h1>
      <p>{message}</p>
    </div>
  );
}
