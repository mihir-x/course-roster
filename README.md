# Course Registration

This is a project about online course registration.

# Projects Features:

- It is a dynamic website
- You can select any courses and add it to registration section
- When you are registered for more than 20hr credits it show you a toast popups
- You can only select a particular course only once

# The way i managed the state in my project:

State management is the crucial part of any react projects. It allows you to create dynamic and interactive user interface. There are four state changes in my project. I've used the useState react hook to manage the states. All these states are used to store data that can change over time and affect the rendering of functional components.

In my project every time the select button is clicked four types of data related to the clicked card is extracted and stored in the four different state hooks. 
The total credit is added every time the card is selected and stored in totalCredit state. 
The total price is added every time and stored in totalPrice state. 
Course names are stored as an array of object in registered state. 
Initial remaining credit is 20hr. Every time a card is selected its credit hour is subtracted with remaining credit and stored in remainingCredit state.
All these state changes are rendered in registration section every time select button is clicked.
I also set a condition that a card can only be selected once. If you select multiple times a toast popup will be shown and no state will change. 
Also I set another condition to prevent total credit hours to exceed 20 or remaining credit hour to become negative.
