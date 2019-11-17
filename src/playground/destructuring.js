const book = {
  title: 'Ego is something',
  author: 'ramah jago',
  publisher: {
   
  }
}


const { publisher: { name: publisherName = "sowore" } } = book;

console.log(publisherName)