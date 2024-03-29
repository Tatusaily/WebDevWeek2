const data = {
    name: 'Tatu',
    job: 'student'
};

// GET error -> 404 - Not Found
(async () => {
    try{
        const response = await fetch('https://reqres.in/api/unknown/23');
        if (!response.ok) { // better to use (!response.status != 200) ?
            throw new Error(`${response.status} - ${response.statusText}`);
        } else {
            console.log('Data:', await response.json());
        }
    } catch(e){
        console.log("Error 1: " + e);
    }
})();

// POST error
(async () => {
    try{
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
    });
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        } else {
            console.log('Data:', await response.json());
        }
    } catch(e){
        console.log("Error 2: " + e);
    }
})();