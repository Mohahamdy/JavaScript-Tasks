var tbody = document.getElementById("tbody")
var clicked = false;
function showUsers(){
    if(!clicked){
        clicked = true
        var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                var response = xhr.response
                var users = JSON.parse(response)
                console.log(users)
                for(var i = 0; i < users.length; i++)
                {
                    var tr = document.createElement("tr")
                    var td1 = document.createElement("td")
                    var td2 = document.createElement("td")
                    var td3 = document.createElement("td")
                    var td4 = document.createElement("td")
                    var td5 = document.createElement("td")
                    td1.textContent = users[i].id
                    td2.textContent = users[i].name
                    td3.textContent = users[i].username
                    td4.textContent = users[i].email
                    td5.innerHTML = '<button onclick="showDetails(' +
                    users[i].id +
                    ')">Show Details</button>'
                    tr.append(td1, td2, td3, td4, td5)
                    tbody.append(tr)
                }
            }
        }
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.send("")
    }
}
function showDetails(userId){
    var newWindow = window.open('', '_blank', 'width=600,height=400');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                var user = JSON.parse(xhttp.response);
                newWindow.document.write(
                    `<h1>USER DETAIL</h1>
                    <table  class="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                    </tr>
                    </tbody>
                    </table>
                    <style>
                    body{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    input{
                        border-radius: 5px;
                        text-align: center;
                        border-color: rgb(177, 174, 174);
                        width: 250px;
                        height: 25px;
                        margin: 5px 0;
                    }
                    span{
                        text-align: center;
                    }
                    button {
                        display: inline-block;
                        outline: 0;
                        cursor: pointer;
                        padding: 5px 16px;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 20px;
                        vertical-align: middle;
                        border: 1px solid;
                        border-radius: 6px;
                        color: #ffffff;
                        background-color: #2ea44f;
                        border-color: #1b1f2326;
                        box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
                        transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
                        transition-property: color, background-color, border-color;
                        :hover {
                            background-color: #2c974b;
                            border-color: #1b1f2326;
                            transition-duration: 0.1s;
                        }
                        margin: 10px 0;
                    }
                    .styled-table {
                        border-collapse: collapse;
                        margin: 25px 0;
                        font-size: 0.9em;
                        font-family: sans-serif;
                        min-width: 400px;
                        box-shadow: 0 0 20px rgba(39, 37, 37, 0.15);
                    }
                    .styled-table thead tr {
                        background-color: #000000;
                        color: #ffffff;
                        text-align: center;
                    }
                    .styled-table th,
                    .styled-table td {
                        padding: 12px 15px;
                        text-align: center;
                    }
                    .styled-table tbody tr {
                        border-bottom: 1px solid #dddddd;
                    }
                    
                    .styled-table tbody tr:nth-of-type(even) {
                        background-color: #f3f3f3;
                    }
                    
                    .styled-table tbody tr:last-of-type {
                        border-bottom: 2px solid #000000;
                    }
                    </style>
                    `
                    )
            };
        }
    }
    xhttp.open("GET", 'https://jsonplaceholder.typicode.com/users/' + userId );
    xhttp.send();
}
