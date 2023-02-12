# TimeKeeper_Calendars

## Description

This app is designed to function as a web-based work day scheduler. Using HTML, CSS, and JavaScript, it provides a simple and intuitive user interface for scheduling appointments and tasks during a typical work day. 

## Screenshots

## Installation

As a browser-based application, no installation is required to for this app's use outside of modern search engines. Those who wish to use it may simply follow the deployment link available in this readme or on the link available in the git repo. Alternatively, users may clone the repo and open the index.html file in the browser using the files cloned to their local system.

## Usage
This scheduler consists of rows, each representing a specific hour of the work day, from 9AM to 5PM. Each row contains three columns: the hour, a text area for entering a description or task for that hour, and a save button. The hour column displays the hour in a larger font, while the text area and save button are smaller.

The app uses Bootstrap CSS framework to create a responsive layout and to style the components of the app, including the header, rows, and columns. It also uses the Font Awesome icon library to display a save icon on the save button. Google Fonts are used to apply a custom font to the text. The CSS file "style.css" contains custom styles specific to the app.

The JavaScript code is responsible for updating the app with the current date and time, and for adding and removing "past", "present", and "future" classes to the rows based on the comparison between the hour in the row's ID and the current hour. This allows the app to display the rows in different colours, depending on whether the hour is in the past, present, or future. The JavaScript code will also be responsible for storing and retrieving data from local storage so that the user's tasks and appointments persist even after the app is closed.

## Credits

N/A

## License

Please refer to the LICENSE in the repo.
