# CS 4550, Homework 2

Deployed to [hw02.ovmwan.com](http://hw02.ovmwan.com)

Subpages:

* [animal.html](http://hw02.ovmwan.com/animal.html)
* [calc.html](http://hw02.ovmwan.com/calc.html)

## Calculator Functionality

Type the first number, followed by the operation, and then hit either the "+/=" button or the operation button to output the result.

### Edge cases:

* **Chaining operations:** Entering a different operation than the first, or than the +/= button, after entering 2 numbers and an operation
  * Input: 2 + 3 x 3 +/=
  * Result: After entering the x operator, the screen will show the output of 2 + 3, and then upon clicking the +/= button, will show the output of 5 x 3
* **Repeatedly pressing operation buttons:** After entering an operation once, hitting the same or a different operation button
  * Input: 2 x x - 3 +/=
  * Result: The screen output will not change upon repeated operation button presses. Upon the typing of a number (or decimal), the screen will display that input. The last operation pressed will be the operation carried out; in this case that would be 2 - 3