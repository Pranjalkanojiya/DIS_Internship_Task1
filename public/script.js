const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        enrollment_no: document.getElementById("enrollment").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        branch: document.getElementById("branch").value
    };

    try {

        const response = await fetch(
            "http://localhost:3000/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }
        );

        const data = await response.json();

        alert(data.message);

        form.reset();

    } catch (error) {

        console.log(error);

        alert("Error Adding Student");
    }

});
const viewBtn = document.getElementById("viewBtn");

viewBtn.addEventListener("click", async () => {

    const response = await fetch("http://localhost:3000/students");
    const students = await response.json();

    let rows = "";

    students.forEach(student => {
        rows += `
        <tr>
            <td>${student.enrollment_no}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.mobile}</td>
            <td>${student.branch}</td>
        </tr>
        `;
    });

    document.querySelector("#studentTable tbody").innerHTML = rows;

    document.getElementById("tableContainer").style.display = "block";
});