# starapp-interview-task2
Position scale -  
-------------------------0(First Airport)-------------------------N-1(last airport)-------------------------

The algorithm must be started from the First Airport (position 0).
The steps for this algorithm are - 
1. If you find yourself in a position behind the first airport, (position < 0), unfortunately you can never reach the last airport(N), trip ends.
2. If you find yourself in a position beyond/at the last airport, (position >= N-1), you have reached/crossed the last airport(N), trip ends.
3. As soon as you reach an airport, mark it as visited.
4. Check the fuel available at the current airport, if non zero, calculate the farthest distance it takes you - 
   - If it takes you to a visited position, don't go, instead go to the previous airport (position-1) and repeat from Step 1.
   - Else if it takes you to an unvisited position, go, and repeat from Step 1, increment the count of planes.
5. Else if fuel available at the current airport is 0, then go the previous airport (position -1) and repeat from Step 1.
