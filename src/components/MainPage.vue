<template>
    <div>
        <HeaderMenu/>
        {{data1}}
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
            </thead>
            <tbody>
            <tr :class="(item.id===SelectedId)? 'selectedItemCss': ''"
                v-for="(item, index) in data1" v-bind:key="item.id" @click="changeSeletedItem(item,index)">
                <th scope="row" >{{index}}</th>
                <td>{{item.first_name}}</td>
                <td>{{item.dob}}</td>
            </tr>
            </tbody>
        </table>
        {{Selecteddata}}
        <router-view></router-view>

    </div>
</template>

<script>
    import HeaderMenu from './HeaderMenu'

    export default {
        name: "MainPage.vue",
        components: {
            HeaderMenu,
        },
        data(){
            return {
                SelectedId:0
            }
        },
        computed:{
            data1(){
                return this.$store.getters.computedData1
            },
            Selecteddata(){
                return this.$store.getters.computedSelectedData1
            },
        },
        methods:{
            changeSeletedItem(item,index){
                item.id = index;
                this.$store.commit('updateSelectedData1', item);
                this.SelectedId = index;
            }
        }
    }
</script>

<style scoped>
.selectedItemCss{
    background-color: #EDEDED;
}
</style>