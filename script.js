document.addEventListener("DOMContentLoaded", () => {
  const files = [
    {
      name: "Termodinâmica Estatística",
      path: "files/Mec_stat.pdf"
    }
  ];

  const container = document.getElementById("file-list");

  if (!container) {
    console.error("Elemento #file-list não encontrado!");
    return;
  }

  files.forEach(file => {
    const div = document.createElement("div");
    div.className = "file-card";

    div.innerHTML = `
      <h3>${file.name}</h3>
      <a href="${file.path}" target="_blank">
        <button>Abrir</button>
      </a>
      <a href="${file.path}" download>
        <button>Baixar</button>
      </a>
    `;

    container.appendChild(div);
  });
});
