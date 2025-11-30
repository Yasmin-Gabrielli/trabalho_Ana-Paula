function showInfo(tipo) {
    // Dicionário com as informações de cada onda (Dados Físicos + Imagens)
    const dados = {
        'radio': {
            titulo: "Ondas de Rádio",
            conteudo: `
                <p>As ondas de rádio possuem os maiores comprimentos de onda do espectro. São usadas para comunicação à longa distância.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s (no vácuo)</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> Maior que 1 metro (10<sup>0</sup> m)</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> Menor que 300 MHz (3 x 10<sup>8</sup> Hz)</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> Maior que 3 x 10<sup>-9</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (depende da potência da estação)</li>
                </ul>
                <div class="alert alert-info"><small><strong>Uso:</strong> Rádio AM/FM, TV, Celulares.</small></div>
                
                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/radio_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Torre de transmissão">
                        <small class="text-muted d-block">Torres de Transmissão</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/radio_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Sinal de Wi-Fi ou Rádio antigo">
                        <small class="text-muted d-block">Rádio e Comunicação</small>
                    </div>
                </div>`
        },
        'microondas': {
            titulo: "Micro-ondas",
            conteudo: `
                <p>Interagem com moléculas de água, fazendo-as vibrar e gerar calor. Também fundamentais para transmissão de dados de alta velocidade.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> 1 mm a 1 m</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> 300 MHz a 300 GHz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> 3 x 10<sup>-12</sup> s a 3 x 10<sup>-9</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Intensidade do sinal)</li>
                </ul>
                <div class="alert alert-info"><small><strong>Uso:</strong> Wi-Fi, Fornos micro-ondas, Radares.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/micro_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Forno Micro-ondas">
                        <small class="text-muted d-block">Aquecimento de Alimentos</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/micro_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Roteador Wi-Fi">
                        <small class="text-muted d-block">Roteadores Wi-Fi</small>
                    </div>
                </div>`
        },
        'infravermelho': {
            titulo: "Infravermelho",
            conteudo: `
                <p>Conhecido como "radiação térmica", é emitido por qualquer corpo que tenha temperatura. Nossos olhos não veem, mas sentimos como calor.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> 700 nm a 1 mm</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> 300 GHz a 400 THz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> 2,5 x 10<sup>-15</sup> s a 3 x 10<sup>-12</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Temperatura da fonte)</li>
                </ul>
                <div class="alert alert-info"><small><strong>Uso:</strong> Controles remotos, Câmeras térmicas.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/infra_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Controle Remoto">
                        <small class="text-muted d-block">Controles Remotos</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/infra_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Imagem de câmera térmica">
                        <small class="text-muted d-block">Visão Térmica</small>
                    </div>
                </div>`
        },
        'luz': {
            titulo: "Luz Visível",
            conteudo: `
                <p>A única faixa que o olho humano consegue detectar. Cada comprimento de onda é interpretado pelo cérebro como uma cor diferente.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> 400 nm a 700 nm</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> 400 THz a 750 THz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> ~1,3 x 10<sup>-15</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Brilho da luz)</li>
                </ul>
                <div class="alert alert-info"><small><strong>Uso:</strong> Visão, Fotossíntese, Fibra óptica.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/luz_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Prisma decompondo luz">
                        <small class="text-muted d-block">Fenômenos Ópticos</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/luz_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Fibra Óptica">
                        <small class="text-muted d-block">Fibra Óptica</small>
                    </div>
                </div>`
        },
        'uv': {
            titulo: "Ultravioleta (UV)",
            conteudo: `
                <p>Radiação ionizante de menor energia. Pode quebrar ligações químicas e causar queimaduras solares ou esterilizar ambientes.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> 10 nm a 400 nm</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> 7,5 x 10<sup>14</sup> Hz a 3 x 10<sup>16</sup> Hz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> ~10<sup>-16</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Intensidade da fonte UV)</li>
                </ul>
                <div class="alert alert-danger"><small><strong>Risco:</strong> Câncer de pele. <strong>Uso:</strong> Esterilização.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/uv_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Pessoa passando protetor solar">
                        <small class="text-muted d-block">Proteção Solar</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/uv_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Lâmpada UV de esterilização">
                        <small class="text-muted d-block">Esterilização Hospitalar</small>
                    </div>
                </div>`
        },
        'raiox': {
            titulo: "Raios-X",
            conteudo: `
                <p>Alta capacidade de penetração. Atravessam tecidos moles mas são absorvidos por materiais densos como ossos.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> 0,01 nm a 10 nm</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> 3 x 10<sup>16</sup> Hz a 3 x 10<sup>19</sup> Hz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> ~10<sup>-18</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Corrente do tubo)</li>
                </ul>
                <div class="alert alert-danger"><small><strong>Risco:</strong> Danos ao DNA. <strong>Uso:</strong> Tomografia, Radiografia.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/raiox_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Chapa de Raio-X de ossos">
                        <small class="text-muted d-block">Radiografia Óssea</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/raiox_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Scanner de aeroporto">
                        <small class="text-muted d-block">Segurança em Aeroportos</small>
                    </div>
                </div>`
        },
        'gama': {
            titulo: "Raios Gama",
            conteudo: `
                <p>A radiação mais energética do universo, originada no núcleo dos átomos. Possui o maior poder de penetração.</p>
                <hr>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>⚡ Velocidade (v):</strong> ~3,0 x 10<sup>8</sup> m/s</li>
                    <li class="list-group-item"><strong>📏 Comprimento de Onda (λ):</strong> Menor que 0,01 nm (10<sup>-12</sup> m)</li>
                    <li class="list-group-item"><strong>〰️ Frequência (f):</strong> Maior que 10<sup>19</sup> Hz</li>
                    <li class="list-group-item"><strong>🔄 Período (T):</strong> Menor que 10<sup>-19</sup> s</li>
                    <li class="list-group-item"><strong>🔊 Amplitude (A):</strong> Variável (Atividade radioativa)</li>
                </ul>
                <div class="alert alert-danger"><small><strong>Uso:</strong> Radioterapia, Esterilização industrial.</small></div>

                <h6 class="fw-bold mt-4 mb-3">Exemplos de Uso:</h6>
                <div class="row">
                    <div class="col-6 text-center">
                        <img src="./img/gama_uso1.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Máquina de Radioterapia">
                        <small class="text-muted d-block">Radioterapia (Câncer)</small>
                    </div>
                    <div class="col-6 text-center">
                        <img src="./img/gama_uso2.jpg" class="img-fluid rounded shadow-sm mb-2" alt="Irradiação de alimentos">
                        <small class="text-muted d-block">Conservação de Alimentos</small>
                    </div>
                </div>`
        }
    };

    // Pega os elementos do Modal
    const modalTitle = document.getElementById('infoModalLabel');
    const modalBody = document.getElementById('modalBodyContent');

    // Atualiza o conteúdo se o tipo existir
    if (dados[tipo]) {
        modalTitle.innerText = dados[tipo].titulo;
        modalBody.innerHTML = dados[tipo].conteudo;
    }
}