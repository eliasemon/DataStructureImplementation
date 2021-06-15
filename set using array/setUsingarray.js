class SetUsingarray {
    constructor() {
        this.dataArray = [];
    }
    //add data on set
    adddata(data) {
        if (this.dataArray.indexOf(data) == -1) {
            this.dataArray.push(data);
            this.dataArray.sort();
            return;
        }
        if (this.dataArray.length == 0) {
            this.dataArray.push(data);
            this.dataArray.sort();
            return;
        }
        return;
    }
    // is the data on this set. if avilable it will return the index number
    isdataAvilable(data) {
        var i = this.dataArray.indexOf(data);
        if (i === -1 && data != undefined) {
            return false;
        } else if (data == undefined && this.dataArray.length > 0) {
            return true;
        } else if (data == undefined && this.dataArray.length == 0) {
            return false;
        }
        else if (i > 0) {
            return i;
        }
    }
    //data delete by index
    deleteDataByIndex(index) {
        if (index >= 0 && index < this.dataArray.length) {
            this.dataArray.splice(index, 1);
            return;
        } else {
            console.log("array index out of bound");
            return;
        }
    }
    // delete Data By value
    deleteDataByValue(data) {
        let i = this.dataArray.indexOf(data);
        if (i == -1) {
            console.log("Data is not on this array");
            return;
        }
        this.dataArray.splice(i, 1);
        return;
    }
    //get data  by index
    getDataByIndex(index) {
        if (index < 0 || index >= this.dataArray.length) {
            return "Index out of bound";
        } else {
            return this.dataArray[index];
        }
    }
    // print all data 
    printall() {
        console.log(this.dataArray);
    }
}
var sua = new SetUsingarray();
sua.adddata(5);
sua.adddata(5);
sua.adddata(0);
sua.adddata(2);
sua.adddata(3);
sua.adddata(4);
sua.adddata(4);
sua.deleteDataByIndex(1);
sua.deleteDataByValue(5);

sua.printall();
console.log(sua.getDataByIndex(5))
/*isdataAvailable() method only accepect value or null.if the data is avilable it will return index.
if the argument is null it will return ture or false depanding on data avilability*/
console.log(sua.isdataAvilable(3))