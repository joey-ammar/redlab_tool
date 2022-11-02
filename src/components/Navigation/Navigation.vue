<script setup>
    import {ref} from "vue";
    import i18n from '../../../i18n';
    const {locale} = i18n.global;

    let navMenu = ref(false);

    const openMenu = () => {
        navMenu.value = true;
    }

    const closeNav = () => {
        navMenu.value = false;
    }
</script>

<template>
     <div class="Navigation">
        <div class="row">
            <div class="main__inside d-flex align-items-center">
                <div class="col-1">
                    <p>
                        R / L
                    </p>
                </div>
                <div class="col-7 input-field">
                    <input :placeholder="$t('searchTicket')" /> 
                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                </div>
                <div class="col-1 remove-in-small"></div>
                <div class="col-3 d-flex justify-content-around btns">
                    <div class="col-1">
                        <router-link to="/"><a class="btn1">{{$t('Home')}} </a></router-link>
                    </div>
                    <div class="col-2">
                        <router-link to="/settings"><a class="btn2">{{$t('Settings')}} </a></router-link>
                    </div>
                    <div class="col-1">
                        <select v-model="locale">
                            <option value="en">en</option>
                            <option value="de">de</option>
                        </select>
                    </div>
                    
                </div>    
                <div class="col-1 bars">
                    <font-awesome-icon @click="openMenu" icon="fa-solid fa-bars" />
                </div> 
            </div>
        </div>
     </div>
     <div :class="{ 'ensableSmall': navMenu}" class="mini-nav">
        <div class="hamMenu">
            <div class="col-1 bars">
                <font-awesome-icon @click="closeNav" class="X" icon="fa-solid fa-x" />
            </div> 
            <div class="col-1">
                <router-link to="/"><a @click="closeNav" class="btn1">{{$t('Home')}} </a></router-link>
            </div>
            <div class="col-2">
                <router-link to="/settings"><a @click="closeNav" class="btn2">{{$t('Settings')}} </a></router-link>
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
                border: 2px solid #222;
                display: inline-block;
                padding: .3rem .5rem;
                font-size: 1.5rem;
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
                cursor: pointer;
                font-weight: 800;
                border: 1px solid $btn-color-nav;
            }

            a {
                text-decoration: none;
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

        .bars, 
        .mini-nav {
           display: none;
        }

        .ensableSmall {
            display: block;
        }

        .hamMenu {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            font-size: 2rem;
            text-align: center;
            overflow: hidden;
           
            a {
                color: white;
                text-decoration: none;
                display: inline-block;
                margin: .2rem 0rem;
            }
            .X {
                color: white;
                position: absolute;
                bottom: 30rem;
                right: 3rem;

            }
        }


        @media (max-width: 575.98px) {
            .main__inside { 
                position: relative;
                p {
                    font-size: 1.2rem;
                }
                .input-field {
                    width: 40%;
                    margin-left: 1rem;
                }
                .remove-in-small {
                    display: none;
                }
                .btns, .btn1, .btn2 {
                   display: none;
                }
               
            }
            .bars {
                display: block;
                position: absolute;
                right: 0;
                font-size: 1.5rem;
                cursor: pointer;
            }
         }

        // Small devices (landscape phones, less than 768px)
        @media (max-width: 767.98px) {

         }

        // Medium devices (tablets, less than 992px)
        @media (max-width: 991.98px) {

         }

        // Large devices (desktops, less than 1200px)
        @media (max-width: 1199.98px) {

         }


</style>
