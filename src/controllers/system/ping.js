export default function ( oRequest, oResponse ) {
    oResponse.json({
        "url": oRequest.url,
        "timestamp": Date.now(),
        "data": {},
        "error": false,
    })
}
