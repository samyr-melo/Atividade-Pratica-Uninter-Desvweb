 document.addEventListener('DOMContentLoaded', function() {

            // Seleciona todos os links <a> cujo href começa com '#'
            // Isto garante que apenas os links de navegação interna sejam afetados
            const navLinks = document.querySelectorAll('a[href^="#"]');

            // Itera sobre cada um dos links encontrados
            for (const link of navLinks) {
                // Adiciona um "ouvinte" de evento de clique a cada link
                link.addEventListener('click', function(event) {
                    
                    // 1. Previne o comportamento padrão do link
                    // Por defeito, o browser saltaria instantaneamente para a secção.
                    event.preventDefault();

                    // 2. Obtém o ID da secção de destino a partir do atributo href do link
                    // Ex: Se o href é "#projetos", o targetId será "projetos"
                    const targetId = this.getAttribute('href');

                    // 3. Encontra o elemento no documento que tem o ID correspondente
                    const targetElement = document.querySelector(targetId);

                    // 4. Se o elemento existir, rola a página suavemente até ele
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth', // A propriedade chave para a animação suave
                            block: 'start'      // Alinha o topo do elemento com o topo da janela
                        });
                    }
                });
            }
        });