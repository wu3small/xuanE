let a = new FileReader();
File.onload = () => {
    document.getElementById('text').textContent = file.result;
}
file.readAsText(this.file[0]);

