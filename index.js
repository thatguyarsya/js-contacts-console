const myContacts = [
    {
        id: 1,
        name: 'Bobby Bobb',
        phone: '666',
        email: 'bob@hotmail.com',
        favorite: true,
        rating: 10,
    },
    {
        id: 2,
        name: 'Boobby Bobb',
        phone: '6666',
        email: 'booob@hotmail.com',
        favorite: true,
        rating: 10,
    }
]
//-------------
const showContacts = contacts => {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]
        console.log(
            `[${contact.id} ${contact.name} (${contact.phone}) <${contact.email}>]`

        )
    }
}
//======
const filterContacts = (contacts, minNameLength) => {
    let newContacts = []

    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]

        if (contact.name.length >= minNameLength) {
            newContacts.push(contact)
        }
    }
    return newContacts
}
//----
showContacts(myContacts)
//
const filteredContacts = filterContacts(myContacts, 12)