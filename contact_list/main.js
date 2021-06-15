const SetUsingarray = require('./usingSetForContactlist.js');
class Contact {
    constructor(name,number,email){
        this.name = name;
        this.number = number;
        this.email = email;
    }
}
class ContactList{
    constructor(){
        this.list = new SetUsingarray();
    }
    //add contact on list
    addContact(name,number,email){
        let k = 0;
        for(let i = 0;i < this.list.dataArray.length;i++){
            if(this.list.dataArray[i].name === name){
                if(this.list.dataArray[i].number === number){
                    if(this.list.dataArray[i].email === email){
                        k = 1;
                        break;
                    }
                }else{
                    continue;
                }
            }else{
                continue;
            }
        }
        if(k === 1){
            console.log("the contact is already added");
            return;
        }
        var new_contact = new Contact(name,number,email);
        this.list.adddata(new_contact);
    }
    //search by name
    searchByName(name){
        let  flag = 0;
        for(let i = 0; i < this.list.dataArray.length;i++){
            if(this.list.dataArray[i].name == name){
                console.log("The index is :  " + i);
                console.log(this.list.dataArray[i]);
                flag = 1;
            }
        }
        if(flag == 0){
            console.log("Nothing match");
        }
    }
    //search by number
    searchByNumber(number){
        let  flag = 0;
        for(let i = 0; i < this.list.dataArray.length;i++){
            if(this.list.dataArray[i].number == number){
                console.log("printing search result::");
                console.log("The index is :  " + i);
                console.log(this.list.dataArray[i]);
                flag = 1;
            }
        }
        if(flag == 0){
            console.log("Nothing match");
        }
    }
    //contact delete by indexOf
    deleteByIndex(index){
        this.list.deleteDataByIndex(index);
    }
    printall() {
        console.log("Printing all the contacts");
        console.log(this.list.dataArray);
    }
}
var ctlist = new ContactList();
ctlist.addContact("Tonmoy",8801612121612,"tonoy@gmail.com");
ctlist.addContact("Elias",8801792269420,"elias@gmail.com");
ctlist.addContact("Elias",8801792269420,"elias@gmail.com");
ctlist.addContact("Aieyan",88019966796996,"aieyan@gmail.com");
//ctlist.deleteByIndex(1);
ctlist.searchByName('Elias');
ctlist.searchByNumber();
ctlist.printall();