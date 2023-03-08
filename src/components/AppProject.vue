<template>
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
            <router-link :to="{ name: 'project', params: { slug: project.id } }" class="btn btn-primary">{{
                project.title }} details</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppProject',
    data() {
        return {

        }
    },
    props: {
        'project': {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped lang="scss"></style>