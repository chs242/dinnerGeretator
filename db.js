//to enable offline data by utilising indexedDB, a local inbuilt database available in modern browsers
db.enablePersistence()
  .catch(err => {
      if(err.code == 'failed-precondition'){
          //probably multiple tabs open
          console.log('persisitence failed');
      } else if(err.code == 'unimplemented'){
          //lacking browser support
          console.log('persisitence is not available')
      }
  })

//function that returns 1 main and 2 different sides from the database
const renderMeal = (htmlMains, htmlSides1, htmlSides2) => {
    db.collection('users').get().then(result => {
        result.forEach(item => {
            const mainDishes = item.data().mains
            const sideDishes = item.data().sides
            
            const mainDishChoice = randomDishChoice(mainDishes);
            const sidesArray = twoRandomDishChoices(sideDishes)
            
            htmlMains.innerHTML = mainDishChoice.foodName
            htmlSides1.innerHTML = sidesArray[0].foodName
            htmlSides2.innerHTML = sidesArray[1].foodName
            
        });
    });     

    function randomDishChoice (myArray) {
        let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
        return randomItem    
    }

    function twoRandomDishChoices (myArray) {
        let randomItem = randomDishChoice(myArray)

        //both sides won't be similar. filtering items of the same foodtype
        myArray = myArray.filter(item => item.foodType !== randomItem.foodType)

        let randomItem2 = randomDishChoice(myArray)
        return [randomItem, randomItem2]
        
    }
}

function renderToDb () {
    const newMain = {
        foodName: mainInput.value
    }
    const newSide1 = {
        foodName: side1Input.value,
        foodType: side1TypeInput.value
    }
    const newSide2 = {
        foodName: side2Input.value,
        foodType: side2TypeInput.value
    }
    if(mainInput.value !== ''){
        db.collection('users').doc('pJfKZdDh67VuTwU1abdM').update({
            mains: firebase.firestore.FieldValue.arrayUnion(newMain)
        })
    }
    if(side1Input.value !== ''){
        db.collection('users').doc('pJfKZdDh67VuTwU1abdM').update({
            sides: firebase.firestore.FieldValue.arrayUnion(newSide1)
        })
    }
    if(side2Input.value !== ''){
        db.collection('users').doc('pJfKZdDh67VuTwU1abdM').update({
            sides: firebase.firestore.FieldValue.arrayUnion(newSide2)
        })
    }
    mainInput.value = ''
    side1Input.value = ''
    side2Input.value = ''
}

const renderMenu = () => {
    const myMainArray = []
    db.collection('users').get().then(result => {
        result.forEach(item => {
            const mainDishes = item.data().mains;
            for(i of mainDishes){
                myMainArray.push(i.foodName);
            }   
            modalContentMain.innerHTML = myMainArray.join('<br/>')
        });
    });  
    const mySideArray = []
    db.collection('users').get().then(result => {
        result.forEach(item => {
            const sideDishes = item.data().sides;
            for(j of sideDishes){
                mySideArray.push(j.foodName);
            }   
            modalContentSide.innerHTML = mySideArray.join('<br/>')
        });
    });  
}