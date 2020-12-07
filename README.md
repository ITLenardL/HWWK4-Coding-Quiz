# HWWK4 - Code Quiz
Tasked with creating a coding quiz - asks a bunch of questions relating to code, runs down a timer that will be deducted for each incorrect answer. The game will end if timer hits 0.
At the end the score will be saved to local memory to be brought up when viewing high score.

# Example
The quiz should work as below
!(Example/image.png?raw=true), !(Example/image (1).png), !(Example/image (2).png), !(Example/image (3).png)

<br>

# Problems
Sometimes the score doesn't align with the timer's remaining time, I suspect that the final question executes the end game before the score can be determined, or something to that extent. Have only coded 1 stored score, should have created a list element to stack previous scores so as to compare to everyone who's played.