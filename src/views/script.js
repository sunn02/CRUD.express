
document.querySelectorAll('.voto-form').forEach(form => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el envío del formulario de manera convencional

        const topicId = form.action.split('/').pop(); // Obtener el ID del tema
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                const voteCounter = document.getElementById(`voto-contador-${topicId}`);
                voteCounter.textContent = data.votes; // Actualizar el contador de votos
            } else {
                console.error('Error al votar:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud de voto:', error);
        }
    });
});
