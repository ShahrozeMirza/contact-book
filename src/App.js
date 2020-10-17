import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const contacts = JSON.parse(localStorage.getItem('localContacts'));
 const [userContacts,setUserContacts] = useState([]);
 const [fullInfo, setFullInfo] = useState("");
 const [selectedContacts,setSelectedContacts] = useState("");
 const [filteredContacts,setFilteredContacts] = useState([]);
 const setLocalStorage = localStorage.setItem('localContacts',
 JSON.stringify(
   [
     {"fav":false,"id":1,"fullname":"Mirza Muhammad Ali Shahroze","age":26,"address":"123, EEWER 21 National Park, Islampura ,Lahore","num":"03134304741","email":"abc@gmail.com","job":"Frontend Developer","experience":"2 Years","img":"https://cdn.shrm.org/image/upload/c_crop%2Ch_705%2Cw_1254%2Cx_0%2Cy_15/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3D"},
     {"fav":false,"id":2,"fullname":"Muhammad Ali","age":21,"address":"234, AAASD 24 National Park, Islampura ,Lahore","num":"03131504741","email":"def@gmail.com","job":"Backend Developer","experience":"1 Years","img":"https://obiorahfields.com/wp-content/uploads/2017/01/Federal-employee-e1483561511278.jpg"},
     {"fav":false,"id":3,"fullname":"Mirza Muhammad Raza","age":22,"address":"545, ADSSD 23 National Park, Islampura ,Lahore","num":"03132604741","email":"awe@gmail.com","job":"Ruby Developer","experience":"3 Years","img":"https://miro.medium.com/proxy/0*pAdZLfSqNrMZAAPA.jpg"},
     {"fav":false,"id":4,"fullname":"Ali Farhan","age":23,"address":"232, ASDSD 54 National Park, Islampura ,Lahore","num":"03133704741","email":"aaa@gmail.com","job":"PHP Developer","experience":"4 Years","img":"https://previews.123rf.com/images/stockyimages/stockyimages1603/stockyimages160300972/54434012-smart-male-employee-posing-over-white.jpg"},
     {"fav":false,"id":5,"fullname":"Mirza Khawar","age":24,"address":"765, ASDSW 56 National Park, Islampura ,Lahore","num":"03133404741","email":"abfd@gmail.com","job":"Python Developer","experience":"5 Years","img":"https://image.shutterstock.com/image-photo/beautiful-young-female-employee-portrait-260nw-329243798.jpg"},
     {"fav":false,"id":6,"fullname":"Nasir Husnain","age":25,"address":"876, FDSED 76 National Park, Islampura ,Lahore","num":"03137604741","email":"abcsd@gmail.com","job":"Angular Developer","experience":"6 Years","img":"https://media.monolithicpower.com/wysiwyg/employee-img1.png"},
     {"fav":false,"id":7,"fullname":"Mirza Muhammad Ebad","age":27,"address":"878, FGDFG 67 National Park, Islampura ,Lahore","num":"03238704741","email":"abasc@gmail.com","job":"Vue Developer","experience":"7 Years","img":"https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg"},
     {"fav":false,"id":8,"fullname":"Bazil Hashmi","age":28,"address":"989, HGFHG 32 National Park, Islampura ,Lahore","num":"03339804741","email":"abfdsc@gmail.com","job":"React Native Developer","experience":"12 Years","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZPp9Zk1t5ysgj1ng4aX0F4GyxkIrE3Ch_Lg&usqp=CAU"},
     {"fav":false,"id":9,"fullname":"Junaid Akram","age":29,"address":"777, GHFTT 52 National Park, Islampura ,Lahore","num":"03439804741","email":"absdasdc@gmail.com","job":"Flutter Developer","experience":"22 Years","img":"https://biz30.timedoctor.com/images/2019/08/remote-employee-software.jpg"},
     {"fav":false,"id":10,"fullname":"John Cena","age":40,"address":"090, YTYJH 59 National Park, Islampura ,Lahore","num":"03034604741","email":"abcffdfd@gmail.com","job":"Javascript Developer","experience":"7 Years","img":"https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/05/GettyImages-1141184383_header-1024x575.jpg?w=1155&h=1528"},
     
]));
useEffect(() => {
  setUserContacts(contacts);
},[setLocalStorage]);

const showSelectedType = () =>{
  switch(selectedContacts){
    case "All":
      setFilteredContacts(userContacts)
      break;
    case "Favorites":
      setFilteredContacts(userContacts.filter(contact => contact.fav))
      break;
    default:
      setFilteredContacts(userContacts)
  }
}

useEffect(() => {
showSelectedType();
},[selectedContacts,userContacts])
  return (
    <div className="App">
      <Header />
      <div className="main-section">
        <div className="container-fluid h-100">
          <div className="row no-gutters h-100">
            <Sidebar setLocalStorage={setLocalStorage} setUserContacts={setUserContacts} userContacts={userContacts} setFullInfo={setFullInfo} fullInfo={fullInfo}
              setSelectedContacts={setSelectedContacts} filteredContacts={filteredContacts} />
            {fullInfo ? <MainContent contact={fullInfo}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
