# Asylum
(Screenshots to come later)

## Deployed Link Will go Here at some point

## Technologies Used:

### MERN 
*MongoDB
*Express 
*React 
*Node

![Mern](https://miro.medium.com/max/900/0*UqGyYmWCRQnjLzSk.jpg)

### Redux
*Reducer
*Dispatch

### Material UI 
*Appbar
*Typography
*Grow
*Grid

## General Approach
So the inspiration for my app came one day came from when we were brainstorming and I was in a breakout room with some people, and someone had talked about wanting to do something that was meaningful. So I decided I wanted to do something that meant a lot to me too. So my idea began really broad I wanted to do so much with this, and I still can but I had to scale down some to be able to have an MVP.

I decided to stick with a MERN app, which even though we did for P3, I wanted to be able to try to do the whole thing on my own, instead of it being split with a group because I feel like I didn’t fully understand it without going through the entire process. 

So Asylum is a website that’s meant for LGBTQ related posts and events. The central idea is to post an idea that’s happening in your area, maybe some good news you wanna share, or just a resource you want to share with the community, and to be able to post a picture related to what you’re posting about.

## Installation Instructions:

#### For Front End:
*npm i @material-ui/core @material-ui/icons
*npm i axios redux moment
#### For Back End:
*npm i body-parser cors express mongoose nodemon

## User Stories:
-As a user, I want to know that I'm not alone in the LGBTQ community, I'd like to be able to see events in a particular area.
-As a user, I want to be able to post pictures of an event I know about and be able to say something about it for everyone to see.
-As a user, I should be able to like a post, or delete one of my posts.
-As a user, I want to be able to edit any part of my post including the description and image.

## Wireframes:

I will link these later.

## Pitch Deck:
Proposal submitted to instructors:
Weapons of choice: MERN (MongoDB, Express, React, Node)
The reason I choose to do this is because even though my P3 group did the posting of pictures, I was not the one who worked on that part, and in turn didn't feel like I learned how to do it on my own. I would like the chance to do a fullstack app with my own direction and ideas.

This is an idea that means a lot to me, I've always wanted to do something that would be in support of the LGBT community.

So my idea is to make an LGBT event board with a touch of some instagram elements. So the the central idea of the board is to post an LGBT related event that's happening in your area, or post a resource you want to share with the community. This would include CRUD functionality of course. A picture related to the event or resource will be posted along with the user, post title, and a message, and to be able to edit all those things.

Possible stretch goals:
-Haven't decided if I want to incorporate some sort of RSVP type thing to show a list of people who would be or are interested in going to the event.
-Be able to like a post
-Be able to have hashtags to be able to filter through the posts with the same hashtag and display them.

## Unsolved Problems:

The main, and biggest one is AUTH!!! I had tried a different way other than the boilerplate given during P3, but it ended up draining a lot of time and being extremely difficult. So I deleted it all. I'm considering going back to the boilerplate or implementing another way that might be more simple. No matter how you look at it, it's not simple.

-Being able to like posts infinitely (related to auth, since you aren't logged in to dictate that you can only like one per post)

-Being able to edit and delete every post (even if it's not yours). This is also related to auth because you aren't logged in to be able to dictate that you can only edit and delete your own posts.
