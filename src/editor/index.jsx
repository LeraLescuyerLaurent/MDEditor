import { h,Component } from "preact";
import CodeMirror from './codemirror'
import Markdown from './Markdown'
import linkstate from 'linkstate'
import './style.scss';
import BoldButton from "./Buttons/BoldButton";
import ItalicButton from "./Buttons/ItalicButton";
import SpeechButton from "./Buttons/SpeechButton";



export default class Editor extends Component {

    constructor (props){
        super(props)

        this.state = {
            content: props.value,
            editor: null,
           fullscreen: false
        }
        // this.setEditor = this.setEditor.bind(this)
    }


    render ({name}, {content, editor, fullscreen}){
        let classe = 'mdeditor'
        if (fullscreen === true) {
            classe += ' mdeditor--fullscreen'
        }
        return <div class={classe}>
            <div class="mdeditor__toolbar">
                <div class="mdeditor__toolbarLeft">
                    {editor && [
                        <SpeechButton editor={editor}/>,
                        <BoldButton editor={editor}/>,
                        <ItalicButton editor={editor}/>
                    ]}
                </div>
                <div class="mdeditor__toolbarRight">
                    {editor && [
                    ]}
                </div>
            </div>
            <div class="mdeditor__editor">
                <CodeMirror value={content} onReady={this.setEditor}/>
            </div>
            <div class="mdeditor__preview">
                <Markdown markdown={content}/>
            </div>
            <textarea name={name} style="display:none;">
                {content}
            </textarea>
        </div>
    }

    setEditor= (editor) => {
        this.setState({editor})
        editor.on('change',e => {
            this.setState({content: e.getDoc().getValue()})
        })
    }
}
// setEditor (editor){
    // console.log(editor)
    // this.setState({editor})
// }