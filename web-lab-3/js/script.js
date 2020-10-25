const medicineList = document.getElementById('medicine-list');
const searchList = document.getElementById('find-medicine');
const clearButton = document.getElementById('clear-search');
const name__input = document.getElementById('name');
const producer__input = document.getElementById('producer');
const price__input = document.getElementById('price');
var keys;
var listChemical = [];
var medicinesList =[];


function setup(){

    var firebaseConfig = {
        apiKey: "AIzaSyB06j96sTKzyHe0tJZ5aESQWhQ8mnFdjjo",
        authDomain: "web-labs-26dc7.firebaseapp.com",
        databaseURL: "https://web-labs-26dc7.firebaseio.com",
        projectId: "web-labs-26dc7",
        storageBucket: "web-labs-26dc7.appspot.com",
        messagingSenderId: "959643053929",
        appId: "1:959643053929:web:1853f02d93930b218017f8",
        measurementId: "G-S95Y92ZTV2"
    };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log("gkdg");
    loadFirebase();
}

function loadFirebase(){
    var ref = database.ref("chemicals");
    ref.on("value", getData, errData);
    ref.orderByChild("name").once('value', function (snapshot) {
        console.log(snapshot.val());
    });
}
function cleanInputs() {
    document.getElementById('name').value = '';
    document.getElementById('producer').value = '';
    document.getElementById('price').value = '';
}
function sendToFirebase(){
    var data = {

        name: name__input.value,
        producer: producer__input.value,
        price: price__input.value
    }
    if (validation() === false){
        medecineManager = database.ref('chemicals').push(data, finished);
        console.log("Firebase generated key: " + medecineManager.key);
    }else{
        alert("F!")
    }

    cleanInputs();
    function finished(err) {
        if (err) {
            console.log("ooops, something went wrong.");
            console.log(err);
        } else {
            console.log('Data saved successfully');
        }
    }
}

function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
}



setup();
let chemicalsTest = medicinesList;
searchList.addEventListener('keyup', (searchedString) =>{
    const filterString = searchedString.target.value.toLowerCase();
    const findMedicineByName = medicinesList.filter(medicine => {
        return medicine.name.toLowerCase().includes(filterString);
    });
    chemicalsTest = findMedicineByName;
    console.log(chemicalsTest)
    displaySearch();
})



clearButton.addEventListener('click', ()=>{
    searchList.value = '';
    chemicalsTest = medicinesList;

    showMedicineListSorted();
})

function validation(){
    if(name__input.value==""){

        return true;
    }
    else if(producer__input.value==""){

        return true;
    }
    else if(price__input.value==""){

        return true;
    }
    else{
        return false;
    }
}

function displaySearch(){
    cleanPage();
    displayChemicals(chemicalsTest);
}
function showMedicineListSorted(){
    let sortItem = document.getElementById('sort-select').value;
    console.log(sortItem);
    if (sortItem == 'none'){
        cleanPage();
        displayChemicals(medicinesList);

    }
    else if (sortItem == 'name'){
        listChemical = [];
        loadFirebaseToSort();
        cleanPage();
        listChemical.sort(sortByName);
        displayChemicals(listChemical);

    }

    else if (sortItem == 'price'){
        listChemical = [];
        loadFirebaseToSort();
        cleanPage();
        listChemical.sort(sortByPrice);
        displayChemicals(listChemical);

    }

}
function countPriceOfMedicine(){
    let priceSum = 0;
    let totalPrice = document.getElementById('total-price');
    medicinesList.forEach(medicine => priceSum += parseInt(medicine.price));
    totalPrice.textContent = 'Total price: ' + priceSum +' '+'UAH';
}


function cleanPage(){
    let innerItem = ``;
    medicineList.innerHTML = innerItem;


}
function sortByName(itemF, itemS){
    let medicineNameF = itemF.name.toLowerCase();
    let medicineNameS = itemS.name.toLowerCase();
    if (medicineNameF < medicineNameS){
        return -1;
    }
    if (medicineNameF > medicineNameF){
        return 1;
    }
    return 0;
}

function sortByPrice(priceF, priceS){
    return priceF.price - priceS.price; }

const displayChemicals = (chemicalDisplay) =>{
    const displayItems = chemicalDisplay.map((medicine)=>{
        return `
        <li class="medicine-item">
            <h2> ${medicine.name}</h2>
            <h3> Producer: ${medicine.producer}</h3>
            <h3> Price: ${medicine.price} UAH </h3>
            <div class="section-contr-button">
                <button class="edit-btn" id="edit-btn"> Edit </button>
                <button class="delete-btn" id="delete-btn"> Delete </button>
            </div>
        </li>
    `
    }).join('');
    medicineList.innerHTML = displayItems;
}

//displayChemicals(chemicals)
function getData(data) {
    var medicines = data.val();
    let innerItem = ` `;

    keys = Object.keys(data.val());
    keys.forEach((medicine, index) => {
        key = keys[index];
        medicine = medicines[key];
        medicinesList.push(medicine);
        innerItem += `
        <li class="medicine-item">
            <h2> ${medicine.name}</h2>
            <h3> Producer: ${medicine.producer}</h3>
            <h3> Price: ${medicine.price} UAH </h3>
            <div class="section-contr-button">
                <button class="edit-btn" id="edit-btn" onclick="editButton(${index})"> Edit </button>
                <button class="delete-btn" id="delete-btn" onclick="deleteButton(${index})"> Delete </button>
            </div>
        </li>
        `;
    });

    medicineList.innerHTML = innerItem;
}

function editButton(index) {
    key = keys[index];
    if (validation() === false){
        firebase.database().ref("chemicals/" + key).set({
            name: name__input.value,
            producer: producer__input.value,
            price: price__input.value
        });
    }else  {
        alert("Пішов до дупи!")
    }

cleanInputs();}

    function deleteButton(index) {

        key = keys[index]
        database.ref("chemicals/" + key).remove();

    }

function readData(data) {
    var medicines = data.val();
    keys = Object.keys(data.val());
    keys.forEach((medicine, index) => {
        key = keys[index];
        medicine = medicines[key];
        console.log(medicine.price);
        listChemical.push(medicine);
    });

}
function loadFirebaseToSort(){
    var ref = database.ref("chemicals");
    ref.on("value", readData, errData);

}