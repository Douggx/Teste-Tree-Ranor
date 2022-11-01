import axios from 'axios'

test('Should get contacts', async function () {
    const response = await axios({
        url: 'http://localhost:3003/users/getContacts',
        method: 'get'
    });
    const contacts = response.data;
    expect(contacts).toHaveLength(2);
    
    const [firstContact] = contacts;
    expect(firstContact.id).toBe(1);
});

test('Should get the right id', async function () {
    const response = await axios({
        url: 'http://localhost:3003/users/getContacts',
        method: 'get'
    });
    const contacts = response.data;
    
    const [firstContact] = contacts;
    expect(firstContact.id).toBe(1);
})

