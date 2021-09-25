const DOMPurify = require("dompurify");



/**
 *  Viewer - function (Browser Only)
 *  ============================================================================
 *  The Viewer function takes a DOM element and an olojs Library as input and
 *  binds the `innerHTML` content of the element to the rendering of the document 
 *  identified by the `src` attribute in the given store. For example:
 *  
 *  ```html
 *  
 *  <!-- This is the element that will contain the document rendering -->
 *  <div id="viewer-id" src="/path/to/doc"></div>
 *  
 *  <script>
 *      
 *      <!-- retrieve the host element and create a store -->
 *      domElement = document.querySelector("#viewer-id");
 *      library = new olojs.Library();
 *      
 *      <!-- bind the host element to the store -->
 *      viewer = olojs.Viewer(domElement, store);
 *      
 *  </store>
 *  ```
 *  
 *  Once the binding is created by calling the `Viewer` constructor, the
 *  document identified by the `src` attribute (`/path/to/doc` in the example)
 *  will be loaded from the given store, then rendered, sanitized and injected
 *  as `innerHTML` in the host element.
 *  
 *  Every time the `src` attribute changes, the host element content will be
 *  automatically updated. 
 *  
 *  The Viewer constructor returns the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
 *  used to react to `src` attribute changes.
 */
module.exports = function (element, store) {
    
    const observer = new MutationObserver(async mutations => {
        for (let mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "src") {
                
                // load and render the document mapped to the src URL
                const docId = mutation.target.getAttribute('src');
                const context = store.createContextFromId(docId);
                const source = await store.read(context.__path__);
                const evaluate = store.parseDocument(source);
                const {text} = await evaluate(context);
                mutation.target.innerHTML = DOMPurify.sanitize(text);
                
            }
        }
    });
    
    observer.observe(element, {
        attributes: true, 
        attributeFilter: ['src']
    });
    
    return observer;
}
