<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <v-text-field
                            v-model="SelectedData.first_name"
                    ></v-text-field>
                    <br>
                    <v-btn @click="SumbitChanges">Submit</v-btn>
                </div>
                <div class="col">
                    <v-date-picker dark v-model="SelectedData.dob"></v-date-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateData.vue",
        data() {
            return {
                picker: new Date().toISOString().substr(0, 10),
            }
        },
        computed:{
            SelectedData(){
                return this.$store.getters.computedSelectedData1
            }
        },
        methods:{
            SumbitChanges(){
                let vmThis = this;
                vmThis.$store.getters.computedData1.forEach(function (item) {
                    if (item.id === vmThis.SelectedData.id) {
                        item.dob = vmThis.SelectedData.dob;
                        item.first_name = vmThis.SelectedData.first_name;

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>