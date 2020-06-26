import { h, Component} from 'preact'
import marked from 'marked'



export default class Markdown extends Component {
    render (props) {
        return <div dangerouslySetInnerHTML = {{__html: this.renderMarkdown()}}/>
    }

    renderMarkdown(){
        marked.setOptions({
            gfm: true,
            table: true,
            breaks: false,
            sanitize: false, // si true html echapé
            pedantic: false,
            smartLists: true,
            smartypants: false,
        });
        return marked(this.props.markdown)
    }


}