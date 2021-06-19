const argv = require('yargs').argv;
// const { Command } = require('commander');

const contacts = require("./contacts");



async function invokeAction({ action, id, name, email, phone}) {
    switch (action) {
    case 'list':
        const allContacts = await contacts.listContacts();
        console.table(allContacts);
        break;

        case 'get':
      const oneContact = await contacts.getContactById(id);
      console.table(oneContact);
      break;
      
    case 'add':
        const addContact = await contacts.addContact(name, email, phone);
    console.table(addContact);
      break;
      
      case 'remove':
         const deleteResult = await contacts.removeContact(id);
      console.table(deleteResult);
      break;

      default:
      console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);


// const program = new Command();
// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       const allContacts = await contacts.listContacts();
//         console.table(allContacts);
//       break;

//     case 'get':
//       const oneContact = await contacts.getContactById(id);
//         console.table(oneContact);
//       break;

//     case 'add':
//       const addContact = await contacts.addContact(name, email, phone);
//     console.table(addContact);
//       break;

//     case 'remove':
//        const deleteResult = await contacts.removeContact(id);
//       console.table(deleteResult);
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);




// проверка работоспособность функций

// (async () => {
    // const allContacts = await contacts.listContacts();
    // console.log(allContacts);
    
    // const oneContact = await contacts.getContactById(4);
    // console.log(oneContact);

    //   const deleteResult = await contacts.removeContact(7);
    //   console.log(deleteResult);
    
    // const newContact = {
    //     name: "Tesla",
    //     email: "tesla@tesla.com",
    //     phone: "454-56-25-98"
    // };

    // const addContact = await contacts.addContact(newContact);
    // console.log(addContact);


// })();