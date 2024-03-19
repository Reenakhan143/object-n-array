
// type of object....  data type/interface
 
interface Car_bodypartsDetail{
    body:string,
    height:number,
    car_ac: string,
    front_gate: string,
    seat_condition: string,
    touch_up: string,
}

 type car={
    name:string,
    model:number,
    color:string,
    demand: number,
    car_everege: number,
    is_origional_condition: boolean,
    forUse: string[];
     detail:Car_bodypartsDetail,
    }
    let mycar={
        name:  "cultus",
        model:   2012,
        color:  "black",
        demand:  750000,
        is_origional_condition: true,
        forUse:["personal","business",],
    
        };

        let  car_bodypartsDetail={
            body :"good",
            height: 3.8,
            car_ac:"yes",
            front_gate:"shower",
            seat_condition:"good",
            touch_up:true,
            
        };
        console.log(mycar);
        


    


 





