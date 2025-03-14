
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar classes de animação aos elementos
  const fadeElements = document.querySelectorAll('.container, .card, .form-group');
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in');
    }, index * 100);
  });

  // Funcionalidade para tabs
  const tabs = document.querySelectorAll('.tab');
  if (tabs) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Verificar se é um link antes de prevenir o comportamento padrão
        if (!this.hasAttribute('href')) {
          const currentActive = document.querySelector('.tab.active');
          if (currentActive) {
            currentActive.classList.remove('active');
          }
          this.classList.add('active');
        }
      });
    });
  }

  // Funcionalidade para o calendário
  const calendarDays = document.querySelectorAll('.calendar-day');
  if (calendarDays) {
    calendarDays.forEach(day => {
      day.addEventListener('click', function() {
        const currentSelected = document.querySelector('.calendar-day.selected');
        if (currentSelected) {
          currentSelected.classList.remove('selected');
        }
        this.classList.add('selected');
      });
    });
  }

  // Navegação do calendário
  const prevMonth = document.querySelector('.calendar-nav-btn:first-child');
  const nextMonth = document.querySelector('.calendar-nav-btn:last-child');
  const monthDisplay = document.querySelector('.calendar-month');
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let currentMonthIndex = months.indexOf('May');
  
  if (prevMonth && nextMonth && monthDisplay) {
    prevMonth.addEventListener('click', function() {
      currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
      monthDisplay.textContent = months[currentMonthIndex];
    });
    
    nextMonth.addEventListener('click', function() {
      currentMonthIndex = (currentMonthIndex + 1) % 12;
      monthDisplay.textContent = months[currentMonthIndex];
    });
  }

  // Adicionar funcionalidade aos botões de ação
  const actionButtons = document.querySelectorAll('.btn');
  if (actionButtons) {
    actionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Adicionar efeito visual ao clicar
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 100);
      });
    });
  }

  // Funcionalidade para os checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxes) {
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        // Adicionar efeito visual ao marcar/desmarcar
        this.parentElement.style.opacity = this.checked ? '1' : '0.7';
      });
    });
  }

  // Efeito nos ícones do cabeçalho
  const icons = document.querySelectorAll('.icon');
  if (icons) {
    icons.forEach(icon => {
      icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
      });
      
      icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
      
      icon.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 100);
      });
    });
  }

  // Animação suave para o logo
  const logoIcon = document.querySelector('.logo-icon');
  if (logoIcon) {
    logoIcon.classList.add('pulse');
  }
});
