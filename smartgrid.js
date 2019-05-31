const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '25px',
	filename: 'smartgrid',
	container: {
		maxWidth: "1170px",
		fields: "30px"
	},
	breakPoints: {
		lg: {
			width: "1152px",
			fields: "20px"
		},
		md: {
			width: "992px",
			fields: "15px"
		},
		sm: {
			width: "720px",
			fields: "10px"
		},
		xs: {
			width: "576px"
		}
	}
};

smartgrid('src/precss', settings);