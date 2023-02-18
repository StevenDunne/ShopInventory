class shoes {
    //create a 'shoe' with 4 properties
    constructor(name, productCode, quantity, vPI){
    console.log("I have made a shoe")
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.vPI = vPI
    this.itemArray = [this.name, this.productCode, this.quantity, this.vPI];
    }

    //method is something the object does, in this case, it creates an array out of its own data, and
    //pushes that array into the stock array, to make an array of arrays
    addToStockArray () {
        stockArray.push(this.itemArray)
    }

    //find a shoe by name and get its information
    //takes an array and the name of shoe you're looking for
    searchStockByName (theStockList, nameOfShoe) {
        const j=0  //index location of name
        //checks each shoe at index 0, to see if it matches the name inputted.
        for (let i=0; i<theStockList.length; i++){
            if (theStockList[i][j] == nameOfShoe) {
                return `Yes, we have ${nameOfShoe} in stock, \n${theStockList[i]}`
            } 
        }

    }

    //find the lowest price
    findTheLowestPrice (theStockList) {
        //new array palceholder for the values 
        let lowPriceArray = []
        //for each item in the stock array, take its vPI(index3) and copy it into our new array above
        for (let i=0; i<theStockList.length; i++){
            lowPriceArray.push(theStockList[i][3])
        }
        //sort the new array
        lowPriceArray = lowPriceArray.sort()
        //then check each item again to see which one matches the lowest number found in our new array
        for (let i=0; i<theStockList.length; i++){
            if (theStockList[i][3] == lowPriceArray[0]){
                return `The lowest priced shoes are the ${theStockList[i][0]}
They have a price of ${lowPriceArray[0]}`
            }
        }
        
    }

    //find the highest price shoe
    //does the same as the lowest price method, except it takes the highest
    //number from a new array
    findTheHowestPrice (theStockList) {
        let highPriceArray = []
        for (let i=0; i<theStockList.length; i++){
            highPriceArray.push(theStockList[i][3])
        }
        highPriceArray = highPriceArray.sort()
        let x = highPriceArray.length-1
        for (let i=0; i<theStockList.length; i++){
            if (theStockList[i][3] == highPriceArray[x]){
                return `The highest priced shoes are the ${theStockList[i][0]}
They have a price of ${highPriceArray[x]}`
            }
        }
        
    }

    //edit any aspect of an instance
    set editName(newName) {
        this.name = newName
    }
    set editProductCode(newProductCode) {
        this.ProductCode = newProductCode
    }
    set editQuantity(newQuantity) {
        this.Quantity = newQuantity
    }
    set editvPI(newvPI) {
        this.vPI = newvPI
    }
    //order objects in ascending order
    sortObjectsMethod (dataSet) {
        let sortedDataSet = dataSet.sort();
        console.log(sortedDataSet[0])
        console.log(sortedDataSet[1])
        console.log(sortedDataSet[2])
        console.log(sortedDataSet[3])
        console.log(sortedDataSet[4])
        return sortedDataSet;
    }

}

//takes user prompts to create new items for inventory
function addNewShoes () {
    let newShoesName = prompt("Please enter the name of your new shoes: ")
    let newUPC = prompt("Please enter the Unique Product Code: ")
    let newQuantity = prompt("How many units are currently in stock: ")
    let newPrice = prompt("Please set a price per unit: ")
    //checks for unique UPCS - asks for a different one if already exists
    i=0
    for (item in stockArray) {
        if (newUPC === stockArray[i][1]) {
            newUPC = prompt("You entered a duplicate UPC, please enter a new UPC: ")
        }
    i++
    }
    //create the new object, and calls the addtoStock method
    return new shoes(newShoesName, newUPC, newQuantity, newPrice).addToStockArray();  
}

let stockArray = []
let shoe1 = new shoes("Vans", "001", "66", "40")
let shoe2 = new shoes("Converse", "002", "5", "55")
let shoe3 = new shoes("Nike", "003", "19", "90")
let shoe4 = new shoes("Walmart", "004", "22", "15")
let shoe5 = new shoes("Sketchers", "005", "12", "69")
//add each shoe to our stock.
shoe1.addToStockArray()
shoe2.addToStockArray()
shoe3.addToStockArray()
shoe4.addToStockArray()
shoe5.addToStockArray()

/* Remove this comment tag to get an example of all functions in operation
//search for a shoe by name
console.log(shoe1.searchStockByName(stockArray, "Nike"))
//find the lowest price shoe
console.log(shoe1.findTheLowestPrice(stockArray))
//find the highest price shoe
console.log(shoe1.findTheHowestPrice(stockArray))
//make any edits
shoe1.editName = "SuperVans"
console.log(shoe1)
shoe2.editvPI = "65"
console.log(shoe2)
//show us the sorted stock
console.log(shoe1.sortObjectsMethod(stockArray))
*/

//new menu built on for demonstration of concept
let userChoice = ''
while (userChoice != '4') {
    userChoice = prompt("What would you like to do:\n 1. Add new stock\n2. View current stock\n3. Lookup item\n4. Quit?");
    if (userChoice == '1') {
        addNewShoes()
    }
    if (userChoice == '2') {
        console.log(stockArray)
    }
    if (userChoice == '3') {
        let searchFor = prompt("Which shoes are you looking for?")
        console.log(shoe1.searchStockByName(stockArray, searchFor));
    }
}