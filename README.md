Welcome to Procrastination Simulation!
It's a game that hopefully nobody has the urge to play! But if you enjoy the stress of grinding to the last second on a project then this is the game for you!

Link to game: [a link](https://makmizi15.github.io/tomigatchi-the-curse/)

Instructions:

Stay alive until the completed work bar fills to 100%

Control your attribute bars on the left side so you can continue grinding. Don't let your stress or poopometer bar fill and don't let your confidence get completely drained!

1. Take Adderal to reduce your stress.
2. Flex in the mirror to increase your confidence.
3. And go poop to reduce your poopometer

------------

This game was made possible by the combination of jquery, vanilla js, html, and css.

I created an object that holds all of the user's values: stress, confidence, poopometer, and remaining work. Each value is set to either 0 or 100—that way I can easily manipulate the width of the element to match the users value by simply adding a %.

The bars that display how close the player is to dying from too much stress, lack of confidence, or a stomach full of poo, is created using the setInterval function. Every certain amount of seconds the users value is either decreased or increased by 1. The width of the element is then set to equal the users value.

The whole game was developed around the object's values. They control losing, winning, and the graphics displayed.

To adjust the difficulty of the game you can take these steps:

Increase the time it takes to complete all work. To do this, increase the 2nd value in the remWorkLvl parameter.
ex.
remWorkLvl($remBar, 500) => remWorkLvl($remBar, 1000)
Now the width of the completed work bar will increase every second instead of every half second.

You can use this same method to increase or decrease the time it takes for any value bar to fill or empty.


Unsolved problems:
There are endless ways I could improve my game given the time. Currently I'd love to continue implmenting the following:
- Audio that plays when clicking buttons
- Animations that reflect the clicked button
- Conditional obstacles ex. can't flex in the mirror for a certain amount of time after taking adderal cause you're too focused on working.


