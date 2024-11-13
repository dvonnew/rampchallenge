// const jsdom = require('jsdom')
// const { JSDOM } = jsdom

// async function findSecretWord() {
//     try {
//         const res = await fetch('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge')

//         if (!res.ok) {
//             throw new Error('Network response was no ok')
//         }

//         const htmlString = await res.text()
//         const doc = new JSDOM(htmlString)

//         const selector = 'code > div > span > i'
//         const elements = doc.window.document.querySelectorAll(selector)
//         const elementValue = []

//         if(elements.length >0) {
//             for (let i=0; i < elements.length; i++) {
//                 elementValue.push(elements[i].getAttribute('value'))
//             }
//         } else {
//             console.log('No match found')
//         }
//         console.log(elementValue.join(''))
//     } catch(error) {
//         console.error('Error Fetching Element', error)
//     }
// }

// findSecretWord()