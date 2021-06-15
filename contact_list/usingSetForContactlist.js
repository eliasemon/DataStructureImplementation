class SetUsingarray {
    constructor() {
        this.dataArray = [];
    }
    //sortig the array
    sorting(){
        this.dataArray.sort((a,b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
            if(fa < fb){
                return -1;
            }
            if(fa > fb){
                return 1;
            }
            return 0;
        });
    }
    //add data on set
    adddata(data) {
            this.dataArray.push(data);
            sorting();
            return;
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
    //get data  by index
    getDataByIndex(index) {
        if (index < 0 || index >= this.dataArray.length) {
            return "Index out of bound";
        } else {
            return this.dataArray[index];
        }
    }
}
module.exports = SetUsingarray;
