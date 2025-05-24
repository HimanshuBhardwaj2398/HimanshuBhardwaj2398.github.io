(function() {
  const lightSkinClass = 'skin--default';
  const darkSkinClass = 'skin--dark';
  const toggleButton = document.getElementById('mode-toggle-button'); // Will be added later
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function applySkin(skin) {
    if (skin === 'dark') {
      document.body.classList.remove(lightSkinClass);
      document.body.classList.add(darkSkinClass);
    } else {
      document.body.classList.remove(darkSkinClass);
      document.body.classList.add(lightSkinClass);
    }
  }

  function toggleMode() {
    let currentSkin = localStorage.getItem('preferred-skin');
    if (document.body.classList.contains(darkSkinClass)) {
      currentSkin = 'light';
    } else {
      currentSkin = 'dark';
    }
    applySkin(currentSkin);
    localStorage.setItem('preferred-skin', currentSkin);
    updateToggleButtonText(currentSkin);
  }

  function updateToggleButtonText(skin) {
    if (toggleButton) {
      toggleButton.textContent = skin === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  }
  
  function initializeTheme() {
    let preferredSkin = localStorage.getItem('preferred-skin');
    if (preferredSkin) {
      applySkin(preferredSkin);
    } else {
      // If no preference in localStorage, check system preference
      if (prefersDarkScheme.matches) {
        applySkin('dark');
        preferredSkin = 'dark';
      } else {
        applySkin('light');
        preferredSkin = 'light';
      }
    }
    updateToggleButtonText(preferredSkin);
  }

  // Add event listener to the button (if it exists)
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleMode);
  } else {
    // Poll for the button in case the script loads before the button is in the DOM
    // This is a fallback, ideally the button exists or script is deferred well.
    let attempts = 0;
    const interval = setInterval(function() {
      const btn = document.getElementById('mode-toggle-button');
      attempts++;
      if (btn) {
        btn.addEventListener('click', toggleMode);
        // Update button text based on current theme after initialization
        const currentAppliedSkin = document.body.classList.contains(darkSkinClass) ? 'dark' : 'light';
        updateToggleButtonText(currentAppliedSkin);
        clearInterval(interval);
      } else if (attempts > 20) { // Stop trying after ~2 seconds
        clearInterval(interval);
      }
    }, 100);
  }
  
  // Listener for system preference changes
  prefersDarkScheme.addEventListener('change', function(e) {
    // Only change if no explicit user preference is set
    if (!localStorage.getItem('preferred-skin')) {
      const newSkin = e.matches ? 'dark' : 'light';
      applySkin(newSkin);
      updateToggleButtonText(newSkin);
    }
  });

  // Initialize theme on script load
  initializeTheme();

})();
