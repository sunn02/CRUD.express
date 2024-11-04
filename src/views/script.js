async function sumarVotos(id){
    try {
        const response = await fetch(`/temas/sumarVoto/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            }        
    ): }catch () {

    }