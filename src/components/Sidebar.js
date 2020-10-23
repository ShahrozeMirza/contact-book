import React, { useState } from 'react';
import { MdContacts } from 'react-icons/md';
import { FaPlus, FaStar, FaTrashAlt, FaPen } from 'react-icons/fa';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import EditContact from './EditContact';

function Sidebar({filteredContacts, setLocalStorage, userContacts, setUserContacts, fullInfo, setFullInfo, setSelectedContacts }) {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
    const [newContact, setNewContact] = useState({
        fav: false,
        id: "",
        fullname: "",
        age: "",
        address: "",
        num: "",
        email: "",
        job: "",
        experience: "",
        img: "",
    })

    const handleChange = (e) => {
        setNewContact({
            ...newContact, [e.target.name]: e.target.value
        })
    }
    
    const addContact = (e) => {
        e.preventDefault();

        let presentContacts = userContacts;
        presentContacts.push(newContact);
        setUserContacts(presentContacts);
        localStorage.setItem('localContacts',JSON.stringify(presentContacts));
    }

    const {fav,id,fullname,age,address,num,email,job,experience,img} = newContact

    const favHandler = (e) => {
      let favId = e.target.getAttribute("value");  
      setUserContacts( userContacts.map(contact => {
        if(contact.id == favId){
            return{
                ...contact, fav: !contact.fav
            }
        }
        return contact
    }))

    }

    const delHandler = (e) => {
        let favId = e.target.getAttribute("value");  
        setUserContacts(userContacts.filter(contact => (contact.id != favId)))
      }

    const showAll = () => {
        setSelectedContacts("All")
    }

    const showFavorites = () => {
        setSelectedContacts("Favorites")
    }

       //Edit Modal Functions Start

       const [updateContact,setUpdateContact] = useState('')
       const [showEdit, setShowEdit] = useState(false);
       const handleEditClose = () => setShowEdit(false);
       const handleEditShow = (e) =>{
           let editId = e.target.getAttribute("value");  
           setShowEdit(true);
       };
   
       //Edit Modal Functions End
    
    return (
        <>
            <div className="col-md-4">
                <div className="sidebar p-5">
                    <div className="contact-list-header">
                        <div className="contact-list-heading">
                            <div className="sidebar-icon">
                                <MdContacts className="contact-book-icon" />
                            </div>
                            <h2>Contacts</h2>
                        </div>
                        <div className="sidebar-btns">
                            <a onClick={handleShow} className="add-new-btn" href="#"><FaPlus /></a>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={showAll} href="#/action-1">All</Dropdown.Item>
                                    <Dropdown.Item onClick={showFavorites} href="#/action-2">Favorites</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="contact-list">
                        {
                            filteredContacts && filteredContacts.length ? filteredContacts.map(contact => (
                                <div onClick={() => setFullInfo(contact)} key={contact.id} className="media">
                                    <img src={contact.img} className="align-self-start mr-3" alt="ct-img" />
                                    <div className="media-body">
                                        <h4>{contact.fullname}</h4>
                                        <p>{contact.num}</p>

                                        <div className="option-btns">
                                            <a value={contact.id} onClick={favHandler} className={contact.fav ? "fav-btn goldenrod-color" : "fav-btn"} href="#/"><FaStar className="star-btn"/></a>
                                            <a value={contact.id} onClick={handleEditShow} className="edit-btn" href="#/"><FaPen className="pen-btn"/></a>
                                            <a value={contact.id} onClick={delHandler} className="del-btn" href="#/"><FaTrashAlt className="trash-btn"/></a>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100">Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <div className="container-fluid">
                   <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="id" value={id} onChange={handleChange} type="text" className="form-control" placeholder="ID"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="fullname" value={fullname} onChange={handleChange} type="text" className="form-control" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="age" value={age} onChange={handleChange} type="text" className="form-control" placeholder="Age"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="address" value={address} onChange={handleChange} type="text" className="form-control" placeholder="Address"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="num" value={num} onChange={handleChange} type="text" className="form-control" placeholder="Number"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="email" value={email} onChange={handleChange} type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="job" value={job} onChange={handleChange} type="text" className="form-control" placeholder="Job"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input name="experience" value={experience} onChange={handleChange} type="text" className="form-control" placeholder="Experience"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input name="img" value={img} onChange={handleChange} type="text" className="form-control" placeholder="Image URL"/>
                                </div>
                            </div>
                        </div>
                        <button onClick={addContact} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <EditContact userContacts={userContacts} showEdit={showEdit} setShowEdit={setShowEdit} handleEditShow={handleEditShow} handleEditClose={handleEditClose} /> */}
         
        </>
    )
}

export default Sidebar;
