Simple React animation that drops and stacks list items

Try it @ https://codesandbox.io/s/github/tfmcunha/react-drop-animation-list-items

The component can be rendered from an array mapping. It calculates the timings based on array length and 
index of the item. That timing is then used on a setTimeout function inside a componentDidMount method 
or useEffect hook, defining a boolean variable that toggles classes

The animation itself is defined in the CSS stylesheet and can have different variations using either
CSS transition or @keyframes.

Any question or sugestion, let me know

Tiago Cunha
