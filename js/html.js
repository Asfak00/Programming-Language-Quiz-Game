// button reference here
const htmlBtn = document.getElementById("HTML");
const mouseClick = new Audio("./audio/click.mp3");
// const mainDiv = document.querySelector(".main-div");
// const hiddenContainer = document.getElementById("hiddenDiv");
// const submitBUTTON = document.getElementById("submit-button");

htmlBtn.addEventListener("click", () => {
  mouseClick.play();
  timeZone.style.display = "block";
  mainDiv.style.opacity = "1";
  hideDiv.classList.add("show");
  submitButton.style.display = "block";
  let htmlApi = [
    {
      question: "Q1: What does HTML stand for?",
      a: "Hyperlinks and Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyper Text Markup Language",
      d: "Markup Language Of Website",
      ans: "ans3",
    },

    {
      question: "Q2: Who is making the Web standards?",
      a: "Google",
      b: "The World Wide Web Consortium",
      c: "Microsoft",
      d: "Mozilla",
      ans: "ans2",
    },

    {
      question: "Q3: Choose the correct HTML element for the largest heading:",
      a: "<head>",
      b: "<h1>",
      c: "<h6>",
      d: "<heading>",
      ans: "ans2",
    },

    {
      question:
        "Q4: What is the correct HTML element for inserting a line break?",
      a: "<br>",
      b: "<break>",
      c: "<lb>",
      d: "<b>",
      ans: "ans1",
    },

    {
      question: "Q5: What is the correct HTML for adding a background color?",
      a: "<background> yellow </background>",
      b: '<body bg= "yellow">',
      c: '<body style= " background-color: "yellow" ">',
      d: '<body style= " background-color= "yellow" ">',
      ans: "ans3",
    },

    {
      question: "Q6: Choose the correct HTML element to define important text",
      a: "<important>",
      b: "<strong>",
      c: "<b>",
      d: "<i>",
      ans: "ans2",
    },

    {
      question: "Q7: Choose the correct HTML element to define emphasized text",
      a: "<i>",
      b: "<italic>",
      c: "<em>",
      d: "<em></em>",
      ans: "ans3",
    },

    {
      question: "Q8: What is the correct HTML for creating a hyperlink?",
      a: '<a name="http://www.w3schools.com">W3Schools.com</a>',
      b: "<a>http://www.w3schools.com</a>",
      c: '<a href="http://www.w3schools.com">W3Schools</a>',
      d: '<a url="http://www.w3schools.com">W3Schools.com</a>',
      ans: "ans3",
    },

    {
      question: "Q9: Which character is used to indicate an end tag?",
      a: "/",
      b: "<",
      c: ">",
      d: "^",
      ans: "ans1",
    },

    {
      question: "Q10: How can you open a link in a new tab/browser window?",
      a: '<a href="url" new>',
      b: '<a href="url" target="new">',
      c: '<a href="url" target="_blank">',
      d: '<a href="url" _blank>',
      ans: "ans3",
    },

    {
      question: "Q11: Which of these elements are all <table> elements?",
      a: "<table><tr><tt>",
      b: "<table><tr><td>",
      c: "<thead><body><tr>",
      d: "<table> <head> <tfoot>",
      ans: "ans2",
    },

    {
      question:
        "Q12: Inline elements are normally displayed without starting a new line.",
      a: "True",
      b: "False",
      c: "Correct",
      d: "Incorrect",
      ans: "ans1",
    },

    {
      question: "Q13: How can you make a numbered list?",
      a: "<list>",
      b: "<dl>",
      c: "<ul>",
      d: "<ol>",
      ans: "ans4",
    },

    {
      question: "Q14: What is the correct HTML for making a checkbox?",
      a: "<check>",
      b: '<input type="checkbox">',
      c: "<checkbox>",
      d: '<input type="check">',
      ans: "ans2",
    },

    {
      question: "Q15: How can you make a bulleted list?",
      a: "<ol>",
      b: "<ul>",
      c: "<dl>",
      d: "<list>",
      ans: "ans2",
    },

    {
      question: "Q16: What is the correct HTML for making a text input field?",
      a: '<input type="text">',
      b: '<input type="textfield">',
      c: '<textinput type="text">',
      d: "<textfield>",
      ans: "ans1",
    },

    {
      question: "Q17: What is the correct HTML for making a drop-down list?",
      a: '<input type="dropdown">',
      b: "<select>",
      c: '<input type="list">',
      d: "<list>",
      ans: "ans2",
    },

    {
      question: "Q18: What is the correct HTML for making a text area?",
      a: '<input type="textarea">',
      b: "<textarea>",
      c: '<input type="textbox">',
      d: '<input type="text">',
      ans: "ans2",
    },

    {
      question: "Q19: What is the correct HTML for inserting an image?",
      a: '<img src="image.gif" alt="Mylmage">',
      b: '<img href="image.gif" alt="Mylmage">',
      c: '<img alt="Mylmage">image.gif</img>',
      d: '<image src="image.gif" alt="Mylmage">',
      ans: "ans1",
    },

    {
      question:
        "Q20: What is the correct HTML for inserting a background image?",
      a: '<body style="background-image:url(background.gif)">',
      b: '<background img="background.gif">',
      c: "<background-image></background-image>",
      d: '<body bg="background.gif">',
      ans: "ans1",
    },

    {
      question:
        "Q21: An <iframe> is used to display a web page within a web page.",
      a: "True",
      b: "There is no such thing as an <iframe>",
      c: "No",
      d: "False",
      ans: "ans1",
    },

    {
      question: "Q22: HTML comments start with <!-- and end with -->",
      a: "True",
      b: "Incorrect",
      c: "False",
      d: "Correct",
      ans: "ans1",
    },

    {
      question:
        "Q23: Block elements are normally displayed without starting a new line.",
      a: "True",
      b: "No",
      c: "Yes",
      d: "False",
      ans: "ans4",
    },

    {
      question: "Q24: Which HTML element defines the title of a document?",
      a: "<title>",
      b: "<meta>",
      c: "<body>",
      d: "<head>",
      ans: "ans1",
    },

    {
      question:
        "Q25: Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      a: "title",
      b: "longdecs",
      c: "alt",
      d: "src",
      ans: "ans3",
    },

    {
      question: "Q26: Which doctype is correct for HTML5?",
      a: "<!DOCTYPE html>",
      b: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
      c: "<!DOCTYPE HTML5>",
      d: "<DOCTYPE>",
      ans: "ans1",
    },

    {
      question:
        "Q27: Which HTML element is used to specify a footer for a document or section?",
      a: "<footer>",
      b: "<bottom>",
      c: "<section>",
      d: "<div>",
      ans: "ans1",
    },

    {
      question:
        "Q28: In HTML, you can embed SVG elements directly into an HTML page.",
      a: "True",
      b: "Correct",
      c: "Incorrect",
      d: "False",
      ans: "ans1",
    },

    {
      question:
        "Q29: What is the correct HTML element for playing video files?",
      a: "<media>",
      b: "<video>",
      c: "<clip>",
      d: "<movie>",
      ans: "ans2",
    },

    {
      question:
        "Q30: What is the correct HTML element for playing audio files?",
      a: "<sound>",
      b: "<mp3>",
      c: "<song>",
      d: "<audio>",
      ans: "ans4",
    },

    {
      question: 'Q31: The HTML global attribute, "contenteditable" is used to:',
      a: "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
      b: "Specify whether the content of an element should be editable or",
      c: "Update content from the server",
      d: "Return the position of the first found occurrence of content inside a string",
      ans: "ans2",
    },

    {
      question: "Q32: In HTML, onblur and onfocus are:",
      a: "Even attribute",
      b: "Style attribute",
      c: "language",
      d: "HTML attribute",
      ans: "ans1",
    },

    {
      question: "Q33: Graphics defined by SVG is in which format?",
      a: "HTML",
      b: "XML",
      c: "CSS",
      d: "JS",
      ans: "ans2",
    },

    {
      question: "Q34: The HTML <canvas> element is used to:",
      a: "display database records",
      b: "manipulate data in MySQL",
      c: "create draggable elements",
      d: "draw graphics",
      ans: "ans4",
    },

    {
      question:
        "Q35: In HTML, which attribute is used to specify that an input field must be filled out?",
      a: "Validate",
      b: "Required",
      c: "Formvalidate",
      d: "Placeholder",
      ans: "ans2",
    },

    {
      question: "Q36: Which input type defines a slider control?",
      a: "Search",
      b: "Controls",
      c: "Range",
      d: "Slider",
      ans: "ans3",
    },

    {
      question:
        "Q37: Which HTML element is used to display a scalar measurement within a range?",
      a: "<gauge>",
      b: "<meter>",
      c: "<range>",
      d: "measure",
      ans: "ans2",
    },

    {
      question: "Q38: Which HTML element defines navigation links?",
      a: "<navigation>",
      b: "<navigate>",
      c: "<nev>",
      d: "<nav>",
      ans: "ans4",
    },

    {
      question: "Q39: In HTML, what does the <aside> element define?",
      a: "A navigation list to be shown at the left side of the page",
      b: "Content aside from the page content",
      c: "The ASCII character-set; to send information between computers on the Internet",
      d: "Because that is not sidebar",
      ans: "ans2",
    },

    {
      question:
        "Q40: Which HTML element is used to specify a header for a document or section?",
      a: "<header>",
      b: "<top>",
      c: "<section>",
      d: "<head>",
      ans: "ans1",
    },
  ];

  createQuiz(htmlApi);
});
