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
                <div class="col-md-3 margin-auto">
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
        .Navigation {
            background-color: #dedfdf;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        .main__inside {
            height: 10vh;
            width: 80%;
            margin: 0 auto;
            
            p {
                font-size: 2rem;
                text-align: center;
            }
            .input-field {
                position: relative;
                input {
                    width: 100%;
                    padding: 1.5rem 1rem;
                    border: 1px solid #c8c9c9;
                    background-color: #c8c9c9;
                    border-radius: 5px;
                    outline: none;
                }
                .icon {
                    position: absolute;
                    right: 2rem;
                    top: 40%;
                    font-size: 1.2rem;
                    color: #969696;
                }
            }
            
            .margin-auto {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .btn1, .btn2 {
                outline: none;
                background-color: #222222;
                color: white;
                padding: 1.5rem 3rem;
                border-radius: 5px;
                font-size: 1rem;
                text-decoration: none;
                cursor: pointer;
                font-weight: 800;
              
            }
            .btn2 {
                background-color: transparent;
                color: #222222;
                border: 1px solid #222222;
            }
            select {
                background-color: none;
                border:0;
                background:none;
                outline: none;
                font-size: 1.4rem;
                * {
                    border:0;
                    background:none;
                    -webkit-appearance: none;
                }
            }
        }
</style>
