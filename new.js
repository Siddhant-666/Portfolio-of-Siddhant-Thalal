/* --------------------------------------------- */
/* script.js                                     */
/* --------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for ALL internal links (navbar + video icons)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Resume link placeholder
  const resumeLink = document.querySelector('.btn.outline');
  if (resumeLink) {
    // Leave as-is — resume at assets/docs/resume.pdf
  }

});
