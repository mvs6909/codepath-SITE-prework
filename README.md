# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Manav Shah**

Time spent: **17** hours spent in total

Link to project: https://glitch.com/edit/#!/jewel-organic-hub

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
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] User can change the difficulty with the providid 3 difficulty modes
- [X] Integrated tilt.js library to improve the UI and give the buttons some interactive animations
- [X] Added a glowing effect to buttons
- [X] Configured a confetti animation when the player wins the Game.
- [X] Added Mario win and loss sound tracks.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

User can choose the difficulty level in which easy, medium, and hard has 4,6,8 tiles respectively. It also shows the tilt effect used on tiles.

<img src='https://media.giphy.com/media/NK4uUwurh5t4ISY4EF/giphy.gif' width='' />

User loses hearts after incorrect guess and eventually loses

<img src='https://media.giphy.com/media/4slh5Dcvt6c0RX2INq/giphy.gif' width='' />

User loses due to time running out

<img src='https://media.giphy.com/media/EcWA0HfNeGKkbflyXF/giphy.gif' width='' />

User wins after completing all 8 passes (This GIF shows only the last pass) and confetti animation is shown

<img src='https://media.giphy.com/media/QhzmrpCyzFO5G1sIRW/giphy.gif' width='' />



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[https://www.tutorialspoint.com/How-to-create-an-array-of-integers-in-JavaScript](https://www.tutorialspoint.com/How-to-create-an-array-of-integers-in-JavaScript)

https://www.cssscript.com/confetti-falling-animation/

https://www.youtube.com/watch?v=3BsBXp6VkvU

https://www.youtube.com/watch?v=6yrYAOFHi3A

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[https://www.w3schools.com/colors/color_tryit.asp?color=BlueViolet](https://www.w3schools.com/colors/color_tryit.asp?color=BlueViolet)

[How to Show Images on Click using HTML ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/)

[https://coolors.co/a7c6da-eefcce-9eb25d-f1db4b-edff71](https://coolors.co/a7c6da-eefcce-9eb25d-f1db4b-edff71)

https://micku7zu.github.io/vanilla-tilt.js/

https://www.w3schools.com/css/css3_flexbox_container.asp

https://www.w3schools.com/css/css_dropdowns.asp


**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**

Before developing this application, I had absolutely no experience in HTML and CSS. The main challenge that I faced was in creating the User Interface the way I wanted it to look. I also found it difficult to figure out which CSS properties I had to use to get my button in the right shape or to get the timer aligned to the center of the screen. The following are two challenges I faced in the positioning of different objects in my project:

1. I implemented the difficulty mode feature in which users can choose how many tiles to play with. In this design, I wanted 4 blocks in one line for easy mode and subsequent blocks from the medium and hard mode in the next line. I tried using display: block, inline, and multiple other properties but nothing worked since there was a lot of space resulting in 6 blocks in one line and 2 blocks in the next. To solve this, I added a line (——…) (line 75 in index.html) with the font color as black to cover the extra space for the required design. After learning more about flex containers, I was able to remove the dashed line (can be seen in previous commits) and use flex containers to center the Game button tiles.

2. I had difficulty in integrating the confetti animations with the text label "You Win!". The confetti is produced by an external library confetti.js which creates a new canvas for the animation. The main issue was to give the effect of confetti falling on the winLabel as it is not possible to add elements in a canvas. To overcome this, I had to make the position of the winLabel "absolute".

I know I haven't used the desired properties to get perfect alignments, but my lack of experience in CSS instigated me to use alternate methods.

**Visibility modes:** Apart from the designing, one of the challenges I faced was during implementing the difficulty modes dropdown and the timer feature.
I learned how to make a dropdown menu from _w3schools.com_. I made 8 buttons and used the visibility attribute to implement the difficulty modes. I created a custom class _visible_ which changes the visibility mode. So when I click on ‘**medium**’, button5 and button6 change their attributes to visibility: _visible;_

**Logic of timer:** I have a startTimer() and stopTimer(). Earlier, I was calling the _startTime()_ at the end of _playClueSequence()_ since the timer should start running after the last block glows in the sequence. The timer was starting early for 4 onwards passes. I overcame this problem by using setTimeout with 

    time = delay - 1000;
    
to appropriately start the timer.

I understood the importance of learning CSS in order to create a better User interface.


**3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**

The Pre-work work project was an amazing start to my web development journey and using HTML, CSS, and JavaScript. I have learned a lot while implementing the optional features for the internship. Up next, I want to learn advanced web development, and here are some questions that cross my mind:

1. The use of CSS to develop real-world websites? In this project, the UI is a little unprofessional. I want to understand how advanced CSS is used to upgrade my games User Interface.
2. I want to learn how the front-end is integrated with the back-end. In this project, we don’t use any data storage features. For example, to make a website like Amazon, we need to extract data from our database and display it. I am curious on how to integrate data with the front-end.
3. How are HTML, CSS, and JavaScript integrated? I have never completed a project with the use of 3 different languages so I want to know how it works.
4. How do websites take advantage of HTML tags for search engine optimization (SEO) on Google?
5. How are games like Minecraft created? 
6. How to create 3D websites like _apple.com_ and _robinhood.com_? They use animations that seem very different compared to regular websites like amazon.com.


**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)** 

Due to time constraints, I was unable to create a perfect web application. If I had a few more hours, I would:
1. Use **different** instrument sounds for different butttons since they showcase the image of an instrument.
2. Add a **progress bar** instead of a timer to make the UI look like a real game.
3. Change the "Game Lost" and "Game Won" alert to a **Confetti celebration** or different animations.
4. Use a **different background** since black looks basic.
5. Learn how to use CSS for button alignment instead of adding **empty <p>**
6. Add a **scoring algorithm** which gives the user a score based on the time they take to guess.
7. Add an **animated background**.
8. **Refactor my code in CSS**. Currently I am not reusing code efficiently. For example, there is a visible class in CSS for all buttons instead of a common class. I tried to implement it but the debugging was unsuccessful.
9. Test the applications with **more complexity**.
10. **Improve** the User interface to a game.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://psu.mediaspace.kaltura.com/media/Manav+Shah%27s+Personal+Meeting+Room/1_qtx5rlnj)


## License

    Copyright [Manav Shah]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
