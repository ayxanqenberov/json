import newArray from "./module.js";
// console.log(newArray);
function getFunc(array,name) {
    const getData = array.filter(item => item.name == name)
    try {
        getData.forEach(item =>{
            if((!item.address)){
                console.log(`${getData.street} + ${getData.city}`);
                
            }else{
                throw new Error("yoxdur")
            }
        })
    }catch(err){
        console.log(err.message);
        
    }
}
getFunc(newArray,"Kurtis Weissnat")

function getFunt(array, id) {
        const foundObject = array.find(item => item.id == id);
    try{
        if(foundObject){
            console.log(`${foundObject}`);
            
        }else{
            throw new Error(`bele id yoxdur`)
        }
    }catch(error){
        console.log(error.message);
        
    }
}

getFunt(newArray,10)
export default {getFunt}
