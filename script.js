// Função para calcular os juros compostos
function calcularJuros() {
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100; // Converte a porcentagem
    const tempo = parseFloat(document.getElementById('tempo').value);

    // Validação simples para evitar campos vazios
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    // Formula: M = C * (1 + i)^t
    const montante = capital * Math.pow((1 + taxa), tempo);
    
    // Isso aqui exibe o resultado formatado em Real (R$)
    document.getElementById('resultado').innerText = `Resultado: ${montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

// Vincula a função ao clique do botão
document.getElementById('btnCalcular').addEventListener('click', calcularJuros);
