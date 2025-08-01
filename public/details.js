document.addEventListener("DOMContentLoaded", () => {
  const candidate = JSON.parse(localStorage.getItem("candidate"));

  if (!candidate) {
    alert("No candidate data found. Please login first.");
    window.location.href = "index.html";
    return;
  }

  // Fill candidate data
  document.getElementById("display-name").innerText = candidate.name;
  document.getElementById("display-image").src = candidate.image;

  // Optional: Hide chess-box by default
  document.getElementById("chess-box").style.display = "none";
});

function showChess() {
  const candidate = JSON.parse(localStorage.getItem("candidate"));
  document.getElementById("chess-box").style.display = "block";
  document.getElementById("chess-box").innerText = `Your Chess Number is: ${candidate.chess}`;
}
