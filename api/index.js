
function getData() {
	var https = require('https');
	return new Promise((resolve) => {
		const apiKEY = process.env.NEWSAPI_KEY;
		https.get(
			`https://newsapi.org/v2/everything?q=javascript&sortBy=publishedAt&apiKey=${apiKEY}`,
			(res) => {
				let data = '';

				res.on('data', (chunk) => {
					data += chunk;
				});

				res.on('end', () => {
					resolve(data);
				});
			}
		);
	});
}

module.exports = async (req, res) => {
	const data = await getData();
	res.setHeader('Content-type', 'application/json');
	res.status(200).send(data)
}
