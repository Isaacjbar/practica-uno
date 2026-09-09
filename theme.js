// theme.js
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';

  const applyTheme = () => {
    html.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (document.startViewTransition) {
    document.startViewTransition(applyTheme);
  } else {
    applyTheme();
  }
}

// Escucha cambios de preferencia del sistema operativo si el usuario no ha fijado una
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    document.documentElement.classList.toggle('dark', e.matches);
  }
});