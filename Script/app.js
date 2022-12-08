const one = new Vue({
    el: '#app',
    data: () => {
        return {
        sbusrc: "https://patch.com/img/cdn/users/21766/2012/02/raw/f67ef214a6fcfcb64a7565d2281e6b18.jpg",
        busrc: "https://logos-download.com/wp-content/uploads/2020/06/Boston_University_Logo_text.png"
        }
    }
})

export default one = new Vue({
    el: '#app',
    data () {
        return{
            
        }
    }
})
console.log("Vue loaded")
const two = new Vue({
    el: '#appform',
    data () {
        return {
                firstName: "",
                lastName: ""
            }
        },
    computed: {
        fnameValid(){
            let regex = /^[A-Za-z]+$/;
            return !!(this.firstName.match(regex)) && (this.firstName.length >2);
        },
        lnameValid(){
            let regex = /^[A-Za-z]+$/;
            return !!(this.lastName.match(regex)) && (this.lastName.length >2);
        }
    },
    
    methods: {

        validateForm(){
            
            const formValid = this.fnameValid && this.lnameValid;
            if(formValid){
                document.write("Thank you for the feedback!");
                return true;

            }else{
                alert("Invalid form");
                return false;
            }
        },
        

    }
})

