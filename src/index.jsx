let poly = require("preact-cli/lib/lib/webpack/polyfills");
// 
import { h } from "preact";
import { render } from "preact";
import Editor from './editor'


// 
// import Widget from "";
// 
// 

let editors = document.querySelectorAll('[data-mdeditor]')

editors.forEach( function(editor){
    let $textarea = editor.querySelector('textarea')
    let value = $textarea.value
    let name = $textarea.getAttribute('name')

    editor.innerHTML = ''
render(<Editor value={value} name={name} />, editor, editor.firstChild)
})