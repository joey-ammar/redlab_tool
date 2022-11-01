<script setup>

</script>
<template>
   <div class="main">
        <div class="inside">
            <div>
                <b-form>
                    <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                        <b-form-input id="input-1" type="email" placeholder="Enter email" required ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input id="input-2"  placeholder="Enter name" required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                        <b-form-select id="input-3"   required></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group id="checkboxes-4" :aria-describedby="ariaDescribedby">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
        </div>
   </div>
</template>
<style scoped lang="scss">
    @import '../../sass/variables.scss';

    .main {
        background-color: $background-color;
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .inside {
            @include width-margin;
        }
    }

</style>