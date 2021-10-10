<template>
  <v-app>
    <v-main>
        <v-card class="olo-document centered" rounded elevation="3">
            <olo-viewer :html="docText"></olo-viewer>
        </v-card>
        <v-footer id="olo-footer" class="centered text-center">
            <i>oloViewer v{{version}} - Copyright 2021 OnLabs.org</i>
        </v-footer>        
    </v-main>
  </v-app>
</template>

<script>
import * as pathlib from 'path';
import oloViewer from './components/olo-viewer';

export default {
  name: 'App',

  components: { oloViewer },

  data: () => ({
      docId: "",
      docPath: "",
      docSource: "",
      evaluateDoc: () => ({text:"", data:{}}),
      docText: "",
      docData: {},
      version: require('../package.json').version
  }),
  
  computed: {
      
      docContext () {
          return this.$store ? this.$store.createContextFromId(this.docId) : {};
      }
  },
  
  watch: {
      
      docContext () {
          this.render();
      }
  },
  
  methods: {
      
      updateHash () {
          const hash = location.hash.slice(1);            
          if (hash) {
              this.docId = hash;
          } else {
              this.setHash('/home/');
          }
      },
      
      setHash (docId) {
          location.hash = pathlib.normalize(`/${docId}`);
      },
      
      async render () {
          if (this.docContext.__path__ !== this.docPath) {
              this.docPath = this.docContext.__path__;
              this.docSource = await this.$store.read(this.docPath);
              this.evaluateDoc = this.$store.parseDocument(this.docSource);
          }
          const {text, data} = await this.evaluateDoc(this.docContext);
          this.docText = text;
          this.docData = data;
      }                  
  },

  mounted () {
      window.addEventListener('hashchange', this.updateHash.bind(this));
      this.updateHash();
  }
};
</script>

<style>
    html { 
        overflow-y: auto 
    }

    html, body, .v-main {
        background-color: #D0D4D0;
    }
    
    #olo-footer.v-footer {
        background-color: #D0D4D0;
        text-align: center;
        justify-content: center;
        color: #848484;
        font-size: 10pt;
        padding: 0.5em;
    }
    
    .centered {
        margin-left: 15%;
        margin-right: 15%;        
    }

    .olo-document {
        height: 100%;
        margin-top: 2em;
        padding-top: 2em;
    }
</style>
