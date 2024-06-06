[x] Setup the context and rootReducer
[x] Create different localStorage items. Assign one to store user-info and assign another one to control the state of the typing app
[x] Create signup view
    [x] Create a customHook to validate data
    [x] Have more descriptive errors in form
    [x] A user account must have name, last name, avatar (from predefined selection), password (store hash) 
    [x] Refactor to store info using indexDB
        [x] Create a custom hook to initialize and retrieve initial data
        [x] Create an outer provider to inject the initial state to the app provider
        [x] Database must open the connection just once

[x] Create login view
    [x] It must contain form validation and restrict the length of the inputs

[] Create a profile view

[] Main navbar
    [x] Create a basic template
    [x] Enable the buttons to navigate to different concerns
    [x] The user can logout
    [x] Fix the navbar gap at left and right
    [x] Work on styles, adjust margins and so on...

[] Test
    [x] When typing the errors and successful typings should be displayed
    [x] Indicate the current character of the text
    [x] Enable/disable the backspace
    [x] Simplify the useState and put those fields in the context
    [x] Show accuracy, max speed and average speed after test is done
    [x] Work on test modes
    [x] Add a way to customize the amount of time

[] Stats
    [] Keep track of date, test time and  other statistics (accuracy, max speed and average speed)

[x] Implement the timer functionality
    [x] Implement countdown timer
    [x] Implement progressive count timer
    [x] Implement two types of animations:
        [x] Odometer
        [x] Pulse



Miscellaneous
    [] Change the error notifications to have accept and array of errors and add a queue-like behavior
    [x] Find a way to ue MUI components in the odometer
    [x] Refactor the code to  avoid duplication in odometer component
    [x] Add a button to randomize the avatar when signup
    [x] Fix the way presenting data on the modal
    [x] Fix the profile issue
    [] Add a route to edit profile
    [x] Indicate active route on navbar
    [x] Clicking on profile redirects to login and logout the session


