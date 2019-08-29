console.log('lincoln established');

const petData = [
{
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDfzs7wbT66ZCchEMKvFRzTyvVyUajjor0gvtyPdgOINmjNAPKg',
    Name: 'Gordy',
    Color: 'Red',
    'Special Skill': 'Shed',
    typeOfPet: 'Dog' 
},
{
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ8L_zkCAyHab-J6wedD9VhMa-ZTgaOaJl8prwJvWq9LBhamD1g',
    Name: 'Haliburton',
    Color: 'Orange, white',
    'Special Skill': 'Destroy',
    typeOfPet: 'Cat'
},
{
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuYA9yzxEoK44nBW8w9wRVfEeoWefLRnDMIKWc1kyYAG0qIBF',
    Name: 'Randy and Theo',
    Color: 'Brown and Black',
    'Special Skill': 'Camoflauge',
    typeOfPet: 'Dino'
},
{
    Image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bernese_Mountain_Dog_Female.jpg',
    Name: 'Bernadette',
    Color: 'Brown, black, white',
    'Special Skill': 'Stare longingly',
    typeOfPet: 'Dog'
},
{
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQtCjcmQIk6ijxw58LRYjgneQ4IQX85coCpBIB76PpJdBJ-G1',
    Name: 'Roy',
    Color: 'Khaki',
    'Special Skill': 'Deception',
    typeOfPet: 'Cat'
},
{
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46ylB13UIbsdXP3sdAFk2SRplcONa87OPrM6YwTrMpdGJYZYY',
    Name: 'Mike',
    Color: 'Grey',
    'Special Skill': 'Friendship',
    typeOfPet: 'Dino'
}
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

// const winners = () => {
//     document.getElementById('all').addEventListener('click', (e) => {
//         console.log(e);
//     });
// }
// winners();

const petCreation = (petGroup) => {
    let domString = ''
    for (let i = 0; i < petGroup.length; i++) {
        const animals = petGroup[i]
        domString = `
        <div class="card">
            <h2>${animals.Name}</h2>
            <img src=${animals.Image} alt='Image of ${animals['Type of Pet']}' />
            <p>Special Skill: ${animals['Special Skill']}</p>
            <p>${animals.typeOfPet}</p>

        </div>
        `
        printToDom(domString, 'pet-place')
    }
  }

var buttonClick = (e) => {
    const petType = e.target.id
    const petsArrays = []
    for (let i = 0; i < petData.length; i++) {
      const pet = petData[i]
      if (pet.typeOfPet === petType) {
        petsArrays.push(pet)
      }
    }
    petCreation(petData);
  }

document.getElementById('dogs').addEventListener('click', buttonClick);
document.getElementById('cats').addEventListener('click', buttonClick);
document.getElementById('dinos').addEventListener('click', buttonClick);