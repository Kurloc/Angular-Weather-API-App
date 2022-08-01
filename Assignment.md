# Front-end Take Home Test
#### Time to complete: 72 hours

## Goal
Create a Weather Monitoring web application using Angular 8+ to accomplish the requirements below.

Note: A backend container / webserver is not required and will not be provided as weatherapi GET does
not enforce CORS for localhost requests.

## High-level Features - Required
1. Create a home page that includes the following:

   a. User input area to search locations to track weather 
   1. Form field should leverage the weatherapi autocomplete feature to populate
      possible target locations as user changes their input

   b. The area below the user input should show general weather data on each of the target
locations the user has inputted.

   1. General weather data should include target location name, current weather,
   and 3-day forecast.

2. Create a way for the end user to drill into a target location to view a more comprehensive set of
   weather data.
   a. This may include but not limited to 7-day forecast, min/max temperature, wind speeds,
   rain chance, etc.

3. User inputted target locations should persist through page reloads.
   
## Quality of Life Features / Stretch Goals – Not Required
1. Ability to swap between Celsius / Fahrenheit
2. Use of weatherapi provided condition icons
   
   a. https://www.weatherapi.com/docs/weather_conditions.json

   b. https://cdn.weatherapi.com/weather.zip
3. Multi-lingual condition support
 
   a. https://www.weatherapi.com/docs/conditions.json
4. Use your imagination for wow-factor and design
   
## Resources
   Weather API Explorer: https://www.weatherapi.com/api-explorer.aspx

   Weather API Docs: https://www.weatherapi.com/docs/

   Base URL: http://api.weatherapi.com/v1

|API                  | JSON API Method | XML API METHOD  |
|:---------------------|:---------------:|:---------------:|
|Current weather      | /current.json  |  /current.xml   |
|Forecast             | /forecast.json |  /forecast.xml  |
|Search /autocomplete | /search.json   | /search.xml     |
