 <!-- <h1>About Us</h1>
        <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
        <p>Our team consists of experienced professionals who are passionate about what they do.</p>
        <p>Feel free to reach out to us with any questions or concerns.</p> -->

        To make text bigger when you hover over it, you can use the transform property in CSS along with the :hover pseudo-class. Here’s a simple example:

Step 1: HTML Structure
Create an element with some text.

HTML
 color: #7C93C3;
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <p class="hover-text">Hover over this text to see it grow!</p>
</body>
</html>
AI-generated code. Review and use carefully. More info on FAQ.
Step 2: CSS Styling
Add the following CSS to your stylesheet to make the text grow on hover:

CSS

/* styles.css */
.hover-text {
    transition: transform 0.3s ease-in-out; /* Smooth transition */
}

.hover-text:hover {
    transform: scale(1.2); /* Scale the text to 120% of its original size */
}

<!-- imgsection...flexdirection...column -->

 <!-- /* @media screen and (width = 1440px) {
  .wedo-content {
    margin-top: 16px;
  }
}  */

/* @media screen and (width <=1440px) {
  .container1 {
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 50px;
    padding: 15px;
  }
}  */ -->