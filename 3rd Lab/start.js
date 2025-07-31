// Variables
let name = "Shizan";
let age = 23;
let dept = "CSE";

// Array
let vegies = ["Potato", "Tomato", "Onion", "Carrot"];
let uses =  ["Used in curry", "Used in salad"],

// Object
student = {
  name: "Shizan",
  age: 23,
  dept: "CSE",
  email: "shizan@gmail.com"
};


// Show Info
function showInfo() {
  let infoBox = document.getElementById("info-box");
  infoBox.innerHTML = `
    <h3>Student Info</h3>
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Department:</strong> ${student.dept}</p>
    <p><strong>Email:</strong> ${student.email}</p>
  `;
}
// show Audio
function showAudio() {
    const audioBox = document.getElementById("audio-box");
    audioBox.innerHTML = `
        <h3>Audio Player</h3>
        <audio controls>
        <source src="hello-46355.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>
    `;
    }
// Show Video
function showVideo() {
  const videoBox = document.getElementById("video-box");
    videoBox.innerHTML = `
        <h3>Video Player</h3>
        <video width="320" height="240" controls>
        <source src="Murubbi.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
    `;
}
// Show Image Using JS
function showImage() {
  const imageBox = document.getElementById("image-box");
  imageBox.innerHTML = `
    <h3>Profile Image</h3>
    <img src="Profile.jpg" alt="Profile Image" style="width: 200px; height: auto;">
  `;
}

// Generate Table from JS Array/Object
function showTable() {
  const tableBox = document.getElementById("table-box");

  let html = `
    <h3>Favourite Vegatables Table</h3>
    <table border="1" cellpadding="8">
      <tr>
        <th>Vegatable Name</th>
        <th>Status</th>
      </tr>
  `;

  for (let i = 0; i < vegies.length; i++) {
    for (let j = 0; j < uses.length; j++) {
    html += `
      <tr>
        <td>${vegies[i]}</td>
        <td>${uses[j]}</td>
      </tr>
    `;
  }
}


  html += "</table>";
  tableBox.innerHTML = html;
}

