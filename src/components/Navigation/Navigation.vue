<script setup>
</script>

<template>
     <div class="Navigation">
        <div class="row">
            <div class="main__inside d-flex align-items-center">
                <!-- LOGO -->
                <div class="col-md-1"><p>R.</p></div>
                <div class="col-md-8 input-field">
                    <input placeholder="Search tickets" /> 
                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                </div>
                <div class="col-md-3 d-flex justify-content-around">
                    <div class="col-md-1"><a class="btn1">Home</a></div>
                    <div class="col-md-1"><a class="btn2">Settings</a></div>
                    <div class="col-md-1">
                        <select name="" id="">
                            <option value="de">de</option>
                            <option value="en">en</option>
                        </select>
                    </div>
                </div>     
            </div>
        </div>
     </div>
</template>

<style scoped lang="scss">
    @import '../../sass/variables.scss';

        .Navigation {
            background-color: $background-color;
            font-family: $font;
        }
        .main__inside {
            height: 10vh;
            @include width-margin;
            
            p {
                font-size: 2rem;
                text-align: center;
                font-weight: 800;
                margin-top: .6rem;
            }
            .input-field {
                position: relative;
                input {
                    width: 100%;
                    padding: 1.5rem 1rem;
                    border: 1px solid $input-background;
                    background-color: $input-background;
                    border-radius: 5px;
                    outline: none;
                }
                .icon {
                    position: absolute;
                    right: 2rem;
                    top: 40%;
                    font-size: 1.2rem;
                    color:$icon-color;
                }
            }

            .btn1, .btn2 {
                outline: none;
                background-color: $btn-color-nav;
                color: white;
                padding: 1rem 2rem;
                border-radius: 5px;
                font-size: 1rem;
                text-decoration: none;
                cursor: pointer;
                font-weight: 800;
                border: 1px solid $btn-color-nav;
               
            }

            .btn2 {
                background-color: transparent;
                color: $btn-color-nav;
            }

            select {
                background-color: none;
                border:0;
                background:none;
                outline: none;
                font-size: 1.4rem;
            }
        }
</style>
