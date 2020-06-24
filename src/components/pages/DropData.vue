<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <v-btn @click="deleteItem">Submit</v-btn>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DropData.vue",
        methods:{
            deleteItem(){
                this.$store.getters.computedData1.splice(this.$store.getters.computedSelectedData1.id, 1);
                let obj = this.$store.getters.computedData1[0];
                obj.id = 0;
                this.$store.commit('updateSelectedData1', obj);
            }
        }
    }
</script>

<style scoped>

</style>