<template>
  <div class="hello">
    <h3>{{$store.state.count}}</h3>
     <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
      <br>
        <button @click="handleActionsAdd(10)">异步增加</button>
    <button @click="handleActionsReduce(10)">异步减少</button>
    <h4>{{count}}--</h4>
  
  </div>
</template>
<script>
export default {
  data(){
return{
  msg:'呼啦啦'
}
  },
methods: {
    handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    }
  }
}
</script>                                                                                                                                                