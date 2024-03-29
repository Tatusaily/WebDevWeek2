async function poster(url, data) {
    console.log('Posting data...');
    try{
        data = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, data);
        const result = await response.json();
        console.log('Result:', result);
    } catch(e){
        console.error('Error:', e);
    } finally{
        console.log('Done');
    }
}

const data = {
    name: 'Tatu',
    job: 'student'
};
const url = 'https://reqres.in/api/users';
poster(url, data);