var profile = document.getElementById('profile')
var skill = document.getElementById('skills')
var contact = document.getElementById('contact')
var projects = document.getElementById('projects')

function show(choice){
if (choice == 1){
    profile.style.display = 'block';
    skill.style.display = 'none';
    contact.style.display = 'none';
    projects.style.display = 'none';
}else if (choice == 2){
    profile.style.display = 'none';
    skill.style.display = 'block';
    contact.style.display = 'none';
    projects.style.display = 'none';
}else if(choice == 3) {
    profile.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'none';
    projects.style.display = 'block';
}else if(choice == 4){
    profile.style.display = 'none';
    skill.style.display = 'none';
    contact.style.display = 'block';
    projects.style.display = 'none';
}
}