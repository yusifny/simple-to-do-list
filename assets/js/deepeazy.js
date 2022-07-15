// DO NOT MAKE CHANGES IN THIS JAVASCRIPT FILE
export function setStyle (styleOf, sourceStyleProp, ToStyleOf, targetStyleProp){
    const srcElmnt = window.getComputedStyle(styleOf);
    ToStyleOf.style[targetStyleProp] = srcElmnt[sourceStyleProp];
}