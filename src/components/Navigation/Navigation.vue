<script setup>
    import {ref} from "vue";
    import i18n from '../../i18n.js';
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
                    <font-awesome-icon class="flask-icon" icon="fas fa-flask" />
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
            font-family: $font;
        }

        .flask-icon {
            font-size: 3rem;
            margin-left: 2rem;
        }

        .main__inside {
            height: 15vh;
            @include width-margin;

            .input-field {

                position: relative;

                input {
                    font-size: 1.7rem;
                    width: 100%;
                    padding: 2.5rem 1rem;
                    border: 1px solid #C8C6C6;
                    background-color: #C8C6C6;
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

            .btn1,
            .btn2,
            select {
                color: #4B6587;
                font-size: 1.7rem;
                font-weight: 800;
            }

            select {
                border:0;
                background:none;
                outline: none;
                margin-top: .4rem;
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

        /*
            **************++
            ***************
            Media
        */

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
