SortArray = function(...array){
    this.originalArray=array;
    this.getSortedArray = function(){
      return this.originalArray.sort();
    }
    
  };
  
sortObjectArray=function(jsonObjects,prop){
    SortArray.call(this,jsonObjects);
    this._prop=prop;
    // console.log(this.originalArray)
    this.getSortedArray = function(){
      return this.originalArray[0].sort( (a,b)=>{
          if(Number(a[this._prop])<Number(b[this._prop])){
              return -1;
          }else if(Number(a[this._prop])===Number(b[this._prop])){
              return 0;
          }else{
              return 1;
          }
      }
      );
    }
   
  }
  const homes = [{
    "h_id": "6",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "6662500"
  }, {
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"
  }, {
    "h_id": "5",
    "city": "New York",
    "state": "NY",
    "zip": "00010",
    "price": "1234962500"
  }];
  sortObjectArray.prototype=Object.create(SortArray.prototype);
  const newObjs = new sortObjectArray(homes,"h_id");
 const newArray=newObjs.getSortedArray();
 console.log(newArray)
