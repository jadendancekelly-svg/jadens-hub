// Jaden's Hub — Daily Quiz answer checking
// Works with mouse, keyboard, and touchscreen form submission.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('daily-quiz-form');
  const feedback = document.getElementById('quiz-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="break-even"]:checked');
    feedback.style.display = 'block';

    if (!selected) {
      feedback.textContent = 'Choose an answer first, then try again!';
    } else if (selected.value === 'correct') {
      feedback.textContent = 'That’s right! Break-even means a business earns enough revenue to cover its total costs—no profit or loss.';
    } else {
      feedback.textContent = 'Not quite! Break-even means a business earns enough revenue to cover its total costs—no profit or loss. Give it another try!';
    }
  });

  form.addEventListener('change', () => {
    feedback.style.display = 'none';
    feedback.textContent = '';
  });
});
