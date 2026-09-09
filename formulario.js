document.getElementById('absurdForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar datos de los 5 campos
    const q1 = document.getElementById('q1').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5Text = document.getElementById('q5').value;

    // Respuestas lógicas según las opciones
    const respuestasQ1 = {
        'A': "La gravedad ahora sabe a menta.",
        'B': "El árbol te ha demandado por no mirarlo directamente.",
        'C': "Los extraterrestres reclaman la devolución de tu cuchara favorita."
    };

    const respuestasQ2 = {
        'A': "El martes lluvioso te ha adoptado legalmente.",
        'B': "El número 42 exige respeto en mayúsculas.",
        'C': "El pan nos ha dicho que tampoco confía en ti."
    };

    // Mensaje dinámico según el deslizador de calcetines (Campo 3)
    let textoCalcetines = "";
    if (q3 < 33) {
        textoCalcetines = "crees que tus calcetines están de vacaciones en Cancún.";
    } else if (q3 < 66) {
        textoCalcetines = "sospechas que tus calcetines están conspirando con la lavadora.";
    } else {
        textoCalcetines = "confirmas que tus calcetines han fundado una república independiente en tu armario.";
    }

    // Construcción del veredicto final
    const resultado = `
        Apreciado humano:<br><br>
        1. ${respuestasQ1[q1]}<br>
        2. ${respuestasQ2[q2]}<br>
        3. Con un ${q3}% de paranoia, ${textoCalcetines}<br>
        4. Confirmado: A las <strong>${q4}</strong> los patos estarán vigilando tu casa.<br>
        5. <strong>Tu mensaje a la tostadora:</strong> "${q5Text.substring(0, 30)}...". Ella lo ha leído y dice que mañana solo quemará una de tus esquinas.
    `;

    document.getElementById('resultText').innerHTML = resultado;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('absurdForm').classList.add('hidden');
});

// Reiniciar formulario
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('absurdForm').reset();
    document.getElementById('result').classList.add('hidden');
    document.getElementById('absurdForm').classList.remove('hidden');
});