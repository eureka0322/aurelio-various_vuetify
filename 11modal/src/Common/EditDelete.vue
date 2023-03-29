<template>
    <main>
        <v-speed-dial
        :direction="direction"
        :hover="hover"
        :transition="transition">
            <v-btn icon slot="activator">
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-btn fab dark small class="success" @click.native="EditConfirm">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn fab dark small class="red" @click.native="confirm">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-speed-dial>
    </main>
</template>
<script>
    export default {
        name: 'edit-delete',
        data() {
            return {
                direction: "right",
                hover: false,
                transition: 'slide-y-reverse-transition'
            }
        },
        methods: {
            EditConfirm: function() {
                this.$emit('EditConfirmed')
            },
            confirm: function() {
                this.$emit('confirmed')
            }
        }
    }
</script>
<style>
</style>
