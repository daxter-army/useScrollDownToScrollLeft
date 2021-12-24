# useScrollDownToScrollRight

Traditionally, vertical scrollers work as you scroll down/up, but to scroll horizontally, you need to press shift key and then on scrolling, it works.
This custom react hook enables your horizontal scroller to **work without the need of shift key**.

**REQUIREMENT**<br/>
**Your container must be using horizontal scrolling.**

**SYNTAX:**
```js
  const scrollerRef = useRef();
  
  {/* It takes the ref to your scroller as an argument */}
  {/* It returns you the current position of the scroll in your container */}
  const scrollPosition = useScrollDownToScrollRight(scrollerRef)
```

**EXAMPLE:**

[Codesandbox live example](https://codesandbox.io/s/usedowntoscrollleft-pu9ii?file=/src/App.js)

```js
import { useRef } from "react";
import useScrollDownToScrollRight from "./use-scroll-down-scroll-right";

export default function App() {
  // create a ref for the container, who will work as scroller
  const scrollerRef = useRef();

  // getting the current scroll position of the horizontal scroller
  const scrollPosition = useScrollDownToScrollRight(scrollerRef);

  return (
    <div className="App">
      <p>Scroller Position: {scrollPosition}</p>
      
      {/* Below is the scroll container */}
      <div className="main" ref={scrollerRef}>
        <div className="flex-container">
          <div className="flex-items">1</div>
          <div className="flex-items">2</div>
          <div className="flex-items">3</div>
          <div className="flex-items">4</div>
          <div className="flex-items">5</div>
          <div className="flex-items">6</div>
          <div className="flex-items">7</div>
          <div className="flex-items">8</div>
          <div className="flex-items">9</div>
          <div className="flex-items">10</div>
        </div>
      </div>
    </div>
  );
}
```
