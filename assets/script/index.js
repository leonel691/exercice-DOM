// exercice 1 tache 1
// const content = document.querySelector('ul');
const listElement=document.getElementsByClassName('list')

for (let i = 0; i < listElement.length; i++) {
    listElement[i].textContent = (i+1)+ " " +listElement[i].textContent;
    listElement[i].style.listStyleType = 'none';
}

// exercice 1 tache 2
const bloc_paragraphe = document.getElementById('bloc_paragraphe');
for (let i=0 ;i<10;i++){
    const newElement = document.createElement('p');
    newElement.textContent=`paragraphe ${i+1}`;
    bloc_paragraphe.appendChild(newElement);
}

