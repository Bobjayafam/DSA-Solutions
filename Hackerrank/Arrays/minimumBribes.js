// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example


// If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


// Person  had to bribe  people to get to the current position. Print Too chaotic.

function minimumBribes(q)
{
    // Write your code here
    let counter = 0;
    for(let i = q.length - 1; i >= 0; i--) {
     if(q[i] - (i + 1) >= 3){
       console.log('Too chaotic');
       return;
     }
     for(let j = Math.max(0, q[i] - 2); j < i; j++){
       if(q[j] > q[i]) counter++;
     }
    }
    console.log(counter);
}
