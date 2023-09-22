const getStoredData = () =>{
    const storedData = localStorage.getItem('Applied-id');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}
const saveLocalStoraged = (id) =>{
    const getData = getStoredData();
    const exist = getData.find(jobId=> jobId === id);
    if(!exist){
        getData.push(id);
        localStorage.setItem('Applied-id',JSON.stringify(getData))
    }
}
export {saveLocalStoraged,getStoredData}