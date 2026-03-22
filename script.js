

// LISTA DE ARQUIVOS (adicione seus PDFs aqui)
const files = [
  {
    name: "Exemplo PDF 1",
    path: "files/Mec_stat.pdf"
  },
  {
    name: "Exemplo PDF 2",
    path: "files/exemplo2.pdf"
  }
];

const container = document.getElementById("file-list");

function loadFiles() {
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
}

loadFiles();
