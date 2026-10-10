document.addEventListener('DOMContentLoaded', () => {
    const servicesData = {
        manutencao: {
            icon: "fa-solid fa-wrench",
            title: "Manutenção Elétrica Preventiva e Corretiva",
            description: "Serviço completo para residências e comércios. Avaliamos o estado geral da rede, quadros de distribuição, apertos de terminais e correção imediata de falhas para evitar curtos-circuitos e desperdício de energia."
        },
        iluminacao: {
            icon: "fa-solid fa-lightbulb",
            title: "Instalação de Iluminação Completa",
            description: "Instalação profissional de lustres, luminárias de LED, fitas de LED, refletores externos, spots em gesso e projetos de iluminação decorativa para valorizar o seu ambiente com segurança."
        },
        chuveiros: {
            icon: "fa-solid fa-shower",
            title: "Chuveiros, Torneiras e Aquecedores",
            description: "Instalação, troca de resistências, revisão de fiação e conexões elétricas para chuveiros, torneiras elétricas e suporte técnico para sistemas de aquecimento a gás com total segurança contra sobrecargas."
        },
        ventilacao: {
            icon: "fa-solid fa-wind",
            title: "Ventilação e Climatização",
            description: "Montagem, balanceamento e instalação correta de ventiladores de teto, exaustores para cozinhas ou banheiros e pontos elétricos dedicados para equipamentos de climatização."
        },
        tomadas: {
            icon: "fa-solid fa-plug",
            title: "Tomadas, Interruptores e Disjuntores",
            description: "Substituição e instalação de novas tomadas (padrão NBR), interruptores simples/paralelos, troca de disjuntores antigos no quadro e redimensionamento de circuitos para eletrodomésticos pesados."
        },
        fechaduras: {
            icon: "fa-solid fa-lock",
            title: "Fechaduras Eletrônicas e Segurança",
            description: "Instalação e configuração de fechaduras digitais, biométricas e sistemas modernos de controle de acesso para garantir mais praticidade e segurança reforçada à sua porta de entrada."
        },
        reparos: {
            icon: "fa-solid fa-triangle-exclamation",
            title: "Reparos Rápidos e Emergências",
            description: "Atendimento ágil para quedas de energia repentinas, tomadas faiscando, cheiro de queimado na rede ou disjuntores que desarmam sozinhos. Diagnóstico rápido e solução definitiva."
        },
        instalacoes: {
            icon: "fa-solid fa-bolt",
            title: "Instalações Elétricas Residenciais e Comerciais",
            description: "Execução completa de projetos elétricos do zero, passagem de cabos, montagem de quadros de distribuição, balanceamento de cargas e adequação às normas vigentes de segurança."
        }
    };

    const modal = document.getElementById('serviceModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

    document.querySelectorAll('.card-servico').forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            const data = servicesData[serviceKey];

            if (data) {
                modalIcon.className = `modal-icon ${data.icon}`;
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;

                const whatsappMessage = encodeURIComponent(`Olá, Gustavo! Vi no site o serviço de "${data.title}" e gostaria de solicitar um orçamento.`);
                modalWhatsappBtn.href = `https://wa.me/5551984104930?text=${whatsappMessage}`;

                modal.classList.add('active');
            }
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
});
