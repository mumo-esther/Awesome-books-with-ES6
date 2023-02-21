// Get the navigation links and content sections
const linksHandler = () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // Add click event listeners to the navigation links
  links.forEach((link) => {
    link.addEventListener('click', () => {
      // Remove the "active" class from all links
      links.forEach((link) => link.classList.remove('active'));

      // Add the "active" class to the clicked link
      link.classList.add('active');

      // Hide all sections
      /* eslint-disable no-return-assign */
      sections.forEach((section) => section.style.display = 'none');

      // Show the section with the corresponding ID
      const sectionId = link.getAttribute('href').slice(1);
      document.getElementById(sectionId).style.display = 'block';
    });
  });

  // Show the first section by default
  links[0].click();
};

export default linksHandler;