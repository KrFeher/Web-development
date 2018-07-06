<template>
    <div class="container">
        <div v-if="!isSubmitted">
            <h1> Please enter your details: </h1>
            <form class="form">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->

                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                        <firstname-lastname v-model="fullName"></firstname-lastname>
                        <div class="form-group row">
                            <label for="emailInput" class="col-sm-2 col-form-label">Email:  </label>
                            <div class="col-sm-6">
                                <input 
                                type="email" 
                                id="emailInput" 
                                class="form-control"
                                v-model="email"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="passwordInput" class="col-sm-2 col-form-label">Password:  </label>
                            <div class="col-sm-6">
                                <input 
                                type="password" 
                                id="passwordInput" 
                                class="form-control"
                                v-model="password"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label>
                                <input type="radio" value="Yes" v-model="storeData"> Yes
                            </label>
                            <label>
                                <input type="radio" value="No" v-model="storeData"> No
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn btn-primary"  @click.prevent="isSubmitted = true">Submit Form</button>
            <hr>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database? {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FirstNameLastName from './FirstNameLastName.vue'

    export default {
        data() {
            return {
                fullName: 'Krisztian Feher',
                email: '',
                password: '',
                storeData: 'No',
                isSubmitted: false
            }
        },
        components : {
            FirstnameLastname : FirstNameLastName
        } 
    }
</script>

<style>
</style>
