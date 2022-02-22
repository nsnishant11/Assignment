const SortArray = function(...array){
    this.originalArray=array;
    this.getSortedArray = function(){
      return this.originalArray.sort();
    }
    
  };
  
  const sortObjectArray = function(jsonObjects,prop){
    SortArray.call(this,jsonObjects);
    this._prop=prop;
    this.getSortedArray = function(){
      return this.originalArray.sort( (a,b)=>Number(a[_prop])-Number(b[_prop]));
    }
   
  }
  const homes = [{
    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"
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
    "price": "962500"
  }];
  sortObjectArray.prototype=Object.create(SortArray.prototype);
  const newObjs = new sortObjectArray(homes,"price");
  console.log(newObjs.getSortedArray());
  