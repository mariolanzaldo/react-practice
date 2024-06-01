[x] Setup the context and rootReducer
[x] Create different localStorage items. Assign one to store user-info and assign another one to control the state of the typing app
[x] Create signup view
    [x] Create a customHook to validate data
    [x] Have more descriptive errors in form
    [x] A user account must have name, last name, avatar (from predefined selection), password (store hash) 
    [] Refactor to store info using indexDB
        [x] Create a custom hook to initialize and retrieve initial data
        [x] Create an outer provider to inject the initial state to the app provider
        [] Database must open the connection just once

[x] Create login view
    [x] It must contain form validation and restrict the length of the inputs

[] Main navbar
    [x] Create a basic template
    [] Enable the buttons to navigate to different concerns
    [] The user can logout
    [] Fix the navbar gap at left and right
    [] Work on styles, adjust margins and so on...

[] Test
    [x] When typing the errors and successful typings should be displayed
    [x] Indicate the current character of the text
    [x] Enable/disable the backspace
    [x] Simplify the useState and put those fields in the context
    [x] Show accuracy, max speed and average speed after test is done
    [] Work on test modes

[] Stats
    [] Keep track of date, test time and  other statistics (accuracy, max speed and average speed)

[] Implement the timer functionality
    [x] Implement countdown timer
    [] Implement progressive count timer
    [] Implement two types of animations




