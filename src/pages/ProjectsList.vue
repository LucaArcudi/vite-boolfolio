<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name: "ProjectsList",
    components: {
        AppProject,
    },
    data() {
        return {
            projects: [],
            urlAddres: 'http://127.0.0.1:8000/api/projects/'
        }
    },

    methods: {
        getProjects() {
            axios.get(this.urlAddres, {
                params: {

                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },

    created() {
        this.getProjects();
    },
}
</script>
<template>
    <div class="row">
        <div class="col-12">
            <h1>Projects:</h1>
        </div>
    </div>

    <div class="row g-5">
        <div class="col-4" v-for="project in projects">
            <AppProject :project="project" />
        </div>
    </div>
</template>
<style scoped lang="scss"></style>