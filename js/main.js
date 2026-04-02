document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('input[type="tel"], input[type="password"], input[type="text"][inputmode="numeric"]').forEach(input => {
    input.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '');
    });
  });
});