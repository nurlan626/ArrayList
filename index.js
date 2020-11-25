function ArrayList(){
    this.arr = [];
    this.size = 0;
}

// инициализация ddddd
ArrayList.prototype.init = function(array){ 
    this.arr = array;
    this.size = array.length;
}

ArrayList.prototype.getSize = function() {
    return this.size;
} 
////////////////////////////////////////////////

ArrayList.prototype.myPop = function() {
    const lastElement = this.arr[this.arr.length - 1];
    this.arr.length = this.arr.length - 1;

    return lastElement;
}

ArrayList.prototype.myPush = function(newLastElement) {
    this.arr[this.arr.length] = newLastElement;
      
    return ++this.size;
}

ArrayList.prototype.myShift = function() {
    const firstElement =  this.arr[0];
    for (let i = 0; i < this.arr.length-1; i++) {
        this.arr[i] = this.arr[i+1];
    }
        this.arr.length = this.arr.length - 1; 
        this.size = this.arr.length;
        console.log(this.arr);
        return firstElement;
}

ArrayList.prototype.MyUnShift = function(newElement) {
    ++this.arr.length;
    for (let i = this.arr.length - 1; i >= 1; i--) {
        this.arr[i] = this.arr[i-1];
    }
    this.arr[0] = newElement;
    console.log(this.arr);
    this.size = this.arr.length;
    return this.size;
}


ArrayList.prototype.MyToString = function() {
    let ArrayToString = "";
        for (let i = 0; i < this.arr.length; i++) {
            if (i != this.arr.length-1 ) {
            ArrayToString += this.arr[i] + ',';
            } else  {
                ArrayToString += this.arr[i];
            }
        }
return ArrayToString;
}

ArrayList.prototype.MyClear = function() {
    this.arr.length = 0;
    return this.arr;
    }

ArrayList.prototype.MyReverse = function() {
    let temp  = 0;
    for (let i = 0, j = this.arr.length - 1; i < this.arr.length; i++ , j--) {
        temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
        if (j-i <=1) {
            return this.arr;
        }
    }
}

ArrayList.prototype.MySlice = function(StartSlice, EndSlice) {
    let MySliceThisArr = [];
    for (let i = StartSlice, j = 0; i < EndSlice; i++, j++) {
        MySliceThisArr[j] = this.arr[i];
    }
return MySliceThisArr;
}

 
const arrayList = new ArrayList();
arrayList.init([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//arrayList.pop();
//console.log(arrayList.pop());
//console.log(arrayList.myPush(6));
//console.log(arrayList.myShift());
//console.log(arrayList.MyUnShift(8));
//console.log(arrayList.MyToString());
//console.log(arrayList.MyClear());
//console.log(arrayList.MyReverse());
console.log(arrayList.MySlice(2, 8));



