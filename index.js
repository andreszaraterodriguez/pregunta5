var btnNoSubmitPost = document.getElementById("btnNoSubmitPost");
btnNoSubmitPost.addEventListener('click', function () {
 
    axios.post('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', params)
        .then(function (response) {
            console.log(response);
            console.log("verdad: " + response.data);
            alert(response.data)
        })
        .catch(function (error) {
            console.log("error: " + error);
        })
});
