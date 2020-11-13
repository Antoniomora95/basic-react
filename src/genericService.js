export default async function getUsers(){
    // find a way to wait for 3 seconds here
    const url = 'https://reqres.in/api/users?page=2';
    const response = await fetch(url, {
        method: 'GET'
    });
    const json = await response.json();
    let { data } = json || [];
    return data
}