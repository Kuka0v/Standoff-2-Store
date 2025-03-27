document.getElementById('uid-input').addEventListener('input', function(e) {
    const button = document.getElementById('search-button');
    button.disabled = e.target.value.trim() === '';
  });

  document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('uid-input');
    const button = document.getElementById('search-button');
    const results = document.getElementById('search-results');
    const avatar = document.getElementById('profile-avatar');
    const profileId = document.getElementById('profile-id');
    const profileName = document.getElementById('profile-name');
  
    // Активация кнопки при вводе
    input.addEventListener('input', function() {
      button.disabled = this.value.trim() === '';
      button.style.opacity = this.value.trim() === '' ? 0.3 : 1;
    });
  
    // Обработка поиска
    button.addEventListener('click', function() {
      const searchId = input.value.trim();
      
      if (profiles[searchId]) {
        // Найден профиль
        const profile = profiles[searchId];
        avatar.src = profile.avatar;
        profileId.textContent = `ID: ${profile.id}`;
        profileName.textContent = profile.name;
        results.style.display = 'flex';
      }
    });
  });

const profiles = {
    "1": {
      id: "1",
      name: "Kuka",
      avatar: "./assets/avatars/ava.jpg"
    },
    "987654321": {
      id: "987654321",
      name: "SWAT",
      avatar: "swat.png"
    },
    "555555555": {
      id: "555555555",
      name: "POLICE",
      avatar: "police.png"
    }
  };