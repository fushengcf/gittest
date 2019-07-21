<template>
  <div>
    <vue-ckeditor 
      v-model="content" 
      :config="config" 
      @blur="onBlur($event)" 
      @focus="onFocus($event)"
      @contentDom="onContentDom($event)"
      @dialogDefinition="onDialogDefinition($event)"
      @fileUploadRequest="onFileUploadRequest($event)"
      @fileUploadResponse="onFileUploadResponse($event)" />
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2';
// const AUTH_TOKEN = "watson-token";

export default {
  components: { VueCkeditor },

props: {
    value: {
      type: String,
      default: ""
    }
  },   //传值到子组件

  watch: {    //监控变化和传值
    value(newValue) {
      this.content = newValue;
    },  

    content(newValue) {
      this.$emit("input", newValue);
    }
  },  


  data() {
    return {
      content: '',
      config: {
        toolbar: [
         { name: 'document', items: [ 'Source', 'Sourcedialog', '-', 'A11ychecker', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates' ] },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
		{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'HiddenField' ] },
		'/',
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'insert', items: [ 'EasyImageUpload', 'CreatePlaceholder', 'Glyphicons', 'CodeSnippet', 'Mathjax', 'Embed', 'EmbedSemantic', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe', 'EmojiPanel' ] },
		'/',
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
		{ name: 'tools', items: [ 'UIColor', 'Maximize', 'ShowBlocks' ] },
		{ name: 'about', items: [ 'About', 'Xmas' ] }
        ],
        height: 600
      }
    };
  },
  methods: {
    onBlur(evt) {
      console.log(evt);
    },
    onFocus(evt) {
      console.log(evt);
    },
    onContentDom(evt) {
      console.log(evt);
    },
    onDialogDefinition(evt) {
      console.log(evt);
    },
    onFileUploadRequest(evt) {
      console.log(evt);
    },
    onFileUploadResponse(evt) {
      console.log(evt);

      evt.stop();

      try {
        evt.data.url = JSON.parse(evt.data.fileLoader.xhr.response).url;
      } catch (e) {
        evt.data.url = "";
        console.error(e);
      }
    }
  }
};
</script>

<style lang="scss">
.el-form-item__label {
  float: none;
}
</style>