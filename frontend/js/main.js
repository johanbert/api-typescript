const API_URL = 'http://localhost:3001/api/v1/users'

const getApi = async() => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log('data', data)
    return data
}

const drawGet = async() => {
    const response = await getApi()
    console.log('response', response)

    for (let i = 0; i < response.length; i++) {
        // for (key in response) {
        // console.log('key', key)
        document.getElementById("estudiantesBrillantes").innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${response[i].nombre} - ${response[i].edad}</h5>
                    <p class="card-text">
                        This card has supporting text below as a natural lead-in to additional content.
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${response[i].fecha}</small>
                </div>
            </div>
        </div>`
    }
}


getApi()
drawGet()