# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Manav Shah**

Time spent: **14** hours spent in total

Link to project: https://jewel-organic-hub.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] User can change the difficulty with the providid 3 difficulty modes
- [X] Integrated tilt.js library to improve the UI and give the buttons some interactive animations
- [X] Added a glowing effect to buttons

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

User can choose the difficulty level in which easy, medium, and hard has 4,6,8 tiles respectively. It also shows the tilt effect used on tiles.

<img src='https://media.giphy.com/media/jinPLeqAGq93aOdDqE/giphy.gif' width='' />

User loses hearts after incorrect guess and eventually loses

<img src='https://media.giphy.com/media/iCwSaBOv2Vs9MauC7S/giphy.gif' width='' />

User loses due to time running out

<img src='https://media.giphy.com/media/W2r0eF1XaH5re21WSD/giphy.gif' width='' />

User wins after completing all 8 passes (This GIF shows only the last pass)

<img src='https://media.giphy.com/media/HGyFTxVqmxXvQcNM6A/giphy.gif' width='' />

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[https://www.tutorialspoint.com/How-to-create-an-array-of-integers-in-JavaScript](https://www.tutorialspoint.com/How-to-create-an-array-of-integers-in-JavaScript)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[https://www.w3schools.com/colors/color_tryit.asp?color=BlueViolet](https://www.w3schools.com/colors/color_tryit.asp?color=BlueViolet)

[How to Show Images on Click using HTML ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/)

[https://coolors.co/a7c6da-eefcce-9eb25d-f1db4b-edff71](https://coolors.co/a7c6da-eefcce-9eb25d-f1db4b-edff71)

https://micku7zu.github.io/vanilla-tilt.js/

https://www.w3schools.com/css/css_dropdowns.asp


**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

Before developing this application, I had absolutely no experience in HTML and CSS. The main challenge that I faced was in creating the User Interface the way I wanted it to look. I also found it difficult to figure out which CSS properties I had to use to get my button in the right shape or to get the timer aligned to the center of the screen. The following are two challenges I faced in the positioning of different objects in my project:

1. I implemented the difficulty mode feature in which users can choose how many tiles to play with. In this design, I wanted 4 blocks in one line for easy mode and subsequent blocks from the medium and hard mode in the next line. I tried using display: block, inline, and multiple other properties but nothing worked since there was a lot of space resulting in 6 blocks in one line and 2 blocks in the next. To solve this, I added a line (——…) (line 75 in index.html) with the font color as black to cover the extra space for the required design.

2. I had difficulty in creating the perfect size for the hearts (mistakes) in one single line. To solve this, I created 3 buttons in the same line, set the color to black, and used the background-image property to get the perfect alignment.

I know I haven't used the desired properties to get perfect alignments, but my lack of experience in CSS instigated me to use alternate methods.

**Visibility modes:** Apart from the designing, one of the challenges I faced was during implementing the difficulty modes dropdown and the timer feature.
I learned how to make a dropdown menu from _w3schools.com_. I made 8 buttons and used the visibility attribute to implement the difficulty modes. I created a custom class _visible_ which changes the visibility mode. So when I click on ‘**medium**’, button5 and button6 change their attributes to visibility: _visible;_

**Logic of timer:** I have a startTimer() and stopTimer(). Earlier, I was calling the _startTime()_ at the end of _playClueSequence()_ since the timer should start running after the last block glows in the sequence. The timer was starting early for 4 onwards passes. I overcame this problem by using setTimeout with 

    time = delay - 1000;
    
to appropriately start the timer.

I understood the importance of learning CSS in order to create a better User interface.


**3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**

The Pre-work work project was an amazing start to my web development journey using HTML CSS and JavaScript. I have learned a lot while implementing the optional features of the internship. Up next, I want to learn advanced web development, and here are the questions that came across my mind:-

How to use CSS to develop real-world websites? In this project, the Ui is a bit unprofessional. I want to understand how advanced CSS is used to upgrade my game’s User interface?
I want to learn how the frontend is integrated with the backend. In this project, we don’t use any data storage features. Like, to make a website like Amazon, we need to extract data from our database and display it. I am not sure how to integrate data with the front end 
How are HTML CSS and JavaScript integrated? I have never completed a project with the use of 3 different languages so I want to know how does it work.
How website take advantage of HTML tags for search engine optimization on Google?
How are games like Minecraft are created? 
How to create 3d websites like apple.com and robinhood.com? They use animations that seem very different compared to regular websites like amazon.com 


**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)** 

Due to time constraints, I was not able to craete a perfect web application. If I had a few more hours I would:-
1. Use diffenent instrument sounds for different butttons since they showcase an image of an instrument.
2. Add a Progress bar instead of a timer to make the UI like a real game
3. Chnaged the Game Lost and game win alert to a Confetti celebration or different animations 
4. Use a different background since black looks basic
5. Learn how to use CSS for button alignment instead of adding empty <p>
6. Added a scoring algorithm which gives the user a score based on the time the take to guess.
7. Added an animated background
8. Refactored my code in CSS. Currently I am not reusing code efficiently. For example, there is a visible class in CSS for all buttons instead of a common class. I tried to implement it but the debugging was not successful
9. Would test the applications with more complexity.
10. Improved the User interface to a game.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
