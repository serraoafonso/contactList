//@desc Get all contacts
//@route GET /api/contacts
//@acess public
const getContact = (req, res)=>{
    res.status(200).json({message: 'Get all contacts'})
}


//@desc Create new contacts
//@route CREATE /api/contacts
//@acess public
const createContact = (req, res)=>{
    console.log(`The requeste body is ${JSON.stringify(req.body)}`)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory')
    }
    res.status(201).json({message: 'Create contact'})
}


//@desc update new contacts
//@route UPDATE /api/contacts
//@acess public
const updateContact = (req, res)=>{
    res.status(200).json({message: 'Update contact for  contact'})
}


//@desc get one contacts
//@route GET /api/contacts
//@acess public
const getOneContact = (req, res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

//@desc Create new contacts
//@route CREATE /api/contacts
//@acess public
const deleteContact = (req, res)=>{
    res.status(201).json({message: `Delete contact for ${req.params.id}`})
}

module.exports = {
    createContact,
    getContact,
    updateContact,
    getOneContact,
    deleteContact
}