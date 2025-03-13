function search() {
    document.getElementById('hidden').classList.toggle('hidden');
    document.getElementById('btn').classList.toggle('hidden');
}
document.getElementById('search').addEventListener('click', search);