<template>
  <div class="about">
    <h1>{{pagNeame}}</h1>
    <p>{{ pageDescription}}</p>
  
  </div>
</template>


<script>
// @ is an alias to /src
export default {
 
data:function(){
    return{
        pagNeame:"About us",
        pageDescription:"This is About us Page"
    };
},
name: "about"
 
 
};
</script>
