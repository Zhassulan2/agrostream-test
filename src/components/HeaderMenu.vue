<template>

        <v-bottom-navigation
                v-model="bottomNav"
        >
            <v-btn value="Home"
                   @click="goToPage('/')"
            >
                <span>Home</span>
                <v-icon>home</v-icon>
            </v-btn>

            <v-btn value="Create"
                   @click="goToPage('/CreateData')">
                <span>Create</span>
                <v-icon>mdi-folder-plus </v-icon>
            </v-btn>

            <v-btn value="Edit"
                   @click="goToPage('/UpdateData')">
                <span>Edit</span>
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn value="Delete"
                   @click="goToPage('/DropData')">
                <span>Delete</span>
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-bottom-navigation>
</template>

<script>
    export default {
        name: "HeaderMenu.vue",
        data () {
            return {
                bottomNav: 'recent',
            }
        },
        methods:{
            goToPage(tmpString){
                this.$router.push(tmpString)
            }
        }
    }
</script>

<style scoped>

</style>