'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const plans = [
  { name: "Starter", amount: 499, currency: "INR" },
  { name: "Growth", amount: 1299, currency: "INR" },
  { name: "Enterprise", amount: 3899, currency: "INR" },
];

export default function PaymentModal({ onClose }) {
  const [plan, setPlan] = useState(plans[0]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleStripe() {
    setLoading(true);
    const res = await fetch('https://backend-for-shereai-2.onrender.com/create-payment-intent-stripe', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ amount: plan.amount, plan_name: plan.name, user_email: email, currency: 'INR' })
    });
    const data = await res.json();
    if (!data.success) return toast.error("Stripe not available or error!");
    const stripeJs = await import('@stripe/stripe-js');
    const stripe = await stripeJs.loadStripe(data.publishable_key);
    await stripe.redirectToCheckout({ clientReferenceId: data.client_secret });
    setLoading(false);
    onClose();
  }

  async function handleRazorpay() {
    setLoading(true);
    const res = await fetch('https://your-backend-url/create-order-razorpay', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ amount: plan.amount, plan_name: plan.name, user_email: email, currency: 'INR' })
    });
    const data = await res.json();
    if (!data.success) return toast.error("Razorpay error!");
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "SphereAI",
        description: `Buy ${plan.name} Plan`,
        order_id: data.order_id,
        handler: function (response) {
          toast.success("Payment successful!");
          onClose();
        },
        prefill: { email },
        theme: { color: "#6C63FF" },
      };
      const rz = new window.Razorpay(options);
      rz.open();
      setLoading(false);
    };
    document.body.appendChild(script);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 min-w-[360px] text-center shadow-xl relative">
        <button className="absolute right-2 top-2 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="font-bold text-2xl mb-2 text-indigo-600">Upgrade/Buy Credits</h2>
        <select value={plan.name} onChange={e=>setPlan(plans.find(p=>p.name===e.target.value))} className="w-full my-3 p-2 rounded border">
          {plans.map(p=>
            <option key={p.name} value={p.name}>{p.name} - ₹{p.amount}</option>
          )}
        </select>
        <input className="my-2 p-2 rounded w-full border" type="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="flex gap-3 justify-center mt-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded font-bold hover:bg-indigo-700" disabled={loading} onClick={handleStripe}>
            Pay with Stripe
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded font-bold hover:bg-green-700" disabled={loading} onClick={handleRazorpay}>
            Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
}
