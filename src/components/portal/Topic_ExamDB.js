import React from 'react';

const Topic_ExamDB = () => (
    <div>
        <h1>ExamDB Service</h1>

        <a href="http://localhost:8080/examView.html" target="_blank" rel="noreferrer noopener" >
            <img src="./images/ExamDB.webp" width="300" height="300" sty alt="ExamDB"></img>
        </a>

        <h2>Access ExamDB</h2>
    </div>
);

function sendDataToPage() {
    fetch('http://localhost:8080/single-sign-in.html')
        .then(response => response.json())
        .then(data => {
            let html = "<table>";

            data.forEach(d => html += `<tr><td>${d.id}</td><td>${d.name}</td><td>${d.address}</td></tr>`)

            html += "</table";

            document.getElementById("allCustomers").innerHTML = html;
        });

}


export default Topic_ExamDB;