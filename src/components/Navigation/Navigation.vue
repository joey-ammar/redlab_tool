<script setup>
    import i18n from '../../../i18n';
    const {t, locale} = i18n.global;
    let lang = {
        en: locale.value = 'en',
        de: locale.value = 'de'
    }
</script>

<template>
     <div class="Navigation">
        <div class="row">
            <div class="main__inside d-flex align-items-center">
                <!-- LOGO -->
                <div class="col-md-1">
                    <p>
                        R / L
                    </p>
                </div>
                <!-- Input Filed-->
                <div class="col-md-7 input-field">
                    <input :placeholder="$t('searchTicket')" /> 
                    <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
                </div>
                <div class="col-md-1"></div>
                <!-- Btns-->
                <div class="col-md-3 d-flex justify-content-around">
                    <div class="col-md-1">
                        <router-link to="/"><a class="btn1">{{$t('Home')}} </a></router-link>
                    </div>
                    <div class="col-md-2">
                        <router-link to="/settings"><a class="btn2">{{$t('Settings')}} </a></router-link>
                    </div>
                    <div class="col-md-1">
                        <select v-model="locale">
                            <option :value="lang.en">en</option>
                            <option :value="lang.de">de</option>
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
</style>
