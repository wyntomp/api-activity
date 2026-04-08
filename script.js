const table = document.querySelector("#userTable tbody");

// YOUR PERSONAL DATA (FIRST ROW)
const myData = {
    id: 2023005335,
    firstName: "Wynjess Angel",
    lastName: "Tompong",
    username: "wyntomp",
    email: "wynjessangel.tompong@nmsc.edu.ph",
    zipcode: "7024"
};

function addRow(user) {
    const row = `
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.zipcode}</td>
        </tr>
    `;
    table.innerHTML += row;
}

addRow(myData);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            addRow({
                id: user.id,
                firstName: user.name.split(" ")[0],
                lastName: user.name.split(" ")[1],
                username: user.username,
                email: user.email,
                zipcode: user.address.zipcode
            });
        });
    })
    .catch(error => console.log(error));