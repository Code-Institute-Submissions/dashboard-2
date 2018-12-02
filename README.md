# Stream Two Project - Death & Destruction in Home & Away Data Dashboard

For my data dashboard, I wanted to show the ridiculous and hilarious ways in which characters have died in Home and Away over the last 20 years. 

## UX

I wanted to keep the layout for the dashboard quite simple but I also wanted to show how ridiculous Home and Away can be sometimes and really show the ways in which people have died, the fact that some people are always getting injured or having heart attacks and I wanted it to be a comical dashboard for users to enjoy. Therefore, some of the graphs are quite large and do contain a lot of information. I thought about scaling this back but it wouldn't have really conveyed what I wanted to show and I wanted to highlight stuff like the amount of people who get shot or die in car crashes which wouldn't be the same if I scaled back the data. 

I tried to incorporate some sort of beachy themed colour scheme but it ended up being too overbearing so I decided to just create rainbow coloured graphs, using the hex codes of Crayola crayons. I also made sure to include the Home and Away font so it felt more authentic. 

I drew some rough drawings on pen and paper to show how I wanted the dashboard to look. These can be found in the [mockups](https://github.com/oheag2/dashboard/tree/master/mockups) section, as well as examples of how the tour works and looks and an example of how the graphs interact when you select something, ie 'shot' as the type of death.

Because of the sheer scale of some graphs, I removed the labels from some as they were overlapping too much and instead used legends to allow users interact with the graphs. 

I wanted users to enter the site and in the first graph to get a good idea of how many people have actually died in the last 23 years, and of course who faked their own death! The graphs move along to then show how people died, what the big storyline was and then further down, to show who these people were, where they lived and who they left behind. My main emphasis though was to show the ways in which people died so these graphs were kept to the start of the site. 


## Features

The site is simply laid out with a tour button to guide people through it in a comical way. I used a bright colour scheme with numerous colours to make the legend easier to navigate if labels weren't present. 

Features left to implement:

- Responsive:

If I had more time, I would like to make the site more responsive. I added an overflow value to the graphs but I don't think its enough. I know these graphs are usually not very responsive anyway but it would have been nice to make them more user friendly on mobile devices. 

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

I tested the site on a number of browsers and devices to ensure it worked on all. I attempted numerous times to make the site more responsive on mobile devices but eventually realised it would take more time than I had. I added an 'overflow: auto' to the charts to allow them to overflow on mobile devices but if I had more time, I would have tried to make the graphs more responsive. However, given the scale of them, I'm not sure they would have ever worked very well on mobile devices as there were too many sections and labels. 

## Deployment

I initially started the Dashboard on Pycharm and after a lot of work, got it working locally. However I eventually ran out of a licence so spoke to Student Care who sorted me out with a new licence. However I was worried this would expire before I finished the dashboard so I spoke to Nakita who recommended I switch to Cloud9. This caused even more head scratching as I had to move everything and figure out how to get it work again from Cloud9 but after a lot of back and forth, I finally got everything working properly on Cloud9. This allowed me to then deploy to Heroku. I used mLab to host the database and again after a lot of confusion, I finally got Heroku to host the page. Looking back, I'm not sure why I struggled so much but when I took my time and read over everything clearly, it all made sense. However since moving to the new LMS for Stream 3, I think having videos of every step is a huge help so maybe that might have helped me at the time. My main struggle was getting the database hosted instead of having it locally which I struggled to really get a grasp on intially but finally got my head around after a while. I also didnt back up my project as much as I should because genuinely I forgot to so although I did eventually back up to Github, it was months after I first started the project and probably only when I moved the project to Cloud9. 

## Credits

### Content
- All content for this site was created by me. Using numerous Home and Away fan websites, Wikipedia and my own memories, I created a rough database in [Excel](https://github.com/oheag2/dashboard/blob/master/mockups/closer%20each%20day%20-%20Sheet1.pdf) as the framework for how I would create the database in MongoDB. 

The sites I used were:

- [Back to the Bay](https://www.backtothebay.net)
- [Home and Away Wiki](https://homeandaway.fandom.com/wiki/Home_and_Away_Wiki) 
- [Your Gym Wiki](http://yourgymwiki.blogspot.com/2017/12/summer-bay_16.html)
- [Wikipedia](https://en.wikipedia.org/wiki/List_of_births,_marriages_and_deaths_in_Home_and_Away)

### Imagery

- I created the HA favicon in Photoshop

### Colour scheme

- I used the hex codes for Crayola crayons to create a rainbow colour scheme. I kept the background white and simple and used the official Home and Away font to bring it all together.
- [Crayola Hex Codes](http://www.colourlovers.com/web/blog/2008/04/22/all-120-crayon-names-color-codes-and-fun-facts)
- [Home and Away font](https://www.wfonts.com/font/reporter-two)

### Code Snippets

- All code was written by me and/or adapted from the LMS lessons.
- I also received great help on the Tutoring page from Nakita, Haley & Niel as well as from my mentor Victor.
