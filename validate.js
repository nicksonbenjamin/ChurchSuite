<script>
document.getElementById('booking-form').addEventListener('submit', function(event) {
  const start = document.getElementById('start_time').value;
  const end = document.getElementById('end_time').value;
  if (start >= end) {
    alert('End time must be after start time!');
    event.preventDefault();
  }
});
</script>
