<template>
  <div id="translateForm" class="row">
    <div class="col-md-12 col-md-offset-4">
  <form v-on:submit="FormSubmit" class="well">
    <input type="text" placeholder="输入需要翻译的内容" v-model="textTOTranslate" class="Text">
    <select v-model="language" class="content">
      <option value="en">English</option>
      <option value="ru">Russian</option>
      <option value="ko">Korean</option>
      <option value="ja">	Japanese</option>
    </select>
    <input type="submit" value="翻译" class="button">
  </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'translateForm',
    data:function () {
      return{
        textTOTranslate:"",
        language:""
      }
    },
    methods:{
      FormSubmit(e){
//      alert(this.textTOTranslate)
        this.$emit("formSubmit",this.textTOTranslate,this.language);
        e.preventDefault();
      }
    },
    created:function () {
      this.language='en'
    }
  }
</script>

<style scoped>
  .well{
    width: 500px;
    height: 100px;
    margin: 0 auto;
    padding-top: 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background:rgba(204,204,204,0.3);
  }
  .Text{
    width: 250px;
    height: 38px;
    border-radius: 5px;
    border: none;
  }
  .content{
    border-radius: 5px;
    border: none;
    height: 38px;
  }
  .button{
    border-radius: 5px;
    border: none;
    height: 38px;
    background:rgba(000,000,255,0.3);
  }
</style>
