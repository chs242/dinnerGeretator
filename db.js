//real time listener
// db.collection('main courses').onSnapshot(snapshot => {
//     snapshot.docChanges().forEach(change => {
//         if(change.type === "added"){
//             console.log("new add", change.doc.data())
//         }
//         if(change.type === "removed"){
//             console.log("removed", change.doc.data())
//         }
//     })
// })

// const renderItem = (collectionName, htmlElement) => {
//     const myArray = []
//     db.collection(collectionName).get().then(getData => {
//         getData.forEach(document => {
//             myArray.push(document.data().title)
//             let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
//             return htmlElement.innerHTML = randomItem
//         });
//     })
// }

// db.collection('v2').limit(1).get().then(result => {
//     let myDoc = result.docs[0]
//     console.log(myDoc.data())
// })

// const renderSide = (collectionName, side1, side2) => {
//     let myArray = []
//     db.collection(collectionName).get().then(getData => {
//         getData.forEach(document => {
//             myArray.push(document.data())
            
//         });
//         let randomItem1 = myArray[Math.floor(Math.random() * myArray.length)];
//         side1.innerHTML = randomItem1.title
//         myArray = myArray.filter(item => item.foodType !== randomItem1.foodType)
//         console.log(myArray)
//         let randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];
//         side2.innerHTML = randomItem2.title
//     })
// }

// const renderMeal = () => {
//     renderMain()
//     renderSides()
// }

const renderMain = (main) => {
    let myArray = []
    db.collection('users').get().then(getData => {
        getData.forEach(document => {
            myArray.push(document.data().mains[0].foodName)
        })
        let randomItem1 = myArray[Math.floor(Math.random() * myArray.length)];
        //console.log(myArray)
        console.log(myArray)
        
    })
}















    // var mealsCollection = []
    // function renderMain() {
    //   db.collection("meals").onSnapshot(snapshot => {
    //     mealsCollection = [];
    //     snapshot.forEach(doc => {
    //       mealsCollection.push(doc.data());
    //     });
    //     console.log("Meals: ", mealsCollection);
    //   });
    // }

    // const mealSample = {
    //     catagory: 'main',
    //     meal: 'chicken'
    // }

    // function handleWrite(meal) {
    //   db.collection("meals").doc()
    //     .set({
    //       catagory: meal.catagory || "",
    //       meal: meal.meal || "",
    //     })
    //     .then(function() {
    //       console.log("Document successfully written!");
    //     })
    //     .catch(function(error) {
    //       console.error("Error writing document: ", error);
    //     });
    // }

    // getData()

    // function sampleFunction(){
    //     handleWrite(mealSample)
    // }

    // document.getElementById('test').addEventListener('click', sampleFunction)