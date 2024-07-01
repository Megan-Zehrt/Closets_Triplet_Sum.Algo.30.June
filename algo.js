// Closets Triplet Sum



// Given a target number and a list of numbers, find a triplet of numbers from the list such that sum of that triplet is the closest to the target. Return that sum.










/**
 * @param {int32} target
 * @param {list_int32} numbers
 * @return {int32}
 */
function find_closest_triplet_sum1(target, numbers) {
    
    numbers.sort((a,b) => a-b)
    let max = 0
    
    for(let i = 0; i < numbers.length-2; i++){
        
        for(let j = i+1; j < numbers.length-1; j++){
            
            for(let k = j+1; k < numbers.length; k++){
                
                let sum = numbers[i] + numbers[j] + numbers[k]
                if (Math.abs(target - sum) < Math.abs(target - max)) {
                   max = sum;
                }
            }
        }
    }
    return max;
}
