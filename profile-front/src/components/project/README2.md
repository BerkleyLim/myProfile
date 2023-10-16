# React 프론트 문제
- 진입장벽 겁나 높습니다.
- 올거나이즈 코리아 문제 3개

# 문제 1
Front-end Challenge
We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
```
First name = Coder
Last name = Byte
Phone = 8885559999
```

You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are. Submit your code once it is complete and our system will validate your output.


# 문제 2
Front-end Challenge
We provided some simple React template code. Your goal is to modify the application so that when you click the toggle button, the favorite programming language toggles between the items in the languages array. The default value should be the first item in the array.

You must use the Context API for this challenge, which means you have to use the React.createContext and Context.Provider functions. You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are.

Submit your code once it is complete and our system will validate your output.

# 문제 3
String Challenge
Have the function StringChallenge(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.

### Examples
Input: "<div><div><b></b></div></p>"
Output: div

Input: "<div>abc</div><p><em><i>test test test</b></em></p>"
Output: i