<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <v-text-field
                            v-model="item.first_name"
                    ></v-text-field>
                    <br>
                    <v-btn @click="SumbitChanges">Submit</v-btn>
                </div>
                <div class="col">
                    <v-date-picker dark v-model="item.dob"></v-date-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateData.vue",
        data(){
            return {
                item:{
                    first_name:'',
                    dob:''
                }
            }
        },
        methods:{
            SumbitChanges(){
                let vmThis = this;
                vmThis.$store.commit('pushNewItemToData1', vmThis.item);
                vmThis.item ={first_name:'',dob:''};

            }
        }
    }
</script>

<style scoped>

</style>