let month = 1;

//if(month === 1){
//    console.log('January')
//} else if (month === 2){
//    console.log('February')
//} else if (month === 3){
//    console.log('March')
//} else if (month === 4){
//    console.log ('April')
//} else {
//    console.log('One of the other ones!')
//}

// Switch Statement
month = 5;
switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April');
        break;
    default: //else
        console.log('One of the other ones');
    //case 5: still works but I'd recomend putting all cases before default (more conventional)
    //    console.log('yes');
    //    break;
}

console.log('\nQuarter: ');

switch (month){
    // multiple cases without breaks
    case 1:
    case 2:
    case 3:
        // checks if month is equal to 1|| 2 || 3
        console.log('Q1');
        break; // if removed, statement will 'fall through' to the next case
    case 4:
    case 5:
    case 6:
        console.log('Q2');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Q3');
        break;
    default:
        console.log('Q4');
}

/* Switch Statements
switch statements evaluate the item that you pass through and then run the code for the corresponding case
instead of if statements, we have cases inside our switch for the different results that our item can be equal 
to prevent future cases from running, utilize the break; statement at the end of a case
all switch statements must include a default that will occur if none of the case conditions were met
you can group multiple cases together by purposefully excluding break statements, allowing you to check for multiple conditions 

  switch (item){
    case RESULT_1:
        //code for if item evaluates to result 1
        break;
    case RESULT_2:
        //code for if item evaluates to result 2
        break;
    case RESULT_3:
    case RESULT_4:
        //code for if item evaluates to result 3 OR 4
        break;
    default:
        //code if item does not evaulate to any case result
    }

*/