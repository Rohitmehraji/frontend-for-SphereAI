// services/placeholderBillingService.js

export const getSubscriptionDetails = async () => {
    // Simulate an API call
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                plan: 'pro',
                planName: 'Pro Plan',
                renewsOn: '2025-11-20T12:00:00Z',
                status: 'active',
            });
        }, 500);
    });
};

export const getPaymentHistory = async () => {
    // Simulate an API call
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 'inv_1', date: '2025-10-20T12:00:00Z', amount: 49.00, status: 'Paid' },
                { id: 'inv_2', date: '2025-09-20T12:00:00Z', amount: 49.00, status: 'Paid' },
                { id: 'inv_3', date: '2025-08-20T12:00:00Z', amount: 49.00, status: 'Paid' },
            ]);
        }, 500);
    });
};

// The checkout and cancel functions can remain as they are in the paymentService,
// as they are user-initiated actions that would redirect to a real payment provider.
// We only need to mock the data-fetching for the initial page load.
