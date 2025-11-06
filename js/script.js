// Espera o HTML ser totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

    // 1. Objeto com todas as informações das ondas
    // As chaves (ex: "Ondas de rádio") devem ser IDÊNTICAS ao texto nos seus divs
    
    const waveData = {
        "Ondas de rádio": {
            icon: "bi-broadcast", // Ícone do Bootstrap
            info: [
                "<strong>Período (T):</strong> Variável (inverso da frequência). Pode ir de microssegundos a segundos.",
                "<strong>Frequência (f):</strong> Baixa (de 3 kHz a 300 GHz). Usada em AM, FM, TV.",
                "<strong>Comprimento de Onda (λ):</strong> Longo (de 1 mm até mais de 100 km).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à potência do sinal/transmissor.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Micro-ondas": {
            icon: "bi-wifi",
            info: [
                "<strong>Período (T):</strong> Muito curto (inverso da frequência).",
                "<strong>Frequência (f):</strong> Alta (de 1 GHz a 300 GHz). Usada em Wi-Fi, Bluetooth, GPS e fornos.",
                "<strong>Comprimento de Onda (λ):</strong> Curto (de 1 mm a 30 cm).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à potência da fonte (ex: magnetron do forno).",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Infravermelho": {
            icon: "bi-thermometer-half",
            info: [
                "<strong>Período (T):</strong> Extremamente curto.",
                "<strong>Frequência (f):</strong> Mais alta (de 300 GHz a 430 THz). Associada ao calor, usada em controles remotos.",
                "<strong>Comprimento de Onda (λ):</strong> Muito curto (de 700 nm a 1 mm).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à intensidade da fonte de calor.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Luz Visivel": { // Chave "Luz Visivel" (sem í) para bater com seu HTML
            icon: "bi-eye-fill",
            info: [
                "<strong>Período (T):</strong> Extremamente curto.",
                "<strong>Frequência (f):</strong> Alta (de 430 THz a 790 THz). É a faixa que nossos olhos podem ver (arco-íris).",
                "<strong>Comprimento de Onda (λ):</strong> Muito curto (de 380 nm (violeta) a 700 nm (vermelho)).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada ao brilho ou intensidade da luz.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Ultravioleta": {
            icon: "bi-sun-fill",
            info: [
                "<strong>Período (T):</strong> Extremamente curto.",
                "<strong>Frequência (f):</strong> Muito alta (de 790 THz a 30 PHz). Emitida pelo Sol (UVA, UVB, UVC).",
                "<strong>Comprimento de Onda (λ):</strong> Muito curto (de 10 nm a 380 nm).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à intensidade da radiação UV.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Raios-X": {
            icon: "bi-x-diamond-fill",
            info: [
                "<strong>Período (T):</strong> Extremamente curto (nível atômico).",
                "<strong>Frequência (f):</strong> Extremamente alta (de 30 PHz a 30 EHz). Usados em radiografias médicas.",
                "<strong>Comprimento de Onda (λ):</strong> Extremamente curto (de 0.01 nm a 10 nm).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à 'dureza' ou poder de penetração dos raios.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        },
        "Raios Gama": {
            icon: "bi-radioactive",
            info: [
                "<strong>Período (T):</strong> O mais curto de todos (nível nuclear).",
                "<strong>Frequência (f):</strong> A mais alta (> 30 EHz). Emitidos por reações nucleares e eventos cósmicos.",
                "<strong>Comprimento de Onda (λ):</strong> O menor de todos (< 0.01 nm).",
                "<strong>Amplitude (A):</strong> Variável. Relacionada à energia do fóton gama.",
                "<strong>Velocidade (v):</strong> Propaga-se à velocidade da luz (aprox. 300.000 km/s no vácuo)."
            ]
        }
    };

    // 2. Selecionar os elementos do Modal no HTML
    const infoModalElement = document.getElementById('infoModal');
    const infoModal = new bootstrap.Modal(infoModalElement); // Cria a "instância" do modal
    const modalTitle = document.getElementById('infoModalLabel');
    const modalBody = document.getElementById('modalBodyContent');

    // 3. Selecionar TODOS os divs de onda
    const waveDivs = document.querySelectorAll('.ondas');

    // 4. Adicionar um "escutador" de clique para CADA div
    waveDivs.forEach(div => {
        div.addEventListener('click', function() {
            // Pega o texto de dentro do <p> do div clicado
            const waveName = div.querySelector('p').textContent.trim();
            
            // Busca os dados no nosso objeto
            const data = waveData[waveName];

            // Se acharmos os dados...
            if (data) {
                // Atualiza o Título do Modal (com ícone)
                modalTitle.innerHTML = `<i class="bi ${data.icon} me-2"></i> ${waveName}`;
                
                // Formata as informações como uma lista HTML
                const infoList = data.info.map(item => `<li>${item}</li>`).join('');
                
                // Atualiza o Corpo do Modal
                modalBody.innerHTML = `<ul class="list-unstyled mb-0">${infoList}</ul>`;

                // Mostra o Modal
                infoModal.show();
            } else {
                // Caso não ache (ex: erro de digitação no objeto)
                console.warn(`Dados não encontrados para: ${waveName}`);
                modalTitle.textContent = "Erro";
                modalBody.textContent = "Informações não disponíveis.";
                infoModal.show();
            }
        });
    });
});

