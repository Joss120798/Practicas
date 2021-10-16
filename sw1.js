self.addEventListener('install', () => {
    console.log("SW: instalado");
})

self.addEventListener('fetch', e => {

    const respOfffile = fetch('pages/viewOffline.html'); 

    const resp = fetch(e.request)
        .catch( () => {
            console.log("SW: Error en la peticion")
            return respOfffile
        })

    e.respondWith(resp)
})