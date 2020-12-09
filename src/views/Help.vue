<template>
    <div class="our-help">
    <h1>{{pagNeame}}</h1>
    <p>{{ pageDescription}}</p>
    </div>
</template>
<script>
export default {
    
data:function(){
    return{
        pagNeame:"Help ",
        pageDescription:"This is Help Page"
    };
},
    name:"help"
}
</script>