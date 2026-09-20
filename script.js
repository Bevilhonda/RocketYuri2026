

// --- BOTÃO VOLTAR AO TOPO ---
const botaoTopoPagina = document.getElementById('btnTop');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    botaoTopoPagina.style.display = "flex";
  } else {
    botaoTopoPagina.style.display = "none";
  }
};

if (botaoTopoPagina) {
  botaoTopoPagina.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
}
