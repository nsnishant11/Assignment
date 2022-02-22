class Parser  {
    constructor(version,channel,keyfield){
      this._version = version;
      this._channel=channel;
      this._keyfield=keyfield;
    }
    getVersion(){
      return this._version;
    }
    setVersion(version){
      this._version=version;
    }
    getChannel(){
      return this.channel;
    }
    setChannel(channel){
      this.channel=channel;
    }
    getkeyField(){
      return this.keyField;
    }
    setkeyField(keyField){
      this.keyField=keyField;
    }
  }
  const getKeyFields = function(jsonObjects){
      return jsonObjects.map( (jsonObject)=>{
        return jsonObject._keyfield;
      })
  }
  const obj1 = new Parser(2.0,5,8);
  const obj2 = new Parser(2.1,9,12);
  const obj3 = new Parser(1.8,4,5);
  console.log(getKeyFields([obj1,obj2,obj3]));
  