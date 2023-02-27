module.exports = function toReadable (number) {
        if (number === 0){
            return 'zero'}
        const oneDig = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const twoDig = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const hand = ['hundred']
        if (number < 10){
            return oneDig[number]}
        if (number > 9 && number < 20){
            return twoDig[number - 10]}
        if (number > 19 && number < 100 && number%10 === 0 ){
            return dozens[Math.floor(number / 10)]}
        if (number > 19 && number < 100){
            return dozens[Math.floor(number / 10)] + " " + oneDig[number %10]}
        if (number > 99 && number%100 === 0){
            return oneDig[Math.floor(number / 100)] + " " + hand }
        if (number > 99 && number%10 === 0){
            return oneDig[Math.floor(number / 100)] + " " + hand + " " + dozens[Math.floor((number % 100) / 10)]}
        if (number > 99 && number%100 < 10){
            return oneDig[Math.floor(number / 100)] + " " + hand + " " + oneDig[number % 10]}
        if (number > 99 && number%100 > 10 && number%100 < 20){
            return oneDig[Math.floor(number / 100)] + " " + hand  + " " + twoDig[number % 10]}
        else {return oneDig[Math.floor(number / 100)] + " " + hand  + " " + dozens[Math.floor((number % 100) / 10)] + " " + oneDig[number % 10]}
         }

