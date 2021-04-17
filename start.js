/*
User inputs a two vectors. add those two vectors together. maybe vector subtraction, division, multiplication
*/

//Vector difference
var x = 'This is the Comparison between multiple vectors.';


function dotProduct() {
    //vector dot product
}

function fadeAway() {
    var fade = document.getElementById('selection');
    fade.remove();
}
function comparison() {
    var showComp = document.getElementById('comparison');
    showComp.insertAfter(x);

}

function additionVector() {
    vector1_1 = document.getElementById('vector11').value;
    vector1_2 = document.getElementById('vector12').value;
    vector2_1 = document.getElementById('vector21').value;
    vector2_2 = document.getElementById('vector22').value;

    vector_11 = parseInt(vector1_1);
    vector_12 = parseInt(vector1_2);
    vector_21 = parseInt(vector2_1);
    vector_22 = parseInt(vector2_2);
    vectorAdd1 = vector_11 + vector_21;
    vectorAdd2 = vector_12 + vector_22;
    
    alert('The resultant vector is...' + "\n" + '<' + vectorAdd1 + ', ' + vectorAdd2 + '>');
}

function subtractionVector(){
    vector1_1 = document.getElementById('vector11').value;
    vector1_2 = document.getElementById('vector12').value;
    vector2_1 = document.getElementById('vector21').value;
    vector2_2 = document.getElementById('vector22').value;

    vector_11 = parseInt(vector1_1);
    vector_12 = parseInt(vector1_2);
    vector_21 = parseInt(vector2_1);
    vector_22 = parseInt(vector2_2);
    vectorSub1 = vector_11 - vector_21;
    vectorSub2 = vector_12 - vector_22;
    
    alert('The resultant vector is...' + "\n" + '<' + vectorSub1 + ', ' + vectorSub2 + '>');
}


function multiplicationVector(){
    vector1_1 = document.getElementById('vector11').value;
    vector1_2 = document.getElementById('vector12').value;
    vector2_1 = document.getElementById('vector21').value;
    vector2_2 = document.getElementById('vector22').value;

    vector_11 = parseInt(vector1_1);
    vector_12 = parseInt(vector1_2);
    vector_21 = parseInt(vector2_1);
    vector_22 = parseInt(vector2_2);
    vectorMul1 = vector_11 * vector_21;
    vectorMul2 = vector_12 * vector_22;
    
    alert('The resultant vector is...' + "\n" + '<' + vectorMul1 + ', ' + vectorMul2 + '>');
}

function divisionVector(){
    vector1_1 = document.getElementById('vector11').value;
    vector1_2 = document.getElementById('vector12').value;
    vector2_1 = document.getElementById('vector21').value;
    vector2_2 = document.getElementById('vector22').value;

    vector_11 = parseInt(vector1_1);
    vector_12 = parseInt(vector1_2);
    vector_21 = parseInt(vector2_1);
    vector_22 = parseInt(vector2_2);
    vectorDiv1 = vector_11 / vector_21;
    vectorDiv2 = vector_12 / vector_22;
    
    alert('The resultant vector is...' + "\n" + '<' + vectorDiv1 + ', ' + vectorDiv2 + '>');
}

function dotProduct() {
    vectorAX = document.getElementById('vectorAX').valueAsNumber;
    vectorAY = document.getElementById('vectorAY').valueAsNumber;
    vectorBX = document.getElementById('vectorBX').valueAsNumber;
    vectorBY = document.getElementById('vectorBY').valueAsNumber;

    var newVectorA = vectorAX * vectorBX;
    var newVectorB = vectorAY * vectorBY;
    var theDotProduct = newVectorA + newVectorB;


    if(Number.isNaN(theDotProduct)) {
        alert('You must enter a Number in every field...');
    } else {
        alert('The dot product of these two vectors is...' + "\n" + theDotProduct);
    }
}

function dotProductAnswer() {
    var explanationDot = 'Calculating the dot product can seem tricky, but it is simple. Multiply the first vector\'s x and y value with the second vector\'s corresponding variables. Then, add the two products together and BOOM... you have the dot product.';
    var img = document.createElement('img');
    var dotElem = document.getElementById('dotAns');
    var dotButt = document.getElementById('learnMoreDot')
    img.src = 'vectorDot.png';

    dotElem.appendChild(img);
    var explDot = document.getElementById('explanationDot')
    dotButt.remove();
    explDot.innerHTML = explanationDot;
    
}

function compareAnswer(){
    var explanationCom = 'Follow these steps: Subtract vector 1 from Vector 2. Square each Component. Add the squared values together. Square root the sum. There is the difference!';
    var img = document.createElement('img');
    var comElem = document.getElementById('comAns');
    var comButt = document.getElementById('learnMoreCom')
    img.src = 'vectorCompar.png';

    comElem.appendChild(img);
    var explCom = document.getElementById('explanationCom')
    comButt.remove();
    explCom.innerHTML = explanationCom;
    
}

function additionAnswer() {

    var explanationAdd = 'When adding vectors, the simplest way to do so is to add the x components of both of the vectors together, and then add the y component of both of the vectors together. The sum of each corresponding component becomes the x and y component in the resultant vector.'
    var butt = document.getElementById('learnMore');
    var elem = document.getElementById('addAns');
    var img = document.createElement('img');
    img.src = 'vectorAddition.png';
    //stop looking in my code you dumb twat and go learn math or something... (if a teacher reads this i didnt mean it.)
    elem.appendChild(img);
    var explAdd = document.getElementById('explanationAdd')
    butt.remove();
    explAdd.innerHTML = explanationAdd;
    
}

function subtractionAnswer() {

    var explanationSub = 'Vector subtraction is similar to addition. You subtract the x and y components in the second vector from the corresponding components in the first vector.';
    var img = document.createElement('img');
    var subElem = document.getElementById('subAns');
    var subButt = document.getElementById('learnMoreSub')
    img.src = 'vectorSubtraction.png';

    subElem.appendChild(img);
    var explSub = document.getElementById('explanationSub')
    subButt.remove();
    explSub.innerHTML = explanationSub;
    
}

function multiplicationAnswer() {
    
    var explanationMul = 'When multiplying vectors, take the x components of each vector and multiply them. Do the same with the y components. The product x and product y component forms a new vector. You can do this with more than just two components in one vector.';
    var img = document.createElement('img');
    var mulElem = document.getElementById('mulAns');
    var mulButt = document.getElementById('learnMoreMul');
    img.src = 'vectorMultiplication.png';

    mulElem.appendChild(img);
    var explMul = document.getElementById('explanationMul');
    explMul.innerHTML = explanationMul;
    mulButt.remove();
    
}

function divisionAnswer() {
    var explanationDiv = 'When dividing vectors, similarly to the process of multipying vectors, you are going to divide the x and y components of the first vector by the corresponding components in the second vector. The resulting x and y components will form a new vector.'
    var img = document.createElement('img');
    var divElem = document.getElementById('divAns');
    var divButt = document.getElementById('learnMoreDiv');
    img.src = 'vectorDivision.png';
    divElem.appendChild(img);
    var explDiv = document.getElementById('explanationDiv');
    explDiv.innerHTML = explanationDiv;
    divButt.remove();
}

function howManySlots() {

    let slotA1 = document.getElementById('vectorA1');
    let slotA2 = document.getElementById('vectorA2');
    let slotA3 = document.getElementById('vectorA3');
    let slotA4 = document.getElementById('vectorA4');
    let slotA5 = document.getElementById('vectorA5');
    let slotA6 = document.getElementById('vectorA6');
    let slotA7 = document.getElementById('vectorA7');
    let slotA8 = document.getElementById('vectorA8');
    let slotA9 = document.getElementById('vectorA9');
    let slotA10 = document.getElementById('vectorA10');
    /*slotnumber2*/
    let slotB1 = document.getElementById('vectorB1');
    let slotB2 = document.getElementById('vectorB2');
    let slotB3 = document.getElementById('vectorB3');
    let slotB4 = document.getElementById('vectorB4');
    let slotB5 = document.getElementById('vectorB5');
    let slotB6 = document.getElementById('vectorB6');
    let slotB7 = document.getElementById('vectorB7');
    let slotB8 = document.getElementById('vectorB8');
    let slotB9 = document.getElementById('vectorB9');
    let slotB10 = document.getElementById('vectorB10');
    let slotNumber = document.getElementById('howMany').valueAsNumber;
    let slotButton = document.getElementById('howManyButton');

    if(slotNumber > 10) {
        alert('Vector Limit = 10...\n\n Or the number you entered is lower than 0...');
    } else if(slotNumber <= 0) {
        alert('Vector Limit = 10...\n\n Or the number you entered is lower than 0...');
    } else if(slotNumber == 1) {
        slotA2.style.display = 'none';
        slotA3.style.display = 'none';
        slotA4.style.display = 'none';
        slotA5.style.display = 'none';
        slotA6.style.display = 'none';
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB2.style.display = 'none';
        slotB3.style.display = 'none';
        slotB4.style.display = 'none';
        slotB5.style.display = 'none';
        slotB6.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    }   else if(slotNumber == 2) {
        slotA3.style.display = 'none';
        slotA4.style.display = 'none';
        slotA5.style.display = 'none';
        slotA6.style.display = 'none';
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB3.style.display = 'none';
        slotB4.style.display = 'none';
        slotB5.style.display = 'none';
        slotB6.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 3) {
        slotA4.style.display = 'none';
        slotA5.style.display = 'none';
        slotA6.style.display = 'none';
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB4.style.display = 'none';
        slotB5.style.display = 'none';
        slotB6.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 4) {
        slotA5.style.display = 'none';
        slotA6.style.display = 'none';
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB5.style.display = 'none';
        slotB6.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 5) {
        slotA6.style.display = 'none';
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB6.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 6) {
        slotA7.style.display = 'none';
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB7.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 7) {
        slotA8.style.display = 'none';
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB8.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 8) {
        slotA9.style.display = 'none';
        slotA10.style.display = 'none';
        slotB9.style.display = 'none';
        slotB10.style.display = 'none';
    } else if(slotNumber == 9) {
        slotA10.style.display = 'none';
        slotB10.style.display = 'none';
    }
}

function compare() {

    var diffAns = document.getElementById('difference')

    let slotA1 = document.getElementById('vectorA1').valueAsNumber;
    let slotA2 = document.getElementById('vectorA2').valueAsNumber;
    let slotA3 = document.getElementById('vectorA3').valueAsNumber;
    let slotA4 = document.getElementById('vectorA4').valueAsNumber;
    let slotA5 = document.getElementById('vectorA5').valueAsNumber;
    let slotA6 = document.getElementById('vectorA6').valueAsNumber;
    let slotA7 = document.getElementById('vectorA7').valueAsNumber;
    let slotA8 = document.getElementById('vectorA8').valueAsNumber;
    let slotA9 = document.getElementById('vectorA9').valueAsNumber;
    let slotA10 = document.getElementById('vectorA10').valueAsNumber;
    /*slotnumber2*/
    let slotB1 = document.getElementById('vectorB1').valueAsNumber;
    let slotB2 = document.getElementById('vectorB2').valueAsNumber;
    let slotB3 = document.getElementById('vectorB3').valueAsNumber;
    let slotB4 = document.getElementById('vectorB4').valueAsNumber;
    let slotB5 = document.getElementById('vectorB5').valueAsNumber;
    let slotB6 = document.getElementById('vectorB6').valueAsNumber;
    let slotB7 = document.getElementById('vectorB7').valueAsNumber;
    let slotB8 = document.getElementById('vectorB8').valueAsNumber;
    let slotB9 = document.getElementById('vectorB9').valueAsNumber;
    let slotB10 = document.getElementById('vectorB10').valueAsNumber;
    let slotNumber = document.getElementById('howMany').valueAsNumber;
    let slotButton = document.getElementById('howManyButton');
    let compArr = [];

    if(slotNumber == 1) {
        let oneVector1 = slotB1 - slotA1;
        let oneVector2 = Math.pow(oneVector1, 2);
        let oneVectorAns = Math.sqrt(oneVector2);
        diffAns.replaceWith(oneVectorAns);
    } else if(slotNumber == 2) {
        compArr.push(Math.pow((slotB1 - slotA1), 2))
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        let twoVectorResult = compArr[0] + compArr[1];
        twoVectorResult = Math.sqrt(twoVectorResult);
        diffAns.replaceWith(twoVectorResult);
    } else if(slotNumber == 3) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        let threeVectorResult = compArr[0]+ compArr[1] + compArr[2];
        threeVectorResult = Math.sqrt(threeVectorResult);
        diffAns.replaceWith(threeVectorResult);
    } else if(slotNumber == 4) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        let fourVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3];
        fourVectorResult = Math.sqrt(fourVectorResult);
        diffAns.replaceWith(fourVectorResult);
    } else if(slotNumber == 5) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        let fiveVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4];
        fiveVectorResult = Math.sqrt(fiveVectorResult);
        diffAns.replaceWith(fiveVectorResult);
    } else if(slotNumber == 6) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        compArr.push(Math.pow((slotB6 - slotA6), 2));
        let sixVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4] + compArr[5];
        sixVectorResults = Math.sqrt(sixVectorResults);
        diffAns.replaceWith(sixVectorResult);
    } else if(slotNumber == 7) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        compArr.push(Math.pow((slotB6 - slotA6), 2));
        compArr.push(Math.pow((slotB7 - slotA7), 2));
        let sevenVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4] + compArr[5] + compArr[6];
        sevenVectorResult = Math.sqrt(sevenVectorResult);
        diffAns.replaceWith(sevenVectorResult);
    } else if(slotNumber == 8) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        compArr.push(Math.pow((slotB6 - slotA6), 2));
        compArr.push(Math.pow((slotB7 - slotA7), 2));
        compArr.push(Math.pow((slotB8 - slotA8), 2));
        let eightVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4] + compArr[5] + compArr[6] + compArr[7];
        eightVectorResult = Math.sqrt(eightVectorResult);
        diffAns.replaceWith(eightVectorResult);
    } else if(slotNumber == 9) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        compArr.push(Math.pow((slotB6 - slotA6), 2));
        compArr.push(Math.pow((slotB7 - slotA7), 2));
        compArr.push(Math.pow((slotB8 - slotA8), 2));
        compArr.push(Math.pow((slotB9), 2));
        let nineVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4] + compArr[5] + compArr[6] + compArr[7] + compArr[8];
        nineVectorResult = Math.sqrt(nineVectorResult); 
        diffAns.replaceWith(nineVectorResult);
    } else if(slotNumber == 10) {
        compArr.push(Math.pow((slotB1 - slotA1), 2));
        compArr.push(Math.pow((slotB2 - slotA2), 2));
        compArr.push(Math.pow((slotB3 - slotA3), 2));
        compArr.push(Math.pow((slotB4 - slotA4), 2));
        compArr.push(Math.pow((slotB5 - slotA5), 2));
        compArr.push(Math.pow((slotB6 - slotA6), 2));
        compArr.push(Math.pow((slotB7 - slotA7), 2));
        compArr.push(Math.pow((slotB8 - slotA8), 2));
        compArr.push(Math.pow((slotB9 - slotA9), 2));
        compArr.push(Math.pow((slotB10 - slotA10), 2));
        let tenVectorResult = compArr[0]+ compArr[1] + compArr[2] + compArr[3] + compArr[4] + compArr[5] + compArr[6] + compArr[7] + compArr[8] + compArr[9];
        tenVectorResult = Math.sqrt(tenVectorResult); 
        diffAns.replaceWith(tenVectorResult);
    }
    console.log(compArr);
}

function refresh(){
    location.reload();
}

