class student{
    constructor(){
        this.sname="Pushpesh";
        this.code=100;
    }
    setdata(code,sname){
        this.code=code;
        this.sname=sname;
    }
    showdata(){
        console.log("Code: "+this.code);
        console.log("Sname: "+this.sname);
    }
}

const ramesh=new student();
ramesh.showdata();
code=200;
sname="Jon snow";
ramesh.setdata(code,sname);
ramesh.showdata();