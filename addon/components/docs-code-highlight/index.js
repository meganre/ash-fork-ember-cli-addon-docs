import { classNameBindings, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import hljs from 'highlight.js/lib/core';

// Installed languages
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import handlebars from 'highlight.js/lib/languages/handlebars';
import htmlbars from 'highlight.js/lib/languages/htmlbars';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import diff from 'highlight.js/lib/languages/diff';
import shell from 'highlight.js/lib/languages/shell';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('htmlbars', htmlbars);
hljs.registerLanguage('hbs', htmlbars);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sh', shell);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);

@tagName('pre')
@classNameBindings('language')
export default class DocsCodeHighlight extends Component {
  didInsertElement() {
    super.didInsertElement(...arguments);

    hljs.highlightBlock(this.element);
  }
}
