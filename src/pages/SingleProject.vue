<template>
    <div class="row">
        <AppProject :project="project" />
    </div>
</template>
<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name: 'SingleProject',
    components: {
        AppProject,
    },
    data() {
        return {
            project: null,
            urlAddres: 'http://127.0.0.1:8000/api/projects/'
        }
    },

    methods: {
        getProject() {
            axios.get(this.urlAddres + this.$route.params.slug, {
                params: {

                }
            })
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
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
        this.getProject();
    },
}
</script>
<style scoped lang="scss"></style>