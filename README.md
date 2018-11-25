# Stream Two Project - Death & Destruction in Home & Away Data Dashboard

For my data dashboard, I wanted to show th

## UX

For this site, I wanted the layout to be very clean and simple so I went for a simple colour scheme and a minimal layout. When I visit a restaurant or shop website, I am often frustrated trying to find where their open hours might be located or where I'd find their menu so I wanted the site to be straightforward and simple to follow. 

When a user visits the site for the first time, they are met with 3 simple images that already convey an idea of the type of food they can find at this restaurant, ie seafood. Below this, theres also a quick blurb about the restaurant to give the user a further idea of what its about.

The navbar then allows the user to follow a simple path to get what they need, be it menus, contact details, location etc. 

I drew up some brief ideas with pen and paper of how I wanted the site to look and then I created simple wireframes in Photoshop which can be found in the mockup folder on Github. 

## Features

Existing Features:

- Homepage:

The homepage is kept simple and clean, and just displays 3 simple images to convey the type of food found in sea&stone.

- About:

The about page gives some basic info on sea&stone, like opening hours and what type of food is served. 

- News:

The news page is like a blog page that can be updated easily, detailing news and upcoming events at sea&stone. It also includes some videos to give customers an idea of what the events are like, ie the barista master class and gives updates and info on upcoming events and event bookings. 

- Menus:

The menu page was initially created as a simple js carousel of all the menus available but this wasn't very eye catching so I amended it to have separate PDF menus for each meal type. These download to your device or open in new tabs. I also included a js carousel of eye catching food images to give users an idea of what type of food sea&stone provides.   

- Location: 

The location page includes an embedded Google map which can easily be used for directions to sea&stone as well as the address and info on parking nearby.

- Contact:

The contact page gives visitors the opportunity to fill in a form if they want to book an event like a Christmas party or family gathering. When the form is submitted, the user is shown a pop up to say 'thanks, we'll be in touch soon' to show that the form has been succesfully submitted. It also gives visitors all contact details like phone number and email address as well as links to the Facebook, Instagram and Twitter accounts for sea&stone. 

Features left to implement:

- Footer:

I think the site needs a proper footer at the bottom with links. 

- Something more:

I'm not sure what else restaurant websites really need but I'd like mine to be a bit more exciting and not quite so simple. It would be nice to have an external table booking system integrated like Open Table.

## Technologies Used

- HTML - to build the site
- CSS - to style the site
- [Bootstrap](https://getbootstrap.com/) - to style the site and make it more responsive
- Javascript - for an image carousel and to allow popups for form submission
- [Google Fonts](https://fonts.google.com/) - for easily integrated fonts
- [Font Awesome](https://fontawesome.com/) - for easily integrated social media icons
- github - to store and host the website

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



