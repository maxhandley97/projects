// STRUCTURES/Flow control statements
// Python
// age = 16
// if age >= 18:
//     print('adult')
// elif age >= 13:

// else:
//     print('child')


// const age = 20
// //must parenthesise the boolean statement
// if (age >= 18) {
//     console.log('Adult')
// } else if (13 >= age >= 18){
//     console.log('Teen')
// } else {
//     console.log('Child')
// }

// Python Ternary
// message = 'Allowed' if age >= 18 else 'Not Allowed'

// const message = age >= 18 ? 'Allowed' : 'Not Allowed'

//Python - match
// match name:
//     case 'Matt', 'Man':
//         pass
//     case 'Mary':
//         pass
//     case_:
//         pass

const favBird = ''
// swtich = match, parenthesis needed
switch (favBird) {
    case 'Crow': 
    // if matches crow, fallthrough
    case 'Raven':
        console.log('you like crows')
        break
    case 'Robin':
        console.log('you like robins')
        break
    default:
        console.log('I don\'t know that bird!')
}

