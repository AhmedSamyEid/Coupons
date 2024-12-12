document.getElementById("category").addEventListener("change", function () {
  const helperText = document.getElementById("helper-text");

  if (this.value) {
    helperText.style.opacity = "0"; 
    setTimeout(() => {
      helperText.style.display = "none"; 
    }, 300); 
  }
});
document.querySelector('.container').style.backgroundImage = 'none';