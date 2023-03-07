<template lang="">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Projects:</h1>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-4" v-for="project in projects">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4>
                                {{ project.type.name }}
                            </h4>
                            <span class="me-2" v-for="technology in project.technologies">
                                {{ technology.name }}
                            </span>
                        </div>
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text mb-0">{{ project.description }}</p>
                            <p class="card-text mt-3">{{ project.date }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">{{ project.title }} details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AppMain',
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
<style lang="scss" scoped></style>