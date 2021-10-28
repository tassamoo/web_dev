**Day 1 - 3**

head: holds information abut the webpage
meta element (help browser to render the html docs),
charset = give extra metadata to html docs
it simply encoding the html docs so the browser can decode
it and show languages correctly



**Day 4**

A. HyperText
Hypertext is basically text documents that can be linked together.
It's connecting one page to another page using hyperlink
and usually the text is underlined

B. The anatomy of anchor tag href to make hyperlink

<a href="#">Hello</a>

<a : HTML element
href= : HTML Attribute
"#" : Link Destination
>Hello : Link Text
</a> : closing HTML element

**Day 5**

A. Creating Table
in this lesson I learn to create table using table element
there are some tags that I used here and it's include:
a. table: as a tag that contain the whole table sub tags
b. thead: act as the header of the table (First Row, usually for categorize things)
c. tr: to make rows for another subtag
d. tbody: to contain part of the table body (can be used further using Javascript)
e. td: to insert the data insade the table row (tr)
f. tfoot: to contain the table footer part

**Day 6**

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

A. HTML Form
<form class="" action="index.html" method="post">
  <label> Hahahaha </label>
  <input type="text" name="" value="">
</form>

tag explanation:
form: to make some data input
label: to make some questions for data input
input: to choose what kind of data that going to be input.
inout range from button, checkbox, color, date, email, file, hidden, image,
month, number, password, etc

**Day 7 - CSS**

A. Inline css 
is basically edit css element inside the html tags.

B. Internal css 
edit css element by using stye tag inside the html files
you can change another tag style easily but limited to only
one page html files that you edit

C. External css 
creating style.css files to make one for all changes to
all the website pages. You just need to link the css files
on the head tags.



**Day 8**

Debugging CSS code
A. the css priority
1. inline, - the browser will render this first 
2. internal, - this is the second
3. external - this is last

**B. CSS Syntax (Grammar of CSS language)**

the anatomy of CSS:

h1{color:red;}

selector {property:value;}


selector: Who is it that you want to modify? which tag?
property: What? what changes you want to make on the tag? bg color, text?
value: How do you want it to be? red? big? small? 

while writing the css property code, make sure it's alphabetical 
to make it easy for debugging

**C. Selector**
you can use class on img tag to differentiate the attribute that you want to change

hierarchy of selectors
ID, class, tag

in ID you can use it only for one tag because it's unique

classes: to apply same style to a group related items
IS: to apply specific style to a single element

you can have many classes on the tags 
but you can't have the same id

name vs passport
you can use many names but you can only have 1 ID for each passport

pseudo class: colon in front attribute
hover pseudo class

D.div tag and box model
in html files that we create, we use div tag and box models to 
style our website more efficiently

- div is basically used to divide the layout that you wnat to make

- Box model in anutshell, everything in css is a box. it has height, 
  width, margin, padding, border top, bottom, etc.
  read box model docs just by searching on mdn website here:
  https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

  <img src="images/box_model.png" alt="">g



**CSS Display Property** 
we can change the display property default in each element with "display" css code
block elements: paragraph, heading
inline: span, img, a 
inline-block: 
none: 

**web design**
people judge in a matter a seconds by how it looks first


**CSS Static and Relative Positioning**

A. CSS Positioning
Rules:
1. Content is Everything
2. Order Comes From Code
3. Children Sit on Parents

Position: 
1. Static
2. Relative
3. Absolute
4. Fixed

Coordinates:
1. Top
2. Bottom
3. Left
4. Right

**CSS Absolute and Fixed Positioning**
Relative Positioning: adding a margin relative to where the element should have been
Absolute Postitioning: adding a margin to its parent element 


**The Dark Art of Centering Elements**
to center the element there are some ways we can used:
1. using text-align: center (can be used when the lement is inline)
2. using margin by set the top and bottom zero, left and right auto
3. using position relative and absolutes

**Font Styling in Personal Website**
Sans-serif: no edges
Serif: have edges
go to fonts.google.com to embed the font that you want to show in your website

**Adding content to our website**
this is basically copy paste code from the html resource