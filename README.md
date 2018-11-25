# Stream Two Project - Death & Destruction in Home & Away Data Dashboard

For my data dashboard, I wanted to show the ridiculous and hilarious ways in which characters have died in Home and Away over the last 20 years. 

## UX

I wanted to keep the layout for the dashboard quite simple but I also wanted to show how ridiculous Home and Away can be sometimes and really show the ways in which people have died, the fact that some people are always getting injured or having heart attacks and I wanted it to be a comical dashboard for users to enjoy. Therefore, some of the graphs are quite large and do contain a lot of information. I thought about scaling this back but it wouldn't have really conveyed what I wanted to show and I wanted to highlight stuff like the amount of people who get shot or die in car crashes which wouldn't be the same if I scaled back the data. 

I tried to incorporate some sort of beachy themed colour scheme but it ended up being too overbearing so I decided to just create rainbow coloured graphs, using the hex codes of Crayola crayons. I also made sure to include the Home and Away font so it felt more authentic. 

I drew some rough drawings on pen and paper to show how I wanted the dashboard to look. These can be found in the mockups section. 

Because of the sheer scale of some graphs, I removed the labels from some as they were overlapping too much and instead used legends to allow users interact with the graphs. 

I wanted users to enter the site and in the first graph to get a good idea of how many people have actually died in the last 23 years, and of course who faked their own death! The graphs move along to then show how people died, what the big storyline was and then further down, to show who these people were, where they lived and who they left behind. My main emphasis though was to show the ways in which people died so these graphs were kept to the start of the site. 


## Features

The site is simply laid out with a tour button to guide people through it in a comical way. I used a bright colour scheme with numerous colours to make the legend easier to navigate if labels weren't present. 

Features left to implement:

- Responsive:

If I had more time, I would like to make the site more responsive

- Sizing issues

I think some of the graphs could be resized slightly to allow the labels to display a bit better and so that the legend isnt right on top of them/beside them.

## Technologies Used

- HTML - for the basic site layout
- CSS - to style the site
- [MongoDb](https://www.mongodb.com/) - I collected all the data I wanted from various sites and then created a database in MongoDb
- [Python](https://www.python.org/) - for the backend of the dashboard
- [Flask](https://www.fullstackpython.com/flask.html) - for the backend
- [Bootstrap](https://getbootstrap.com/) - to style the site and make it more responsive
- [D3](https://d3js.org/) - to create charts
- [DC](http://dc-js.github.io/dc.js/) - to make an interactive dashboard
- [Intro.js](https://introjs.com/) - to allow for a tour of the site
- [Crossfilter](https://github.com/square/crossfilter) - to allow data interaction
- [Javascript](https://www.javascript.com/) - to create graphs
- [Gunicorn](https://gunicorn.org/) - to help run the app
- [Pymongo](https://api.mongodb.com/python/current/) - to work with MongoDb
- [mLab](https://mlab.com/) - to host the database
- [Heroku](http://www.heroku.com) - to host the website
- [Google Fonts](https://fonts.google.com/) - for easy font integration
- [Pycharm](https://www.jetbrains.com/pycharm/) - started the dashboard here before moving it to Cloud9
- [Mongo Management Studio](http://mms.litixsoft.de/) - to update/maintain the database

## Testing

The site was tested numerous times by myself and friends on different browsers and devices to ensure it was fully responsive. 

## Homepage testing:

1. Check that all the navigation links are working and that each page has its own title
2. Check that the link 'click here to book' is working
3. Result - all links working correctly, each page has its own title

## About page testing:
1. Check that all information is accurate and correct
2. Check that all links work from the about page
3. Result - all info is correct and all links work correctly

## News page testing:
1. Check that all info is correct and all news links are working
2. Check that both videos are loading and playing correctly. User should be able to play, pause, turn on/off sound and make the video fullscreen. 
3. Check that videos work responsively and on different browsers
4. Result - all links working and both videos loading and playing correctly. All controls working fully. 

## Menus page testing:
1. Check that the image carousel is working correctly on all browsers and on mobile devices
2. Check that each menu is opening/downloading correctly and is the correct menu as labelled
3. Result - all menus opening/downloading correctly, image carousel working correctly

## Location page testing:
1. Ensure map is fully functional and allows users to zoom in and out and open the map in Google maps by clicking 'view larger map'
2. Result - Map is functioning correctly on all devices and can be opened fully in Google maps

## Contact page testing:

## Test 1. 
- Ensure form functions as intended
- User clicks submit with empty form - should not work
- Result - pop up says 'Please fill out this field' - test passed

## Test 2.
- User fills in only one field - should not work 
- Result - pop up says 'Please fill out this field' - test passed

## Test 3. 
- User fills out only a few fields - should not work
- Result - pop up says 'Please fill out this field' - test passed

## Test 4. 
- User fills out incorrect email format - should not work
- Result - Popup saying 'please include @ in email format' - test passed

## Test 5. 
- User fills out number field incorrectly - should not work
- Result - popup says must match number format/10 digit number - test passed

## Test 6. 
- User fills out form correctly with all required fields filled correctly and hits submit - should work
- Result - Form is submitted, user gets a pop up alert to tell them that 'we'll be in touch soon' - Test passed

## General testing for responsiveness

The site was tested on phones, tablets, laptops and desktop pcs to ensure it was as responsive as possible and adjustments were then made to make sure it both looked and functioned well. Using Chromes developer tools, I was also able to check that it worked for screen dimensions of many sizes. I wanted the photos and items to stack when the site was viewed on a phone or smaller device but still look good with everything fitting correctly and not overflowing or being oversized. 

## Deployment

The site was regularly updated by pushing to Github which I then used to host the site. 

## Credits

## Content
- All content about this fictional restaurant was created by me. I edited the videos and added music. The menus were made simply in Microsoft Word keeping a consistent colour scheme and font detail.

## Imagery & Videos

- All imagery and videos on the website are free for reuse. All imagery and videos were found at Unsplash.com or Pexels.com. 
- The favicon image was found online [here](http://www.iconarchive.com/show/ios7-icons-by-icons8/Animals-Crab-icon.html)

## Code Snippets

- The code for the image carousel came from [W3Schools](https://www.w3schools.com/w3css/w3css_slideshow.asp)
- The code for the form submit popup was found on Stack overflow, not sure of link but something similar to [this](https://stackoverflow.com/questions/5443568/javascript-windows-alert-with-redirect-function)
- All other code was written by me or adapted from the LMS lessons



http://www.colourlovers.com/web/blog/2008/04/22/all-120-crayon-names-color-codes-and-fun-facts