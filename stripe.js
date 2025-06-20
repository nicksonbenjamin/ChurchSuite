<script src="https://js.stripe.com/v3/"></script>
<script>
document.getElementById('booking-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch('/create-checkout-session', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const session = await response.json();
  const stripe = Stripe('YOUR_PUBLIC_STRIPE_KEY');
  stripe.redirectToCheckout({ sessionId: session.id });
});
</script>
