

// Função para mudar a aba ativa e exibir o conteúdo correto
function openTab(tabIndex) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById('tab' + tabIndex).classList.add('active');
  document.getElementById('content' + tabIndex).classList.add('active');

  // Fechar menu automaticamente em telas pequenas
  const menu = document.getElementById('menu');
  if (window.innerWidth <= 768) {
    menu.classList.remove('show');
  }
}

