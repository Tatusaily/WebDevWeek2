// Simple fetch function
async function fetcher(url) {
    console.log('Fetching data...');
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data:', data);
    } catch(e){
        console.error('Error:', e);
    } finally{
        console.log('Done');
    }
}

fetcher('https://reqres.in/api/users/1');