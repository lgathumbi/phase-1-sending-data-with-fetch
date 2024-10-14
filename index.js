// Add your code here
export function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const newElement = document.createElement('div');
        newElement.textContent = `New user ID: ${data.id}`;
        document.body.appendChild(newElement);
    })
    .catch(error => {
        const errorElement = document.createElement('div');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}

