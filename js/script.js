/* js/script.js - Lógica de Aplicação Marvel (Usando jQuery) */

$(document).ready(function() {
    console.log("Marvel Hub carregado com sucesso! Protocolos S.H.I.E.L.D. em ação.");

    // 1. Atualiza o ano no rodapé
    $('#ano-atual').text(new Date().getFullYear());

    // 2. Efeito de digitação no título da página inicial
    const $heroTitle = $('.secao-hero h2');
    // Verifica se é a página inicial (pode ser ajustado se o h2 for único na index)
    if ($heroTitle.length && window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) { 
        let originalText = $heroTitle.text();
        $heroTitle.text("");
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                $heroTitle.text($heroTitle.text() + originalText.charAt(i));
                i++;
                setTimeout(typeWriter, 50); 
            }
        }
        setTimeout(typeWriter, 1000); 
    }

    // 3. Alerta para links de ação não implementados
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
        alert("Esta seção está em desenvolvimento. Prepare-se para o lançamento da próxima fase!");
    });
    
    // 4. Manipula o formulário de Contato e emite alerta
    $('.form-contato').on('submit', function(e) {
        e.preventDefault(); // Impede o envio real do formulário
        
        const nome = $('#nome').val();
        
        if (nome) {
            alert(`Protocolo de Comunicação enviado com sucesso, Agente ${nome}! A S.H.I.E.L.D. entrará em contato em breve.`);
        } else {
             alert('Protocolo de Comunicação enviado com sucesso! A S.H.I.E.L.D. entrará em contato em breve.');
        }
        
        // Limpa o formulário após a submissão simulada
        this.reset();
    });
});