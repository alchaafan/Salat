const personenInput = document.getElementById('anzahl-personen');
const updateButton = document.getElementById('update-liste');
const zutatenListe = document.getElementById('zutaten-liste');

const zutaten = [
    {name: "1 Salatgurke", mengeProPerson: 1}, 
    {name: "1 Paprika", mengeProPerson: 1},
    {name: "500g Tomaten", mengeProPerson: 500},
    {name: "200g Schafkäse", mengeProPerson: 200},
    {name: "125ml Olivenöl", mengeProPerson: 125},
    {name: "2 Zwiebel", mengeProPerson: 2},
    ];

    updateButton.addEventListener('click', function () {
        const personenAnzahl = parseInt(personenInput.value);

        //Liste leeren
        zutatenListe.innerHTML = "";

        //Zutaten basierend auf Personenanzal anpassen
        zutaten.forEach((zutat, index) => {
            const gesamtMenge = zutat.mengeProPerson * personenAnzahl;
        
            const li = document.createElement('li');
            li.textContent = `${gesamtMenge} ${zutat.name.split(' ')[1]} ${zutat.name.split(' ').slice(2).join(' ')}`;
        
            // Wechselnde CSS-Klassen basierend auf der Position
            if (index % 2 === 0) {
                li.classList.add('with-background');
            } else {
                li.classList.add('without-background');
            }
        
            zutatenListe.appendChild(li);
        });

        });
    

    