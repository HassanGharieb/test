<template>
    <div class="post-box">
        <span class="post-views">{{views}}</span>
       <h3 class="post-title">{{title}}</h3>
       <span class="post-data">{{data}}</span>
       <p class="postcontent"> {{contect}} </p>
       <div class="row">
         <div class="col-sm-6">
         <span class="post-outhor">{{auther}}</span>
         </div>
        <div class="col-sm-6">
         <span class="post-category">{{category}}</span>

         </div>

       </div>
    </div>
</template>
<script>
export default {
    props:["views","title","data","contect","auther","category"],
    name:"post",
};
</script>

<style lang="scss" scoped>
.post-box {
padding: 15px;
background-color: #fff;
box-shadow: 0 0 10px #ddd;
position: relative;
text-align: left;
margin-bottom: 20px;
.post-views {
    position: absolute;
    top:5px;
    right:5px;
    background-color: #f00;
    border-radius:4px;
    padding: 5px;
    color:#fff;

}

}


</style>