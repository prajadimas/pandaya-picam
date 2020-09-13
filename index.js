const path = require('path')
const jimp = require('jimp')
const io = require('socket.io-client')
const { StillCamera } = require('pi-camera-connect')

try {
	// const socket = io('http://127.0.0.1:50105')
	console.log('Start')
	var config = {
		// address: '/dev/ttyS0',
		// baudrate: 38400,
		interval: 10000
	}
	setInterval(async function () {
		const stillCamera = new StillCamera()
		const img = await stillCamera.takeImage()
		var imageName = new Date().getTime().toString() + '.jpg'
		var base64img = Buffer.from(img).toString('base64')
		console.log('Image: ', base64img)
		/* jimp.read(img)
		.then(image => {
			image
			.quality(80)
			.getBase64(jimp.MIME_JPEG, function (err, src) {
				if (err) {
					console.error(err)
				} else {
					console.log('Image: ', src)
					socket.emit('data', {
						timestamp: new Date().getTime(),
						data: {
							image: src
						}
					}) 
				}
			})
		})
		.catch(err => {
			console.error(err)
		}) */
	}, config.interval)
	// socket.on('connect', function () {
	// 	socket.emit('client', 'pandaya-picam')
	// 	socket.on('config', (opts) => {
	// 		// config.address = opts.address || config.address
	// 		// config.baudrate = opts.baudrate || config.baudrate
	// 		config.interval = opts.interval || config.interval
	// 	})
	// 	setInterval(async function () {
	// 		const stillCamera = new StillCamera()
	// 		const image = await stillCamera.takeImage()
	// 		console.log('Image', image)
	// 	}, config.interval)
	// })
	// socket.on('disconnect', function () {
	// 	console.log('Disconnected from Main Process')
	// })
} catch (err) {
	console.error(err)
}

