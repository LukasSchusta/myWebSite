function copyText(text){
  navigator.clipboard.writeText(text)
  document.getElementById('alertaCopiado').classList.remove('hidden');
  
  // Remover o alerta após 3 segundos
  setTimeout(function() {
    document.getElementById('alertaCopiado').classList.add('opacity-0');
    setTimeout(function() {
      document.getElementById('alertaCopiado').classList.add('hidden');
      document.getElementById('alertaCopiado').classList.remove('opacity-0');
    }, 500); // Tempo da animação
  }, 3000);
}

