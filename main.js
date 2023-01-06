const heroText = document.querySelectorAll('#heroText path');
for (let i = 0; i < heroText.length; i++) {
    console.log(`Letter ${i} is ${heroText[i].getTotalLength()}`);
}