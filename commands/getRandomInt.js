module.exports = {
    name: 'getRandomInt',
    description: "Get a random integer based on length.",
    getRandomInt(min,max){

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        
    }
}