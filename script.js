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
        zutaten.forEach((zutat) => {
            const gesamtMenge = zutat.mengeProPerson * personenAnzahl;

            // eine Liste mit dynamischen Mengen erstellen
            const li = document.createElement('li');
            li.textContent = `${gesamtMenge} ${zutat.name.split(' ')[1]} ${zutat.name.split(' ').slice(2).join(' ')}`;
            li.classList.add('without-background', 'with-background');
           
            
        zutatenListe.appendChild(li);

        });
    });

    