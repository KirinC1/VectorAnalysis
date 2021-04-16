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
    //slotnumbers
    var slotA1 = document.getElementById='vectorA1';
    var slotA2 = document.getElementById='vectorA2';
    var slotA3 = document.getElementById='vectorA3';
    var slotA4 = document.getElementById='vectorA4';
    var slotA5 = document.getElementById='vectorA5';
    var slotA6 = document.getElementById='vectorA6';
    var slotA7 = document.getElementById='vectorA7';
    var slotA8 = document.getElementById='vectorA8';
    var slotA9 = document.getElementById='vectorA9';
    var slotA10 = document.getElementById='vectorA10';
    //slotnumber2
    var slotB1 = document.getElementById='vectorB1';
    var slotB2 = document.getElementById='vectorB2';
    var slotB3 = document.getElementById='vectorB3';
    var slotB4 = document.getElementById='vectorB4';
    var slotB5 = document.getElementById='vectorB5';
    var slotB6 = document.getElementById='vectorB6';
    var slotB7 = document.getElementById='vectorB7';
    var slotB8 = document.getElementById='vectorB8';
    var slotB9 = document.getElementById='vectorB9';
    var slotB10 = document.getElementById='vectorB10';

    var slotNumber = document.getElementById('howMany');
    var slotButton = document.getElementById('howManyButton');

    if(slotNumber > 10) {
        alert('Currently, vectors with more than 10 slots are not supported. \n\n Thank you for understanding.');
    } else if(slotNumber <= 0) {
        alert('I don\'t see how we could have a vector with less than 0 slots... \n\n try 2 or 4!')
    }

    if(slotNumber == 1) {
        slotA2.remove();
        slotA3.remove();
        slotA4.remove();
        slotA5.remove();
        slotA6.remove();
        slotA7.remove();
        slotA8.remove();
        slotA9.remove();
        slotA10.remove();
        slotB2.remove();
        slotB3.remove();
        slotB4.remove();
        slotB5.remove();
        slotB6.remove();
        slotB7.remove();
        slotB8.remove();
        slotB9.remove();
        slotB10.remove();
    }
}