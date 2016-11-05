var robot=function(id){
    this.id=id;
    
    
    this.dailyInformation={};
    this.realTimeInformation={};
    this.videoInformation={};
    

    this.refresh={};
}



//直接调用回调
//直接设置值调用默认回调
//设置值不调用回调(谨慎考虑！)
robot.prototype.set=function(key,value,callback,isCallback){


    isCallback=isCallback||true;
    if(!key||typeof key!=='string' ||key.split('.').length!==2){
         throw new Error("key error!")
    }
    var newkey=key.split(".");

    if (!this[newkey[0]]){
         throw new Error('基类没有定义这个数据块！');
    }
    if(value){

        this[newkey[0]][newkey[1]]=value;
        

        if(typeof callback==='function'){
                this.refresh[key]=callback;
        }else if(typeof callback==='boolean'){
                return;
        }   
    }


    if(!this.refresh[key]){
         throw new Error('回调不存在！');
    }
    isCallback&&this.refresh[key]&&this.refresh[key].call(this,this[newkey[0]][newkey[1]]);


}

//todo测试用例

robot.prototype.getKeyCallback=function(key){
    return this.refresh[key]?this.refresh[key]:false;
}