function toggleSection() {
    var section = document.getElementById('interests-hobbies');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}
