const getMockData = () => {
    
    let jsonString = localStorage.getItem("mock")
   
    console.log("File data:", jsonString, typeof jsonString);
    return  jsonString;

}

module.exports = {getMockData}