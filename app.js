const downloadBtn = document.querySelector("form button"),
  inputEl = document.querySelector("form input");

const fetchRequest = (url) => {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempURL = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.download = Date.now();
      link.href = tempURL;
      link.click();
      URL.revokeObjectURL(file);
      downloadBtn.innerText = "Download File";
    });
};

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;
  downloadBtn.innerText = "File Dowonloding...";
  fetchRequest(inputEl.value);
});
